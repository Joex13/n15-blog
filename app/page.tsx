import { client } from "@/libs/client"
import Image from "next/image"
import Link from "next/link"

export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: {
    url: string
    height: number
    width: number
  }
  category?: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
}

export type Data = {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}

export default async function Home() {
  const data: Data = await client.get({
    endpoint: "blogs",
  })

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
      {data.contents.map((blog: Blog) => {
        return (
          <li key={blog.id} className="flex flex-col gap-2 hover:opacity-30">
            {blog.eyecatch && (
              <Link href={`/blogs/${blog.id}`}>
                <Image
                  src={blog.eyecatch.url}
                  alt=""
                  width={blog.eyecatch.width}
                  height={blog.eyecatch.height}
                  className="w-full h-auto"
                />
              </Link>
            )}
            <Link href={`/blogs/${blog.id}`} className="text-lg font-bold">
              {blog.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
