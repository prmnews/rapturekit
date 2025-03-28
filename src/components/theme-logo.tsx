"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ThemeLogo() {
  const [mounted, setMounted] = useState(false)
  
  // Only show both logos after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // During SSR and initial client render, show a neutral version
    // This prevents hydration mismatch while avoiding theme flicker
    return (
      <Image 
        src="/logo_rapture_kit_light.jpg" 
        alt="Rapture Kit" 
        width={200} 
        height={52} 
        className="h-auto w-auto" 
      />
    )
  }
  
  // After hydration, render both logos with CSS controlling visibility
  return (
    <div className="relative">
      {/* Light theme logo */}
      <Image 
        src="/logo_rapture_kit_light.jpg" 
        alt="Rapture Kit" 
        width={200} 
        height={52} 
        className="h-auto w-auto block dark:hidden" 
      />
      
      {/* Dark theme logo */}
      <Image 
        src="/logo_rapture_kit_dark.jpg" 
        alt="Rapture Kit" 
        width={200} 
        height={52} 
        className="h-auto w-auto hidden dark:block" 
      />
    </div>
  )
} 