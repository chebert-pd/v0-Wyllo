import "./globals.css"
import localFont from "next/font/local"
import { SmoothCornersInit } from "./smooth-corners-init"

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
})

export const metadata = {
  title: "Design System",
  description: "Design system gallery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothCornersInit />
        {children}
      </body>
    </html>
  )
}