import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "How to be Raptured | Rapture Kit",
  description: "Learn about salvation and the steps to be ready for the Rapture through faith in Jesus Christ.",
}

export default function HowToBeRapturedPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">How to be Raptured</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">Understanding salvation and being prepared for the Rapture through faith in Jesus Christ.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[1200px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-burgundy dark:prose-headings:text-yellow-400 prose-a:text-burgundy dark:prose-a:text-yellow-400">
            
            <div className="text-center text-4xl mb-12">
              <p className="mb-2">To be Raptured, you must be born again</p>
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Four Steps to Salvation</h3>
            <p>
              Noted below is a simple, four-step plan to receive Christ. Some refer to this process as being saved (1 John 2:2; Acts 4:12) or born again (see John 3:3 and 2 Cor. 5:17). Born-again believers are disciples and followers of Christ. The courageous identify as Watchmen (see Ezek. 33:1-9). Those who believe in Jesus Christ, are saved by Jesus Christ. They are forgiven of their sins and assured of eternal life in heaven.
            </p>

            <div className="bg-muted rounded-lg p-8 my-8">
              <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#800020] dark:bg-yellow-400 text-white dark:text-black rounded-full flex-shrink-0">1</span>
                <span>Understand that God has not been first place in your life and ask Him to forgive your sins.</span>
              </h4>
              <p>
                Scripture notes that God loves us and that Jesus will forgive the sins that are confessed to Him.
              </p>
              <blockquote className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2 italic mt-4">
                &quot;If we confess our sins, He is faithful and just and will forgive us our sins and cleanse us from every wrong.&quot; (1 John 1:9)
              </blockquote>
            </div>

            <div className="bg-muted rounded-lg p-8 my-8">
              <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#800020] dark:bg-yellow-400 text-white dark:text-black rounded-full flex-shrink-0">2</span>
                <span>Believe that Jesus died to pay for your sins and that He rose again and is alive today.</span>
              </h4>
              <p>
                Know that Jesus died and rose again so that your sins can be forgiven. When this happens, you are restored into a right and perfect relationship with the Father. The first step is to acknowledge that you believe in God, that His Son is Jesus, that Jesus came to earth, lived a sinless life, was crucified, rose again and will come again in fulfillment of the Scriptures.
              </p>
              <blockquote className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2 italic mt-4">
                &quot;If you confess that Jesus is your Lord, and you believe in your heart that God raised Him from the dead, you will be saved.&quot; (Romans 10:9)
              </blockquote>
            </div>

            <div className="bg-muted rounded-lg p-8 my-8">
              <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#800020] dark:bg-yellow-400 text-white dark:text-black rounded-full flex-shrink-0">3</span>
                <span>Confess your sins to Jesus and accept God&apos;s gift of salvation.</span>
              </h4>
              <p>
                Believe that God loves you. Believe that Jesus came and died for you. Believe that God&apos;s grace is greater than your sin. Do not let regret, bitterness, fear, or shame keep you from falling into the arms of God.
              </p>
              <p className="mt-4">
                Remember, restoring our relationship with God is not based on anything we do, but on what Jesus already did for us!
              </p>
              <p className="mt-4">
                Remember also, that when you confess your sins, your sins are both forgiven and forgotten. Scripture notes that &quot;When we confess our sins to Jesus, He is faithful and just to forgive us our sins and cleans us from all unrighteousness&quot; (1 John 1:9).
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8 my-8">
              <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#800020] dark:bg-yellow-400 text-white dark:text-black rounded-full flex-shrink-0">4</span>
                <span>Ask Jesus Christ to come into your heart and be Lord of your life.</span>
              </h4>
              <p>
                It is not enough to believe in Him—the Bible notes that even the demons believe in Him. The call is to love Him and follow Him with all of your heart, all of your mind and all of your strength.&quot; God&apos;s grace is promised to all who truly believe.
              </p>
              <blockquote className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2 italic mt-4">
                &quot;To all who receive Him, He gives the right to become children of God.&quot; (John 1:12)
              </blockquote>
            </div>

            <p>
              You can be sure of your salvation right now by praying a simple prayer of commitment to God. Your commitment to God will be met with the indwelling presence of His Spirit, and that is your guarantee that you will share in the blessed rapture event that prophecy notes is to come.
            </p>

            <div className="bg-burgundy/10 dark:bg-yellow-400/10 rounded-lg p-8 my-8">
              <h4 className="text-xl font-bold mb-4 text-center">A sample prayer is presented below:</h4>
              <blockquote className="italic">
                &quot;Dear Jesus, thank you for loving me, even when I&apos;ve ignored You and have gone my own way. I realize I need You in my life, and I&apos;m sorry for my sins. I ask You to forgive me. Thank you for dying on the cross for me. Please help me to understand Your love, and Your will for my life, more and more. As much as I know how, I want to follow You from now on. Please come into my life and make me a new person inside. I accept Your gift of salvation. Please help me to grow now as a Christian. Thank you, Jesus!&quot;
              </blockquote>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Evidence of a Changed Life and What to Expect</h3>
            <h4 className="text-xl font-bold mb-4">WHAT IS THE EVIDENCE OF A CHANGED LIFE?</h4>
            <p>
              Many ask: &quot;How can I be sure that I&apos;m saved?&quot; Remember, your decision is spiritual—not physical. The proofs that you are saved have nothing to do with a change in appearance—you will not be taller, thinner, or free from sickness. Yes, miracles still happen, but miracles in the physical realm are not given as proof of our salvation.
            </p>
            <div className="mt-4">
              <p>
                So then, how will you know that you are saved? Scripture notes that &quot;the Spirit himself bears witness with our spirit that we are children of God…&quot; (Romans 8:16). The proof is that when we are saved, God extends to new believers a part of Himself—the Holy Spirit. The Spirit then lives in the heart of every believer. This abiding presence of God which comforts, directs, guides, and empowers individuals for service.
              </p>
            </div>
            <div className="mt-4">
              <p>
                The Spirit will help you understand Scripture, have a heart to serve, forgive and give, guide you in the path God has chosen for you, lead you to interact with those whom God would have you witness to, and help you to do what God wants you to do.
              </p>
            </div>
            <div className="mt-4">
              <p>
                The proof of your salvation is internal—it is God touching your heart and mind and changing your priorities and desires. Believers still have a will, and can &quot;resist the Spirit&quot; (Acts 7:51b). There will likely be a learning curve, and though maturing in Christ will take time, a true believer should immediately strive to grow in spiritual knowledge and strive to surrender to the precepts and leading of God.
              </p>
            </div>
            <blockquote className="border-l-4 border-burgundy dark:border-yellow-400 pl-4 py-2 italic mt-4">
              &quot;This is how we know who the children of God are and who the children of the devil are: Anyone who does not do what is right is not God&apos;s child…&quot; (1 John 3:10).
            </blockquote>
            
            <div className="mt-12 flex justify-center">
              <RaptureButton href="/download">
                Download Rapture Kit
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