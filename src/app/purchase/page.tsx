import Link from "next/link"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { ThemeLogo } from "@/components/theme-logo"
import { RaptureButton } from "@/components/rapture-button"

export const metadata = {
  title: "Purchase Physical USB Drive | Rapture Kit",
  description: "Get a pre-made physical USB keychain Rapture Kit ready to share with your loved ones.",
}

export default function PurchasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">
              Purchase Pre-Made USB Drive
            </h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Get a physical USB keychain Rapture Kit ready to share
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Left Column - Verbiage */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-burgundy dark:text-yellow-400">
                  Ready-to-Share USB Keychain
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Don&apos;t have time to create your own USB drives? We&apos;ve partnered with 
                  <span className="font-semibold text-foreground"> Keychain Rapture Kit</span> to offer 
                  pre-made physical USB drives that are ready to share with your loved ones.
                </p>
                
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold">What You Get:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Professional keychain USB drive</li>
                    <li>Pre-loaded with complete Rapture Kit content</li>
                    <li>Durable and portable design</li>
                    <li>Ready to give as a gift or emergency resource</li>
                    <li>Perfect for witnessing and outreach</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Image and CTA */}
              <div className="order-first md:order-last space-y-6">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/keychain.png"
                    alt="Keychain Rapture Kit USB Drive"
                    width={800}
                    height={800}
                    className="object-cover w-full h-auto"
                    priority
                  />
                </div>

                <div className="bg-burgundy/10 dark:bg-yellow-400/10 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a separate website operated by our ministry partner. 
                    Your order will be processed securely through their platform.
                  </p>
                </div>

                <div className="text-center">
                  <RaptureButton 
                    href="https://keychainrapturekit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="burgundyPrimary"
                    className="w-full text-lg px-8 py-6"
                  >
                    Visit Keychain Rapture Kit Store
                  </RaptureButton>
                </div>

                <div className="pt-2 border-t text-center">
                  <p className="text-sm text-muted-foreground">
                    Prefer to make your own? You can still{" "}
                    <Link href="/download" className="text-burgundy dark:text-yellow-400 hover:underline font-semibold">
                      download the free kit
                    </Link>
                    {" "}and create your own USB drives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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

