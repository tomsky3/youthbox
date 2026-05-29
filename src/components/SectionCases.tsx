import { useState } from 'react'
import {
  Globe, Gamepad, Wrench, TrendingUp,
  Clock, Star, ChevronRight, X
} from 'lucide-react'

export interface CaseItem {
  id: string
  title: string
  desc: string
  category: string
  difficulty: number
  timeEstimate: string
  prompt: string[]
  techStack: string[]
  tips?: string
  gradientFrom: string
  gradientTo: string
}

const casesData: Record<string, CaseItem[]> = {
  website: [
    {
      id: 'portfolio',
      title: '个人作品集主页',
      desc: '暗色科技风个人网站，展示你的项目、技能和社交链接，10分钟搞定',
      category: 'website', difficulty: 1, timeEstimate: '10min',
      prompt: [
        '帮我做一个个人作品集网站，暗色科技风(Cyberpunk)，带霓虹光效效果。',
        '包含：Hero区大标题、About我、Skills技能条、Projects项目卡片、Footer社交链接。',
        '用 Tailwind CSS，响应式设计，加粒子背景动画。',
      ],
      techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
      tips: '先确定要展示的3个项目，准备好图片链接后直接喂给AI',
      gradientFrom: '#06b6d4', gradientTo: '#3b82f6',
    },
    {
      id: 'landing-page',
      title: '活动落地页',
      desc: '活动宣传单页，倒计时+报名表单+嘉宾介绍，适合社团/比赛推广',
      category: 'website', difficulty: 1, timeEstimate: '15min',
      prompt: [
        '做一个活动宣传落地页，主题是"AI创意大赛"。',
        '需要：大标题Hero区、倒计时组件、活动亮点(3个卡片)、报名表单、FAQ折叠面板。',
        '风格：现代渐变，深色背景，动效丰富（滚动触发动画）。',
      ],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      tips: '把活动时间、地点、亮点文案提前整理好，直接贴给AI',
      gradientFrom: '#a855f7', gradientTo: '#ec4899',
    },
    {
      id: 'dashboard',
      title: '数据仪表盘原型',
      desc: 'Dashboard 布局 + 模拟数据图表，产品经理/分析师必备技能',
      category: 'website', difficulty: 2, timeEstimate: '20min',
      prompt: [
        '做一个数据分析仪表盘(Dashboard)原型页面。',
        '左侧侧边栏导航，顶部搜索栏+用户头像，主区域包含：统计卡片(4个KPI)、折线图趋势图、表格数据列表、最近活动时间线。',
        '使用 Recharts 库做图表。暗色主题，玻璃态卡片效果。',
      ],
      techStack: ['React', 'Recharts', 'Tailwind CSS', 'shadcn/ui'],
      tips: '先用 AI 生成 mock 数据结构，再让 AI 根据数据生成图表',
      gradientFrom: '#10b981', gradientTo: '#14b8a6',
    },
  ],
  game: [
    {
      id: 'flappy-bird',
      title: 'Flappy Bird 克隆',
      desc: '经典 Flappy Bird 游戏，30行核心逻辑，Canvas 绘制，当天可玩',
      category: 'game', difficulty: 2, timeEstimate: '30min',
      prompt: [
        '用 HTML5 Canvas 做一个 Flappy Bird 游戏克隆版。',
        '功能：小鸟按空格/点击跳跃，管道随机生成从右到左移动，碰撞检测计分，Game Over 重新开始。',
        '视觉效果：渐变天空背景、小鸟下落旋转动画、分数霓虹显示。',
        '代码简洁易懂，加上详细注释方便新手理解。',
      ],
      techStack: ['HTML5 Canvas', 'JavaScript'],
      tips: '先跑通最基础版本（一只鸟+一根管子），再逐步加特效',
      gradientFrom: '#eab308', gradientTo: '#f97316',
    },
    {
      id: 'snake',
      title: '贪吃蛇游戏',
      desc: '经典贪吃蛇，键盘控制，吃食物变长，碰壁/自身游戏结束',
      category: 'game', difficulty: 1, timeEstimate: '20min',
      prompt: [
        '用 JavaScript 做一个贪吃蛇小游戏。',
        '网格画布，蛇用方向键/WASD控制移动，吃食物变长并加分，撞墙或撞自己则 Game Over。',
        'UI：显示当前分数和历史最高分(localStorage保存)。',
        '配色：深色背景 + 霓虹绿蛇身 + 红色食物。',
      ],
      techStack: ['HTML5 Canvas', 'JavaScript'],
      tips: '让 AI 先实现核心移动逻辑，再加 UI 装饰',
      gradientFrom: '#22c55e', gradientTo: '#10b981',
    },
    {
      id: 'particle-interactive',
      title: '粒子互动特效页',
      desc: '鼠标跟随的粒子连线效果，视觉冲击力强，可做网页背景或独立作品',
      category: 'game', difficulty: 2, timeEstimate: '25min',
      prompt: [
        '做一个全屏粒子互动特效页面。',
        '鼠标移动时附近的粒子被排斥散开，粒子之间距离近时自动连线形成网络。',
        '支持点击产生爆炸波纹效果，粒子颜色在青色/紫色/粉色之间渐变循环。',
        '性能要好，用 requestAnimationFrame 优化。',
      ],
      techStack: ['HTML5 Canvas', 'JavaScript'],
      tips: '调整粒子数量找到性能和美观的平衡点，手机端减半',
      gradientFrom: '#d946ef', gradientTo: '#8b5cf6',
    },
  ],
  tool: [
    {
      id: 'json-formatter',
      title: 'JSON 格式化工具',
      desc: '粘贴乱 JSON → 一键美化输出，支持语法高亮、压缩、JSONPath查询',
      category: 'tool', difficulty: 1, timeEstimate: '15min',
      prompt: [
        '做一个 JSON 格式化在线工具页面。',
        '左侧输入框(textarea)粘贴原始JSON，右侧显示格式化后的结果(语法高亮)。',
        '按钮栏：格式化 / 压缩 / 复制 / 清空 / 树形视图切换。',
        '错误处理：JSON 解析失败时红字提示具体位置和原因。',
        '暗色主题，代码字体用 JetBrains Mono。',
      ],
      techStack: ['React', 'TypeScript'],
      tips: '可以扩展为支持 YAML/TOML 的通用格式化工具',
      gradientFrom: '#0ea5e9', gradientTo: '#06b6d4',
    },
    {
      id: 'markdown-editor',
      title: 'Markdown 编辑器预览',
      desc: '左写 Markdown 右实时预览，支持 GFM 语法，像 Typora 但更轻量',
      category: 'tool', difficulty: 2, timeEstimate: '20min',
      prompt: [
        '做一个 Markdown 实时预览编辑器。',
        '左右分屏布局，左边写 Markdown 文本，右边实时渲染预览(支持标题/粗体/斜体/代码块/表格/列表/图片)。',
        '工具栏：加粗/斜体/代码/链接/图片/引用/无序列表/有序列表快捷按钮。',
        '暗色主题，编辑器行号显示。',
      ],
      techStack: ['React', 'marked (MD解析)', 'highlight.js'],
      tips: '用 marked + highlight.js 组合实现渲染，轻量且效果好',
      gradientFrom: '#6366f1', gradientTo: '#8b5cf6',
    },
    {
      id: 'qr-generator',
      title: '二维码生成器',
      desc: '输入文本/URL 即时生成二维码，支持下载 PNG/SVG，可自定义颜色和Logo',
      category: 'tool', difficulty: 1, timeEstimate: '10min',
      prompt: [
        '做一个二维码生成器工具。',
        '输入框填写文本或URL，下方即时生成二维码预览。',
        '可选设置：前景色、背景色、尺寸大小、纠错级别(L/M/Q/H)、嵌入中心Logo。',
        '下载按钮：导出为 PNG 和 SVG 两种格式。',
        '界面简洁美观，暗色风格。',
      ],
      techStack: ['React', 'qrcode 库 (如 qrcode.react)'],
      tips: '嵌入 Logo 时注意纠错级别设为 H 才能正常扫描',
      gradientFrom: '#f43f5e', gradientTo: '#ef4444',
    },
    {
      id: 'pomodoro',
      title: '番茄钟专注计时器',
      desc: '25分钟专注 + 5分钟休息循环，带任务清单和今日统计数据',
      category: 'tool', difficulty: 1, timeEstimate: '15min',
      prompt: [
        '做一个番茄钟(Pomodoro)专注计时器应用。',
        '中央圆形进度环显示剩余时间，默认25分钟工作 + 5分钟休息循环。',
        '功能：开始/暂停/重置、切换工作/休息模式、自定义时长。',
        '右侧任务清单：添加/完成/删除今日任务。',
        '底部统计：今天完成了几个番茄钟。',
        '音效提示：计时结束播放提示音(可用 Web Audio API)。',
        '视觉：极简暗色风，进度环用霓虹色渐变。',
      ],
      techStack: ['React', 'CSS Animation', 'Web Audio API'],
      tips: '加入浏览器通知权限申请，标签页不在前台也能收到提醒',
      gradientFrom: '#ef4444', gradientTo: '#f97316',
    },
  ],
  quant: [
    {
      id: 'stock-dashboard',
      title: '实时股票行情看板',
      desc: '调用金融API获取实时行情，K线图+涨跌幅+成交量，数据真实可验证',
      category: 'quant', difficulty: 3, timeEstimate: '30min',
      prompt: [
        '做一个实时股票行情看板页面。',
        '顶部搜索框输入股票代码(如 000001.SZ)进行查询。',
        '展示内容：当前价格、涨跌额、涨跌幅(涨红跌绿)、开盘/最高/最低/昨收、成交量/额。',
        'K线图(candlestick chart)：用 Recharts 或 ECharts 绘制日K数据。',
        '数据来源：调用金融数据API获取真实行情数据。',
        '自动刷新：每5秒更新一次最新价。',
        '暗色专业交易风格，数据用等宽字体。',
      ],
      techStack: ['React', 'Recharts/ECharts', '金融API'],
      tips: '需要接入真实的行情API，可以用免费接口或内置mock数据演示',
      gradientFrom: '#dc2626', gradientTo: '#be123c',
    },
    {
      id: 'strategy-backtest',
      title: '策略回测可视化',
      desc: '简单均线交叉策略的回测结果展示，含收益曲线、最大回撤、夏普比率',
      category: 'quant', difficulty: 3, timeEstimate: '40min',
      prompt: [
        '做一个量化交易策略回测可视化页面。',
        '策略示例：双均线交叉策略(MA5上穿MA20买入，下穿卖出)。',
        '展示：策略参数配置区(短周期/长周期/标的代码)、回测结果指标卡片(总收益率/年化收益/最大回撤/夏普比率/胜率)、收益曲线图(对比基准)、买卖信号标记在K线图上。',
        '前端模拟回测计算(传入历史日线数据即可)。',
        '风格：专业金融终端风格(Factor同款暗色主题)。',
      ],
      techStack: ['React', 'Recharts', '数学计算(tulind 或自实现MA)'],
      tips: '先用历史 CSV 数据硬编码测试逻辑正确性，再对接API',
      gradientFrom: '#f59e0b', gradientTo: '#eab308',
    },
    {
      id: 'fund-compare',
      title: '基金净值对比工具',
      desc: '多只基金净值走势对比，支持筛选排序，适合理财分析场景',
      category: 'quant', difficulty: 2, timeEstimate: '25min',
      prompt: [
        '做一个基金净值对比分析工具。',
        '功能：用户输入多个基金代码(如 000001, 110011)，拉取各基金的净值历史数据。',
        '可视化：多条净值走势折线图叠加对比(不同颜色区分)、收益率柱状图、排名表格(近1月/3月/6月/1年收益率)。',
        '交互：点击图例隐藏/显示某只基金、时间范围选择(近3月/近1年/今年以来/全部)。',
        '数据：调取基金净值API获取真实数据。',
        '风格：清爽的数据可视化风格，暗色底。',
      ],
      techStack: ['React', 'Recharts', '基金API'],
      tips: '基金数据可以从天天基金等公开API获取，注意跨域问题需要后端代理',
      gradientFrom: '#84cc16', gradientTo: '#22c55e',
    },
  ],
}

