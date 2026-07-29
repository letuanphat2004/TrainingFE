# Demo 01 — React TypeScript + CSS thuần

Đây là implementation chuẩn của website Beautice gồm đủ 8 trang. Demo này đã đi qua ba mốc trong cùng một ứng dụng:

1. HTML/CSS/JavaScript thuần;
2. React JavaScript;
3. React TypeScript (mã nguồn hiện tại).

CSS vẫn là CSS thuần. Demo không sử dụng Tailwind, MUI, styled-components hoặc Emotion.

## Routes

| Route | Trang |
|---|---|
| `/` | Home 1 |
| `/home-2` | Home 2 |
| `/about` | About |
| `/services` | Services |
| `/gallery` | Gallery |
| `/team` | Team |
| `/blog` | Blog |
| `/contact` | Contact |

## Cấu trúc và nhiệm vụ

```text
src/
├─ main.tsx                 # Mount React và BrowserRouter
├─ App.tsx                  # App shell
├─ router/index.tsx         # Ánh xạ URL đến 8 page và trang 404
├─ pages/                   # Ghép section thành từng trang hoàn chỉnh
├─ components/
│  ├─ common/              # Ảnh, heading, card, form, video control
│  └─ layout/              # Header và Footer
├─ data.ts                  # Dữ liệu lặp có type
├─ types/index.ts           # Interface và type dùng chung
├─ lib/assets.ts            # Tạo URL an toàn cho asset local
└─ styles/
   ├─ base.css              # Reset, token CSS và typography nền
   ├─ layout.css            # Container, grid, Header và Footer
   ├─ components.css        # Button, form, card và component dùng chung
   ├─ pages.css             # Section riêng của 8 trang
   ├─ responsive.css        # Breakpoint suy luận có kiểm soát
   └─ index.css             # Điểm import CSS
```

- `vite.config.ts`: plugin React chính thức cho Vite.
- `tsconfig.json`: TypeScript strict, `noUncheckedIndexedAccess` và không emit.
- `eslint.config.js`: lint TypeScript có type information và React Hooks.
- `public/assets`: asset implementation được sinh tự động, không phải nguồn gốc.

## Chạy và kiểm tra

Từ thư mục gốc repository:

```bash
npm run dev:css
npm run build:css
npm run typecheck:css
npm run lint:css
npm run test:smoke:css
npm run test:visual:css
```

Visual test cần dev server đang chạy. Mặc định script dùng port `5173`; có thể đặt `BEAUTICE_BASE_URL` nếu chạy port khác.

Dependency note: `react-router-dom` được khóa tại `7.18.2`. npm audit hiện còn advisory cho RSC action processing; Demo 01 là declarative SPA và không dùng RSC, loader, action hoặc server action. Bản cũ hơn không được dùng vì tái xuất hiện nhiều advisory đã vá.

## Nguồn asset

`npm run dev:css` và `npm run build:css` tự chạy `assets:sync`. Script chỉ copy ảnh sang `public/assets`; không sửa thư mục ảnh gốc:

`Beautice - Clinic & Beauty Consultation Website Design (Community)/`
