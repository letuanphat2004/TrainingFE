# Cấu trúc file của Beautice Learning Lab

## Nguyên tắc

Repository dùng npm workspaces để 7 demo có dependency và cấu hình styling độc lập. Chỉ content, token, route và ánh xạ asset được dùng chung. UI component không được chia sẻ giữa các demo vì mục tiêu là so sánh cách triển khai.

## Root

| File/thư mục | Nhiệm vụ |
|---|---|
| `package.json` | Khai báo workspace và script chạy toàn repository. |
| `package-lock.json` | Khóa chính xác dependency để các máy cài giống nhau. |
| `.gitignore` | Loại bỏ dependency, build và test output không cần quản lý. |
| `eslint.config.js` | Điểm đặt cấu hình lint dùng chung khi bước sang Phase 1. |
| `README.md` | Hướng dẫn tổng quan và lệnh sử dụng. |
| `PROJECT_PLAN.md` | Phạm vi, phase, tiêu chí nghiệm thu và trạng thái. |
| `AGENTS.md` | Quy tắc mà Codex phải đọc trước khi thay đổi dự án. |
| `scripts/` | Script có thể chạy lại để tạo reference và xác thực Phase 0. |

## Nguồn thiết kế

| File/thư mục | Nhiệm vụ |
|---|---|
| `Beautice - ... (Community)/` | Asset và ảnh thiết kế gốc, chỉ đọc. |
| `reference/screens/desktop/` | Ảnh từng trang được crop từ bản tổng hợp. |
| `reference/manifests/` | Inventory tự sinh của asset gốc. |
| `reference/README.md` | Giải thích nguồn, crop và lệnh tái tạo. |

## Design contract

`packages/design-contract` không chứa React component hoặc CSS.

| File | Nhiệm vụ |
|---|---|
| `src/routes.js` | Danh sách 8 route chuẩn mà mọi demo phải có. |
| `src/tokens.js` | Màu, typography, layout, breakpoint, radius và shadow dùng chung. |
| `src/content.js` | Brand, navigation, contact và CTA dùng chung. |
| `src/assets.js` | Tên semantic cho các nhóm asset gốc. |
| `src/reference-screens.json` | Route, kích thước và crop của 8 ảnh desktop. |
| `src/index.js` | Public exports của package. |

Token hiện mang trạng thái `provisional-until-verified-per-section`. Phase 1 phải điều chỉnh token bằng kết quả đo/screenshot diff, không thay đổi tùy cảm giác.

## Cấu trúc mỗi demo

Khi được tạo ở phase tương ứng, mỗi ứng dụng có cấu trúc:

```text
apps/0x-technology/
├─ package.json
├─ index.html
├─ vite.config.*
├─ tsconfig*.json
└─ src/
   ├─ main.*
   ├─ App.*
   ├─ router/
   ├─ pages/
   ├─ sections/
   ├─ components/
   │  ├─ common/
   │  └─ layout/
   ├─ data/
   ├─ styles/ hoặc theme/
   └─ types/
```

- `main`: mount React và provider.
- `App`: app shell và router.
- `router`: ánh xạ URL tới page.
- `pages`: ghép section thành 8 trang hoàn chỉnh.
- `sections`: khối giao diện lớn theo từng trang.
- `components/common`: primitive tái sử dụng trong demo.
- `components/layout`: header, footer, container.
- `data`: dữ liệu lặp, không đặt JSX.
- `styles/theme`: implementation styling riêng của demo.
- `types`: type/interface TypeScript.

## Tại sao chưa có 7 app trong Phase 0?

Scaffold tất cả ngay sẽ tạo lượng lớn cấu hình trùng và khiến lỗi baseline lan sang 6 demo sau. Demo 01 phải được xây dựng, đo và nghiệm thu đủ 8 trang trước; sau đó mới tạo từng implementation tiếp theo.
