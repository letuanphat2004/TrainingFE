# Visual accuracy checklist

## Điều kiện chung cho mỗi route

- [ ] Screenshot được chụp ở viewport rộng 1440px.
- [ ] Chiều cao document khớp reference sau khi font và ảnh tải xong.
- [ ] Header, content container và footer đúng trục ngang.
- [ ] Typography đúng font, weight, size và line-height.
- [ ] Asset đúng file, không có placeholder hoặc URL tạm.
- [ ] Background là lớp full-width riêng, không bị container cắt.
- [ ] Section boundary, khoảng cách, radius và shadow được đối chiếu.
- [ ] Không có horizontal overflow.
- [ ] Navigation, form, slider/video control và back-to-top hoạt động.
- [ ] Focus keyboard và alt/label cơ bản có mặt.
- [ ] Đã tạo overlay/diff và ghi sai lệch còn lại.

## Ma trận desktop 1440px

| Route | Reference | Structure | Typography | Assets | Overlay/diff | Accepted |
|---|---|---:|---:|---:|---:|---:|
| `/` | Home 1 | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/home-2` | Home 2 | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/about` | About | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/services` | Services | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/gallery` | Gallery | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/team` | Team | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/blog` | Blog | ☐ | ☐ | ☐ | ☐ | ☐ |
| `/contact` | Contact | ☐ | ☐ | ☐ | ☐ | ☐ |

## Responsive smoke matrix

Mỗi route phải được kiểm tra tại:

- 375 × 812;
- 768 × 1024;
- 1024 × 768;
- 1440 × 900;
- 1920 × 1080.

Vì thiết kế hiện không có frame mobile riêng, responsive được suy luận có kiểm soát. Không tuyên bố pixel-perfect cho mobile; tiêu chí là bố cục rõ ràng, không overflow, hình không méo và tương tác dùng được.

## Thứ tự sửa sai lệch

1. Document height và section boundary.
2. Container/alignment.
3. Typography.
4. Asset/background.
5. Spacing.
6. Radius, border, shadow và icon.
