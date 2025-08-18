"use client"

import Link from "@/components/ui/Link"
import { useState } from "react"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={`relative md:hidden`}>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        >
          <div
            className={`w-8 h-0.5 bg-white rounded-sm transition-all duration-300 origin-left ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-8 h-0.5 bg-white rounded-sm transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-8 h-0.5 bg-white rounded-sm transition-all duration-300 origin-left ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
            <nav>
              <ul className="flex flex-col gap-2 p-4">
                <li>
                  <Link href="/about" className="text-black hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-black hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-2">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
