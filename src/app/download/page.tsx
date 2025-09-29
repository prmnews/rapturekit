import Link from "next/link"

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
            <p className="pl-8">It requires a significant amount of free space on your computer. The Rapture Kit 3.1 is 27GB in size, so you need at least 27 GB of free space on your computer.</p>
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
            <p className="text-red-600 font-bold italic">In the Bible, we know that there is massive opposition to the Gospel, the Bible, and thoses holding a true Biblical worldview. Born again believers will be persecuted, imprisoned, and even killed for their faith.  As such, we must advise you that you need to reduce the visibility of accessing these resources.  Perhaps use a VPN to disguise your location if you can.  If that is not possible, get to work, download the Rapture Kit, then get off as soon as possible.</p>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Download Tutorial using a PC example</h2>
            <p><strong>Watch this tutorial on how to download and unzip the Rapture Kit to your PC or Mac:</strong></p>
            
            <br /><p><a href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%205%20-%20How%20to%20Download%20a%20Rapture%20Kit.mp4" target="_blank">
              <img src="how_to_download_tutorial.png" alt="Tutorial thumbnail" className="mb-4 rounded-lg" width="600" />
            </a></p>
            
            <RaptureButton 
              href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%205%20-%20How%20to%20Download%20a%20Rapture%20Kit.mp4"
              target="_blank"
              className="!bg-[#800020] !text-white hover:!bg-[#600010]"
            >
              Tutorial
            </RaptureButton>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Download for Your Platform:</h2>
            
            <div className="my-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                
                <div className="bg-card border rounded-lg p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">🖥️ PC</h3>
                    <p className="text-sm text-muted-foreground">mac 10/11</p>
                  </div>
                  <div className="space-y-2">
                    <p style={{ backgroundColor: 'lightyellow', color: 'black' }}><strong>Download Tip:</strong><br /><i>For .bat and .png files: If they open in your browser instead of downloading, Right-click the link and select &quot;Save link as...&quot; to download.</i></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/unzip_rapture_kit.bat" className="text-sm hover:underline">windows Installer BATCH file</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/control_totals_Rapture_Kit_3.1_win.png" className="text-sm hover:underline">Control Totals</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_1_of_9.zip" className="text-sm hover:underline">Part 1 of 9 (3.10GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_2_of_9.zip" className="text-sm hover:underline">Part 2 of 9 (2.18GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_3_of_9.zip" className="text-sm hover:underline">Part 3 of 9 (2.72GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_4_of_9.zip" className="text-sm hover:underline">Part 4 of 9 (2.83GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_5_of_9.zip" className="text-sm hover:underline">Part 5 of 9 (2.21GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_6_of_9.zip" className="text-sm hover:underline">Part 6 of 9 (2.15GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_7_of_9.zip" className="text-sm hover:underline">Part 7 of 9 (4.03GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_8_of_9.zip" className="text-sm hover:underline">Part 8 of 9 (4.25GB)</a></p>
                    <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/windows/Rapture_Kit_3.1-Part_9_of_9.zip" className="text-sm hover:underline">Part 9 of 9 (2.96GB)</a></p>
                  </div>
                  <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                    <p><strong>Total:</strong> ~27GB</p>
                    <p>windows 10 & 11</p>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">🍎 MacOS</h3>
                    <p className="text-sm text-muted-foreground">macOS 10.15+</p>
                  </div>
                  <div className="space-y-2">
                    <p style={{ backgroundColor: 'lightyellow', color: 'black' }}><strong>Download Tip:</strong><br /><i>These files will download to your Downloads folder. Be aware you might have to Save As to download. Also you must authorize the .command file to run it. This is set in the security area.</i></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/install_rapture_kit.command" className="text-sm hover:underline">Mac install .command file</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/control_totals_Rapture_Kit_3.1_mac.png" className="text-sm hover:underline">Control Totals</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_1_of_9.zip" className="text-sm hover:underline">Part 1 of 9 (3.10GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_2_of_9.zip" className="text-sm hover:underline">Part 2 of 9 (2.18GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_3_of_9.zip" className="text-sm hover:underline">Part 3 of 9 (2.72GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_4_of_9.zip" className="text-sm hover:underline">Part 4 of 9 (2.83GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_5_of_9.zip" className="text-sm hover:underline">Part 5 of 9 (2.21GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_6_of_9.zip" className="text-sm hover:underline">Part 6 of 9 (2.15GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_7_of_9.zip" className="text-sm hover:underline">Part 7 of 9 (4.03GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_8_of_9.zip" className="text-sm hover:underline">Part 8 of 9 (4.25GB)</a></p>
                      <p><a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/mac/Rapture_Kit_3.1-Part_9_of_9.zip" className="text-sm hover:underline">Part 9 of 9 (2.96GB)</a></p>
                  </div>
                  <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                    <p><strong>Total:</strong> ~27GB</p>
                    <p>Intel & Apple Silicon</p>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">🐧 Linux</h3>
                    <p className="text-sm text-muted-foreground">All Distributions</p>
                  </div>
                  <div className="space-y-2">
                    <p>Coming Soon</p>
                  </div>
                  <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                    <p><strong>Total:</strong> ~27GB</p>
                    <p>Ubuntu, Fedora, Debian</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Upgrades</h2>
            <p>To upgrade a Rapture Kit 3.0 to 3.1, you can use the following steps:</p>
            <br />
            <ol style={{ paddingLeft: '40px' }}>
              <li>1. Download the Rapture Kit 3.1 INCREMENTAL UPGRADE zip file from the link: <a href="https://themissings.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/webifyRK/resources/file_repo/upgrades/Go_From_3.0_to_3.1.zip" className="text-sm hover:underline" color="blue">(here)</a></li>
              <li>2. Unzip the file to the SAME folder on your computer where you have the Rapture Kit 3.0 files.</li>
              <li>3. It will ask you to overwrite the files. Say &quot;Yes&quot; to overwrite all files.</li>
              <li>4. All the new files will overlay the old files as required.</li>
              <li>5. Use your updated Rapture Kit 3.1 folder for all duplication efforts.</li>
              <li>6. Check the Change Log (below) to see what has been added or updated.</li>
            </ol>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Change Log</h2>
            <p>09/29/2025 - Updated Author CO Wyler books 1, 2, and 3.</p>
            <p>09/29/2025 - Added support for Rapture Kit 3.0 to 3.1 incremental upgrade.</p>
            <p>09/29/2025 - Added support for MacOS zip files and helper .command file.</p>
            <ol style={{ paddingLeft: '40px' }}>
              <li>1. Note, these files will download to your Finder Downloads folder.</li>
              <li>2. To run the .command file, you must authorize it to run. This is set in the security area.</li>
            </ol>
            <br />

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Written Instructions</h2>
            <p>Follow these steps to download and extract the Rapture Kit:</p>
            
            <ol style={{ marginTop: '1rem', paddingLeft: '40px' }}>
                <li style={{ marginBottom: '1rem' }}>1. Click each of the nine (9) links for your operating system above. Each file will download to your Downloads folder.</li>
                <li style={{ marginBottom: '1rem' }}>2. Once all files are downloaded, create a new folder called "Rapture Kit" on your computer.</li>
                <li style={{ marginBottom: '1rem' }}>3. Open your Downloads folder.</li>
                <li style={{ marginBottom: '1rem' }}>4. Extract the files in order (Part 1 through Part 9) to your new Rapture Kit folder:
                    <div style={{ marginTop: '0.5rem', marginLeft: '2rem' }}>
                        <p><strong>Windows:</strong> Right-click each file and select "Extract All" → Choose your Rapture Kit folder</p>
                        <p><strong>Mac:</strong> Double-click each file (they will auto-extract to the same location)</p>
                        <p><strong>Linux:</strong> Right-click and "Extract Here" or use: <code>unzip Rapture_Kit_3.1_Linux_Part_*.zip</code></p>
                    </div>
                </li>
                <li style={{ marginBottom: '1rem' }}>5. The extraction process is designed to automatically merge all folders and files into the correct structure.</li>
                <li style={{ marginBottom: '1rem' }}>6. To verify the download is complete:
                    <div style={{ marginTop: '0.5rem', marginLeft: '2rem' }}>
                        <p><strong>Windows:</strong> Select all files in the Rapture Kit folder → Right-click → Properties</p>
                        <p><strong>Mac:</strong> Select all files → Right-click → Get Info</p>
                        <p><strong>Linux:</strong> Use: <code>du -sh RaptureKit/</code> in terminal</p>
                    </div>
                </li>
                <li style={{ marginBottom: '1rem' }}>7. Confirm that your folder shows approximately 27GB of content and contains 8 main sections plus an index.html file.</li>
            </ol>

            <p className="pl-8"><strong>NOTE: The control totals for Windows are below</strong></p>
            <br />
            <p className="pl-8"><img src="control_totals_Rapture_Kit_3.1_win.png" alt="Control Totals for Windows" /></p>
            <br />
            <p className="pl-8"><strong>NOTE: The control totals for Mac are below</strong></p>
            <br />
            <p className="pl-8"><img src="/control_totals_Rapture_Kit_3.1_mac.png" alt="Control Totals for Mac" style={{ width: '1000px' }} /></p>

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
              <RaptureButton 
                href="/rapture"
                className="!bg-[#800020] !text-white hover:!bg-[#600010]"
              >
                Did the Rapture Happen?
              </RaptureButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 