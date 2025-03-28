import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Overview | Rapture Kit",
  description: "Learn more about the Rapture Kit and its purpose.",
}

export default function OverviewPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Overview</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            {/* Content will go here */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6"><strong>What is a Rapture Kit?</strong></h2>
            <p>The Rapture Kit 3.0 resource is a 32GB USB (Flash Drive) preloaded with an abundance of educational, evangelistic, and discipleship materials.</p>
            <p>A Rapture Kit is a resource designed to aid believers in actively praying for and reaching out to individuals who are not yet saved and in danger of being left behind after the Rapture. The goal is two-fold:</p>
            <br />
            <p className="pl-8"><strong>Lead individuals to Jesus Christ BEFORE the Rapture.</strong> We pray for and strongly suspect that many individuals that receive a Rapture Kit from a loved one (you, the sender of the Kit) might be curious enough about the Rapture and the Prophetic Timeline to yield to Jesus Christ <strong>now</strong> and thus escape the coming Tribulation period.</p>
            <br />
            <p className="pl-8"><strong>Lead individuals to Jesus Christ AFTER the Rapture.</strong> If the Rapture Kit recipient is left behind, it will explain what just happened in order to fight deception coming from the Antichrist World System narrative. We speak honestly, directly, and in some cases very bluntly about what Tribulation Saints need to know and do. Always, in love, and always intentionally pointing to our Lord and Savior Jesus Christ as the one and only way to Salvation and an eternally secure future.</p>
            <br />
            <p>The giving of a Rapture Kit is an expression of care and God's love, and a way for believers today to have a spiritual impact in the world <strong>even after they have been taken in the Rapture by Christ.</strong></p>
            <br />
            <p>A Rapture Kit is a collection of resources designed to draw people to faith, explain what the Rapture is and what has happened, and help individuals be prepared for events associated with the Tribulation.</p>
            <br />
            <p>A Rapture Kit is a resource that will aid believers in being a witness before the Rapture and draw individuals to faith and equip new believers for service in a post-Rapture world.</p>
            <hr className="my-8" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Structure of Rapture Kit USB Drive</h2>
            <img src="/rapture_kit_folder_structure.jpg" alt="Rapture Kit Folder Structure" width="800" height="354" />
            <hr className="my-8" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Folder Descriptions</h2>
            <p>There are many resources included on the Rapture Kit to help you understand your need for Christ, help you understand what you must do to be saved, and help establish your understanding of the Bible and the great work of Salvation that the Lord. The following summary of each folder will detail the scope of the content.</p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 01 – Information for the Rapture Kit Sender\</strong></h3>
            There is an 11-page PDF document that explains what the Rapture Kit is, how to use the Rapture Kit before the Rapture, important links to legal resources should the Sender wish to include legal documents, and five (5) sample letters to introduce the Rapture Kit resource to the recipient.
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 02 – First things first\</strong></h3>
            <p>This is the recommended starting point for discovering what just happened and why. There are two important videos:</p>
            <br />  
            <p className="pl-10">Did Many People Just Disappear (15-minutes, from Lamb &amp; Lion Ministries) is a docudrama that will reveal what happened and how your friends and loved ones—now in Heaven—anticipated this event and their desire for you to come to salvation and reunite with them soon.</p>
            <br />
            <p className="pl-10">What Just Happened (56-minutes) will go through a broader explanation of what happened, including a presentation on the theology of the Rapture and Bible Prophecy and next steps that you should consider to be saved so as to inherit eternal life in Jesus Christ and avoid the consequences of unforgiven sin and a hard heart towards God.</p>
            <br />
            <p className="pl-10">Post Rapture Emergency Message (4 audio files, about 1.5 hours total) is an urgent plea for those that are left behind.  Translations of the first 3 audio files are available in Arabic, Bengali, French, Hebrew, Hindi, Indonesian, Japanese, Portuguese, Russian, Simplified Chinese, Spanish, and Urdu.  The fourth audio teaching is on the subject of "Aliens" – specifically, alien deception and is only available in English.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 03 – Bibles\</strong></h3>
            <p>There are several Bibles in PDF format for supporting the rest of the materials in the Rapture Kit. We include Bibles that are all in the public domain. These include the King James Bible, the American Standard Bible, the World English Bible, and a HTML-based version of the American Standard Bible. These Bibles use Adobe Acrobat PDF format which is widely adopted on virtually all Mac and PC's. As such, the PDF Bibles are offline and are capable of discrete use without requiring an online browser. This is done to protect private underground small groups wishing to study in secrecy. The HTML-based version has all pages stored locally on the Rapture Kit USB drive in a subdirectory and is offline from the Internet even though it uses a browser. Double-clicking the index.htm page will load this version into a browser.</p>
            <br />
            <p>We have also included the Open Bible web app in a 1GB zip file.  This amazing resource contains: Berean Study Bible, King James Version, American Standard Version, Darby Bible Translation, English Revised Version, Young's Literal Translation, Parallel Translations, Cross Reference and Treasury of Scripture Knowledge, Parallel Commentaries, Strong's Lexicon (BSB, YLT, KJV), Hebrew Text Analysis, Bible Book Outline.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 04 – Books\</strong></h3>
            <p>The IAAW team has included 16 eBooks (in PDF format) with over 1,800 pages of information that will assist the Rapture Kit recipient during the Tribulation Period. Importantly, there are several targeting Bible Prophecy, guidance on what to do, and learning and discipleship resources to grow their young faith. There is one additional eBook contribution from Apologist Charlie Campbell on Teaching and Preaching God's Word as well as a Bible Prophecy Timeline (in English and Spanish) for a total of 19 PDF documents.</p>
            <br />
            <p>Furthermore, we have included more survival-focused content.  How to build a bug-out bag, Edible Plants, First Aid, Survivability, Camouflage Concealment, Survival Manual, Bushcraft, and Hunting with snares.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 05 – Discipleship Study Materials\</strong></h3>
            <p>Included are video teaching presentations on Nehemiah (video format, 10 minutes), Reasons to Believe (3-part video series, 1 hour 18 minutes), The Gift of Salvation - How to be Saved (video format, 24 minutes), The Story of Jesus Bible Study (3 eBooks, 496 pages in PDF format for with 10 PowerPoint instructor slide decks), The Wonders of Bible Prophecy (7-part video series, 1 hour 54 minutes), and What it Means to be a Watchman (video format, 18 minutes). In all there is over 4 hours 17 minutes of instruction.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 06 – What Tribulation Saints Need to Know\</strong></h3>
            <p>In this series, taught by I Am A Watchman founder Scott E. Townsend, we unpack extensive teachings balancing "speaking the Truth in love" with "brutal honesty" about what Tribulation Saints must know and what they will face. This collection contains 14 videos with over 5 hours of teaching, strategy, exhortations, and principles for the Tribulation. Topic areas include: Fear, The Grace of God, Reliability of Bible Prophecy, What Will Happen, Your Ministry Calling, Evangelism, Your Seal, The Mark of the Beast, What You Must Discern, Your Destiny, Finishing Well, and a final Personal Message from Scott.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 07 – Sermons and Teachings\</strong></h3>
            <p>We have curated several sermon and teaching series (with permission) to get Tribulation Saints up to speed as quickly as possible. We have contributions from apologist Charlie Campbell ("The End Times - Ten Upcoming Events in Bible Prophecy", 1 sermon, video format, 58 minutes), evangelist Nathan Jones and Pastor Vic Bautista (Book of Daniel chapters 8-12, 16 teachings, audio format, 10 hours 34 minutes), Pastor Brandon Holthaus (Book of Revelation, 45 sermons, audio format, 32 hours 31 minutes), Pastor Dr. Andy Woods (Book of Revelation, 75 sermons, audio format, 84 hours 19 minutes), Pastor Gary Ray (Various subjects, 9 teachings, audio format, 2 hours 46 minutes), Pastor Jack Hibbs featuring Amir Tsarfati ("Things You Should Know", 1 video, 56 minutes), and Pastor Tom Hughes (Book of Revelation, 40 sermons, video format, 29 hours 27 minutes).</p>
            <p>These sermons and teachings consist of a combined total of 130 hours in MP3 audio files, and 39 hours of video files.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 08 – Additional Articles\</strong></h3>
            <p>This is a collection of 64 IAAW articles published since 2018 covering a wide range of topics meant to encourage, equip, and train Christ Followers to finish well. As Watchmen ourselves, you will notice a bias towards how every believer should "watch and warn". For us—those that were Raptured and now in Heaven—our Warning to others consisted of telling people that there is an urgent call to repent and believe so as to have a genuine relationship with Jesus Christ and escape the Tribulation period. For you—those left behind—your role to "watch and warn" has to do with helping to establish a second chance rescue effort to reach and bring as many as possible to faith in Jesus Christ, to NOT take the Mark of the Beast, and to finish strong and well before the Second Coming of Jesus Christ at the end of the 7-year Tribulation Period.</p>
            <hr className="my-8" />
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4"><strong>\Section 09 – Partner Content\</strong></h3>
            <p>We have offered partners the ability to co-brand the Rapture Kit and as such, this folder is a placeholder for that partner's content!  Each partner will have their own content and configuration based on what they believe is the most important value-added messages, studiess, and sermons they wich to ccontribute.</p>
            <hr className="my-8" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6"><strong>PLATFORM SUPPORT</strong></h2>
            <p>The USB Drive (either 2.0 or 3.0) is compatible with any Mac, Linux, or Windows-based PC's capable of loading any USB 2.0 specification or higher and that have current drivers to support .PDF Documents, .MP3 audio files, and .MP4 video files.</p>
            <p>Video (MP4) and audio (MP3) can also be played from many contemporary TV platforms (such as Samsung, Sony, LG...). This is intentionally purposed for small, private, underground Christ Followers seeking to finish well during the Tribulation period. As such, it facilitates group study and discussion.</p>
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