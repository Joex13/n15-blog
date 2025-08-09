import Link from "next/link"

export const Header = () => {
  return (
    <header className="container mx-auto flex max-w-5xl justify-between">
      <Link href="/" className="text-2xl font-bold">
        Next.js15 Blog
      </Link>
      <div className="flex items-center">
        <nav className="hidden md:block">
          <Link href="/about" className="text-xl font-bold">
            About
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
          >
            <div className="w-8 h-1 bg-white rounded-sm transition-all duration-300 origin-left" />
            <div className="w-8 h-1 bg-white rounded-sm transition-all duration-300 origin-left" />
            <div className="w-8 h-1 bg-white rounded-sm transition-all duration-300 origin-left" />
          </button>
        </div>
      </div>
    </header>
  )
}
