import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    const mouse = { x: -1000, y: -1000 }

    const colors = ['#00fff2', '#b829ff', '#ff2d7a']
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 35 : 70
    const connectionDistance = isMobile ? 120 : 180

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, createParticle)
    }

    const drawParticle = (p: Particle) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.opacity
      ctx.fill()
      ctx.globalAlpha = 1
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `#00fff2`
            ctx.globalAlpha = opacity
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    const updateParticle = (p: Particle) => {
      // Mouse interaction
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 200) {
        const force = (200 - dist) / 200 * 0.02
        p.vx -= dx * force
        p.vy -= dy * force
      }

      p.x += p.vx
      p.y += p.vy

      // Bounce off edges with damping
      if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8
      if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8

      // Keep in bounds
      p.x = Math.max(0, Math.min(canvas.width, p.x))
      p.y = Math.max(0, Math.min(canvas.height, p.y))

      // Gentle velocity decay
      p.vx *= 0.999
      p.vy *= 0.999
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawConnections()
      particles.forEach(p => {
        updateParticle(p)
        drawParticle(p)
      })
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