const categories = [
  { key: 'website', label: '🌐 网站', icon: Globe, color: '#00fff2' },
  { key: 'game', label: '🎮 小游戏', icon: Gamepad, color: '#b829ff' },
  { key: 'tool', label: '🛠️ 工具', icon: Wrench, color: '#ff2d7a' },
  { key: 'quant', label: '📈 量化', icon: TrendingUp, color: '#00ff88' },
]

function CaseCard({ item, onClick }: { item: CaseItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group glass-card rounded-xl overflow-hidden cursor-pointer hover:border-opacity-40"
    >
      {/* Gradient header */}
      <div
        className="h-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-bold text-white text-lg leading-tight">{item.title}</h3>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5" />
      </div>

      <div className="p-4">
        <p className="text-sm text-txt-secondary leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
          {item.desc}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-txt-secondary">
            {/* Difficulty stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star key={i} size={12} className={i < item.difficulty ? 'text-neon-cyan' : 'text-dark-600'} />
              ))}
            </div>
            {/* Time */}
            <span className="flex items-center gap-1">
              <Clock size={12} /> {item.timeEstimate}
            </span>
          </div>
          <ChevronRight size={16} className="text-txt-secondary group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  )
}

function Modal({ item, onClose }: { item: CaseItem; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = () => {
    navigator.clipboard?.writeText(item.prompt.join('\n\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-end p-0 sm:p-6" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative w-full sm:max-w-xl sm:w-full max-h-[85vh] bg-dark-800 border-l border-t sm:border border-white/5 shadow-2xl overflow-y-auto animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 h-14 flex items-center justify-between px-5"
          style={{ background: `linear-gradient(135deg, ${item.gradientFrom}dd, ${item.gradientTo}dd)` }}
        >
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{item.title}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
              {item.timeEstimate}
            </span>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono text-txt-secondary uppercase tracking-wider mb-2">Description</h4>
            <p className="text-txt-primary leading-relaxed">{item.desc}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-txt-secondary uppercase tracking-wider mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-dark-700 border border-white/5 text-neon-cyan">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prompt Template */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono text-txt-secondary uppercase tracking-wider">Prompt Template</h4>
              <button onClick={copyPrompt} className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-colors cursor-pointer">
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
            <div className="code-block p-4 space-y-3">
              {item.prompt.map((line, i) => (
                <div key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className="text-neon-purple shrink-0 select-none font-mono text-xs mt-0.5">
                    {i + 1}.
                  </span>
                  <span className="text-txt-primary">{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          {item.tips && (
            <div>
              <h4 className="text-xs font-mono text-txt-secondary uppercase tracking-wider mb-2">Pro Tips 💡</h4>
              <div className="bg-neon-green/5 border border-neon-green/20 rounded-lg p-3">
                <p className="text-sm text-neon-green/80">{item.tips}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SectionCases() {
  const [activeTab, setActiveTab] = useState('website')
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null)

  const currentCases = casesData[activeTab] || []

  return (
    <section id="cases" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="reveal mb-4">
          <span className="text-xs font-mono tracking-widest text-neon-pink/70 uppercase">03 — Cases</span>
        </div>

        {/* Title */}
        <div className="reveal mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3">
            实操<span className="gradient-text">案例库</span>
          </h2>
          <p className="text-txt-secondary max-w-2xl">
            当天就能搞出来的真实项目——每个都配有可直接复用的 Prompt 模板，复制粘贴就能开始
          </p>
        </div>

        {/* Tab Bar */}
        <div className="reveal flex gap-2 mb-8 overflow-x-auto pb-2" style={{ animationDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === cat.key
                  ? 'text-white'
                  : 'text-txt-secondary hover:text-white bg-dark-700/50'
              }`}
              style={activeTab === cat.key ? {
                background: `${cat.color}15`,
                boxShadow: `0 0 20px ${cat.color}15`,
                borderBottom: `2px solid ${cat.color}`,
              } : undefined}
            >
              <span>{cat.label.split(' ')[0]}</span>
              <span>{cat.label.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal" style={{ animationDelay: '0.2s' }}>
          {currentCases.map((item) => (
            <CaseCard key={item.id} item={item} onClick={() => setSelectedCase(item)} />
          ))}
        </div>

        {/* Empty state hint */}
        {currentCases.length === 0 && (
          <div className="text-center py-16 text-txt-secondary">
            <p>Coming soon...</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedCase && <Modal item={selectedCase} onClose={() => setSelectedCase(null)} />}
    </section>
  )
}
