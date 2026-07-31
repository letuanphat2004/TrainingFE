# Kiến trúc Beautice Learning Lab

## Mục tiêu

Kiến trúc này phục vụ toàn bộ 7 demo, mỗi demo là một website hoàn chỉnh gồm
8 trang. Việc triển khai từng trang một không thay đổi kiến trúc tổng thể.

## Kiến trúc workspace

```text
TrainingReact/
├─ apps/             Các ứng dụng độc lập theo kỹ thuật styling
├─ packages/         Dữ liệu thiết kế được phép dùng chung
├─ reference/        Nguồn đối chiếu local
├─ tooling/          Script và cấu hình phát triển
├─ tests/            Kiểm tra xuyên suốt các app
└─ docs/             Tài liệu và quyết định kiến trúc
```

### Apps

Mỗi app phải có đủ tám route và tự sở hữu toàn bộ component cùng styling:

1. `01-react-css`
2. `02-tailwind`
3. `03-material-ui`
4. `04-styled-components`
5. `05-emotion-mui`
6. `06-emotion-tailwind-twin`
7. `07-emotion-mui-tailwind-twin`

Chỉ app đang triển khai mới được scaffold. Không tạo trước source placeholder
cho các app còn lại.

### Packages

`packages/design-contract` chỉ được chứa:

- nội dung;
- design token;
- asset mapping.

Không đặt React component, CSS, Tailwind class, MUI customization,
styled-components hoặc Emotion style vào package dùng chung.

## Kiến trúc trong một app

```text
src/
├─ app/
├─ assets/
├─ components/
│  ├─ common/
│  ├─ layout/
│  └─ home-one/
├─ constants/
├─ hooks/
├─ layouts/
├─ pages/
├─ routes/
├─ services/
├─ store/
├─ styles/
├─ types/
└─ utils/
```

### app

Điểm ghép ứng dụng và bootstrap cấp ứng dụng. `main.*` là entry point React;
`App/App.*` quyết định page hoặc router nào được render.

### components

- `components/common`: primitive tái sử dụng như `Button`, `Input`, `Icon`.
- `components/layout`: Header, Footer và thành phần layout dùng ở nhiều route.
- `components/<page>`: component chỉ có ý nghĩa trong một page, ví dụ
  `components/home-one/MainSlider`.

Component không import page. `Button` là component chung; `Contact` chỉ là nội
dung/variant của Button khi dùng trong Header.

### constants và assets

`constants` chứa token, navigation và asset mapping. `assets` chứa ảnh/icon/font
được import từ source. Không sửa asset gốc trong thư mục reference.

### pages

Mỗi module page tương ứng với một route. Page chịu trách nhiệm:

- tạo page canvas;
- đặt decoration đi qua nhiều widget;
- quản lý stacking context và layer toàn trang;
- ghép widget thành trang hoàn chỉnh;
- áp dụng frame cấp trang tại viewport pixel-perfect.

Page không chứa chi tiết của card, input hoặc nội dung widget.

### Các thư mục theo nhu cầu

- `layouts`: khung ghép dùng lại giữa nhiều page.
- `routes`: khai báo route khi có nhiều URL.
- `hooks`, `utils`, `types`: hook, hàm thuần và kiểu dùng lại.
- `services`, `store`: chỉ tạo khi thật sự có API hoặc state toàn cục.

Không tạo thư mục trống chỉ để đủ blueprint. Tách một component khỏi page khi
nó được tái sử dụng hoặc có trách nhiệm độc lập rõ ràng.

## Quy tắc phụ thuộc

```text
main → app → routes/pages → layouts/components
                         ↓
             constants / hooks / utils / types / assets
```

Quy tắc:

1. Page ghép component; component không import page.
2. `common` và `layout` không phụ thuộc một page cụ thể.
3. Không tạo import vòng giữa các component.
4. Đặt public API ở `index.*` khi module có nhiều file hoặc được import từ nơi khác.
5. Services, store và route không chứa style giao diện.

## Pixel-perfect và responsive

Kiến trúc component và chiến lược CSS là hai vấn đề riêng.

- Tại viewport reference `1440px`, page có thể áp dụng frame chính xác từ dữ
  liệu local đã đo.
- Flex/Grid được dùng bên trong component với constraint đã đo.
- Absolute positioning dành cho decoration, overlap có chủ ý hoặc frame desktop
  thực sự cần tọa độ độc lập.
- Dưới breakpoint desktop, component chuyển sang responsive flow.
- Không scale toàn bộ canvas desktop để giả lập mobile.

## Sở hữu background

| Background | Chủ sở hữu |
|---|---|
| Màu nền toàn trang | Page |
| Decoration đi qua nhiều component | Page |
| Background nằm trọn trong một component | Component đó |
| Hình thuộc một card | Component card |
| Token màu nền | `constants` hoặc design contract |

## Kiểm thử

- Unit test đặt cạnh module khi có logic.
- Smoke, visual và accessibility test đặt ở root `tests`.
- Screenshot sinh ra đặt trong `artifacts`, không ghi đè reference.
- Một trang chỉ hoàn thành sau build, lint, typecheck phù hợp và visual review.
