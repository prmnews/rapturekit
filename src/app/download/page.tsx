import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Download | Rapture Kit",
  description: "Download the Rapture Kit for free.",
}

export default function DownloadPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Download</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            {/* Content will go here */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">It is easy to download Rapture Kit!</h2>
            <p>The download process requires several important considerations:</p>
            <br />
            <p className="pl-8">It requires a significant amount of free space on your computer. The Rapture Kit is 3.0 is 27GB in size, so you need at least 27 GB of free space on your computer.</p>
            <br />
            <p className="pl-8">It is ideal to have a stable and fast internet connection. The download process will take a while to download on slower internet connections.</p>
            <br />
            <p className="pl-8">It can be a tedious process to download all 9 zip files.  So, you must be patient and persistent!</p>
            <br />
            <p className="pl-8">If you have a slower internet connection, you should avoid downloading multiple files at once.  Instead, download one file at a time, then move on to the next.</p>
            <br />
            <p className="pl-8">You can use Chrome, Edge, Brave, Firefox, or any contemporary web browser to download the Rapture Kit.</p>
            <br />
            <p className="pl-8">If you plan to duplicate the Rapture Kit, you will need a computer with a USB port and a supply of blank USB drives (at least 32GB in size).</p>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6 text-red-600"><strong>IF THE RAPTURE HAS HAPPENED, YOU MUST BE VERY CAREFUL!</strong></h2>
            <p className="text-red-600 font-bold italic">In the Bible, we know that there is massive opposition to the Gospel, the Bible, and thoses holding a true Biblical Worldview. Born again believers will be persecuted, imprisoned, and even killed for their faith.  As such, we must advise you that you need to reduce the visibility of accessing these resources.  Perhaps use a VPN to disguise your location if you can.  If that is not possible, get to work, download the Rapture Kit, then get off as soon as possible.</p>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Download Tutorial</h2>
            <p><strong>Watch this tutorial on How to Download and unzip the Rapture Kit to your PC or Mac:</strong></p>
            
            <br /><p><a href="/tutorials/Tutorial_5_How_to_Download_a_Rapture_Kit.mp4" target="_blank">
              <img src="how_to_download_tutorial.png" alt="Tutorial thumbnail" className="mb-4 rounded-lg" width="600" />
            </a></p>
            
            <RaptureButton 
              href="/tutorials/Tutorial_5_How_to_Download_a_Rapture_Kit.mp4" 
              target="_blank"
              className="!bg-[#800020] !text-white hover:!bg-[#600010]"
            >
              Tutorial
            </RaptureButton>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">List of Files to Download:</h2>
            <ul className="space-y-4">
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%201%20of%209.zip">Rapture Kit 3.0 - Part 1 of 9 (3.10GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%202%20of%209.zip">Rapture Kit 3.0 - Part 2 of 9 (2.18GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%203%20of%209.zip">Rapture Kit 3.0 - Part 3 of 9 (2.72GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%204%20of%209.zip">Rapture Kit 3.0 - Part 4 of 9 (2.83GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%205%20of%209.zip">Rapture Kit 3.0 - Part 5 of 9 (2.21GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%206%20of%209.zip">Rapture Kit 3.0 - Part 6 of 9 (2.15GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%207%20of%209.zip">Rapture Kit 3.0 - Part 7 of 9 (4.03GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%208%20of%209.zip">Rapture Kit 3.0 - Part 8 of 9 (4.25GB)</a></li>
              <li><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/Rapture%20Kit%203.0%20-%20Part%209%20of%209.zip">Rapture Kit 3.0 - Part 9 of 9 (2.96GB)</a></li>
            </ul>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Written Instructions</h2>
            <p>Each of the nine (9) links below should be clicked.  It will initiate the download of each of the nine (9) zip files to your downloads folder.</p>
            <br />
            <ul className="space-y-4">
              <li>Once all the files are downloaded, you can make a "Rapture Kit" folder on your computer (PC or Mac).</li>
              <li>Open the Downloads folder on your computer.</li>
              <li>One at a time, beginning with Rapture Kit 3.0 - Part 1 of 9 and ending with Rapture Kit 3.0 - Part 9 of 9, unzip the files to your new Rapture Kit folder.</li>
            </ul>
            <br />
            <p className="pl-8">Right click on each file, and extract the files to your new Rapture Kit folder.</p>
            <br />
            <p className="pl-8">The unzipping process has been designed to merge all the folders and files into the right structure.</p>
            <br />
            <p className="pl-8">When completed, select all the files in the completed Rapture Kit folder and choose "Properties".</p>
            <br />
            <p className="pl-8"><strong>Confirm that the control totals appear as follows:</strong></p>
            <br />
            <p className="pl-8"><img src="/control_totals_Rapture Kit 3.0.png" alt="Control Total" /></p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4">A note about copying and distributing the Rapture Kit resource</h3>
            <p>You are strongly encouraged to copy and distribute the Rapture Kit resource.</p>
            <br />            
            <p className="text-red-600">However, you are prohibited from reselling the Rapture Kit resource.</p>
            <br />            
            <p>There are several tutorials to help you with this in the main Resources page.</p>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">God bless you as you co-labor in the Gospel with us!</h2>
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
              <RaptureButton 
                href="/download"
                className="!bg-[#800020] !text-white hover:!bg-[#600010]"
              >
                Download for Free
              </RaptureButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 