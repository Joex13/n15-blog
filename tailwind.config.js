/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // クラス制御のダークモード
  theme: {
    extend: {
      typography: () => ({
        dark: {
          css: {
            /* ライトモード用カラーは無視、暗めの配色に変更 */
            "--tw-prose-body": "var(--color-blue-200)",
            "--tw-prose-headings": "var(--color-white)",
            "--tw-prose-lead": "var(--color-blue-300)",
            "--tw-prose-links": "var(--color-white)",
            "--tw-prose-bold": "var(--color-white)",
            "--tw-prose-counters": "var(--color-blue-400)",
            "--tw-prose-bullets": "var(--color-blue-500)",
            "--tw-prose-hr": "var(--color-blue-700)",
            "--tw-prose-quotes": "var(--color-blue-100)",
            "--tw-prose-quote-borders": "var(--color-blue-600)",
            "--tw-prose-captions": "var(--color-blue-400)",
            "--tw-prose-code": "var(--color-white)",
            "--tw-prose-pre-code": "var(--color-blue-300)",
            "--tw-prose-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-th-borders": "var(--color-blue-600)",
            "--tw-prose-td-borders": "var(--color-blue-700)",

            /* invert 系も残して明暗を逆に */
            "--tw-prose-invert-body": "var(--color-blue-200)",
            "--tw-prose-invert-headings": "var(--color-white)",
            "--tw-prose-invert-lead": "var(--color-blue-300)",
            "--tw-prose-invert-links": "var(--color-white)",
            "--tw-prose-invert-bold": "var(--color-white)",
            "--tw-prose-invert-counters": "var(--color-blue-400)",
            "--tw-prose-invert-bullets": "var(--color-blue-600)",
            "--tw-prose-invert-hr": "var(--color-blue-700)",
            "--tw-prose-invert-quotes": "var(--color-blue-100)",
            "--tw-prose-invert-quote-borders": "var(--color-blue-700)",
            "--tw-prose-invert-captions": "var(--color-blue-400)",
            "--tw-prose-invert-code": "var(--color-white)",
            "--tw-prose-invert-pre-code": "var(--color-blue-300)",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": "var(--color-blue-600)",
            "--tw-prose-invert-td-borders": "var(--color-blue-700)",
          },
        },
      }),
    },
  },
}
