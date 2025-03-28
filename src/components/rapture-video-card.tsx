import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { RaptureButton } from "./rapture-button"

interface RaptureVideoCardProps {
  title: string
  introText: string
  thumbnail: string
  href: string
  target?: string
}

export function RaptureVideoCard({ title, introText, thumbnail, href, target = "_blank" }: RaptureVideoCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm h-full flex flex-col">
      <Link href={href} target={target} className="block relative aspect-video overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-bold text-white text-lg line-clamp-2">{title}</h3>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black">
            <Play className="h-8 w-8" />
          </div>
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <p className="mb-4 text-sm text-muted-foreground flex-grow">{introText}</p>
        <Link href={href} target={target} className="block">
          <RaptureButton variant="burgundyPrimary" className="w-full">
            Watch Video
          </RaptureButton>
        </Link>
      </div>
    </div>
  )
} 