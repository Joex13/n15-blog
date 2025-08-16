import Link from "@/components/ui/Link"

export default function Page() {
  return (
    <div className="text-center w-full my-auto">
      <h1 className="text-5xl font-bold m-auto">WELCOME</h1>
      <Link href="/blogs" className="text-red-500">
        JUMP TO BLOG
      </Link>
    </div>
  )
}
