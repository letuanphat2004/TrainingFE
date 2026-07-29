# ADR 003: phiên bản Tailwind cho twin.macro

## Trạng thái

Accepted for planning; verify again before Phase 4.

## Quyết định

- Demo Tailwind thuần dùng Tailwind 4 với Vite plugin chính thức.
- Demo 06/07 dùng `twin.macro@3.4.1` và khóa Tailwind `3.4.x`.

## Lý do

twin.macro chưa thể hiện rõ hỗ trợ Tailwind 4 ổn định. Tách phiên bản theo demo làm giảm rủi ro build trong khi vẫn cho phép nghiên cứu Tailwind hiện hành ở Demo 02.

## Điều kiện xem xét lại

Trước khi tạo Demo 06, kiểm tra release và tài liệu compatibility mới nhất. Chỉ nâng khi build, TypeScript và visual smoke test đều vượt qua.
