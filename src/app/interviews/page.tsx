import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Interviews | Rapture Kit",
  description: "Watch interviews with believers and experts about the Rapture Kit and end times preparation.",
}

export default function InterviewsPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Interviews & Testimonies</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Hear from pastors, teachers, and everyday believers about the Rapture Kit and how it's being used to prepare loved ones for what's ahead.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-10 mb-6">Featured Interviews</h2>
            
            <div className="grid gap-8 md:grid-cols-2">

              {/* Interview 1 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_tyler_pete.png" 
                    alt="Tyler - Generation 2434 and Pete - Rev 310 Ministries" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=E0pkuZpYCbM&t=2s" 
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tyler - Generation 2434 | Pete Garcia - Rev 310</h3>
                  <p className="text-muted-foreground">In this live interview with Tyler and Pete, two well regarded Watchmen and Bible Prophecy channels, we introduce the Rapture Kit to a new audience.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 1 hour 29 minutes • February 2023</p>
                </div>
              </div>
              
              {/* Interview 2 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_tom_hughes.png" 
                    alt="Interview with Tom Hughes at Hope For Our Times" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=m_5-wuj-NB4"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Pastor Tom Hughes of Hope For Our Times</h3>
                  <p className="text-muted-foreground">In this live interview with Tom Hughes of Hope For Our Times, the discussion centers on the Rapture Kit offered by the I Am A Watchman Ministry.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 59 minutes • February 2023</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {/* Interview 3 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_hfot.png" 
                    alt="Hope for Our Times Conference 2021" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=dQ9YuZ7_0e0&t=1s"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hope for Our Times Conference 2021</h3>
                  <p className="text-muted-foreground">This is the first interview since the I Am A Watchman team launched Rapture Kit 2.0. Pastor Tom Hughes interviews Scott Townsend to discuss the greatly expanded Rapture Kit.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 19 minutes • July 2021</p>
                </div>
              </div>
              
              {/* Interview 4 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_christ_in_prophecy.png" 
                    alt="Interview with Christ in Prophecy" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=ObhlN7-Tsdo&t=1s"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Lamb & Lion Ministries Presents Christ in Prophecy</h3>
                  <p className="text-muted-foreground">How can you leave the Gospel with those who will be left behind at the Rapture?  In this interview, Dr. David Reagan and Nathan Jones interviews on Christ in Prophecy.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 28 minutes • April 2020</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {/* Interview 5 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_prophecy_watchers_1.png" 
                    alt="Scott Townsend: Projecting the Gospel into the Future" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=x6jT1l_gOxc&t=1s"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Scott Townsend: Projecting the Gospel into the Future</h3>
                  <p className="text-muted-foreground">I Am A Watchman founder Scott Townsend recently sat down with Gary Stearman from Prophecy Watchers to discuss the new Rapture Kit resource.  Scott and Gary discuss the importance projecting the Gospel into the future.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 27 minutes • February 2020</p>
                </div>
              </div>
              
              {/* Interview 6 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_prophecy_watchers_2.png" 
                    alt="Interview with Prophecy Watchers" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=GnqC2N2o5W4&t=2s"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Rapture Kits Featured on Prophecy Watchers</h3>
                  <p className="text-muted-foreground">In this 14 minute feature, Scott and Gary discuss the development and ministry behind the Rapture Kit and the impact it can have on the believers of today and our unsaved friends and loved ones in the future.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 14 minutes • January 2020</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {/* Interview 7 */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image 
                    src="/interviews/interview_jan_markell.png" 
                    alt="When Watchmen Warn with Jan Markell" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <RaptureButton 
                      href="https://www.youtube.com/watch?v=MU2E6XHaGwQ"
                      target="_blank"
                    >
                      Watch Interview
                    </RaptureButton>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">When Watchmen Warn with Jan Markell</h3>
                  <p className="text-muted-foreground">Understanding the Times Radio host Jan Markell speaks with Scott Townsend and Gary Ray about a new Rapture Kit resource. In this special half hour program, Jan and her guests focus on reaching those left behind after the Rapture of the Church.</p>
                  <p className="text-sm text-muted-foreground mt-4">Duration: 26 minutes • November 2019</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-16 mb-6">Testimonies</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimony 1 */}
              <div className="bg-muted rounded-lg p-6">
                <div className="mb-4 flex items-center">
                  <div className="ml-4">
                    <h3 className="font-semibold">Margaret</h3>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "After reviewing all the resources on the first flash drive received, I was comforted knowing that any of my family members left behind would have the necessary tools and resources to make a decision that would change their eternity. I was able to add a personal letter I had written to my children and the idea of having all this in one place gave me a tremendous sense of peace. Thank you for providing this life-changing resource!"
                </blockquote>
              </div>
              
              {/* Testimony 2 */}
              <div className="bg-muted rounded-lg p-6">
                <div className="mb-4 flex items-center">
                  <div className="ml-4">
                    <h3 className="font-semibold">Garion</h3>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "It's been about a year that the Holy Spirit has been stirring up a sense of urgency in me to provide "something" for friends and family who have not (and may not ) accept Christ before His soon return. I was so EXCITED when I believe God in the most interesting way led me to your website. When I read the overview of what the Rapture Kit contains I was BLOWN AWAY! God is AMAZING! THANK YOU for your obedience to God in what you have done."
                </blockquote>
              </div>
              
              {/* Testimony 3 */}
              <div className="bg-muted rounded-lg p-6">
                <div className="mb-4 flex items-center">
                  <div className="ml-4">
                    <h3 className="font-semibold">Debbie</h3>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "I am so impressed with this ministry. I am nearly 60 years old and now I know I am a watchman. Saw you on TV on Christ in Prophecy. Praise Jesus! I will be ordering Rapture Kits and telling friends and family about your ministry. Love, prayers and Thanks!"
                </blockquote>
              </div>
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