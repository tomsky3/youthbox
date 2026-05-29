import { useState, useEffect } from 'react'
import { Code2, MessageCircle, Sparkles, ArrowRight, Terminal } from 'lucide-react'

function TypingDemo() {
  const [phase, setPhase] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const phases = [
    { text: '> 帮我做一个个人主页，暗色科技风，带霓虹光效', type: 'user', delay: 60 },
    { text: '', type: 'divider', delay: 400 },
    { text: '好的！正在为你生成一个 Cyberpunk Neon 风格的个人作品集页面...', type: 'ai', delay: 30 },
    { text: '', type: 'code-start', delay: 300 },
    { text: '// index.html - Cyberpunk Portfolio', type: 'code', delay: 25 },
    { text: '<section class="hero">', type: 'code', delay: 20 },
    { text: '  <h1 class="gradient-text">My Portfolio</h1>', type: 'code', delay: 15 },
    { text: '  <p class="neon-glow">VibeCoding is Magic</p>', type: 'code', delay: 15 },
    { text: '</section>', type: 'code', delay: 10 },
    { text: '', type: 'done', delay: 500 },
  ]

  useEffect(() => {
    let charIndex = 0
    let timeoutId: ReturnType<typeof setTimeout>

    if (phase >= phases.length) return

    const currentPhase = phases[phase]

    if (currentPhase.type === 'divider' || currentPhase.type === 'code-start' || currentPhase.type === 'done') {
      timeoutId = setTimeout(() => {
        setPhase(p => p + 1)
        setDisplayText('')
        charIndex = 0
      }, currentPhase.delay)
      return
    }

    const typeChar = () => {
      if (charIndex <= currentPhase.text.length) {
        setDisplayText(currentPhase.text.slice(0, charIndex))
        charIndex++
        timeoutId = setTimeout(typeChar, currentPhase.delay + Math.random() * 20)
      } else {
        timeoutId = setTimeout(() => {
          setPhase(p => p + 1)
          setDisplayText('')
          charIndex = 0
        }, currentPhase.type === 'user' ? 600 : 200)
      }
    }

    timeoutId = setTimeout(typeChar, 100)

    return () => clearTimeout(timeoutId)
  }, [phase])

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const currentType = phase < phases.length ? phases[phase].type : 'done'

  return (
    <div className="rounded-xl overflow-hidden border border-dark-600 bg-dark-900/80 shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-600">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-txt-secondary font-mono ml-2">vibecoding-demo</span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 min-h-[260px] font-mono text-sm leading-relaxed">
        {(currentType === 'user' || (phase > 0 && phases[phase - 1]?.type === 'user')) && (
          <div className="mb-3 flex gap-2">
            <MessageCircle size={16} className="text-neon-cyan mt-0.5 shrink-0" />
            <div className="text-txt-primary">
              {phases[phase - 1]?.type === 'user'
                ? phases[phase - 1].text
                : displayText}
              {currentType === 'user' && cursorVisible && <span className="text-neon-cyan">|</span>}
            </div>
          </div>
        )}

        {(currentType === 'ai' || (phase > 0 && ['ai', 'code', 'code-start'].includes(currentType))) && currentType !== 'code' && currentType !== 'code-start' && (
          <div className="mb-3 flex gap-2">
            <Sparkles size={16} className="text-neon-purple mt-0.5 shrink-0" />
            <div className={currentType.startsWith('code') ? '' : 'text-txt-secondary'}>
              {currentType === 'ai' ? displayText : ''}
              {currentType === 'ai' && cursorVisible && <span className="text-neon-purple">|</span>}
              {phase > 0 && phases[phase - 1]?.type === 'ai' && (
                <span>{phases[phase - 1].text}</span>
              )}
            </div>
          </div>
        )}

        {['code', 'code-start'].includes(currentType) ||
        (phase > 0 && phases[phase - 1]?.type === 'code')
          ? (
            <div className="bg-black/40 rounded-lg p-4 border border-neon-cyan/10 overflow-x-auto">
              <Terminal size={12} className="inline-block mr-2 text-neon-green opacity-50" />
              {phases.filter(p => p.type === 'code').slice(0, phase >= phases.length ? undefined : phase).map((p, i) => (
                <div key={i} className="text-neon-green/90 whitespace-pre">{p.text}</div>
              ))}
              {(currentType === 'code' || currentType === 'code-start') && (
                <span className="text-neon-green">{displayText}{cursorVisible && '|'}</span>
              )}
            </div>
          )
          : null
        }

        {phase >= phases.length && (
          <div className="mt-2 flex items-center gap-2 text-neon-green animate-pulse">
            <span>✓</span> Done! Your site is ready in seconds.
          </div>
        )}
      </div>
    </div>
  )
}

export default function SectionWhatIsVC() {
  const cards = [
    { icon: MessageCircle, title: '你说，AI 做', desc: '用日常语言描述你想要的东西，AI 理解并生成代码', colorClass: 'neon-cyan' },
    { icon: Code2, title: '迭代对话', desc: '"改个颜色""加个按钮""左边对齐" — 像聊天一样优化产品', colorClass: 'neon-purple' },
    { icon: Sparkles, title: '即时预览', desc: '每句话都能看到效果，所见即所得的创造体验', colorClass: 'neon-pink' },
  ]

  return (
    <section id="what-is-vc" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="reveal mb-4">
          <span className="text-xs font-mono tracking-widest text-neon-cyan/70 uppercase">01 — Concept</span>
        </div>

        {/* Title */}
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-6 gradient-text">
          What is VibeCoding?
        </h2>
        <p className="reveal text-txt-secondary text-lg max-w-2xl mb-16" style={{ animationDelay: '0.1s' }}>
          用自然语言驱动 AI 写代码。你不需要会编程——<span className="text-white font-medium">你需要的是想法</span>。
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Definition Cards */}
          <div className="space-y-5 reveal">
            {cards.map((card, i) => {
              const Icon = card.icon
              const isCyan = card.colorClass === 'neon-cyan'
              const isPurple = card.colorClass === 'neon-purple'
              const isPink = card.colorClass === 'neon-pink'
              return (
                <div key={i} className="glass-card rounded-xl p-5 flex gap-4 group">
                  <div className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                    isCyan ? 'bg-neon-cyan/10 group-hover:bg-neon-cyan/20' :
                    isPurple ? 'bg-neon-purple/10 group-hover:bg-neon-purple/20' :
                    'bg-neon-pink/10 group-hover:bg-neon-pink/20'
                  }`}>
                    <Icon size={22} className={
                      isCyan ? 'text-neon-cyan' :
                      isPurple ? 'text-neon-purple' :
                      'text-neon-pink'
                    } />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-txt-secondary leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Typing Demo */}
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="sticky top-28">
              <TypingDemo />

              {/* Tag below demo */}
              <div className="mt-4 flex items-center justify-between px-1">
                <span className="text-xs text-txt-secondary font-mono">
                  <ArrowRight size={12} className="inline mr-1" />
                  实时演示：从一句话到可运行代码
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green font-mono">LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="reveal mt-16 text-center" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block glass-card rounded-2xl px-8 py-5">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold">
              <span className="gradient-text">你会说话</span>
              <span className="text-txt-secondary mx-3">=</span>
              <span className="text-white">就会写代码</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
