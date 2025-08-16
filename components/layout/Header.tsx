import Link from "next/link"

export const Header = () => {
  return (
    <header className="mx-auto flex justify-between w-full">
      <Link href="/" className="text-2xl font-bold">
        N15
      </Link>
      <div className="flex items-center">
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            <li>
              <Link href="/about" className="text-xl font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-xl font-bold">
                Contact
              </Link>
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
