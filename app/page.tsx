import { client } from "@/libs/client"

export default async function Home() {
  const data = await client.get({
    endpoint: "blogs",
  })

  return (
    <div>
      <ul>
        {data.contents.map((blog: any) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}
