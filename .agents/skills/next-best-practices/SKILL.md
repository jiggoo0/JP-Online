---
name: next-best-practices
description: Next.js 16 + React 19 Best Practices - Middleware Proxy, React Compiler, RSC, Dynamic Metadata, and Bundle Control
user-invocable: false
---

# 🚀 Next.js 16 & React 19 Best Practices

Apply these rules when writing, reviewing, or refactoring code for high-performance visual documentation platforms.

---

## 🏗️ 1. Core Paradigm: Server-First

- **Server Components by Default:** ทุก Component ต้องเป็น React Server Components (RSC) เพื่อลด JavaScript Bundle ที่ฝั่ง Client
- **React Compiler (Stable):** ห้ามใช้ `useMemo` หรือ `useCallback` เว้นแต่จะมีเคสซับซ้อนที่ Compiler จัดการไม่ได้ เพราะ React 19 ทำ Automatic Memoization ให้แล้ว
- **Boundary Rules:** ห้ามใช้ `async` ใน Client Components และห้ามส่ง Non-serializable props (เช่น functions) ข้ามจาก Server ไปยัง Client

---

## 🔄 2. File Conventions & Routing (v16 Update)

- **Middleware as Proxy:** ใน v16 Middleware รองรับการทำ Advanced Proxy และ Dynamic Edge Routing (ดู [file-conventions.md](./file-conventions.md))
- **Parallel Routes:** ต้องมี `default.tsx` ในทุก Slots (`@slot`) เพื่อป้องกัน 404 ระหว่างการทำ Soft Navigation
- **Intercepting Routes:** ใช้รูปแบบ `(.)`, `(..)`, `(...)` สำหรับการสร้าง Modal หรือ Slide-over โดยไม่เสีย URL Context

---

## 🔗 3. Async APIs (Strict Compliance)

- **Async Params:** `params` และ `searchParams` ใน Page/Layout ต้องเข้าถึงผ่านการ `await` เท่านั้น
- **Request APIs:** `cookies()`, `headers()`, `draftMode()` ต้องใช้ `await` ทั้งหมดตามมาตรฐาน Next.js 15/16
- **Metadata API:** `generateMetadata` ต้องเป็น Async และจัดการ Dynamic SEO Tokens ให้ครบถ้วน

---

## ⚡ 4. Data Patterns & React 19 Actions

- **Server Actions:** ใช้สำหรับ Mutation ข้อมูล และต้องรองรับ `useActionState` (React 19) ในการจัดการ Loading/Error states
- **Optimistic UI:** ใช้ `useOptimistic` สำหรับการอัปเดต UI ทันทีโดยไม่ต้องรอผลจาก Server ในงาน Visual Interaction
- **Avoiding Waterfalls:** ใช้ `Promise.all()` หรือ Suspense Boundaries เพื่อดึงข้อมูลพร้อมกัน (Parallel Fetching)

---

## 🎨 5. Modern Styling (Tailwind CSS 4.2)

- **CSS-first Config:** ห้ามใช้ `tailwind.config.js` แบบเก่า ให้ใช้ CSS Variable Based Configuration และ `@theme` ใน CSS หลัก
- **Zero-runtime CSS:** เน้นการใช้ Utility classes และจัดการ Dynamic classes ผ่าน `clsx` และ `tailwind-merge` (ดู `lib/utils.ts`)

---

## 📦 6. Performance & Bundling (Lighthouse 100)

- **`next/dynamic` First:** บังคับใช้ Dynamic Import สำหรับ Client Components ที่ไม่ได้แสดงผลใน First Paint (LCP) เช่น Modal หรือ Interactive Grid
- **Tree Shaking Audit:** ตรวจสอบการ Import `lucide-react` และ `framer-motion` ให้เป็นแบบเจาะจงเฉพาะ Component ที่ใช้งาน
- **`use cache` Directive:** ใช้ระบุเฉพาะจุดที่ต้องการทำ Cache ในระดับ Function-level (Next.js 16 Features)

---

## 📝 7. Visual Narrative & MDX (Project Core)

- **Content Engine:** จัดการเนื้อหา MDX ผ่าน `next-mdx-remote` ใน `components/blog/MDXComponents.tsx`
- **Image Optimization:** บังคับใช้ `next/image` พร้อมกำหนด `sizes` และ `priority` สำหรับ Hero Section เพื่อลด Layout Shift (CLS)
- **Static First:** เน้นการทำ Static Generation สำหรับหน้ารายละเอียดบริการและ Case Studies

---

## 🛠️ 8. Debugging & Maintenance

- **Hydration Audit:** ใช้ Error Overlay ของ Next.js 16 ตรวจสอบความต่างของ Server/Client Render (เช่น Timezone หรือ Random Values)
- **Knip Clean-up:** รัน `pnpm knip` สม่ำเสมอเพื่อกำจัด Dead Code และ Unused Dependencies ตามที่กำหนดใน `knip.json`
- **Error Boundaries:** ใช้ `error.tsx` และ `global-error.tsx` สำหรับ Error Recovery ในระดับต่างๆ

---

_Reference specialized guides in: [./.agents/skills/next-best-practices/]_
