import NextLink from "next/link"
import NavMenu from "@/components/layout/Nav"

export default function Header() {
  return (
    <header className="mx-auto flex justify-between w-full">
      <NextLink href="/" className="text-2xl font-bold">
        N15
      </NextLink>
      <div className="flex items-center">
        <NavMenu />
      </div>
    </header>
  )
}
