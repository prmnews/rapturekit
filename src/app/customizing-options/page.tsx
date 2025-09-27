import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Customizing Options | Rapture Kit",
  description: "Learn about ways to customize and use your Rapture Kit effectively for witnessing and ministry.",
}

export default function CustomizingOptionsPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Customizing a Rapture Kit</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Options for using or customizing the Rapture Kit resource</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="bg-muted rounded-lg p-8 mb-8">
              <p className="mb-6">
                There are many ways to use and customize the Rapture Kit resource. Consider each Kit a good starting point resource which you can add to, based on the needs of the person you want to receive it. A few options are noted below:
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="min-w-6 h-6 rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <p>
                    When navigating the Rapture Kit file structure, note the folder: &quot;Section 01 - Materials for the Rapture Kit Sender&quot; for ideas regarding broaching the subject of the Rapture 
                    with an unsaved friend or relative. Included on that page are sample letters which you may wish to adapt and send to the unsaved individual(s) God has placed on your heart.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-6 h-6 rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <p>
                    When downloaded and copied to a 32GB+ USB drive, the Rapture Kit uses about 27GB leaving 2+ GB of free space available. Senders can upload personal letters, video messages, 
                    or scanned documents to the drive. We suggest putting this kind of information in a separate folder perhaps named: &quot;Personal Information&quot; or your own name, so the recipient 
                    can easily see this is personal information from you.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                <div className="min-w-6 h-6 rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <p>
                    Senders of Rapture Kits may wish to consider uploading legal, financial, or personal property transfer information to the Kit. We urge caution here. We&apos;ve provided links to 
                    several legal aid sources which may be able to provide low or no-cost forms and counsel in the &quot;Section 01 - Materials for the Rapture Kit Sender&quot; and the PDF document 
                    &quot;Information for the sender.PDF&quot; page 5. To those who sense God&apos;s leading to gift a Rapture Kit to an individual <strong>BEFORE</strong> the Rapture may wish to consider: 
                    Letting recipients of the Kits know where they can find a letter from you or file of information (perhaps at your home or business) that will have financial, auto 
                    and/or property transfer, and/or last will and testament-type information.
                  </p>                  
                </div>

                <div className="flex items-start gap-4">
                <div className="min-w-6 h-6 rounded-full bg-burgundy dark:bg-yellow-400 text-white dark:text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <p>
                    The goal here is to provide spiritual and practical resources to those not taken in the Rapture. Certainly, you do not want to provide sensitive financial information and 
                    title-transfer paperwork in advance of the Rapture. However, in the chaos of the early days following the Rapture, it will be very impactful if the people you have been praying for 
                    know you have important information (a clean title to a car, a debit card that allows them to access funds, etc.), waiting and for them in a particular (secure) location.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-12 mb-6">Where to put Rapture Kits</h2>
            
            <div className="bg-muted rounded-lg p-8 mb-8">
              <p className="mb-6">
                It is always fascinating to hear from people as to where they store their Rapture Kits so they can be discovered at just the right time. Don&apos;t forget to first and foremost give them 
                away to those the Lord burdens you with. A direct and honest discussion might ensue, which will allow you to share the Gospel and the season of the Lord&apos;s return. Explain the urgency. 
                Others, having done that already, leave their Rapture Kit in plain view so it&apos;s difficult to miss. This includes your pantry or wherever emergency supplies are located, like a 
                designated bulk food storage area in your garage, closet, or storage shed. Since your car is likely to be taken once you are gone in the Rapture, you can leave one in the glove compartment or trunk.
              </p>

              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-6 py-2 my-8">
                <p className="italic">
                  To those who sense God&apos;s leading to gift a Rapture Kit to an individual <strong>AFTER</strong> the Rapture: We suggest uploading the financial and property transfer information 
                  you wish the recipient to receive to the Rapture Kit Flash Drive, and letting potential recipients know you have a spiritual and practical resource set aside for them. Let them know 
                  you care for them and pray they are spiritually prepared for the coming Rapture. However, if the Rapture takes place and they are left behind, they can find the Rapture Kit resource 
                  you&apos;ve set aside for them at this particular location_________.
                </p>
              </div>
            </div>

            <div className="bg-burgundy/10 dark:bg-yellow-400/10 rounded-lg p-8 mt-12">
              <p className="text-center italic mb-0">
                We pray this resource will help believers become more strategic and active in witnessing, will be used to warn the lost about the coming Rapture, and will help individuals in the 
                post-Rapture world be drawn to Christ and equipped to become the next generation of ministry leaders. Please continue to pray for us as we seek to make this resource available 
                to as many people as possible.
              </p>
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
                <h3 className="mb-2 font-semibold">The ABC&apos;s of Salvation</h3>
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