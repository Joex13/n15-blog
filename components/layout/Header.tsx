import NextLink from "next/link"
import { Link } from "@/components/ui/Link"

export const Header = () => {
  return (
    <header className="mx-auto flex justify-between w-full">
      <NextLink href="/" className="text-2xl font-bold">
        N15
      </NextLink>
      <div className="flex items-center">
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/404">404</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
          >
            <div className="w-8 h-0.5 bg-white rounded-sm transition-all duration-300 origin-left" />
            <div className="w-8 h-0.5 bg-white rounded-sm transition-all duration-300 origin-left" />
            <div className="w-8 h-0.5 bg-white rounded-sm transition-all duration-300 origin-left" />
          </button>
        </div>
      </div>
    </header>
  )
}
