import React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

// Define the available videos data
const videosData = {
  "Did-Many-People-Just-Disappear": {
    title: "Did many people just disappear?",
    videoSrc: "/rapture/video/did-many-people-just-disappear.mp4", // Update this with actual video path when available
    description: "If people from all over the world, from all walks of life, from every nation and people group just suddenly vanished, this video explains what happened."
  },
  "What-Happened-to-all-the-Missing_People": {
    title: "What Just Happened to all the Missing People?",
    videoSrc: "/rapture/video/what-happened-to-all-the-missing-people.mp4", // Update this with actual video path when available
    description: "Tyler and Tom give a heart-felt message that reveals the TRUTH of why millions of people are now gone."
  },
  "After-the-Rapture-Left-Behind": {
    title: "After the Rapture - Left Behind?",
    videoSrc: "/rapture/video/after-the-rapture-left-behind.mp4", // Update this with actual video path when available
    description: "Prophecy Update presents a thorough explanation of what you have just witnessed - Its not to late to be saved!"
  },
  "What-Just-Happened": {
    title: "Puzzeled by What Just Happened?",
    videoSrc: "/rapture/video/what-just-happened.mp4", // Update this with actual video path when available
    description: "This video teaching will explain about the Rapture, how we knew it was coming, and what you MUST do now!"
  }
}

type VideoParams = {
  params: {
    slug: string
  }
}

export default function VideoPage({ params }: VideoParams) {
  const { slug } = params
  const videoData = videosData[slug as keyof typeof videosData]
  
  if (!videoData) {
    notFound()
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <ThemeLogo />
          </Link>
          <div className="flex items-center gap-2">
            <MainNav />
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/rapture" 
            className="inline-flex items-center text-burgundy dark:text-yellow-400 hover:underline mb-8 block"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Back to Rapture Resources
          </Link>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">{videoData.title}</h1>
          
          <div className="relative aspect-video w-full mb-8 bg-gray-900 rounded-lg overflow-hidden">
            {/* Video player */}
            <video 
              controls 
              className="w-full h-full" 
              poster={`/rapture/thumb_${slug.toLowerCase()}.jpg`}
            >
              <source src={videoData.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{videoData.description}</p>
            <div className="mt-8 py-4 px-6 bg-muted rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Important Next Steps</h2>
              <p>
                After watching this video, we encourage you to:
              </p>
              <ul>
                <li>Watch the other explanation videos for more information</li>
                <li>Download the Rapture Kit resources to your device</li>
                <li>Share this information with others who need to understand what has happened</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/rapture" 
              className="text-burgundy dark:text-yellow-400 hover:underline"
            >
              Return to all Rapture resources
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Rapture Kit. All rights reserved.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 font-semibold">The ABC's of Salvation</h3>
              <p className="text-sm text-muted-foreground">
                A - Admit you are a sinner
                <br />B - Believe in Jesus Christ
                <br />C - Confess and Commit
              </p>
            </div>
            <div className="text-right">
              <RaptureButton href="/rapture">
                Did the Rapture Happen?
              </RaptureButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 