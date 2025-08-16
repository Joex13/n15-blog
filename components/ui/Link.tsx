"use client"

import clsx from "clsx"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import type { LinkProps } from "next/link"
import type { ReactNode } from "react"

type Props = LinkProps & {
  children: ReactNode
  className?: string
}

export default function Link({ href, children, className, ...props }: Props) {
  const pathname = usePathname()

  return (
    <NextLink
      href={href}
      className={clsx(
        "text-xl font-bold hover:opacity-50",
        pathname === href && "text-red-500",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
