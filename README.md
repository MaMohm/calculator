<div align="center">

# 🧮 Modern Calculator

A **modern, mobile-first calculator** built with **Angular** and **Tailwind CSS**, featuring smooth animations, clean UI, and advanced calculation capabilities.

✨ Inspired by modern UI patterns from **Uiverse.io**  
🚀 Deployed on **GitHub Pages**

🔗 **Live Demo:**  
👉 https://mamohm.github.io/calculator/

</div>

---

## ✨ Features

✅ **Core Calculator**
- Addition, subtraction, multiplication, division
- Decimal, percentage, sign toggle (±)
- Clean error handling (e.g. divide by zero)

🧠 **Advanced Capabilities**
- Scientific functions *(toggleable)*  
  `sin, cos, tan, log, ln, √, xʸ, π, e`
- Memory operations  
  `MC, MR, M+, M−` with visual memory indicator
- Calculation history tray

🎨 **Modern UI / UX**
- Dark theme by default
- Smooth hover & click animations
- Scale & shadow transforms on interaction
- Mobile-first responsive layout
- Keyboard input support
- Optional light/dark theme toggle

---

## 🛠 Tech Stack

| Technology | Usage |
|-----------|-------|
| **Angular 18+** | Standalone components & signals |
| **Tailwind CSS** | Utility-first styling |
| **CSS Grid & Flexbox** | Responsive layout |
| **GitHub Pages** | Deployment |
| **TypeScript** | Business logic |

---

## 🎨 Design System

### Color Theme
- **Background:** `bg-gray-900`
- **Numbers:** `bg-gray-700`
- **Operators:** Accent color (`amber` / `blue`)
- **Functions:** Teal / Indigo
- **Equals Button:** Gradient (`purple → pink`)

### Button Interactions
```css
hover:bg-gray-600
active:scale-95
active:shadow-inner
transition-all duration-150
﻿# calculator

<div align="center">

# 🧮 Modern Calculator

A **modern, mobile-first calculator** built with **Angular** and **Tailwind CSS**, featuring smooth animations, clean UI, and advanced calculation capabilities.

✨ Inspired by modern UI patterns from **Uiverse.io**  
🚀 Deployed on **GitHub Pages**

🔗 **Live Demo:**  
👉 https://mamohm.github.io/calculator/

</div>

---

## ✨ Features

✅ **Core Calculator**
- Addition, subtraction, multiplication, division
- Decimal, percentage, sign toggle (±)
- Clean error handling (e.g. divide by zero)

🧠 **Advanced Capabilities**
- Scientific functions *(toggleable)*  
  `sin, cos, tan, log, ln, √, xʸ, π, e`
- Memory operations  
  `MC, MR, M+, M−` with visual memory indicator
- Calculation history tray

🎨 **Modern UI / UX**
- Dark theme by default
- Smooth hover & click animations
- Scale & shadow transforms on interaction
- Mobile-first responsive layout
- Keyboard input support
- Optional light/dark theme toggle

---

## 🛠 Tech Stack

| Technology | Usage |
|-----------|-------|
| **Angular 18+** | Standalone components & signals |
| **Tailwind CSS** | Utility-first styling |
| **CSS Grid & Flexbox** | Responsive layout |
| **GitHub Pages** | Deployment |
| **TypeScript** | Business logic |

---

## 🎨 Design System

### Color Theme
- **Background:** `bg-gray-900`
- **Numbers:** `bg-gray-700`
- **Operators:** Accent color (`amber` / `blue`)
- **Functions:** Teal / Indigo
- **Equals Button:** Gradient (`purple → pink`)

### Button Interactions
```css
hover:bg-gray-600
active:scale-95
active:shadow-inner
transition-all duration-150
🧩 Architecture
src/
 ├─ app/
 │  ├─ components/
 │  │  ├─ calculator-display/
 │  │  ├─ calculator-button/
 │  │  └─ calculator-keypad/
 │  ├─ services/
 │  │  └─ calculator.service.ts
 │  └─ app.component.ts
 └─ styles/
Key Principles
Presentational Components only

All logic lives in services

Angular Signals for reactive state

Strict mobile-first styling

⚙️ State Management
Using Angular Signals:

signal() → current input

computed() → display value

effect() → history & memory updates

This ensures:

⚡ High performance

🧼 Clean separation of concerns

🔄 Predictable updates


