import { useState, useEffect } from 'react'
import {
  CheckCircle2, XCircle,
  ArrowRight, Copy, Check,
  Rocket, PenTool, MessageSquare, Globe2
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Rocket,
    title: '选择工具',
    desc: '新手推荐从对话式工具开始，无需安装任何东西',
    tips: [
      { good: true, label: 'ChatGPT / Claude / WorkBuddy — 网页打开就能用' },
      { good: true, label: 'Cursor / Trae — 想要完整编辑器体验时升级' },
      { good: false, label: '一上来就装 VS Code + 一堆插件 — 太重了' },
    ],
  },
  {
    num: '02',
    icon: PenTool,
    title: '写好 Prompt',
    desc: '好的 Prompt = 清晰的需求 + 具体的约束 + 风格参考',
    examples: [
      {
        bad: '做个网页',
        good: '做一个个人作品集网站，暗色科技风(Cyberpunk)，带霓虹光效，包含Hero区+项目卡片+技能条，响应式设计，用Tailwind CSS实现',
      },
      {
        bad: '写个贪吃蛇',
        good: '用 HTML5 Canvas 做一个贪吃蛇游戏。方向键控制，吃食物变长加分，撞墙或自身Game Over。暗色背景+霓虹绿蛇身，显示当前分数和历史最高分。',
      },
    ],
  },
  {
    num: '03',
    icon: MessageSquare,
    title: '迭代优化',
    desc: '不要一次说完——像和设计师沟通一样，逐步调整',
    dialog: [
      { role: 'user', text: '标题字体再大一点' },
      { role: 'ai', text: '已将主标题字号从 48px 调整到 64px，同时增加了字间距以提升可读性。' },
      { role: 'user', text: '背景加个粒子效果' },
      { role: 'ai', text: '已添加 Canvas 粒子背景动画，包含鼠标跟随交互效果。' },
      { role: 'user', text: '按钮加个霓虹发光边框' },
      { role: 'ai', text: '已完成！按钮现在带有动态霓虹边框脉冲效果。' },
    ],
  },
  {
    num: '04',
    icon: Globe2,
    title: '部署上线',
    desc: '一键发布到公网，分享给全世界看到你的作品',
    platforms: [
      { name: 'GitHub Pages', desc: '免费，适合静态站点', color: '#00fff2' },
      { name: 'Vercel', desc: '免费，自动部署Git仓库', color: '#b829ff' },
      { name: 'Netlify', desc: '免费，拖拽即可部署', color: '#ff2d7a' },
    ],
  },
]

function StepCard({ step }: { step: typeof steps[0] }) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const copyText = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  return (
    <div className="relative">
      {/* Step number & connector */}
      <div className="flex items-start gap-4 mb-6">
        <div className="shrink-0 relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/20 flex items-center justify-center font-orbitron font-bold text-sm text-neon-cyan">
            {step.num}
          </div>
        </div>
        <div className="pt-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{step.title}</h3>
          <p className="text-sm text-txt-secondary">{step.desc}</p>
        </div>
      </div>

      {/* Step-specific content */}
      <div className="ml-16 space-y-3">
        {/* Tips list for step 1 */}
        {'tips' in step && step.tips && (
          <div className="space-y-2">
            {step.tips.map((tip, i) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 p-3 rounded-lg ${
                  tip.good ? 'bg-neon-green/5 border border-neon-green/15' : 'bg-red-500/5 border border-red-500/15'
                }`}
              >
                {tip.good ? (
                  <CheckCircle2 size={16} className="text-neon-green shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                )}
                <span className="text-sm">{tip.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Good vs Bad for step 2 */}
        {'examples' in step && step.examples && (
          <div className="space-y-3">
            {step.examples.map((ex, i) => (
              <div key={i} className="space-y-1.5">
                <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10 group hover:border-red-500/20 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle size={13} className="text-red-400" />
                    <span className="text-[11px] font-medium text-red-400">Bad</span>
                  </div>
                  <code className="text-sm text-txt-secondary line-through opacity-60">{ex.bad}</code>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRight size={14} className="text-txt-secondary shrink-0" />
                  <button
                    onClick={() => copyText(ex.good, i)}
                    className="flex-1 p-3 rounded-lg bg-neon-green/5 border border-neon-green/15 hover:border-neon-green/30 transition-colors cursor-pointer text-left"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-neon-green" />
                        <span className="text-[11px] font-medium text-neon-green">Good</span>
                      </div>
                      {copiedIdx === i ? (
                        <Check size={13} className="text-neon-green" />
                      ) : (
                        <Copy size={12} className="text-txt-secondary" />
                      )}
                    </div>
                    <code className="text-sm text-white leading-relaxed">{ex.good}</code>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dialog for step 3 */}
        {'dialog' in step && step.dialog && (
          <div className="space-y-2 max-w-md">
            {step.dialog.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-neon-cyan/10 text-white rounded-tr-sm border border-neon-cyan/20'
                      : 'bg-dark-700 text-txt-secondary rounded-tl-sm border border-dark-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Platforms for step 4 */}
        {'platforms' in step && step.platforms && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
            {step.platforms.map((pf) => (
              <div key={pf.name} className="glass-card rounded-xl p-4 text-center group">
                <div
                  className="w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: `${pf.color}15` }}
                >
                  <Globe2 size={18} style={{ color: pf.color }} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{pf.name}</h4>
                <p className="text-xs text-txt-secondary">{pf.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SectionGuide() {
  return (
    <section id="guide" className="relative py-24 md:py-32 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/3 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="reveal mb-4">
          <span className="text-xs font-mono tracking-widest text-neon-green/70 uppercase">04 — Quick Start</span>
        </div>

        {/* Title */}
        <div className="reveal mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3">
            快速<span className="gradient-text">上手指南</span>
          </h2>
          <p className="text-txt-secondary text-lg">
            4步从零到上线，每个环节都有最佳实践和踩坑提示
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="reveal space-y-12" style={{ animationDelay: '0.1s' }}>
          {steps.map((step, i) => (
            <div key={step.num}>
              <StepCard step={step} />
              {i < steps.length - 1 && (
                <div className="ml-6 mt-8 w-0.5 h-8 bg-gradient-to-b from-neon-cyan/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
