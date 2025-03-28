import React from "react"
import type { Metadata } from "next"

// Define the available videos data for metadata
const videosData = {
  "Did-Many-People-Just-Disappear": {
    title: "Did many people just disappear?",
    description: "If people from all over the world, from all walks of life, from every nation and people group just suddenly vanished, this video explains what happened."
  },
  "What-Happened-to-all-the-Missing_People": {
    title: "What Just Happened to all the Missing People?",
    description: "Tyler and Tom give a heart-felt message that reveals the TRUTH of why millions of people are now gone."
  },
  "After-the-Rapture-Left-Behind": {
    title: "After the Rapture - Left Behind?",
    description: "Prophecy Update presents a thorough explanation of what you have just witnessed - Its not to late to be saved!"
  },
  "What-Just-Happened": {
    title: "Puzzeled by What Just Happened?",
    description: "This video teaching will explain about the Rapture, how we knew it was coming, and what you MUST do now!"
  }
}

type VideoLayoutProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: VideoLayoutProps): Promise<Metadata> {
  const { slug } = params
  const videoData = videosData[slug as keyof typeof videosData] || {
    title: "Rapture Information",
    description: "Information about the Rapture event."
  }
  
  return {
    title: `${videoData.title} | Rapture Kit`,
    description: videoData.description,
  }
}

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 