import { useEffect } from 'react'

export default function SparkleTrail() {
  useEffect(() => {
    const colors = ['#e8792b', '#f4a24c', '#558632', '#fdfaf3']
    let lastTime = 0

    function spawn(x, y) {
      const s = document.createElement('span')
      s.className = 'sparkle'
      const size = 6 + Math.random() * 8
      s.style.left = x + 'px'
      s.style.top = y + 'px'
      s.style.width = size + 'px'
      s.style.height = size + 'px'
      s.style.background = colors[(Math.random() * colors.length) | 0]
      s.style.setProperty('--dx', (Math.random() * 20 - 10).toFixed(1) + 'px')
      s.style.setProperty('--dy', (10 + Math.random() * 16).toFixed(1) + 'px')
      document.body.appendChild(s)
      s.addEventListener('animationend', () => s.remove())
    }

    function onMove(e) {
      const now = performance.now()
      if (now - lastTime < 40) return // throttle
      lastTime = now
      spawn(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}