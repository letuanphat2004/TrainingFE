# Chuyển HTML/CSS/JavaScript sang React

## Các mốc Git

- `427966b`: bản HTML/CSS/JavaScript thuần đủ 8 route.
- `a454cba`: bản React JavaScript đủ 8 route.
- Tag `phase-1-react-ts`: bản React TypeScript cuối Phase 1.

Ba mốc nằm trong cùng `apps/01-react-css`; chúng không được tính thành ba demo.

## Mapping từ code thuần sang React

| Mốc JavaScript thuần | React JavaScript/TypeScript |
|---|---|
| `renderPage()` và bảng `pageRenderers` | `BrowserRouter`, `Routes` và `Route` |
| Hàm template `header()` | `components/layout/Header` |
| Hàm template `footer()` | `components/layout/Footer` |
| `sectionHeading()` | `components/common/SectionHeading` |
| `serviceCards()`, `teamCards()`, `blogCards()` | Component nhận props và render array bằng `map` |
| `contactForm()` | `ContactForm` có state thông báo |
| `bindInteractions()` | Event handler khai báo trực tiếp trong component |
| `history.pushState()` và `popstate` | `Link` và React Router |
| `innerHTML` | JSX an toàn, không dùng HTML string |

## Cách chia component

- `pages`: mỗi file đại diện một route và chỉ ghép các section/component.
- `components/layout`: Header/Footer dùng chung trong 8 trang.
- `components/common`: phần lặp có API props nhỏ và rõ.
- `data`: nội dung lặp của navigation, service, team, blog và gallery.
- `styles`: giữ nguyên CSS thuần để việc chuyển React không làm thay đổi visual.

Header dùng state cho menu mobile. Video control, form, accordion và testimonial slider dùng state hoặc event handler React. Footer dùng event handler cho back-to-top.

## Kiểm soát hồi quy

Sau khi chuyển React JavaScript, 8 route được chụp lại ở 1440px. Chiều cao, điểm similarity, console và overflow đều giữ nguyên baseline JavaScript thuần trước khi chuyển tiếp sang TypeScript.

