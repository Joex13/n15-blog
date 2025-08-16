import ContactForm from "@/app/contact/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
            内容を確認次第、担当者よりご連絡いたします。
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
