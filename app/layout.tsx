import type { Metadata } from "next"
import { M_PLUS_2 } from "next/font/google"
import "@/app/globals.css"

const mPlus2 = M_PLUS_2({
  variable: "--font-m-plus-2",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js(15)+AIコーディング",
  description: "Next.js(15)とAIコーディングをフルに使ったWEBページです",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${mPlus2.variable} antialiased`}>{children}</body>
    </html>
  )
}
