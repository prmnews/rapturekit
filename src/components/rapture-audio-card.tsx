import Image from "next/image"
import Link from "next/link"
import { PlayCircle } from "lucide-react"
import { RaptureButton } from "./rapture-button"

interface RaptureAudioCardProps {
  title: string
  description: string
  thumbnail: string
  audioSrc: string
  target?: string
}

export function RaptureAudioCard({ title, description, thumbnail, audioSrc, target = "_blank" }: RaptureAudioCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm h-full flex flex-col">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-bold text-white text-lg line-clamp-2">{title}</h3>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black">
            <PlayCircle className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="mb-4 text-sm text-muted-foreground flex-grow">{description}</p>
        <div className="audio-player w-full">
          <audio controls className="w-full">
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  )
} 