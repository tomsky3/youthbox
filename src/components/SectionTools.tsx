import { useRef } from 'react'
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react'

export interface Tool {
  name: string
  logo: string
  tagline: string
  tags: string[]
  color: string
  url?: string
}

const tools: Tool[] = [
  {
    name: 'WorkBuddy',
    logo: '/logos/workbuddy.svg',
    tagline: '全场景 AI 编程助手，内置金融数据、文档生成等插件生态',
    tags: ['全能型', '中文友好', '插件丰富'],
    color: '#00fff2',
  },
  {
    name: 'Trae',
    logo: '/logos/trae.png',
    tagline: '字节跳动出品，深度集成 AI 的下一代 IDE',
    tags: ['IDE', '国产', '免费'],
    color: '#7c3aed',
  },
  {
    name: 'Claude Code',
    logo: '/logos/claude.svg',
    tagline: 'Anthropic 出品，终端级 AI 编程 Agent',
    tags: ['Agent', 'Terminal', '长上下文'],
    color: '#d97706',
  },
  {
    name: 'Codex / ChatGPT',
    logo: '/logos/openai.svg',
    tagline: 'OpenAI 旗舰，通用对话式编程助手',
    tags: ['通用', 'GPT-4o', '多模态'],
    color: '#10a37f',
  },
  {
    name: 'Cursor',
    logo: '/logos/cursor.png',
    tagline: 'AI-First 代码编辑器，Tab 补全 + 聊天双模式',
    tags: ['编辑器', '补全', '协作'],
    color: '#6366f1',
  },
  {
    name: 'v0 by Vercel',
    logo: '/logos/v0.svg',
    tagline: '用自然语言生成 React/Tailwind UI 组件',
    tags: ['UI生成', 'Shadcn', '快速原型'],
    color: '#8b5cf6',
  },
  {
    name: 'Bolt.new',
    logo: '/logos/bolt.svg',
    tagline: 'StackBlitz 出品，浏览器内全栈应用即时运行',
    tags: ['浏览器', '全栈', '零配置'],
    color: '#ffd93d',
  },
  {
    name: 'Windsurf',
    logo: '/logos/windsurf.svg',
    tagline: 'Codeium 出品，AI 驱动的流式编程体验',
    tags: ['流式', 'IDE', '智能感知'],
    color: '#0ea5e9',
  },
]

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <div
      className="group flex-shrink-0 w-[260px] sm:w-[280px] rounded-2xl glass-card overflow-hidden cursor-pointer relative"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }}
      />

      <div className="p-5">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-white"
            style={{
              border: `1px solid ${tool.color}30`,
            }}
          >
            {/* Real logo image */}
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-full h-full object-contain p-2"
              style={{ filter: 'none' }}
            />
          </div>
          <div>
            <h3 className="font-bold text-white text-base group-hover:text-neon-cyan transition-colors">
              {tool.name}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm text-txt-secondary leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
          {tool.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full font-medium"
              style={{
                background: `${tool.color}15`,
                color: tool.color,
                borderColor: `${tool.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-2xl"
        style={{
          boxShadow: `inset 0 0 30px ${tool.color}08, 0 0 20px ${tool.color}10`,
        }}
      />
    </div>
  )
}

export default function SectionTools() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = dir === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section id="tools" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="reveal mb-4">
          <span className="text-xs font-mono tracking-widest text-neon-purple/70 uppercase">02 — Ecosystem</span>
        </div>

        {/* Title */}
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3">
              Vibe<span className="gradient-text">工具生态</span>
            </h2>
            <p className="text-txt-secondary max-w-lg">
              从 IDE 到浏览器，从对话到 Agent — 选择适合你的 VibeCoding 工具
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="hidden sm:flex gap-2 ml-4">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-neon-cyan/30 transition-colors cursor-pointer">
              <ChevronLeft size={18} className="text-txt-secondary" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-neon-cyan/30 transition-colors cursor-pointer">
              <ChevronRight size={18} className="text-txt-secondary" />
            </button>
          </div>
        </div>

        {/* Scrollable Tools Container */}
        <div
          ref={scrollContainerRef}
          className="reveal flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {tools.map((tool, i) => (
            <div key={tool.name} className="snap-start relative">
              <ToolCard tool={tool} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="reveal mt-4 flex items-center gap-2 text-txt-secondary/50 text-xs" style={{ animationDelay: '0.2s' }}>
          <Globe size={14} />
          <span>左右滑动查看更多工具 · 点击了解详情</span>
        </div>
      </div>
    </section>
  )
}

export type { Tool }
