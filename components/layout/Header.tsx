import Link from "next/link"

export const Header = () => {
	return (
		<header className="container mx-auto flex max-w-5xl justify-between px-2 py-5">
			<Link href="/" className="text-2xl font-bold">
				Next.js15 Blog
			</Link>
			<div>
				<Link href="/about" className="text-xl font-bold">
					About
				</Link>
			</div>
		</header>
	)
}
