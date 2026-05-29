import { ChevronDown, Zap } from 'lucide-react'

export default function SectionHero() {
  const scrollToNext = () => {
    document.getElementById('what-is-vc')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,242,0.06)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,41,255,0.05)_0%,_transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8 animate-fade-in-up">
          <Zap size={14} className="text-neon-cyan" />
          <span className="text-sm font-medium text-neon-cyan tracking-wide">YouthBox · 2026.05.31</span>
        </div>

        {/* Slogan - strikethrough transformation */}
        <div className="animate-fade-in-up mb-6" style={{ animationDelay: '0.1s' }}>
          <p className="text-base sm:text-lg text-txt-secondary/70 font-light leading-relaxed">
            <span className="line-through text-txt-secondary/40 decoration-red-500/60 decoration-2">
              我不能、我不会、我要学
            </span>
            {' → '}
            <span className="text-neon-cyan font-medium">我想要什么</span>
          </p>
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-orbitron font-black leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="gradient-text">与 AI 创造的</span>
          <br />
          <span className="gradient-text">一天</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-txt-secondary max-w-2xl mx-auto mb-4 animate-fade-in-up font-light"
          style={{ animationDelay: '0.3s' }}
        >
          VibeCoding 入门实战 · 零基础到做出你的第一个项目
        </p>

        {/* Tag line */}
        <p
          className="text-base text-txt-secondary/60 max-w-xl mx-auto mb-12 animate-fade-in-up font-mono text-sm"
          style={{ animationDelay: '0.45s' }}
        >
          <span className="text-neon-purple">&gt;</span> 你会说话，就会写代码{' '}
          <span className="typing-cursor" />
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '10min', label: '上手入门' },
            { value: '4+', label: '实操案例' },
            { value: '0', label: '代码基础' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold font-orbitron neon-text-cyan">{stat.value}</div>
              <div className="text-xs sm:text-sm text-txt-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce-slow text-txt-secondary hover:text-neon-cyan transition-colors cursor-pointer"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  )
}
