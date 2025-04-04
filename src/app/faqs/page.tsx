import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Frequently Asked Questions | Rapture Kit",
  description: "Find answers to common questions about the Rapture Kit, its purpose, and how to use it.",
}

export default function FAQsPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Frequently Asked Questions</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Find answers to common questions about the Rapture Kit 32GB (version 2.0)</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="space-y-8">
              {/* Question 1 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is a Rapture Kit?</h3>
                <p className="text-muted-foreground">
                  The Rapture Kit is a dual purpose resource designed to aid believers today in leading individuals to Christ (before the Rapture) and provide those not taken by Christ in the Rapture
                  with essential information regarding what has happened, how to be saved, what to expect, and how to live for Christ. The giving of a Rapture Kit is an expression of care and God's love. 
                  It provides a starting point for believers today to have a spiritual impact in the world even after they have been taken in the Rapture.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is the current version of the Rapture Kit?</h3>
                <p className="text-muted-foreground">
                  As of Q3 2024, we have worked hard to bring a very significant upgrade to the Rapture Kit. The current version is 3.0 and is designed for a 32GB USB drive or higher. It is recommended
                  that you use USB 3.0 specification drives for the best performance. The full version history of the Rapture Kit resource can be found <Link href="/faqs/rapture-kit-version-history">here</Link>.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Included in a Rapture Kit 3.0?</h3>
                <p className="text-muted-foreground">
                  There are 9 sections to the Rapture Kit resource. One of the big improvements in v3.0 is we have webified the user interface. By right clicking on the index.html file, you can
                  experience the Rapture Kit in a web browser like Chrome, Edge, Brave, or Firefox. When all 9 zip filess are downloaded <Link href="/download">here</Link> and unzipped to a folder
                  on your PC or Mac, you can see the full set of folders and files. 
                  A detailed overview of content can be found <Link href="/overview">here</Link>.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can I copy the Rapture Kit resource?</h3>
                <p className="text-muted-foreground mb-4">
                  Yes, with some common sense restrictions:
                </p>
                <div className="pl-4 border-l-4 border-burgundy dark:border-yellow-400">
                  <p className="text-muted-foreground mb-4">
                    <strong>General Statement:</strong> We believe the Rapture is imminent…it could happen at any time and without preconditions. Our team has been working for over five years to 
                    provide a helpful "starting point" for believers to reach others for Christ. This includes those on this side of the Rapture, because it clearly presents the Gospel and the 
                    consequences of being left behind. We pray many will come to faith in time BEFORE the Tribulation period begins.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Realistically, however, we also know many are resistant to our pleading. They will not believe in time so as to escape in the Rapture. But we pray they will yield to Jesus in 
                    great repentance after the Rapture…when confronted by the truth of the Word of God and the testimony of so many that warned them of impending Tribulation.
                  </p>
                  <p className="text-muted-foreground">
                    Our struggle to produce the Rapture Kit is done with great love for the lost. Therefore, we want to empower a worldwide cohort of born again believers to help others brace for 
                    the things we know are coming to the best of our ability. We have a great responsibility to pass the baton to the next generation of believers…known as Tribulation Saints. 
                    Often, these are the lost we don't yet see. Please duplicate and spread this resource as a fully aligned member of the Body of Christ as we all sprint to our respective finish lines.
                  </p>
                </div>
                <h4 className="text-lg font-semibold mt-6 mb-2">What we want:</h4>
                <p className="text-muted-foreground mb-4">
                  Givers of the Rapture Kit are in effect, co-laboring with us to reach the lost! As such, we encourage the duplication of the Rapture Kit resources using blank USB 
                  drives (needed minimum32GB capacity) found in many stores. <Link href="https://www.amazon.com/s?k=32gb+usb+drive" target="_blank">Here is a link to Amazon</Link>. We recommend 32GB USB 
                  drives in either 2.0 or 3.0 specification. The 3.0 spec is much faster to use, but cost slightly more to purchase.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-2">What we don't want:</h4>
                <p className="text-muted-foreground">
                  No person, Church, ministry, or entity can resell or license the Rapture Kit resource under any circumstances. Duplicate and use for personal evangelism: yes! Use for your own 
                  source of making money: no! Make sense?
                </p>
              </div>

              {/* Question 5 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How hard is it to make my own Rapture Kits?</h3>
                <p className="text-muted-foreground">
                  It's not hard, but it is time consuming. We have a Make Your Own web page that will provide several options for where you can download the materials. We only support Rapture 
                  Kit version 3.0 on this website. The 9 zip files are extremely large! There are video tutorials on how to download and unzip the files, plus a few other utility tutorials. 
                  You can find the tutorials <Link href="/tutorials">here</Link>.
                </p>
              </div>

              {/* Question 6 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Is the data compatible for PC, Mac, or Linux?</h3>
                <p className="text-muted-foreground">
                  The Rapture Kit Flash drive is explicitly designed to be compatible with PC, Mac, and Linux operating systems and computers. 
                  Nearly all resources are in one of three formats: (a) PDF documents for books and articles, (b) MP4 format for videos, and (c) MP3 for audio files.
                </p>
              </div>

              {/* Question 7 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Is the Flash Drive customizable?</h3>
                <p className="text-muted-foreground">
                  More than 4GB of material can be added to the Rapture Kit 3.0 configuration. It is easy to do so, see the Customizing a Rapture Kit page <Link href="/customizing-options">here</Link> for more help.
                </p>
              </div>

              {/* Question 8 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do you have comments or suggestions?</h3>
                <p className="text-muted-foreground">
                  Our desire is to be a blessing. Please keep the I AM A WATCHMAN ministry in your prayers, and do not hesitate to <Link href="contact">Contact Us</Link>!
                </p>
              </div>

              {/* Question 9 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How you can help</h3>
                <p className="text-muted-foreground">
                  Please pray for God's blessing on the Rapture Kit resource as we seek to extend the Gospel to our future Brothers and Sisters in the Tribulation Period. Pray for their growing 
                  awareness of the truth of Bible Prophecy and the urgent need to be saved. Pray for the Holy Spirit to convict them of their need for a personal relationship with Jesus Christ. 
                  And pray for the Lord to raise up a great multitude of new believers in the Tribulation Period to be "on mission" for the Lord.
                </p>
              </div>

              {/* Question 10 */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Supporting websites</h3>
                <p className="text-muted-foreground">
                  Additional (free) resources are available at <Link href="https://IAmAWatchman.com" target="_blank">IAmAWatchman.com</Link> and <Link href="https://AmIRaptureReady.org" target="_blank">AmIRaptureReady.org</Link>
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have a question that's not answered here?
              </p>
              <RaptureButton href="/contact/">
                Ask a Question
              </RaptureButton>
            </div>

            <div className="mt-6 flex justify-center">
              <RaptureButton href="/download">
                Get Started
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