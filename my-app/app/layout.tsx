import "./globals.css"

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}