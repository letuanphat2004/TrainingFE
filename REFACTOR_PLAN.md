# Kế hoạch refactor Home 1

## Mục tiêu

Chuyển bản Home 1 hiện tại từ React JavaScript + CSS thường sang một bản duy nhất sử dụng:

```text
React + TypeScript + MUI + Emotion + Tailwind CSS + twin.macro
```

Giao diện tại màn hình thiết kế 1440px phải được giữ làm mốc đối chiếu. Bố cục chính phải chuyển dần sang Flexbox/Grid; `position: absolute` chỉ dành cho những phần cần chồng lớp thật sự.

## Phân công trách nhiệm

| Công nghệ | Vai trò |
| --- | --- |
| React + TypeScript | Cấu trúc component, dữ liệu và kiểm tra kiểu dữ liệu. |
| MUI | Thành phần giao diện tiêu chuẩn: Button, TextField, Typography, IconButton, Box, Stack, Container. |
| Emotion | Style đặc thù Figma, kích thước pixel-perfect, background bubble, wave và shape. |
| Tailwind CSS | Utility cho layout, spacing và responsive. |
| twin.macro | Dùng utility Tailwind bên trong Emotion, đồng thời customize component MUI. |

Chọn **Emotion** thay vì `styled-components` vì MUI tích hợp Emotion mặc định. Do đó không cần dùng đồng thời hai CSS-in-JS engine.

## Quy tắc layout

```text
HomeOnePage
├─ Header                  → Flexbox
├─ MainSlider              → Grid hai cột
│  ├─ Nội dung hero        → Flexbox dọc
│  ├─ Ảnh hero             → relative
│  └─ Bubble/trang trí     → absolute
├─ CoreServices            → Grid ba cột
├─ AboutUs                 → Grid hai cột
├─ ProfessionalTeams       → Grid ba cột
├─ ContactUs               → Grid hai cột
└─ Footer                  → Grid
```

- Dùng `flex`/`grid` cho text, card, form, menu và các phần nằm trong luồng trang.
- Chỉ dùng `absolute` cho bubble, wave line, lớp phủ, ảnh trang trí hoặc icon phải đè lên ảnh khác.
- Không đặt text/card chính bằng `top`/`left` cố định.

## Quy tắc sử dụng style

1. Có component MUI phù hợp thì ưu tiên MUI.
2. Không có component MUI phù hợp thì tạo React component riêng bằng Emotion.
3. Layout/spacing nhanh dùng utility Tailwind qua `tw` của twin.macro.
4. Màu, shadow, bubble, hình cong và thông số đặc thù Figma dùng Emotion.
5. Khi customize MUI, dùng Emotion + twin.macro.
6. Một thuộc tính style chỉ có một nơi quản lý. Không để CSS cũ, `sx`, Emotion và `tw` cùng ghi đè một thuộc tính của cùng phần tử.

Ví dụ:

```tsx
const HeroLayout = styled('section')(
  tw`grid grid-cols-2 items-center`,
  {
    minHeight: 805,
    position: 'relative',
  },
);
```

`tw` lo Grid/Flex; Emotion lo các thông số đặc thù cần chính xác theo thiết kế.

## Trình tự refactor

### 0. Chốt baseline

- Giữ bản CSS hiện tại làm mốc.
- Chụp/đối chiếu Home 1 tại 1440px và các kích thước responsive trước khi refactor.
- Không đổi layout đồng thời với việc cài toàn bộ thư viện.

### 1. Chuyển TypeScript

- Chuyển `.jsx` sang `.tsx`.
- Khai báo type cho props của Button, Input, SectionHeading, ServiceCard, TeamMemberCard và dữ liệu lặp.
- Chưa đổi UI/layout ở giai đoạn này.

### 2. Dựng nền tảng chung

Tạo các phần sau:

```text
src/
├─ app/
│  └─ AppProviders.tsx       # MUI ThemeProvider
├─ theme/
│  ├─ tokens.ts              # màu, font, spacing, radius
│  └─ muiTheme.ts            # theme MUI
└─ styles/
   └─ globals.css            # Tailwind directives, reset và font chung
```

- Cài/cấu hình MUI, Emotion, Tailwind CSS và twin.macro.
- Đưa màu, font Poppins, spacing, border radius và breakpoint vào token/theme chung.

### 3. Chuyển component dùng chung

Thứ tự:

```text
Typography → Button → Input → SocialLinks → SectionHeading
```

Các component này được tái sử dụng nhiều nhất; chuyển chúng trước để không phải sửa lặp lại ở mỗi section.

### 4. Chuyển từng section Home 1

Chỉ làm section kế tiếp khi section trước đã khớp desktop 1440px:

```text
Header
→ MainSlider
→ CoreServices
→ AboutUs
→ ProfessionalTeams
→ ContactUs
→ Footer
```

Sau khi một section chuyển xong và đã kiểm tra, xoá CSS thường chỉ thuộc section đó. Không để hai hệ style cùng tồn tại lâu dài trên cùng component.

### 5. Responsive

Sau khi desktop khớp Figma, thêm breakpoint:

```text
Grid 3 cột → 1 cột
Grid 2 cột → 1 cột
Menu ngang → menu mobile
```

Không cố giữ tọa độ desktop cố định trên màn hình nhỏ.

### 6. Kiểm tra cuối

- So sánh giao diện với ảnh/design Figma tại 1440px.
- Kiểm tra tablet và mobile.
- Chạy lint, typecheck và production build.
- Đảm bảo không còn CSS thường cho component Home 1, ngoài file global bắt buộc để nạp Tailwind/reset/font.

## Điều cần tránh

- Không chuyển toàn bộ trang trong một lần.
- Không dùng `position: absolute` cho nội dung chính.
- Không dùng MUI cho mọi phần chỉ vì đã cài MUI.
- Không dùng đồng thời Emotion và styled-components.
- Không để nhiều cơ chế cùng ghi đè một style property.
HomeOnePage
├── MainSlider
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── Contact Button
│   ├── Hero content
│   │   ├── Title + description
│   │   └── More Details button
│   ├── Hero illustration
│   └── SliderPagination
├── CoreServices
│   ├── SectionHeading
│   └── ServiceCard grid (3 thẻ)
├── AboutUs
│   ├── Illustration
│   └── Content
│       ├── SectionHeading
│       └── Action row: Button + WatchVideo
├── ProfessionalTeams
│   ├── SectionHeading
│   └── TeamMemberCard grid (3 thẻ)
├── ContactUs
│   ├── Contact illustration
│   └── Contact content
│       ├── SectionHeading
│       └── Form
│           ├── First name + Last name
│           ├── Email
│           ├── Subject
│           ├── Inquiry textarea
│           └── Send button
└── Footer
    ├── Brand information
    ├── Pages links
    ├── Information links
    └── Bottom row: social links + copyright + back-to-top