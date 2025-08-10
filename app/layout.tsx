import type { Metadata } from "next"
import { M_PLUS_2 } from "next/font/google"
import "@/app/globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Background from "@/components/layout/Background"

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
      <body
        className={`${mPlus2.variable} antialiased flex flex-col min-h-screen max-h-screen p-2 w-full mx-auto`}
      >
        <Header />
        <main className="w-full mx-auto flex justify-between flex-1 overflow-y-auto">
          {children}
        </main>
        <Footer />
        <Background />
      </body>
    </html>
  )
}
