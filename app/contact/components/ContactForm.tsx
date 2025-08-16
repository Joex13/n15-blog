"use client"

import { useActionState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { initialState } from "@/app/types/contact"

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        お問い合わせ
      </h2>

      {/* 成功メッセージ */}
      {state.success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {state.message}
        </div>
      )}

      {/* エラーメッセージ */}
      {!state.success && state.message && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              state.errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="山田太郎"
          />
          {state.errors.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              state.errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="example@email.com"
          />
          {state.errors.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            件名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              state.errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="お問い合わせの件名"
          />
          {state.errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.subject[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            メッセージ <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              state.errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="お問い合わせの詳細をご記入ください（10文字以上）"
          />
          {state.errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "送信中..." : "送信する"}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>お急ぎの場合は、以下の方法でもお気軽にお問い合わせください。</p>
        <div className="mt-4 space-y-2">
          <p>📧 Email: contact@example.com</p>
          <p>📱 電話: 03-1234-5678</p>
          <p>🕒 営業時間: 平日 9:00-18:00</p>
        </div>
      </div>
    </div>
  )
}
