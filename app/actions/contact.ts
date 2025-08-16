"use server"

import { contactSchema } from "@/app/types/contact"

export async function submitContactForm(
  _prevState: {
    message: string
    errors: Record<string, string[]>
    success: boolean
  },
  formData: FormData
) {
  try {
    // フォームデータの取得
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // バリデーション
    const validationResult = contactSchema.safeParse(rawData)

    if (!validationResult.success) {
      const errors: Record<string, string[]> = {}

      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as string
        if (!errors[field]) {
          errors[field] = []
        }
        errors[field].push(issue.message)
      })

      return {
        message: "入力内容にエラーがあります",
        errors,
        success: false,
      }
    }

    const validatedData = validationResult.data

    // ここで実際の処理を実装
    // 例: データベースへの保存、メール送信、Slack通知など

    // デモ用のログ出力
    console.log("お問い合わせを受信しました:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // 成功レスポンス
    return {
      message:
        "お問い合わせを受け付けました。内容を確認次第、ご連絡いたします。",
      errors: {},
      success: true,
    }
  } catch (error) {
    console.error("お問い合わせ処理エラー:", error)

    return {
      message:
        "サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。",
      errors: {},
      success: false,
    }
  }
}
