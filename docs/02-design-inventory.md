# Design inventory

## Trạng thái nguồn

- Figma file key: `D4GfZoq69kzblUipF6ASjE`.
- Connector trả `INVALID_ARGUMENT` cho node gốc và metadata, nên Phase 0 không giả định có layer Figma.
- Nguồn chuẩn hiện tại là PNG gốc và ảnh tổng hợp `13340 × 5003`.
- Ảnh tổng hợp chứa 8 frame desktop rộng 1440px.

## Trang và route

| Thứ tự | Route | Trang | Reference | Kích thước |
|---:|---|---|---|---:|
| 1 | `/` | Home 1 | `home-1.png` | 1440 × 4989 |
| 2 | `/home-2` | Home 2 | `home-2.png` | 1440 × 4897 |
| 3 | `/about` | About | `about.png` | 1440 × 4803 |
| 4 | `/services` | Services | `services.png` | 1440 × 4419 |
| 5 | `/gallery` | Gallery | `gallery.png` | 1440 × 3155 |
| 6 | `/team` | Team | `team.png` | 1440 × 4419 |
| 7 | `/blog` | Blog | `blog.png` | 1440 × 4550 |
| 8 | `/contact` | Contact | `contact.png` | 1440 × 3155 |

## Section inventory ban đầu

| Trang | Các nhóm section nhìn thấy trong reference |
|---|---|
| Home 1 | Header/hero, services, about, professional team, contact form, footer. |
| Home 2 | Header/hero video, about, services, metrics/video, latest news, request call, footer. |
| About | Header, about/video, professional team, metrics, vision, mission, clients, footer. |
| Services | Header, service introduction, service detail rows, video CTA, FAQ, footer. |
| Gallery | Header, gallery grid, consultation/treatment/product promos, CTA, footer. |
| Team | Header, professional team, assistance team, video tour, testimonial, footer. |
| Blog | Hero/breadcrumb, post list, sidebar, pagination, footer. |
| Contact | Header, inquiry form/illustration, map, contact cards, footer. |

Section inventory sẽ được chi tiết hóa ở Phase 1 khi triển khai từng trang. Không dùng tên section để suy đoán asset nếu chưa đối chiếu trực tiếp.

## Nhóm asset

Inventory đầy đủ được tạo tại `reference/manifests/assets.generated.json`:

- reference screenshots;
- logo/brand;
- background/bubble/wave/footer;
- illustration/animation;
- ảnh Unsplash;
- icon dịch vụ;
- icon mạng xã hội;
- control play/back-to-top;
- logo đối tác;
- miscellaneous.

Manifest ghi SHA-256 để nhận biết file trùng nội dung dù tên khác nhau. Không xóa file trùng ở nguồn; việc hợp nhất chỉ được thực hiện trong ánh xạ semantic của ứng dụng.

## Design tokens ban đầu

- Font: Poppins.
- Navy chính: `#091156`.
- Pink chính: `#FF64AE`.
- Body text: `#8B8B8B`.
- Container desktop: 1140px.
- Desktop reference: 1440px.

Các giá trị này là baseline đã suy ra từ thiết kế/asset. Chúng phải được kiểm chứng theo section bằng screenshot overlay trước khi đánh dấu ổn định.
