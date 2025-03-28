"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeEffect() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // We only need to sync system preferences if the theme is set to 'system'
    // The theme is already set by ThemeScript for first render
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    
    // Listen for system preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === 'system') {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    
    prefersDark.addEventListener('change', handleChange)
    
    return () => {
      prefersDark.removeEventListener('change', handleChange)
    }
  }, [setTheme])

  return null
}

