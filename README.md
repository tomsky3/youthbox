# YouthBox · 与 AI 创造的一天

> VibeCoding 入门实战演示网页 — 替代 PPT 的交互式演示方案

## 📅 活动信息

- **活动名称**：与 AI 创造的一天
- **主办方**：YouthBox
- **时间**：2026 年 5 月 31 日
- **主题**：VibeCoding 入门培训 + 实操案例

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

开发服务器启动后访问 `http://localhost:5173`

## 🎨 设计风格

- **视觉风格**：Cyberpunk Neon UI（赛博朋克霓虹科技风）
- **配色**：深空黑底 (#0a0a0f) + 霓虹渐变 (青/紫/品红)
- **字体**：Orbitron (标题) + Inter (正文) + JetBrains Mono (代码)
- **特效**：粒子背景、代码打字机动画、滚动触发动画、玻璃态卡片

## 📐 页面结构

| Section | 内容 |
|---------|------|
| **Hero 开场** | 全屏粒子背景 + 渐变标题 + 活动信息 |
| **What is VC** | VibeCoding 定义 + 打字机实时演示 |
| **工具生态** | 8 个 Vibe 工具横向滚动卡片展示 |
| **实操案例库** | 4 类 13 个案例 (网站/游戏/工具/量化) + 详情弹窗 + Prompt 模板 |
| **快速上手指南** | 4 步教程 (选工具 → 写 Prompt → 迭代 → 部署) |
| **CTA 结尾** | 行动号召 + 二维码区域 |

## 🛠️ 技术栈

- React 18 + TypeScript + Vite 5
- Tailwind CSS 3.4 (自定义霓虹色系统)
- Lucide React Icons
- 纯 Canvas 粒子引擎 (零依赖)
- Intersection Observer 滚动动画

## 📁 项目结构

```
app/
├── src/
│   ├── components/
│   │   ├── ParticleBg.tsx        # Canvas 粒子背景
│   │   ├── Navbar.tsx            # 固定导航栏
│   │   ├── SectionHero.tsx       # Hero 开场区
│   │   ├── SectionWhatIsVC.tsx   # VibeCoding 概念 + 打字机 Demo
│   │   ├── SectionTools.tsx      # 工具生态卡片
│   │   ├── SectionCases.tsx      # 案例库 (Tab + Modal)
│   │   ├── SectionGuide.tsx      # 上手指南 (4步)
│   │   └── SectionCTA.tsx        # CTA 结尾
│   ├── App.tsx                   # 根组件
│   ├── main.tsx                  # 入口
│   └── index.css                 # 全局样式 + 霓虹变量
├── index.html                    # 入口 HTML (Google Fonts)
├── tailwind.config.js            # Tailwind 配置
└── vite.config.ts                # Vite 配置
```

## ✨ 特色功能

1. **粒子网络背景** — 鼠标互动的连线粒子效果，移动端自动降密度
2. **代码打字机动画** — 实时模拟 AI 对话生成代码的过程
3. **案例详情弹窗** — 点击案例查看完整 Prompt 模板（可一键复制）
4. **Good vs Bad Prompt 对比** — 直观展示 Prompt 工程最佳实践
5. **响应式设计** — 手机/平板/桌面全适配

## 📝 使用说明

- 演示时用浏览器全屏模式 (F11)
- 建议使用 Chrome/Edge 获得最佳体验
- 如需离线演示，运行 `npm run build` 后 `dist/` 目录可完全离线运行

---

Made with ❤️ by VibeCoding for YouthBox 2026
