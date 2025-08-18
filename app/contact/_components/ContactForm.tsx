"use client"

import { useActionState } from "react"
import { submitContactForm } from "@/actions/contact"
import { initialState } from "@/types/contact"

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )

  return (
    <div className="mx-auto p-6 bg-black/90 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        CONTACT
      </h2>

      {/* 成功メッセージ */}
      {state.success && (
        <div className="mb-6 p-4 bg-green-900 border border-green-600 text-green-200 rounded">
          {state.message}
        </div>
      )}

      {/* エラーメッセージ */}
      {!state.success && state.message && (
        <div className="mb-6 p-4 bg-red-900 border border-red-600 text-red-200 rounded">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-black/30 text-white placeholder-gray-400 ${
              state.errors.name ? "border-red-400" : "border-gray-500/50"
            }`}
            placeholder="山田太郎"
          />
          {state.errors.name && (
            <p className="mt-1 text-sm text-red-400">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-black/30 text-white placeholder-gray-400 ${
              state.errors.email ? "border-red-400" : "border-gray-500/50"
            }`}
            placeholder="example@email.com"
          />
          {state.errors.email && (
            <p className="mt-1 text-sm text-red-400">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            件名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-black/30 text-white placeholder-gray-400 ${
              state.errors.subject ? "border-red-400" : "border-gray-500/50"
            }`}
            placeholder="お問い合わせの件名"
          />
          {state.errors.subject && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors.subject[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            メッセージ <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={10}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical bg-black/30 text-white placeholder-gray-400 ${
              state.errors.message ? "border-red-400" : "border-gray-500/50"
            }`}
            placeholder="お問い合わせの詳細をご記入ください（10文字以上）"
          />
          {state.errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "送信中..." : "送信する"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-400">返答しません。</p>
    </div>
  )
}
