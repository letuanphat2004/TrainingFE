# Quy ước cây thư mục

## Cây thư mục đích

```text
TrainingReact/
├─ apps/
│  ├─ 01-react-css/
│  ├─ 02-tailwind/
│  ├─ 03-material-ui/
│  ├─ 04-styled-components/
│  ├─ 05-emotion-mui/
│  ├─ 06-emotion-tailwind-twin/
│  └─ 07-emotion-mui-tailwind-twin/
├─ packages/
│  └─ design-contract/
├─ reference/
├─ tooling/
├─ tests/
├─ docs/
├─ PROJECT_PLAN.md
└─ package.json
```

Đây là blueprint. Chỉ tạo app và module đang triển khai; không tạo hàng loạt
thư mục rỗng.

## Cây thư mục chuẩn của một app

```text
src/
├─ app/
│  └─ App.*
├─ assets/
├─ components/
│  ├─ common/
│  │  └─ Button/
│  ├─ layout/
│  │  └─ SiteHeader/
│  └─ home-one/
├─ constants/
├─ hooks/
├─ layouts/
├─ pages/
│  └─ HomeOne/
├─ routes/
├─ services/
├─ store/
├─ styles/
├─ types/
├─ utils/
└─ main.*
```

## Quy tắc tạo module

Module chỉ cần tạo những thư mục thực sự dùng:

```text
components/layout/SiteHeader/
├─ SiteHeader.*
├─ SiteHeader.css
└─ index.*
```

- Cùng thư mục component: JSX/TSX, CSS và `index` export public API.
- Helper chỉ một component dùng có thể để cạnh component; helper dùng lại để vào `utils`.
- Type dùng lại để vào `types`; type chỉ một component để cạnh component.

Không bắt buộc component nào cũng phải có nhiều file; component thật sự nhỏ có thể
chỉ cần một file.

## Quy tắc đặt tên

- Thư mục module dùng `kebab-case`.
- React component dùng `PascalCase`.
- Hook bắt đầu bằng `use`.
- File frame dùng hậu tố `.frames`.
- File test dùng `.test` hoặc `.spec`.
- Không dùng tên chung chung như `helpers2`, `new-component` hoặc `common2`.

## Cách thêm một trang

1. Tạo module trong `pages`.
2. Tạo frame registry của page nếu reference cần tọa độ.
3. Tái sử dụng widget đã có nếu API và thiết kế phù hợp.
4. Tạo component mới nếu phần giao diện có trách nhiệm độc lập.
5. Đặt interaction gần component đang sở hữu nó; chỉ đưa vào hook/service/store khi
   có lý do tái sử dụng hoặc state/API thật.
6. Chỉ tách `common` khi API được ít nhất hai nơi dùng.

## Cách thêm demo tiếp theo

1. Demo hiện tại phải đủ tám trang và vượt qua gate.
2. Tạo app mới với cùng quy ước phân tầng.
3. Dùng chung content, token và asset mapping.
4. Viết lại toàn bộ component/style bằng kỹ thuật của demo mới.
5. Không import UI implementation từ demo trước.
