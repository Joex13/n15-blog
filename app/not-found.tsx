import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center w-full my-auto">
      <h1 className="text-2xl mt-10 font-bold">ページが見つかりませんでした</h1>
      <Link href="/">TOPページに戻る</Link>
    </div>
  )
}
