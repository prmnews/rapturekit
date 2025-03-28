import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "About Us | Rapture Kit",
  description: "Learn about our mission to equip believers today and prepare resources for those left behind after the Rapture.",
}

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">About Us</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Our mission to equip believers and prepare resources for those left behind.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[900px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="flex justify-center mb-10">
              <Image
                src="/banner_more_on_the_rapture.jpg"
                alt="About Rapture Kit Ministry"
                width={1200}
                height={600}
                className="rounded-lg"
              />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Our Story</h2>
            
            <div className="bg-muted rounded-lg p-8 mb-8">
              <p className="text-xl font-medium mb-0">
                We equip the Body of Christ for missional outreach today as well as help prepare loved ones that will be left behind after the Rapture of the Church.
              </p>
            </div>
            
            <p>
              The I Am A Watchman ministry and many concerned believers believe we are in the season of the Lord's return. We have a common burden to reach the lost, including loved ones that we earnestly hope will come to faith before the Rapture of the Church.
            </p>
            <br />
            <p>
              The team began working on Rapture Kits in 2019 to help reach people today and equip new believers for the Tribulation period. 
              Our team consisted of four pastors, some with specialized skills in Christian Education and Editing. Part of our team include the pastors of other Churches that allowed
              us to use their sermons and other teaching resources. This is the proper functioning of the Body of Christ. You can find the full development history 
              here: <a href="/faqs/rapture-kit-version-history">Rapture Kit Version History</a>
            </p>
            
            <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-6 py-4 my-8">
              <p className="text-lg mb-0">
                We have an extreme burden for those left behind and seek to come alongside concerned believers by giving them a starting point for what to leave behind so that their personal outreach to loved ones they suspect will not yield to Christ in time can help reach and equip a new generation of believers. As such, our mission is to Tribulation Saints.
              </p>
            </div>
            
            <div className="bg-burgundy/10 dark:bg-yellow-400/10 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">Join Us in This Mission</h3>
              <p>
                The Rapture Kit is a resource designed to be left behind for loved ones, containing essential information about what happened, why it happened, and how to navigate the difficult times ahead. It includes Bibles, teachings, survival information, and spiritual guidance for the Tribulation period.
              </p>
              <div className="flex justify-center mt-6">
                <RaptureButton href="/contact">
                  Contact Us
                </RaptureButton>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">How You Can Help</h3>
            <ul>
              <li>Download and distribute Rapture Kits to those you care about</li>
              <li>Share this resource with your church and community</li>
              <li>Pray for those who will need this information in the future</li>
              <li>Contribute by sharing testimonies and spreading awareness</li>
            </ul>
            
            <div className="mt-12 flex justify-center space-x-4">
              <RaptureButton href="/download">
                Download Now
              </RaptureButton>
              <RaptureButton href="/faqs">
                Learn More
              </RaptureButton>
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
              <h3 className="mb-2 font-semibold">The ABC's of Salvation</h3>
              <p className="text-sm text-muted-foreground">
                A - Admit you are a sinner
                <br />B - Believe in Jesus Christ
                <br />C - Confess and Commit
              </p>
            </div>
            <div className="text-right">
              <RaptureButton href="/download">
                Download for Free
              </RaptureButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 