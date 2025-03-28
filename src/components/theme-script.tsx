// This component injects a script to prevent theme flickering
// It runs before React hydration to set the theme class based on localStorage
export function ThemeScript() {
  const themeScript = `
    (function() {
      // Try to get the theme from localStorage
      var storedTheme = localStorage.getItem('theme')
      
      // If theme is explicitly set in localStorage, use that
      if (storedTheme) {
        document.documentElement.classList.add(storedTheme)
        return;
      }
      
      // Otherwise, check system preference
      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      }
    })()
  `
  // Using dangerouslySetInnerHTML is safe here as we're not using user input
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
} 