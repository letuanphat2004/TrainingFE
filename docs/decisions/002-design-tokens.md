# ADR 002: design contract dùng chung

## Trạng thái

Accepted, token values provisional.

## Quyết định

Tách route, token, content, reference screen và asset mapping vào `packages/design-contract`. Package không phụ thuộc React và không chứa CSS.

## Lý do

Nếu mỗi demo tự chép màu, text hoặc route, sai lệch nội dung sẽ bị hiểu nhầm thành khác biệt công nghệ. Contract giúp 7 demo cùng một đầu vào trong khi implementation UI vẫn độc lập.

## Quy tắc thay đổi

- Giá trị đo từ ảnh phải ghi rõ nguồn/reference.
- Thay token sau visual diff phải cập nhật lý do.
- Không thêm class Tailwind, MUI component hoặc styled component vào package.
