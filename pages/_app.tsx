import { mergeClasses, ThemeProvider } from "@expo/styleguide"
import type { AppProps } from "next/app"
import { Inter, Fira_Code } from "next/font/google"

import "@expo/styleguide/dist/expo-theme.css"
import "@expo/styleguide-search-ui/dist/expo-search-ui.css"
import "public/global.css"

export const regularFont = Inter({
  variable: "--regular-font",
  display: "swap",
  subsets: ["latin"],
})

export const monospaceFont = Fira_Code({
  variable: "--monospace-font",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <style jsx global>
        {`
          html,
          body,
          kbd,
          button,
          input,
          select {
            font-family: ${regularFont.style.fontFamily}, sans-serif;
          }

          code,
          pre {
            font-family: ${monospaceFont.style.fontFamily}, monospace;
          }
        `}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
