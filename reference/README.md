# Reference assets

Thư mục này chứa dữ liệu **phát sinh** từ ảnh thiết kế gốc để phục vụ đo đạc và visual regression.

## Nguồn chuẩn

Nguồn không được chỉnh sửa nằm tại:

`Beautice - Clinic & Beauty Consultation Website Design (Community)/`

Ảnh tổng hợp có kích thước `13340 × 5003`, gồm 8 frame desktop rộng `1440px`, cách nhau `260px`.

## Nội dung

- `screens/desktop/`: 8 ảnh trang đã được tách từ ảnh tổng hợp.
- `manifests/assets.generated.json`: kích thước, dung lượng, hash, nhóm và file trùng của toàn bộ asset.
- `packages/design-contract/src/reference-screens.json`: route, kích thước và tọa độ crop nguồn.

## Tái tạo

```bash
npm run reference:build
npm run validate:phase0
```

Script crop chỉ ghi vào `reference/screens/desktop`. Nếu chạy lại, các ảnh phát sinh ở đúng thư mục này sẽ được thay thế; ảnh gốc không bị thay đổi.
