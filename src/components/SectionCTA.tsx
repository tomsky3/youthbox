import { Sparkles, ArrowRight, Heart } from 'lucide-react'
import qrcodeImg from '/qrcode-group.jpg'

export default function SectionCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 via-dark-900 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main CTA */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 mb-8">
            <Sparkles size={14} className="text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">Let&apos;s Build</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron leading-tight mb-6">
            今天结束前，做出
            <br />
            <span className="gradient-text">属于你的第一个项目</span>
          </h2>

          <p className="text-txt-secondary text-lg mb-10 max-w-xl mx-auto">
            不要等准备好了才开始——最好的开始就是现在。
            打开一个 Vibe 工具，输入你的第一个 Prompt。
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cases"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00fff2, #b829ff)',
                boxShadow: '0 0 30px rgba(0, 255, 242, 0.2)',
              }}
            >
              <span>查看案例库</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass-card hover:border-neon-cyan/20 transition-all"
            >
              选择工具 →
            </a>
          </div>
        </div>

        {/* QR Code - WeChat Group */}
        <div className="reveal mt-16 pt-12 border-t border-white/5" style={{ animationDelay: '0.15s' }}>
          <div className="flex flex-col items-center gap-4">
            {/* QR Code Image */}
            <div className="w-36 h-36 rounded-2xl bg-white p-2 shadow-lg shadow-neon-cyan/10">
              <img
                src={qrcodeImg}
                alt="YouthBox 活动群二维码"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <p className="text-sm text-txt-secondary">
              扫码加入 YouthBox 活动群 · 获取资源链接 &amp; 课后答疑
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal mt-16 pt-8 border-t border-white/5" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-txt-secondary">
            <div className="flex items-center gap-1.5">
              Made with <Heart size={12} className="text-neon-pink" /> by VibeCoding
            </div>
            <div className="font-mono tracking-wider opacity-50">
              YOUTHBOX · AI CREATION DAY · 2026.05.31
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
