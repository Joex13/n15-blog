"use client"

import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function Background() {
  useEffect(() => {
    // body に固定マウントする div を作る
    let container = document.getElementById("particles-root")
    if (!container) {
      container = document.createElement("div")
      container.id = "particles-root"
      container.style.position = "fixed"
      container.style.top = "0"
      container.style.left = "0"
      container.style.width = "100%"
      container.style.height = "100%"
      container.style.zIndex = "-10"
      document.body.appendChild(container)
    }

    // React 18 createRoot で固定マウント
    const root = createRoot(container)

    const options = {
      background: { color: "#000" },
      particles: {
        number: { value: 50 },
        color: { value: "#fff" },
        links: { enable: true, color: "#fff" },
        move: { enable: true, speed: 2 },
      },
    }

    // tParticles エンジン初期化
    initParticlesEngine(loadSlim)

    // ここで一度だけ描画。クリーンアップはしない
    root.render(<Particles options={options} />)
  }, [])

  return null // layout 内では何も描画しない
}
