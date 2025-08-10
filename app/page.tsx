import { client } from "@/libs/client"
import Image from "next/image"

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
    <div>
      <ul className="flex flex-col gap-4">
        {data.contents.map((blog: Blog) => {
          return (
            <li key={blog.id}>
              {blog.eyecatch && (
                <Image
                  src={blog.eyecatch.url}
                  alt=""
                  width={blog.eyecatch.width}
                  height={blog.eyecatch.height}
                />
              )}{" "}
              {blog.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
