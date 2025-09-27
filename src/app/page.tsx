import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { FeatureCard } from "@/components/feature-card"
import { VideoCard } from "@/components/video-card"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export default function Home() {
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
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-40">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                An Innovative Witnessing Resource for Believers Today
              </h1>
              <p className="mt-6 text-lg md:text-xl">An all-important resource for those left behind.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <RaptureButton href="/overview" variant="burgundyPrimary">
                  Overview
                </RaptureButton>
                <RaptureButton 
                  href="/download" 
                  variant="burgundyPrimary"
                  className="bg-[#800020] text-white hover:bg-[#600010] border-[#800020]"
                >
                  Download
                </RaptureButton>
              </div>
              <div className="mt-6">
                <RaptureButton href="/rapture" variant="redPrimary" className="w-full sm:w-auto px-8">
                  Did the Rapture Happen?
                </RaptureButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <FeatureCard
                title="Easy to Share"
                points={[
                  "Simple USB drive format",
                  "Works on any computer",
                  "No internet required",
                  "Includes complete instructions",
                ]}
              />
              <FeatureCard
                title="Comprehensive Content"
                points={[
                  "Bibles and resources",
                  "Video sermon series",
                  "eBooks in PDF format",
                  "Dozens of articles",
                ]}
              />
              <FeatureCard
                title="Customizable"
                points={[
                  "Add personal messages",
                  "Include your own content",
                  "Tailor to specific audiences",
                  "Update as needed",
                ]}
              />
            </div>
          </div>
        </section>

        {/* What is the Rapture Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <Image
                  src="/what_is_the_rapture.jpg"
                  alt="What is the Rapture"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What is the Rapture?</h2>
                <p className="mt-4 text-muted-foreground">
                  The Rapture is a future event in which believers in Christ will be taken from earth to heaven in an
                  instant. This resource helps explain this event to those who may be left behind, providing guidance,
                  hope, and a path forward.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our Rapture Kit provides comprehensive information, resources, and tools to help understand this event
                  and what comes next.
                </p>
                <Link
                  href="/what-is-the-rapture"
                  className="mt-6 inline-flex items-center text-burgundy dark:text-yellow-400 hover:underline"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Video Tutorials</h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <VideoCard
                title="Walk-Thru of the Rapture Kit 3.1 USB Drive"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%204%20-%20Walk-Thru%20of%20the%20Rapture%20Kit%203.1%20USB%20Drive.mp4"
                target="_blank"
              />
              <VideoCard
                title="How to Download a Rapture Kit"
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%205%20-%20How%20to%20Download%20a%20Rapture%20Kit.mp4"
                target="_blank"
              />
              <VideoCard 
                title="Copy the Rapture Kit to Your Computer" 
                thumbnail="/tutorials/thumb_graffiti_wall.png"
                href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%201%20-%20How%20To%20Copy%20a%20Rapture%20Kit%20USB%20to%20Your%20PC%20or%20Mac.mp4"
                target="_blank"
              />
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
            <div className="mt-10 text-center">
              <Link
                href="/tutorials"
                className="inline-flex items-center text-burgundy dark:text-yellow-400 hover:underline"
              >
                View All Tutorials <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
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
              <Link target="_blank" href="/rapture/pdf/The_A-B-Cs_of_Salvation.pdf" className="hover:underline">
                <h3 className="mb-2 font-semibold">The ABC's of Salvation</h3>
              </Link>
              <ol className="text-sm text-muted-foreground list-decimal list-inside">
                <li>A - Admit you are a sinner</li>
                <li>B - Believe in Jesus Christ</li>
                <li>C - Confess and commit</li>
              </ol>
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

