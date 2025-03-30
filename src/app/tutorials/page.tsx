import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { VideoCard } from "@/components/video-card"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Video Tutorials | Rapture Kit",
  description: "Helpful tutorial videos for using and sharing the Rapture Kit resource.",
}

export default function TutorialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Same as home page */}
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

      {/* Main Content */}
      <main className="flex-1 w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Video Tutorials</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Step-by-step guides to help you use, customize, and share your Rapture Kit effectively.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="flex justify-center mb-12">
              <Image
                src="/tutorials/graffiti_wall.png"
                alt="Rapture Kit Tutorials"
                width={1200}
                height={800}
                className="rounded-lg"
              />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Getting Started with Your Rapture Kit</h2>
            <p>
              These tutorial videos are designed to help you effectively use and share your Rapture Kit. Whether you're new to the resource or looking to maximize its impact, these step-by-step guides will walk you through everything you need to know.
            </p>

            <p>
              Each tutorial addresses a specific aspect of using the Rapture Kit, from basic file management to customization and sharing strategies. Watch these videos to ensure you're making the most of this powerful resource.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <VideoCard
                title="Walk-Thru of the Rapture Kit 3.0 USB Drive"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%204%20-%20Walk-Thru%20of%20the%20Rapture%20Kit%203.0%20USB%20Drive.mp4"
                target="_blank"
              />
              <VideoCard
                title="How to Download a Rapture Kit"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%205%20-%20How%20to%20Download%20a%20Rapture%20Kit.mp4"
                target="_blank"
              />
              <VideoCard 
                title="Copy the Rapture Kit to your computer" 
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%201%20-%20How%20To%20Copy%20a%20Rapture%20Kit%20USB%20to%20Your%20PC%20or%20Mac.mp4"
                target="_blank"
              />
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-16 mb-6">Advanced Tutorials</h2>
            <p>
              Once you're familiar with the basics, these advanced tutorials will help you share the Rapture Kit with others and access specialized content.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <VideoCard
                title="Make New Rapture Kit USB Drives"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%202%20-%20How%20To%20Copy%20a%20Rapture%20Kit%20From%20Your%20PC%20or%20Mac%20to%20a%20New%20USB%20Thumbdrive.mp4"
                target="_blank"
              />
              <VideoCard
                title="How to UnZip/Open Bible Files"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%203%20-%20How%20to%20UnZip%20Open%20Bible%20on%20Your%20PC%20or%20Mac.mp4"
                target="_blank"
              />
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-16 mb-6">Why These Tutorials Matter</h2>
            
            <p>
              The Rapture Kit is a comprehensive resource designed to be accessible to anyone, regardless of technical expertise. These tutorials ensure that you can:
            </p>
            
            <ul className="space-y-2">
              <li>Successfully navigate the extensive content on the Rapture Kit</li>
              <li>Make backup copies to keep the information safe</li>
              <li>Create new USB drives to share with loved ones</li>
              <li>Access all file types, including specialized Bible formats</li>
              <li>Understand the organization and purpose of each section</li>
            </ul>
            
            <p className="mt-8">
              By watching these tutorials, you'll be better equipped to utilize this resource both for your own spiritual growth and as an outreach tool for others who need to hear this critical message.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Need Additional Help?</h3>
              <p className="mb-4">
                If you have questions about using your Rapture Kit that aren't addressed in these tutorials, please don't hesitate to reach out.
              </p>
              <div className="flex justify-center">
                <RaptureButton href="contact">
                  Contact Support
                </RaptureButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Same as home page */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Rapture Kit. All rights reserved.
              </p>
            </div>
            <div className="text-center">
              <Link target="_blank" href="/rapture/pdf/The_A-B-Cs_of_Salvation.pdf" className="hover:underline">
                <h3 className="mb-2 font-semibold">The ABC's of Salvation</h3>
              </Link>
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