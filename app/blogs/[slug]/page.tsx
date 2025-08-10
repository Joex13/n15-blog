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

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data: Blog = await client.get({
    endpoint: "blogs",
    contentId: slug,
  })

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {data.eyecatch && (
        <Image
          src={data.eyecatch.url}
          alt={data.title}
          width={data.eyecatch.width}
          height={data.eyecatch.height}
          className="w-full h-auto mb-4"
        />
      )}
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
        className="prose prose-lg max-w-none"
      />
      <Link href="/" className="text-blue-500 hover:underline mt-8 block">
        TOPページへ戻る
      </Link>
    </div>
  )
}
