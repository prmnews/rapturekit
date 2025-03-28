import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  thumbnail: string
  href: string
  target?: string
}

export function VideoCard({ title, thumbnail, href, target = "_blank" }: VideoCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm">
      <Link href={href} className="block" target={target}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black">
              <Play className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">{title}</h3>
        </div>
      </Link>
    </div>
  )
}

