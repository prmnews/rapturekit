"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileNav />
  }

  return <DesktopNav />
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/interviews" title="Featured Interviews">
                Watch interviews with experts and believers.
              </ListItem>
              <ListItem href="/tutorials" title="Tutorials">
                Step-by-step guides for using the Rapture Kit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>FAQs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="overview" title="Rapture Kit Overview">
                Learn about the Rapture Kit and its purpose.
              </ListItem>
              <ListItem href="download" title="Make Your Own">
                Instructions for downloading and creating your own Rapture Kit.
              </ListItem>
              <ListItem href="faqs" title="Frequently Asked Questions">
                Common questions about the Rapture Kit.
              </ListItem>
              <ListItem href="/customizing-options" title="Customizing Options">
                Ways to personalize your Rapture Kit.
              </ListItem>
              <ListItem href="/faqs/rapture-kit-version-history" title="Rapture Kit Version History">
                The evolution of the Rapture Kit over time.
              </ListItem>
              <ListItem href="/faqs/how-to-be-raptured" title="How to be Raptured">
                Biblical explanation of salvation and the Rapture.
              </ListItem>
              <ListItem href="/about" title="About Us">
                Learn about our mission and team.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/what-is-the-rapture" className="text-lg font-medium">
            What is the Rapture?
          </Link>
          <Link href="/interviews" className="text-lg font-medium">
            Interviews
          </Link>
          <div>
            <h4 className="mb-1 text-lg font-medium">Media</h4>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/media/featured-interviews" className="text-sm text-muted-foreground">
                Featured Interviews
              </Link>
              <Link href="/media/tutorials" className="text-sm text-muted-foreground">
                Tutorials
              </Link>
              <Link href="/media/testimonials" className="text-sm text-muted-foreground">
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-1 text-lg font-medium">FAQs</h4>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/faqs/rapture-kit-overview" className="text-sm text-muted-foreground">
                Rapture Kit Overview
              </Link>
              <Link href="/faqs/make-your-own" className="text-sm text-muted-foreground">
                Make Your Own
              </Link>
              <Link href="/faqs/frequently-asked-questions" className="text-sm text-muted-foreground">
                Frequently Asked Questions
              </Link>
              <Link href="/faqs/customizing-options" className="text-sm text-muted-foreground">
                Customizing Options
              </Link>
              <Link href="/faqs/rapture-kit-version-history" className="text-sm text-muted-foreground">
                Rapture Kit Version History
              </Link>
              <Link href="/faqs/how-to-be-raptured" className="text-sm text-muted-foreground">
                How to be Raptured
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground">
                About Us
              </Link>
            </div>
          </div>
          <Link href="/contact" className="text-lg font-medium">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

