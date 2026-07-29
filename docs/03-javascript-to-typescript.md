# Chuyển React JavaScript sang React TypeScript

## Phạm vi chuyển đổi

- Toàn bộ `.jsx` được đổi thành `.tsx`.
- `data.js` và helper asset được đổi thành `.ts`.
- `vite.config.js` được đổi thành `vite.config.ts`.
- Entry cuối là `main.tsx`.
- Không giữ source `.js`/`.jsx` trung gian trong mã hiện tại; lịch sử được bảo toàn bằng commit Git.

## Type chính

`src/types/index.ts` định nghĩa:

- `NavigationItem`;
- `Service`;
- `Professional`;
- `Assistant`;
- `BlogPost`;
- `BackgroundImageStyle` cho CSS custom property `--background-image`.

Props component được khai báo bằng interface. Form handler dùng `FormEvent<HTMLFormElement>`. Thuộc tính ảnh mở rộng `ImgHTMLAttributes<HTMLImageElement>`. Các import chỉ dùng cho type đều viết bằng `import type`.

## Luật TypeScript

`tsconfig.json` bật:

- `strict`;
- `noUncheckedIndexedAccess`;
- `noImplicitOverride`;
- `noUnusedLocals`;
- `noUnusedParameters`;
- `isolatedModules`;
- `noEmit`.

Mã ứng dụng không dùng `any`. Vite chỉ transpile TypeScript nên typecheck được chạy riêng:

```bash
npm run typecheck:css
```

## Lint và kiểm thử

```bash
npm run lint:css
npm run build:css
npm run test:smoke:css
npm run test:visual:css
```

- ESLint kiểm tra TypeScript với type information và React Hooks.
- Smoke test kiểm tra 8 route tại 5 viewport, ảnh/alt/label, console, overflow và các tương tác chính.
- Visual test so sánh trực tiếp ảnh chụp 1440px với 8 PNG reference.

