import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface RaptureButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: "burgundyPrimary" | "whiteOutline" | "redPrimary"
  className?: string
  target?: string
  rel?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function RaptureButton({
  href,
  className,
  variant = "burgundyPrimary",
  children,
  target,
  rel,
  type,
  disabled,
  ...props
}: RaptureButtonProps) {
  // Define base styles with higher specificity for light mode
  let baseStyleClass = "";
  
  if (variant === "burgundyPrimary") {
    baseStyleClass = "!bg-[#800020] !text-white hover:!bg-[#600010]";
  } else if (variant === "redPrimary") {
    baseStyleClass = "!bg-red-600 !text-white hover:!bg-red-700 text-lg font-semibold";
  } else if (variant === "whiteOutline") {
    baseStyleClass = "!border-white !text-white hover:!bg-white/20";
  }
  
  // Map our custom variants to the base UI variants
  const uiVariant = variant === "redPrimary" ? "default" : 
                   variant === "burgundyPrimary" ? "default" : 
                   variant === "whiteOutline" ? "outline" : "default";
  
  const buttonClass = cn(
    buttonVariants({ variant: uiVariant, size: "lg", className }),
    baseStyleClass,
    disabled && "opacity-70 pointer-events-none",
    className
  )
  
  if (href) {
    return (
      <Link 
        href={href}
        className={buttonClass}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      className={buttonClass} 
      type={type} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
} 