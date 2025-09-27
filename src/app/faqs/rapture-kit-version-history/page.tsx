import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Rapture Kit Version History | Rapture Kit",
  description: "A comprehensive history of the Rapture Kit development and available versions.",
}

export default function RaptureKitVersionHistoryPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Rapture Kit Version History</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">The history and evolution of the Rapture Kit from its origins to the present version.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">History of Rapture Kit Development</h2>
            
            <div className="bg-muted rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">SUMMARY ON WHAT VERSION TO USE WITH BLANK NEW USB DRIVES</h3>
              <p>
                If you have a <strong>32GB drive or higher capacity</strong> (such as 64GB, 128GB, etc.), then you should use the Rapture Kit 3.1, which is available <Link href="/download">here</Link>.
              </p>
              <br />
              <p>
                NOTE: You can get quite creative with storage media. For example, you can copy the full contents of the Rapture Kit to a tiny SanDisk 32GB Ultra microSDHC UHS-I card available in many stores.
                You can even use a typical memory card like the kind you use in your camera or camcorder as long as it has at least 32GB of storage. It leaves enough room for quite a few photos and videos.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">VERSION 1.X – DESIGNED FOR 8GB USB DRIVES</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 1.0</strong> – was a physical kit, which included DVDs, books, and a 100-page binder. Shipping and materials made the price point over $100. The desire for this to 
                  be a more affordable resource led us to explore other options. This is now out of date.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 1.1</strong> – the material was put on a flash drive with the IAAW logo. A foam-lined protective case for the flash drive was designed and made available; several 
                  books were updated, and a children's book was added. About this time, the RaptureKit.org website came online. This site profiles Rapture Kit contents and includes an introductory 
                  video. This is now out of date.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 1.2</strong> – Rapture Kits were shrink-wrapped, and .WMV video files were replaced with compressed .MP4 files. Multi-lingual Scripture booklets were added and 
                  organized in a separate folder. The thinking is these could be shared as an evangelistic tool in over 300 languages and with several titles. A tutorial for how to view and add-to 
                  the Rapture Kit flash drive was added to the RaptureKit.org website. This is now out of date.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 1.3</strong> – PDF Bibles were added, including ASV and KJV by user request on the USB drive, and we expanded the FAQ and Customer Testimony pages on 
                  amiraptureready.org and RaptureKit.org websites.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 1.4</strong> – When the team compressed the main video file, it created more free space on the 8GB USB drive. We decided to optimize that space by including 
                  more resources, all while leaving sufficient free space for the Rapture Kit giver to include their own message and documents. We added the Post Rapture Emergency Message 
                  content in a new top-level folder of the same name. Then, we added sermons/teachings from Apologist Charlie Campbell, podcast series on the book of Daniel from Nathan Jones 
                  and Pastor Vic Bautista, and a 45-part sermon series on Revelation by Pastor Brandon Holthaus.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">VERSION 2.X – DESIGNED FOR 32GB USB DRIVES</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 2.0</strong> – Release at the end of Q1 2021. This is a very significant expansion of our 1.x series Rapture Kits. The theme of this version is twofold. 
                  First, we seek to encourage, warn, and disciple a new generation of believers (aka, Tribulation saints) to fearlessly work for the cause of Christ. Second, is to come alongside 
                  Tribulation saints in passing on our very best thinking about what the Bible says they will face—along with counsel, and very strong and direct teachings about how to best face 
                  the evil in those days.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 2.1</strong> – Released in March 2022. Because the team had additional time-to-develop and due to the additional Tribulation stage setting and precursors we observe, 
                  the team developed the "Post Rapture Emergency Message" material. There are three (3) audio messages (in English), around 15 minutes each, that share (part 1) what just happened, (part 2) 
                  what to do now, and (part 3) how to get additional resources from the Rapture Kit downloads for free. Additionally, the script for these three teachings were combined and then translated 
                  by a certified translation service into multiple languages reaching a potential 5.8 billion in their first language. These languages include Arabic, Bengali, French, Hebrew, Hindi, 
                  Indonesian, Japanese, Portuguese, Russian, Simplified Chinese, Spanish, and Urdu. Coinciding with this release, the team updated iamawatchman.com, rapturekit.org, and amiraptureready.org 
                  with a "Has the Rapture Happened?" button visible on the home page which navigates to these Post Rapture Emergency Message page and content.
                </p>
              </div>
              
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p className="mb-0">
                  <strong>Version 2.1b</strong> – Released in Q3 2022. We added a fourth 48-minute audio bonus teaching regarding the anticipated deception involving aliens. People need to know that 
                  aliens, alien abduction, or alien invasion will likely be blamed for why millions of people all over the world are missing after the Rapture. Furthermore, this is a great deception 
                  that they must fight through to the best of their ability. This teaching is designed to anticipate what are likely going to be the talking points behind this deception and what the 
                  Biblical worldviews is to counter it. The English script for this Bonus content is available only in English. Please use a translation function to get it translated into your own language.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">VERSION 3.0 – DESIGNED FOR 32GB to 64GB (or higher) USB DRIVES</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p>
                  <strong>Version 3.0</strong> – Released in Q3 2024. We have "webified" the Rapture Kit navigation interface in order to make the significant amount of content more accessible. In 
                  the root directory of the Rapture Kit is a 'index.html' file. To access the web interface of the Rapture Kit, simply right click on the index.html file and go to "Open With…" 
                  submenu where you can choose the browser you wish to use. NOTE: You do not need an internet connection to experience the new browser interface of the Rapture Kit. This is a very
                  important point to understand, becauses it will reduce tracking and data collection on your device.
                </p>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">OPEN BIBLE CONTENT</h4>
            <p>
              We added a fantastic and comprehensive expansion to our Bibles and Bible Study Tools by adding a ZIP file that contains the public domain version of Open Bible by Bible Hub ministry. 
              This web-based application cannot be run from a simple USB drive but must be unzipped after copying it to a computer. In all, the Open Bible web resources take up 475,569 files in 3,622 
              folders and uses about 4.6GB of disk space. We have a tutorial on how to open the Open Bible webpage 
              <Link target="_blank" href="https://didmillionsdisappear.com/Section%2001%20-%20Materials%20for%20the%20Rapture%20Kit%20Sender/Tutorial%203%20-%20How%20to%20UnZip%20Open%20Bible%20on%20Your%20PC%20or%20Mac.mp4">here</Link>.
            </p>
            <div className="mt-4">
              <p>
                <strong>Partial list of resources in the Open Bible platform:</strong>
              </p>
            </div>
            <div className="mt-4">
              <p>
                Berean Study Bible, King James Version, American Standard Version, Darby Bible
                Translation, English Revised Version, Young's Literal Translation, Parallel
                Translations, Cross Reference and Treasury of Scripture Knowledge, Parallel Commentaries, Strong's Lexicon (BSB, YLT, KJV), Hebrew Text Analysis,and Bible Book Outline.
              </p>
            </div>
            <div className="mt-4">
              <p>
                To open up the Open Bible webpage, in the new folder you have unzipped this resource to on your PC or Mac, right click on the index.html file and go to "Open With…" submenu where you 
                can choose the browser you wish to use. When you unzip the Rapture Kit zip files, you will find it in the "Section 03 - Bibles" and then in the "Open Bible Versions and Study Tools" folder. 
                The filename is: "OpenBible.zip." There is a readme.txt file that will give you more information about installing and using the Open Bible platform.
              </p>
            </div>
            <br />
            <p className="italic" style={{ paddingLeft: '20px' }}>
              Reminder, the Open Bible platform is not decompressed on the Rapture Kit because it won't fit. You must first copy the zip file and then extract it to your PC or Mac.
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">SURVIVAL AND MEDICAL CONTENT</h4>
            <p>
              We have greatly enhanced the resources that will be required by Tribulation saints to improve their odds of surviving—as the Lord permits and enables. We have included 8 new manuals 
              that cover an arrangement of topics centered around survival, food, trapping and hunting, tools, hunting, plants, navigation, bushcraft, and many other helps. The conditions after the Rapture of the Church 
              will turn very lawless and violent. Savaging as supplies become extremely scarce will be punishing and widespread. We desire to do all we can right now to come alongside our 
              dear brothers and sisters as they struggle to go as far into the Tribulation Period as the Lord permits.
            </p>
            

            <h2 className="text-4xl font-bold mt-12 mb-4" style={{ color: 'red' }}>CURRENT VERSION - AVAILABLE ON THIS WEBSITE:</h2>
            <h3 className="text-2xl font-bold mt-12 mb-4">VERSION 3.1 – DESIGNED FOR 32GB to 64GB (or higher) USB DRIVES</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2">
                <p>
                  <strong>Version 3.1</strong> – Released in Q3 2025. 
                </p>
                <p>
                  One of the problems the existing Post Rapture Emergency Message websites had was that 98% of the folder and files were hidden. To see the full content, it forced users to download the 9 zip files which is roughly 26GB of data. Then, they had to be unzipped and reassembled. This has now been fixed. We have introduced a new "Browse Files" menu item between the "No - Option" and "Resources" menu items. When this new menu items is clicked, it opens up a folder browser that has the following features:
                </p>
                <ol className="mt-4 ml-4 list-decimal">
                  <li>All folder and file structures are browseable with one-click drill-in/drill-out.</li>
                  <li>A search bar to search for files and folders.</li>
                  <li>A file types combo so you can filter by Audio, Video, PDF, Word or TXT documents. Works across all folders and files.</li>
                  <li>A download button redirects the user to the file download page.</li>
                  <li>On click - Videos play in a new tab.</li>
                  <li>On click - Audio recordings or podcasts open in a new tab.</li>
                  <li>On click - PDFs open in a new tab.</li>
                </ol>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mt-8 mb-4">SECTION 09 - PARTNER CONTENT FOLDER</h4>
            <p>
              All partner content (to date) is now curated at of September, 2025. We have removed all of the content from this folder and replaced it with a new folder structure that is more organized and easier to navigate. The new folder structure is as follows:
            </p>
            <div className="mt-4">
              <p>ETBP with Britt Gillette - All 4 of his book series.</p>
            </div>
            <div className="mt-4">
              <p>CO Wyler - The complete 4 book "Untaken" series.</p>
            </div>
            <div className="mt-4">
              <p>FluidicIce - Has 4 PDF resources, including a 293 page "The Rapture Survival Guide"</p>
            </div>
            <div className="mt-4">
              <h5>Raspberry PI Server Solutions:</h5>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
                <ul>
                    <li>• Scott Townsend - RKPi5 - Rapture Kit captive portal server hotspot</li>
                    <li>• George - wampi - this is still under development. Stay tuned!</li>
                </ul>
            </div>
            <div className="mt-4">
              <h5><strong>RASPBERRY PI SERVER SOLUTIONS - Using Scott Townsend's RKPi5 Configuration</strong></h5>
            </div>
            <div className="mt-4">
              <p>This is a short introduction to one of our Advanced Gospel Initiatives. Inspired by others, we realized how we can adapt an existing feature in Wi-Fi hotspots to project our Post Rapture Emergency Message static website to anyone within WiFi range. It is a captive portal, meaning that no login, password, or internet connection is required.</p>
            </div>
            <div className="mt-4">
              <h5><strong>Feature Summary:</strong></h5>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <ol>
                <li>• Easy Setup Scripts</li>
                <li>• All that is needed is a Raspberry Pi, a power supply, and one or more microSD cards.</li>
                <li>• The entire install and configuration process takes less than 30 minutes.</li>
                <li>• The scripts will automatically copy the Rapture Kit content from a USB Drive plugged into the Raspberry Pi.</li>
              </ol>
              <div className="mt-4">
                <p><i>The scripts will run in a terminal window and will automatically configure the Raspberry Pi to host the Post Rapture Emergency Message website.</i></p>
              </div>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <p><strong>Easy to Duplicate</strong> - Now that a microSD card has been setup and configured, it can be easily duplicated to another microSD card.</p>  
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <p><strong>Easy to Multiply</strong> - A new Raspberry Pi can be setup and configured in less than 1 minute!</p>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <p><strong>Simply plug in the new microSD card and power up the Raspberry Pi.</strong></p>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <p><strong>The 'rapture_kit' hotspot will be available within WiFi range.</strong></p>
            </div>
            <div className="mt-4" style={{ paddingLeft: '10px' }}>
              <p><i>Once a user connects to the hotspot, and after they give permission, the Post Rapture Emergency Message website will display.</i></p>
            </div>

            <div className="mt-6">
              <h5><strong>USE CASES FOR YOUR CONSIDERATION</strong></h5>
            </div>
            <div className="mt-4" style={{ paddingLeft: '20px' }}>
              <ul>
                <li>• <strong>Case 1</strong> - <i>Walk into any Starbucks or any location with customers that are typically connected to WiFi. If they see the 'rapture_kit' hotspot, they will be able to connect to it and see all Post Rapture Emergency Message resources. Put the PI in your backback. When you're ready to go, just disconnect the battery pack and walk out.</i></li>
                <li>• <strong>Case 2</strong> - <i>Captive Audience? Waiting for a docter? Traveling by Bus? Train? Plane? or Boat? Why not project the Post Rapture Emergency Message website to them?</i></li>
                <li>• <strong>Case 3</strong> - <i>Remote location training! The RKPi5 server moves with you as you run! All resources, sermons, books travel with you to bring up a new generation of Christ Followers.</i></li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">INCREMENTAL UPGRADES</h3>
            <p>
              Understanding that many people already have one or more Rapture Kits at a particular version number at the time of purchase or download, we have also developed a .Zip file upgrade 
              method that—when applied, will enhance the USB drive with version 3.0 to the new material introduced in version 3.1. This upgrade is provided at no charge. We encourage people to continue enhancing their 
              Rapture Kits as long as we are still here to lay the groundwork for the next generation of believers.
            </p>
            <div className="mt-4">
              <p>
                <strong>NOTE:</strong> Previous versions and upgrade files of the Rapture Kit are <Link target="_blank" href="https://icedrive.net/s/ZZaZhZDvPuaFRYyGav6RWVBGRF8V">here</Link>.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">SUMMARY</h3>
            <p>
              Seeing that we (on this side of the Rapture) are about to hand the baton to "a great multitude" of new believers in the Tribulation Period after the Rapture of the Church, 
              we open our hand and permit a FREE "Build Your Own" Rapture Kit option and configured for your own supplies of 32GB (or higher) USB drives. You are permitted to use and distribute
              the Rapture Kit as the Lord leads you.
            </p>
            <div className="mt-4">
              <p className="italic">
                We believe this is the right time to push very hard so that unlimited Rapture Kits can be created for those that are left behind. We are excited to co-labor with you in this season and in 
                the dreadful Tribulation season yet to come.
              </p>
            </div>
            
            <p className="text-xl font-semibold text-center mt-10">
              Thank you for your support during these last days!
            </p>
            
            <div className="mt-12 flex justify-center">
              <RaptureButton href="/download">
                Download for Free
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