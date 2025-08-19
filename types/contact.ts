import { z } from "zod"

// フォームデータのスキーマ定義
export const contactSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.email("正しいメールアドレスの形式で入力してください"),
  subject: z.string().min(1, "件名は必須です"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
})

export type ContactFormData = z.infer<typeof contactSchema>

// 初期状態
export const initialState = {
  message: "",
  errors: {} as Record<string, string[]>,
  success: false,
}
