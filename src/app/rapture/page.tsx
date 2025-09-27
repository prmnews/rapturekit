import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"
import { RaptureVideoCard } from "@/components/rapture-video-card"
import { RaptureAudioCard } from "@/components/rapture-audio-card"

// Language resource data for the table
const languageResources = [
  {
    flag: "flag_UnitedStates.png",
    countries: "Anguilla, Antigua and Barbuda, Australia, Bahamas, Barbados, Belize, British Indian Ocean Territory, British Virgin Islands, Canada, Cayman Islands, Dominica, Falkland Islands, Gibraltar, Grenada, Guam, Guernsey, Guyana, Ireland, Isle of Man, Jamaica, Jersey, Montserrat, Nauru, New Zealand, Philippines, Pitcairn, Saint Helena, Ascension and Tristan da Cunha, Saint Kitts and Nevis, Saint Vincent and the Grenadines, Singapore, South Georgia and the South Sandwich Islands, Trinidad and Tobago, Turks and Caicos, United Kingdom, United States",
    language: "English",
    document: "Post Rapture Emergency Message.pdf",
    documentText: "English Script"
  },
  {
    flag: "flag_China.png",
    countries: "Indonesia, Thailand, Malaysia, United States, Singapore, Peru, Canada, Vietnam, Philippines, Burma",
    language: "Chinese",
    document: "Post Rapture Emergency Message - Simplified Chinese.pdf",
    documentText: "被提后紧急消息脚本"
  },
  {
    flag: "flag_India.png",
    countries: "India, Nepal, United States, Mauritius, Fiji, South Africa, Suriname, Uganda, United Kingdom, New Zealand, Germany, Trinidad and Tobago, Singapore",
    language: "Hindi",
    document: "Post Rapture Emergency Message - Hindi.pdf",
    documentText: "पोस्ट रैपचर आपातकालीन संदेश स्क्रिप्ट"
  },
  {
    flag: "flag_Spanish.png",
    countries: "Mexico, Colombia, Spain, Argentina, Peru, Venezuela, Chile, Ecuador, Guatemala, Cuba, Bolivia, Dominican Republic, Honduras, Paraguay, El Salvador, Nicaragua, Costa Rica, Panama, Uruguay, Puerto Rico, Equatorial Guinea",
    language: "Spanish",
    document: "Post Rapture Emergency Message - Spanish.pdf",
    documentText: "Guión de mensaje de emergencia posterior al rapto"
  },
  {
    flag: "flag_Arabic.png",
    countries: "Egypt, Algeria, Sudan, Saudi Arabia, Morocco, Iraq, Syria, Yemen, Tunisia, Jordan, Libya, Lebanon, Somalia, United Arab Emirates, Mauritania, Oman, Qatar, Bahrain, Kuwait, Djibouti, Chad, Palestine, Eritrea, Comoros",
    language: "Arabic",
    document: "Post Rapture Emergency Message - Arabic.pdf",
    documentText: "نص رسالة الطوارئ بعد الاختطاف"
  },
  {
    flag: "flag_French.png",
    countries: "Belgium, Benin, Burkina Faso, Burundi, Cameroon, Canada, Central African Republic, Chad, Comoros, Congo, Côte d'Ivoire, Djibouti, France, Gabon, Guinea, Haiti, Luxembourg, Madagascar, Mali, Monaco, Niger, Rwanda, Senegal, Seychelles, Switzerland, Togo, Vanuatu, Vietnam",
    language: "French",
    document: "Post Rapture Emergency Message - French.pdf",
    documentText: "Message d'urgence post-enlèvement"
  },
  {
    flag: "flag_Russia.png",
    countries: "Russia, Kazakhstan, Ukraine, Kyrgyzstan, Israel, Belarus, United States, Latvia, Estonia, Lithuania, Moldova",
    language: "Russian",
    document: "Post Rapture Emergency Message - Russian.pdf",
    documentText: "Экстренное сообщение после восхищения"
  },
  {
    flag: "flag_portugese.png",
    countries: "Brazil, Angola, Mozambique, Portugal, Guinea-Bissau, Cape Verde, São Tomé and Príncipe, Macau",
    language: "Portuguese",
    document: "Post Rapture Emergency Message - Portuguese.pdf",
    documentText: "Mensagem de emergência pós Rapto"
  },
  {
    flag: "flag_Indonesia.png",
    countries: "Indonesia, Netherlands, United Kingdom, United States, Australia, Germany, China, Japan, Saudi Arabia, Malaysia, Singapore, Thailand, East Timor, Vietnam, Suriname, Russia, Ukraine, Sweden",
    language: "Indonesian",
    document: "Post Rapture Emergency Message - Indonesian.pdf",
    documentText: "Pesan Darurat Pasca Pengangkatan"
  },
  {
    flag: "flag_Japan.png",
    countries: "Japan, United States, Brazil, Guam",
    language: "Japanese",
    document: "Post Rapture Emergency Message - Japanese.pdf",
    documentText: "携挙後緊急メッセージ"
  },
  {
    flag: "flag_Israel.png",
    countries: "Australia, Canada, Germany, United Kingdom, Israel, Panama, Palestinian West Bank and Gaza, United States",
    language: "Hebrew",
    document: "Post Rapture Emergency Message - Hebrew.pdf",
    documentText: "תסריט הודעת חירום לאחר חטיפה"
  },
  {
    flag: "flag_Pakistan.png",
    countries: "Pakistan, Nepal, India, Telangana, Bihar, Delhi, West Bengal",
    language: "Urdu",
    document: "Post Rapture Emergency Message - Urdu.pdf",
    documentText: "ریپچر کے بعد ہنگامی پیغام کا اسکرپٹ"
  },
  {
    flag: "flag_India.png",
    countries: "Bangladesh, India, Pakistan, Saudi Arabia, United Arab Emirates, United Kingdom, Qatar, United States, Malaysia, Kuwait",
    language: "Bengali",
    document: "Post Rapture Emergency Message - Bengali.pdf",
    documentText: "পোস্ট র্যাপচার জরুরী বার্তা"
  }
];

