# Beautice Learning Lab

Workspace học tập triển khai cùng website Beautice bằng bảy kỹ thuật styling.
Mỗi demo cuối cùng phải có đủ tám trang.

## Trạng thái hiện tại

- Kiến trúc monorepo và quy tắc phân tầng đã được thiết lập.
- Chỉ Demo 01 (`React + CSS thuần`) được scaffold.
- Home 1 đang được xây từng component; hiện có `SiteHeader` và Button dùng chung.
- Header chưa được nghiệm thu visual desktop, nên Home 1 chưa hoàn thành.
- Sáu demo còn lại chưa được scaffold.

## Chạy Demo 01

Trong PowerShell:

```powershell
npm.cmd install
npm.cmd run dev:css
```

Build và lint:

```powershell
npm.cmd run build
npm.cmd run lint
```

Trang trắng cao theo frame Home 1 là trạng thái dự kiến của scaffold hiện tại,
không phải phiên bản giao diện đã hoàn thành.

## Tài liệu

- Kế hoạch: `PROJECT_PLAN.md`
- Kiến trúc: `docs/architecture.md`
- Quy ước thư mục: `docs/folder-structure.md`
- Nguồn đối chiếu: `reference/`

## Quy tắc quan trọng

```text
main → app → routes/pages → layouts/components
```

Chỉ content, design token và asset mapping được phép dùng chung giữa các demo.
React component và styling implementation phải độc lập.
