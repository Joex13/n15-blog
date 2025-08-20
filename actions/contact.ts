"use server"

import nodemailer from "nodemailer"
import { contactSchema } from "@/types/contact"

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

    try {
      // nodemailerで送る
      const transporter: nodemailer.Transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.GMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        },
      })

      await transporter.verify()
      const mailOptions: nodemailer.SendMailOptions = {
        from: validatedData.email,
        to: process.env.GMAIL_USER,
        subject: `お問い合わせ（n15-blog）: ${validatedData.subject}`,
        text: `n15-blogより下記のお問い合わせを受け付けました。\nお名前：${validatedData.name}\nメールアドレス：${validatedData.email}\n\nお問い合わせ内容：\n${validatedData.message}`,
      }

      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.log("nodemailerの設定中にエラーが発生しました。", error)
      throw new Error("nodemailerの設定中にエラーが発生しました。")
    }

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
