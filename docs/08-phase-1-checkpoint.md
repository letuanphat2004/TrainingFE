# Checkpoint Phase 1

Cap nhat: 29/07/2026

## Trang thai chung

- Phase 0 da hoan tat va duoc luu tai commit `f853dc9`.
- Phase 1 dang lam do. Moc HTML/CSS/JavaScript thuan cua Demo 01 da hoan tat va duoc luu tai commit `427966b`.
- Working tree dang sach tai thoi diem tao checkpoint.
- Chua convert moc hien tai sang React JavaScript.
- Chua convert sang React TypeScript.
- Chua the bat dau Phase 2 Tailwind.

## Nhung gi da co trong Demo 01

Thu muc: `apps/01-react-css`

- Vite da duoc cau hinh de chay ban HTML/CSS/JavaScript thuan.
- Da co du 8 route:
  - `/` - Home 1
  - `/home-2` - Home 2
  - `/about` - About
  - `/services` - Services
  - `/gallery` - Gallery
  - `/team` - Team
  - `/blog` - Blog
  - `/contact` - Contact
- Toan bo giao dien hien tai nam trong `src/main.js` va `src/data.js`.
- CSS thuan duoc tach thanh:
  - `src/styles/base.css`
  - `src/styles/layout.css`
  - `src/styles/components.css`
  - `src/styles/pages.css`
  - `src/styles/responsive.css`
  - `src/styles/index.css`
- Da co menu, form, video control, accordion va back-to-top o muc JavaScript thuan.
- Asset implementation duoc copy tu asset goc bang script; thu muc anh tham chieu goc khong bi sua.

## Ket qua visual baseline desktop

Viewport doi chieu: `1440 x 900`, DPR 1.

| Route | Chieu cao code/reference | Similarity hien tai |
|---|---:|---:|
| `/` | 4989 / 4989 | 0.9358 |
| `/home-2` | 4897 / 4897 | 0.8239 |
| `/about` | 4803 / 4803 | 0.7842 |
| `/services` | 4419 / 4419 | 0.7991 |
| `/gallery` | 3155 / 3155 | 0.8473 |
| `/team` | 4419 / 4419 | 0.7857 |
| `/blog` | 4550 / 4550 | 0.8249 |
| `/contact` | 3155 / 3155 | 0.9601 |

Tat ca 8 route tai baseline:

- HTTP 200;
- khong co console error;
- khong co horizontal overflow;
- chieu cao trang khop reference.

Bao cao chi tiet: `tests/visual/visual-report.json`.

Luu y: day la visual baseline, chua duoc phep tuyen bo pixel-perfect. Checklist nghiem thu desktop trong `docs/07-visual-checklist.md` van chua duoc danh dau Accepted.

## Lenh hien co

```bash
npm run dev:css
npm run build:css
npm run test:visual:css
```

## Viec can lam tiep theo

1. Convert `src/main.js` thanh kien truc React JavaScript:
   - `App.jsx`;
   - router 8 route;
   - page component;
   - layout Header/Footer;
   - component va section tai su dung;
   - React state/event cho menu, form, video, accordion va back-to-top.
2. Chay build va visual regression, bao dam baseline 8 route khong bi lui.
3. Commit/tag moc React JavaScript.
4. Convert `.jsx` sang `.tsx`, tao type/interface, khong dung `any`.
5. Them `tsc --noEmit`, ESLint va tai lieu migration:
   - `docs/02-html-to-react.md`;
   - `docs/03-javascript-to-typescript.md`.
6. Chay build, typecheck, lint, smoke responsive tai 375, 768, 1024, 1440 va 1920 cho ca 8 route.
7. Chinh visual sai lech con lai, cap nhat checklist va chi sau do moi danh dau Phase 1 hoan tat.

## Nguon tham chieu

- 8 anh desktop: `reference/screens/desktop`.
- 100 asset goc: thu muc `Beautice - Clinic & Beauty Consultation Website Design (Community)`.
- Asset manifest: `reference/manifests/assets.generated.json`.
- Figma connector truoc do tra `INVALID_ARGUMENT`, vi vay PNG local dang la nguon doi chieu chinh. Khong suy dien layer Figma khong doc duoc.

