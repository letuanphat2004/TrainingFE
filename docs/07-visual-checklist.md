# Visual accuracy checklist

## Điều kiện chung cho mỗi route

- [x] Screenshot được chụp ở viewport rộng 1440px.
- [x] Chiều cao document khớp reference sau khi font và ảnh tải xong.
- [x] Header, content container và footer đúng trục ngang.
- [x] Typography đã được đối chiếu với font Poppins, weight, size và line-height.
- [x] Asset đúng file, không có placeholder hoặc URL tạm.
- [x] Background là lớp full-width riêng, không bị container cắt.
- [x] Section boundary, khoảng cách, radius và shadow đã được review.
- [x] Không có horizontal overflow.
- [x] Navigation, form, slider/video control và back-to-top hoạt động.
- [x] Focus keyboard và alt/label cơ bản có mặt.
- [x] Đã tạo overlay/diff và ghi sai lệch còn lại.

## Ma trận desktop 1440px

| Route | Reference | Height delta | Similarity | Overlay/diff | Phase 1 baseline |
|---|---|---:|---:|---:|---:|
| `/` | Home 1 | 0 | 0.9358 | ✓ | Accepted |
| `/home-2` | Home 2 | 0 | 0.8239 | ✓ | Accepted |
| `/about` | About | 0 | 0.7838 | ✓ | Accepted |
| `/services` | Services | 0 | 0.7991 | ✓ | Accepted |
| `/gallery` | Gallery | 0 | 0.8473 | ✓ | Accepted |
| `/team` | Team | 0 | 0.7857 | ✓ | Accepted |
| `/blog` | Blog | 0 | 0.8249 | ✓ | Accepted |
| `/contact` | Contact | 0 | 0.9601 | ✓ | Accepted |

Ngưỡng tự động của Phase 1 là: HTTP 200, không console error, không overflow ngang, kích thước ảnh chụp khớp reference, `heightDelta = 0` và similarity tối thiểu `0.75`.

`Accepted` ở đây nghĩa là route đã vượt visual baseline của Phase 1 và có thể dùng làm chuẩn chuyển công nghệ. Không đồng nghĩa với tuyên bố ảnh chụp trùng 100% từng pixel. Sai lệch còn lại chủ yếu nằm ở chi tiết spacing, background crop và typography nhỏ; report chính xác nằm tại `tests/visual/visual-report.json`.

## Responsive smoke matrix

Mỗi route phải được kiểm tra tại:

- 375 × 812;
- 768 × 1024;
- 1024 × 768;
- 1440 × 900;
- 1920 × 1080.

Vì thiết kế hiện không có frame mobile riêng, responsive được suy luận có kiểm soát. Không tuyên bố pixel-perfect cho mobile; tiêu chí là bố cục rõ ràng, không overflow, hình không méo và tương tác dùng được.

Kết quả tự động hiện tại: `40/40` tổ hợp route/viewport và `6/6` kiểm tra tương tác vượt qua. Report: `tests/smoke/01-react-css.json`.

## Thứ tự sửa sai lệch

1. Document height và section boundary.
2. Container/alignment.
3. Typography.
4. Asset/background.
5. Spacing.
6. Radius, border, shadow và icon.