export default function RapturePage() {
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
        {/* Hero Banner */}
        <section className="relative w-full">
          <div className="relative aspect-[3/1] w-full overflow-hidden">
            <Image
              src="/banner_its_not_too_late.jpg"
              alt="It's not too late"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </section>

        {/* What Just Happened Message Box */}
        <section className="bg-red-600 py-8 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
              WHAT JUST HAPPENED AND WHY?
            </h2>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <RaptureVideoCard
                title="Did many people just disappear?"
                introText="If people from all over the world, from all walks of life, from every nation and people group just suddenly vanished, watch this!"
                thumbnail="/rapture/thumb_did-many-people-just-disappear.jpg"
                href="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/Did-Many-People-Just-Disappear.mp4"
                target="_blank"
              />
              <RaptureVideoCard
                title="What Just Happened to all the Missing People?"
                introText="Tyler and Tom give a heart-felt message that reveals the TRUTH of why millions of people are now gone!"
                thumbnail="/rapture/thumb_what_happened_to_all_the_Missing_People.jpg"
                href="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/What-Happened-to-all-the-Missing-People.mp4"
                target="_blank"
              />
              <RaptureVideoCard
                title="After the Rapture - Left Behind?"
                introText="Prophecy Update presents a thorough explanation of what you have just witnessed—It's not too late to be saved!"
                thumbnail="/rapture/thumb_after_the_rapture_left_behind.jpg"
                href="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/After-the-Rapture-Left-Behind.mp4"
                target="_blank"
              />
              <RaptureVideoCard
                title="Puzzeled by What Just Happened?"
                introText="This video teaching will explain about the Rapture, how we knew it was coming, and what you MUST do now!"
                thumbnail="/rapture/thumb_what-just-happened.jpg"
                href="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/What-Just-Happened.mp4"
                target="_blank"
              />
            </div>
          </div>
        </section>

        {/* Emergency Message Box */}
        <section className="bg-red-600 py-8 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
              EMERGENCY MESSAGE
            </h2>
          </div>
        </section>

        {/* Audio Messages Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <RaptureAudioCard
                title="Post Rapture Emergency Message - Part 1"
                description="The first part of our emergency message series explaining what has happened and what you need to know immediately."
                thumbnail="/rapture/what_just_happened.jpg"
                audioSrc="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/Post%20Rapture%20Emergency%20Message%20-%20Part%201.mp3"
              />
              <RaptureAudioCard
                title="Post Rapture Emergency Message - Part 2"
                description="Continuing our emergency guidance with critical information about what to expect in the days ahead."
                thumbnail="/rapture/what_to_do_now.jpg"
                audioSrc="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/Post%20Rapture%20Emergency%20Message%20-%20Part%202.mp3"
              />
              <RaptureAudioCard
                title="Post Rapture Emergency Message - Part 3"
                description="Essential guidance for those left behind, including spiritual direction and practical advice for survival."
                thumbnail="/rapture/important_next_steps.jpg"
                audioSrc="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/Post%20Rapture%20Emergency%20Message%20-%20Part%203.mp3"
              />
              <RaptureAudioCard
                title="Post Rapture Emergency Message - Part 4 Bonus"
                description="Special bonus message with additional information about deception that will come and how to protect yourself."
                thumbnail="/rapture/bonus_aliens.jpg"
                audioSrc="https://didmillionsdisappear.com/Section%2002%20-%20First%20things%20first/Post%20Rapture%20Emergency%20Message%20-%20Part%204%20Bonus.mp3"
              />
            </div>
          </div>
        </section>

        {/* Language Resources Table */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="mb-8 text-center text-2xl font-bold">Available in Multiple Languages</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-muted-foreground/5 rounded-lg overflow-hidden">
                <thead className="bg-muted-foreground/10">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Flag</th>
                    <th className="py-3 px-4 text-left font-medium">Countries</th>
                    <th className="py-3 px-4 text-left font-medium">Language</th>
                    <th className="py-3 px-4 text-left font-medium">Document</th>
                  </tr>
                </thead>
                <tbody>
                  {languageResources.map((resource, index) => (
                    <tr key={index} className="bg-muted-foreground/5">
                      <td className="py-3 px-4 align-middle">
                        <div className="relative w-16 h-10">
                          <Image 
                            src={`/rapture/flags/${resource.flag}`}
                            alt={resource.language}
                            fill
                            sizes="64px"
                            className="object-contain"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm max-w-[300px]">
                        <div className="line-clamp-3">
                          {resource.countries}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{resource.language}</td>
                      <td className="py-3 px-4">
                        <Link 
                          href={`/rapture/pdf/${resource.document}`}
                          className="text-burgundy dark:text-yellow-400 hover:underline"
                          target="_blank"
                        >
                          {resource.documentText}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bonus Content: Alien Deception */}
        <section>
          <div className="bg-red-600 py-8 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
                BONUS CONTENT: ALIEN DECEPTION
              </h2>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-muted-foreground/5 rounded-lg overflow-hidden">
                <thead className="bg-muted-foreground/10">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Flag</th>
                    <th className="py-3 px-4 text-left font-medium">Countries</th>
                    <th className="py-3 px-4 text-left font-medium">Language</th>
                    <th className="py-3 px-4 text-left font-medium">Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-muted-foreground/5">
                    <td className="py-3 px-4 align-middle">
                      <div className="relative w-16 h-10">
                        <Image 
                          src="/rapture/flags/flag_UnitedStates.png"
                          alt="English"
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm max-w-[300px]">
                      <div className="line-clamp-3">
                        Anguilla, Antigua and Barbuda, Australia, Bahamas, Barbados, Belize, British Indian Ocean Territory, British Virgin Islands, Canada, Cayman Islands, Dominica, Falkland Islands, Gibraltar, Grenada, Guam, Guernsey, Guyana, Ireland, Isle of Man, Jamaica, Jersey, Montserrat, Nauru, New Zealand, Philippines, Pitcairn, Saint Helena, Ascension and Tristan da Cunha, Saint Kitts and Nevis, Saint Vincent and the Grenadines, Singapore, South Georgia and the South Sandwich Islands, Trinidad and Tobago, Turks and Caicos, United Kingdom, United States
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">English</td>
                    <td className="py-3 px-4">
                      <Link 
                        href="/rapture/pdf/Post Rapture Emergency Message - Part 4 Bonus.pdf"
                        className="text-burgundy dark:text-yellow-400 hover:underline"
                        target="_blank"
                      >
                        English Script
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Back to home link */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-burgundy dark:text-yellow-400 hover:underline"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to Home
            </Link>
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