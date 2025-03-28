import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Did the Rapture Happen? | Rapture Kit",
  description: "Information for those wondering if the Rapture has occurred.",
}

export default function RaptureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 