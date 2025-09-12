import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "What is the Rapture? | Rapture Kit",
  description: "Learn about the Rapture, what it means, and how to prepare.",
}

export default function WhatIsTheRapturePage() {
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

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-[1200px] aspect-[12/7]">
                <Image
                  src="/banner_more_on_the_rapture.jpg"
                  alt="The Rapture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">What is the Rapture?</h2>
            <p>The term Rapture indicates a swift catching up or rescuing of born again followers of Christ before the terrible events of the Tribulation. Does this mean that some people will not have to live through the terrible seal, trumpet, and bowl judgments that are coming? YES! Terrible events are coming—the Rapture is a merciful removal of the Bride of Christ (both the living and those that died in Christ centuries ago) before the wrath of God is poured out on an unbelieving world full of out-of-control sin and lawlessness.</p>
            <br />
            <p>Many argue that the word: "Rapture" is not found in the Bible, and therefore, they dismiss this important event completely. But that's not the case entirely. Let's remember that the English term Rapture comes from the phrase "caught up" found in 1 Thessalonians Chapter 4. There the Greek text (the original language of the New Testament) includes the word <i>harpazo</i>, which means to seize upon with force or to catch or snatch up. The Latin translators of the Greek New Testament Bible translated that word, harpazo to rapturo. The Latin, rapturo, became the root word for the English term Rapture.</p>
            <br />
            <p>Through the Rapture, God will catch-up His church—the devoted followers of Christ. By this event faithful followers of Christ will be saved from the terrible Tribulation-period events that are to come. John, the writer of the book of Revelation, said it this way: The church will be "kept from the hour of testing that shall come upon the world" (Revelation 3:10). Paul, writing of the quick and sudden nature of the Rapture records, "Behold I show you a mystery we shall not all sleep, but we shall all be changed. In a moment in the twinkling of an eye…the trumpet shall sound and the dead shall be raised…and we shall be changed." (1 Cor. 15:51-52)</p>
            <br />
            <p>Writing to the Thessalonian Church, Paul wrote,</p>
            <blockquote className="pl-6 border-l-4 border-burgundy dark:border-yellow-400 italic my-6">
              "For the Lord himself will descend from heaven with a shout…and with the trump of God. And the dead in Christ shall rise first. Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air." (1 Thessalonians 4:16-18)
            </blockquote>
            <p>Jesus spoke about the suddenness of the Rapture.</p>
            <blockquote className="pl-6 border-l-4 border-burgundy dark:border-yellow-400 italic my-6">
              "There will be two in the field, and then suddenly one will be left."<br />
              "There will be two women grinding at the mill. One will be taken, and one will be left."
            </blockquote>
            
            <p>In addition, in Luke 12, Jesus notes the importance of expecting His return. In Matthew 24, Jesus spoke of the need to be watching and waiting and ready for his return.</p>
            
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-8 mb-4">Summary:</h3>
            
            <ul className="space-y-2">
              <li>The Rapture represents Jesus fulfilling His promise to come again (John 14:3; Acts 1:9) and rescue His people, the true Church, from the upcoming time of wrath (Rev. 3:10).</li>
              <li>There are more than two dozen allusions to the Rapture in the Bible. The admonition is to be spiritually prepared for this event. Those who are not spiritually prepared will be left behind and will have to endure the horrors of the seven-year tribulation period.</li>
            </ul>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Why believe the Rapture is imminent?</h2>
            
            <p>Though many dismiss the idea of a Rapture, this teaching has strong Scriptural support. The sobering truth is that those who are not in right relationship with Jesus Christ when He comes for His bride, the Church, will be left behind. Many faithful believers pray you and your loved ones will not be left to endure the horrors of the Tribulation period. Noted below are five reasons to believe the Rapture event will happen:</p>
            <br />
            <ol className="space-y-2 list-decimal pl-6">
              <li>The Rapture will happen because Jesus spoke of it (Matt. 24:27, 37-41).</li>
              <li>The Rapture will happen because Jesus cautioned individuals to prepare for it (Matt. 24:42-44).</li>
              <li>The Rapture will happen because the Apostle Paul wrote of it (1 Thess. 4:15-18; 5:9; 1 Cor. 15:52).</li>
              <li>The Rapture will happen because it is referenced in the book of Revelation (Rev 3:10-11; 4:1-2; 7:9-17).</li>
              <li>The Rapture will happen because it is allegorized in the book, Songs of Solomon, and is consistent with the nature and working of God through the ages (deliverance and rescue are always offered before divine judgment comes).</li>
            </ol>
            
            <p className="mt-6">Noted below are five reasons to believe the Rapture is imminent. Jesus said there would be specific signs (prophetic fulfillments) that precede His return (Matt. 24:32-33). Those signs have either already been fulfilled or are taking place now. They include:</p>
            <br />

            <ul className="space-y-2">
              <li>Israel will be restored as a nation (this happened on May 14, 1948, in accordance with prophecies found in Ezekiel 4 and 37).</li>
              <li>Israel would be restored as a nation in one day (in accordance with Isa. 66:8).</li>
              <li>The Hebrew language would return to the land, and the land would prosper (Isaiah 55:12-13).</li>
              <li>There would be a move to reestablish Jerusalem as the capital.</li>
              <li>Control of the city of Jerusalem would be a point of contention for the world (Zech. 12:1-4).</li>
            </ul>
            
            <p className="mt-6">The Rapture will happen because it is prophesied to happen, and Bible prophecies are true. Every one of the more than 900 prophecies to be fulfilled by this point in history, have been fulfilled, exactly as foretold. The remaining prophesied events (including the Rapture) will be too.</p>
            <br />
            <p>The Rapture event is imminent because all requisite prophecies related to the Rapture have been fulfilled, and the signs Jesus said would precede the Rapture are visible. Matthew 24:33b notes: "…When you see all these things, you know that he is near, at the very gates."</p>
            <br />
            <p>At least 100 Bible prophecies will be fulfilled in the last days. However, it is highly anticipated that the next significant prophetic event to take place will be the Rapture. Some prophecies have prerequisites. For example, the prophecy concerning the Antichrist forbidding sacrifices in the Temple has several requisites: First, the Antichrist must be revealed—which can only occur after the restraining force of the Church is removed in the Rapture; second, the Temple must be rebuilt; and third, the Peace Covenant must be signed as this ushers in the reign of the Antichrist. However, the fulfillment of the Rapture prophecy has no remaining requisites.</p>
            <br />
            <p>It is also important to note that the Rapture is presented as a singular, instantaneous event. There will be no warning and no subsequent (second-chance) event. Individuals will either be ready, caught-up and rescued by Christ, or they will be left behind and will have to endure the terrible events of the Tribulation period. It is critical that all believers in Jesus Christ commit to reaching the lost NOW and do all they can to reach those left behind.</p>
            <br />
            <p>Many are not awake to this truth. Hosea 4:6 warns "My people are destroyed for lack of knowledge…" Even many Christians that have heard of the Rapture doctrine are mocking and scoffing. The Apostle Peter, in speaking about the coming judgment says in 1 Peter 3:3-4 "Most importantly, you must understand that in the last days scoffers will come, scoffing and following their own evil desires. "Where is the promise of His coming?" they will ask. "Ever since our fathers fell asleep, everything continues as it has from the beginning of creation. Many will be shocked; many will mourn that they did not take the Bible literally so as to come to repentance and faith in Jesus. We must all be born again to be Raptured. Read the back story of a conversation between Jesus Christ and Nicodemus in John 3:1-21 to understand that we must be born of the Spirit to be saved.</p>
            <br />
            <p>Will it be possible to be forgiven, become a Christian, and have the hope of eternal life in heaven after the Tribulation begins? YES! However, it will be very, very difficult to live as a Christian during this time in history. Most will not survive. The gravity of this reality and a recognition that many important signs are converging for the first time in human history, indicate that the Rapture event is quite near, prompted the creation of this Rapture Kit resource.</p>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Why the Rapture Kit matters</h2>
            
            <p>The Rapture Kit serves as both a witnessing tool for the present and a resource for the future. By equipping those who are left behind with biblical truth, guidance, and practical resources, we can continue to share God's love and message of salvation even after we're gone.</p>
            
            <p>The Rapture Kit provides:</p>
            <br />
            <ul className="space-y-2">
              <li>Biblical explanations of what has happened</li>
              <li>Resources to counter deception and false narratives about the disappearances</li>
              <li>Guidance on how to receive salvation during the Tribulation</li>
              <li>Warnings about the Mark of the Beast and other critical decisions</li>
              <li>Practical advice for surviving and maintaining faith during challenging times</li>
            </ul>
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