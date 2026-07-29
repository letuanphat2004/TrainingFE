# Kế hoạch dự án Beautice Learning Lab

## 1. Mục tiêu

Tái tạo **toàn bộ website Beautice Beauty Clinic** từ thiết kế tham chiếu với độ chính xác cao, sau đó chuyển cùng website qua nhiều phương pháp styling để học và so sánh. Dự án có đúng **7 bản demo công nghệ**:

1. React + CSS thuần: đi theo quá trình HTML/CSS/JavaScript → React JavaScript → React TypeScript trong cùng một demo.
2. React TypeScript + Tailwind CSS.
3. React TypeScript + Material UI.
4. React TypeScript + styled-components.
5. React TypeScript + Emotion/MUI.
6. React TypeScript + twin.macro/Tailwind/Emotion.
7. React TypeScript + twin.macro/Tailwind/MUI, bao gồm customize MUI component.

HTML thuần, React JavaScript và React TypeScript là **ba mốc chuyển đổi của Demo 01**, không phải ba bản demo độc lập. Mã nguồn cuối của Demo 01 là React TypeScript; quá trình chuyển đổi được lưu bằng commit/tag và tài liệu migration.

Mỗi demo là **một website hoàn chỉnh gồm tất cả các trang**, không phải một trang đơn lẻ. Tất cả demo phải thể hiện cùng route, nội dung, asset, kích thước tham chiếu và hành vi. Khác biệt chính chỉ là công nghệ và cách tổ chức style.

## 2. Nguồn thiết kế

- File Community: `D4GfZoq69kzblUipF6ASjE`.
- Ảnh riêng hiện có: `Home 1.png` và `Home 2.png`.
- Ảnh tổng hợp toàn bộ màn hình: `Beautice - Clinic & Beauty Consultation Website Design (Community).png`, kích thước `13340 × 5003`.
- Asset gốc nằm trong thư mục `Beautice - Clinic & Beauty Consultation Website Design (Community)/`.
- File Community/Draft hiện chỉ cho connector đọc trang Figma Preview, không có layer của các frame thật. Vì vậy các PNG riêng và ảnh tổng hợp là nguồn chuẩn để đối chiếu.
- Tuyệt đối không xóa, đổi tên hay chỉnh sửa trực tiếp thư mục ảnh tham chiếu.

### Phạm vi trang của mỗi demo

Theo bộ thiết kế và ảnh tổng hợp hiện có, mỗi demo phải có đủ 8 trang:

| Route dự kiến | Trang |
|---|---|
| `/` | Home 1 |
| `/home-2` | Home 2 |
| `/about` | About |
| `/services` | Services |
| `/gallery` | Gallery |
| `/team` | Team |
| `/blog` | Blog |
| `/contact` | Contact |

Như vậy phạm vi bàn giao là **7 demo × 8 trang = 56 màn hình route**. Header, footer, button, form control và các khối lặp được tái sử dụng bên trong từng demo; không copy lại vô ích giữa các trang của cùng demo.

## 3. Quyết định kiến trúc

Sử dụng **npm workspaces** và Vite để mỗi demo chạy độc lập nhưng vẫn nằm trong một repository.

Lý do:

- Mỗi demo có dependency và cấu hình styling riêng.
- Có thể chạy, build và nộp từng demo độc lập.
- Dễ so sánh structure và bundle.
- Không làm lẫn CSS thuần, Tailwind, MUI và CSS-in-JS.
- Dùng chung nội dung và design tokens nhưng không dùng chung UI component, vì mỗi demo phải chứng minh cách chuyển đổi riêng.

## 4. Structure dự kiến

```text
TrainingReact/
├─ AGENTS.md
├─ PROJECT_PLAN.md
├─ README.md
├─ package.json
├─ package-lock.json
├─ .gitignore
├─ eslint.config.js
│
├─ reference/
│  └─ README.md
│
├─ Beautice - Clinic & Beauty Consultation Website Design (Community)/
│  └─ ... PNG gốc, giữ nguyên ...
│
├─ packages/
│  └─ design-contract/
│     ├─ package.json
│     ├─ tokens.json
│     ├─ content.json
│     └─ assets.js
│
├─ apps/
│  ├─ 01-react-css/
│  ├─ 02-react-tailwind/
│  ├─ 03-react-mui/
│  ├─ 04-react-styled-components/
│  ├─ 05-react-emotion-mui/
│  ├─ 06-react-twin-emotion/
│  └─ 07-react-twin-mui/
│
├─ docs/
│  ├─ 01-file-structure.md
│  ├─ 02-html-to-react.md
│  ├─ 03-javascript-to-typescript.md
│  ├─ 04-tailwind.md
│  ├─ 05-mui.md
│  ├─ 06-css-in-js.md
│  ├─ comparison.md
│  └─ decisions/
│     ├─ 001-workspaces.md
│     ├─ 002-design-tokens.md
│     └─ 003-twin-tailwind-version.md
│
└─ tests/
   ├─ visual/
   └─ smoke/
```

## 5. Nhiệm vụ của từng nhóm file

### Root

- `package.json`: khai báo npm workspaces và script chạy/build/check toàn bộ demo.
- `package-lock.json`: khóa phiên bản dependency để máy khác cài đúng phiên bản.
- `.gitignore`: loại trừ `node_modules`, `dist`, report và file tạm.
- `eslint.config.js`: quy tắc lint dùng chung.
- `README.md`: hướng dẫn cài đặt, chạy từng demo và bảng liên kết.
- `PROJECT_PLAN.md`: kế hoạch, trạng thái và tiêu chí nghiệm thu của dự án.
- `AGENTS.md`: yêu cầu Codex/agent đọc kế hoạch trước khi chỉnh sửa.

### `packages/design-contract`

- `tokens.json`: màu sắc, typography, spacing, radius, shadow và breakpoint đã đo từ thiết kế.
- `content.json`: toàn bộ text dùng chung để các demo không bị lệch nội dung.
- `assets.js`: ánh xạ tên có nghĩa (`heroIllustration`, `teamMember1`) tới PNG gốc.
- Không chứa React component hoặc style implementation.

### Mỗi ứng dụng Vite

```text
src/
├─ main.jsx | main.tsx
├─ App.jsx | App.tsx
├─ router/
│  └─ index.*
├─ pages/
│  ├─ HomeOnePage.*
│  ├─ HomeTwoPage.*
│  ├─ AboutPage.*
│  ├─ ServicesPage.*
│  ├─ GalleryPage.*
│  ├─ TeamPage.*
│  ├─ BlogPage.*
│  └─ ContactPage.*
├─ components/
│  ├─ common/
│  │  ├─ Logo.*
│  │  ├─ Button.*
│  │  └─ SectionHeading.*
│  └─ layout/
│     ├─ Header.*
│     └─ Footer.*
├─ sections/
│  ├─ home-one/
│  ├─ home-two/
│  ├─ about/
│  ├─ services/
│  ├─ gallery/
│  ├─ team/
│  ├─ blog/
│  └─ contact/
├─ data/
│  ├─ navigation.*
│  └─ pages/
├─ styles/ hoặc theme/
└─ types/
```

- `main.*`: điểm khởi động React, mount `App` vào DOM và đặt provider nếu công nghệ cần.
- `App.*`: đặt app shell và router cho toàn website.
- `router`: ánh xạ URL tới 8 page component, kèm trang fallback nếu route không tồn tại.
- `pages`: ghép các section thành từng trang hoàn chỉnh.
- `components/common`: component tái sử dụng nhỏ.
- `components/layout`: header, footer và container.
- `sections`: các khối lớn được phân nhóm theo từng trang đúng với thiết kế.
- `data`: dữ liệu lặp của navigation, services, team, gallery, blog và các trang.
- `styles`: CSS thuần hoặc global reset.
- `theme`: theme MUI/Emotion/styled-components/Tailwind.
- `types`: interface/type dùng chung trong ứng dụng TypeScript.
- `vite.config.*`: plugin Vite, alias và cấu hình build.
- `tsconfig*.json`: luật TypeScript; build phải chạy type-check riêng vì Vite chỉ transpile TypeScript.

## 6. Danh sách demo và ràng buộc

### Demo 01 — React + CSS thuần

Mục đích:

- Bắt đầu từ HTML/CSS/JavaScript thuần để hiểu semantic HTML, layout, responsive và JavaScript menu.
- Convert HTML thành component React.
- Tạo routing và triển khai đủ 8 trang.
- Hiểu props, array rendering, state menu và event handler.
- Sau khi bản React JavaScript khớp thiết kế, chuyển chính demo này sang TypeScript.
- Viết rõ type cho props, navigation, service, team member và form.

Ràng buộc:

- Bản cuối dùng `.tsx`; giai đoạn trung gian dùng `.jsx`.
- CSS thuần, không CSS-in-JS.
- Không copy nguyên một page component lớn; phải chia theo layout, page và section.
- Không dùng `any`.
- Dùng `import type`.
- Script `typecheck` chạy `tsc --noEmit`.
- Ghi lại quá trình HTML → React JS → React TS trong commit/tag và tài liệu; không tạo thêm demo để tính số lượng.

### Demo 02 — React TypeScript + Tailwind CSS

Mục đích:

- Chuyển toàn bộ CSS của 8 trang thành utility class.
- Học responsive mobile-first, arbitrary values và theme tokens.

Ràng buộc:

- Dùng Tailwind CSS 4 và plugin Vite chính thức `@tailwindcss/vite`.
- Chỉ giữ file CSS để `@import "tailwindcss"` và khai báo token/font thực sự cần thiết.
- Không giữ lại các selector layout từ Demo 01.
- Class lặp nhiều phải được gom thành React component, không dùng `@apply` để tái tạo một stylesheet CSS cũ.

### Demo 03 — React TypeScript + Material UI

Mục đích:

- Dùng MUI component (`Box`, `Container`, `Stack`, `Grid`, `Typography`, `Button`, `TextField`) trên toàn bộ 8 trang.
- Hiểu theme, `sx`, breakpoint và component override.

Ràng buộc:

- MUI dùng Emotion mặc định.
- Toàn bộ màu/font/radius/shadow nằm trong `createTheme`.
- Không viết stylesheet CSS cho section.
- Chỉ cho phép global font import/reset tối thiểu.
- Component MUI phải được customize để giống Beautice, không giữ giao diện Material mặc định.

### Demo 04 — React TypeScript + styled-components

Mục đích:

- Chuyển toàn bộ CSS của 8 trang sang styled component.
- Học transient props, theme typing, global style và responsive.

Ràng buộc:

- Dùng styled-components 6 ổn định.
- TypeScript type có sẵn trong package; không cài `@types/styled-components`.
- Dùng `ThemeProvider`, `createGlobalStyle`.
- Dynamic styling dùng transient prop bắt đầu bằng `$`.

### Demo 05 — React TypeScript + Emotion/MUI

Mục đích:

- So sánh `@emotion/styled`, Emotion `css` prop và `styled()` của MUI.
- Thử kết hợp styled-components/Emotion với MUI theo yêu cầu bài.

Nội dung:

- MUI vẫn dùng Emotion làm styled engine mặc định.
- Một nhóm component dùng `@emotion/styled`.
- Một nhóm component MUI được customize bằng `styled` từ `@mui/material/styles`.
- Tạo trang/section comparison nhỏ cho thấy cùng Button được style bằng `sx`, Emotion và MUI `styled`.

Ghi chú:

- Nếu cần minh họa styled-components bọc MUI component, thực hiện một spike nhỏ và ghi kết quả.
- Không đổi toàn bộ MUI sang `@mui/styled-engine-sc` trong demo chính; tài liệu MUI cảnh báo cấu hình này phức tạp hơn và khuyến nghị Emotion, đặc biệt với SSR.

### Demo 06 — React TypeScript + twin.macro + Tailwind + Emotion

Mục đích:

- Dùng cú pháp Tailwind trong CSS-in-JS.
- So sánh utility Tailwind thông thường với `tw`, `css` và `styled`.

Ràng buộc:

- Khóa `twin.macro@3.4.1`.
- Khóa Tailwind CSS `3.4.x` cho demo twin.
- Dùng Emotion làm CSS-in-JS runtime.
- Cấu hình Babel macro theo example Vite chính thức của repository twin.macro.
- Không nâng Tailwind 4 trong demo này nếu chưa có xác nhận tương thích và test build.

### Demo 07 — React TypeScript + twin.macro + MUI

Mục đích:

- Kết hợp MUI, Emotion và utility từ twin.macro.
- Customize MUI component bằng twin.macro.

Nội dung bắt buộc:

- `tw(MuiButton)` hoặc `styled(MuiButton)` kết hợp `tw`.
- Customize `TextField`, `Button` và một card/section MUI.
- Theme MUI vẫn là nguồn token chính; Tailwind config đồng bộ màu và breakpoint với theme.
- Có tài liệu nêu rõ thứ tự ưu tiên style: MUI theme → component override → twin style → prop động.

Demo 07 đồng thời đáp ứng:

1. Emotion/styled + MUI + Tailwind qua twin.macro.
2. Customize MUI component bằng twin.macro.

## 7. Chiến lược pixel accuracy cho toàn website

### Chuẩn tham chiếu

- Desktop chính: `1440px`.
- `Home 1.png`: `1440 × 4989`.
- `Home 2.png`: `1440 × 4897`.
- Sáu trang còn lại phải được tách thành ảnh tham chiếu riêng từ ảnh tổng hợp hoặc export trực tiếp từ Figma trước khi nghiệm thu.
- Font dự kiến: Poppins; phải xác nhận weight từng text.
- Container, section height và asset position được đo riêng cho từng trang.

### Quy trình

1. Lập manifest cho 8 trang: route, ảnh tham chiếu, chiều rộng, chiều cao và section.
2. Tách ảnh tham chiếu riêng cho About, Services, Gallery, Team, Blog và Contact.
3. Ghi kích thước đo được vào `tokens.json`, `content.json`, asset registry và tài liệu.
4. Làm lần lượt 8 trang của Demo 01, bắt đầu từ Home 1.
5. Chụp screenshot từng route tại 1440px.
6. So sánh từng screenshot bằng overlay/diff với ảnh chuẩn tương ứng.
7. Chỉnh theo thứ tự:
   - tổng chiều cao và section boundary;
   - container và alignment;
   - typography;
   - ảnh/background;
   - spacing;
   - shadow, radius, icon.
8. Chỉ bắt đầu demo công nghệ tiếp theo khi đủ 8 route của baseline được nghiệm thu.

### Responsive

Không có frame mobile chuẩn nên responsive được suy luận có kiểm soát:

- `375 × 812`
- `768 × 1024`
- `1024 × 768`
- `1440 × 900`
- `1920 × 1080`

Không được làm méo asset để lấp màn hình. Background và content container phải là hai lớp riêng.
Mỗi viewport phải được kiểm tra trên toàn bộ 8 route, không chỉ trang chủ.

## 8. Lộ trình thực hiện

### Phase 0 — Khởi tạo và đo design

- Tạo npm workspace.
- Giữ nguyên ảnh nguồn.
- Kiểm kê đủ 8 trang và tạo reference crop/manifest.
- Tạo tokens/content/assets/routes registry.
- Ghi tài liệu file structure.
- Tạo checklist pixel accuracy theo từng route.

Điểm dừng: chưa code UI khi chưa xác định đầy đủ route, section và asset của cả website.

### Phase 1 — Demo 01: HTML → React JS → React TS

- Dựng đủ 8 trang bằng HTML/CSS/JavaScript thuần như mốc khởi đầu.
- Test semantic/accessibility cơ bản.
- Convert trong cùng Demo 01 sang React JavaScript.
- Thiết lập router và navigation giữa các trang.
- Đạt visual baseline cho 8 trang rồi chuyển `.jsx` thành `.tsx`.
- Thêm type, typecheck và tài liệu HTML → React → TypeScript.
- Dùng commit/tag để lưu các mốc chuyển đổi thay vì tạo ba ứng dụng.

Điểm nghiệm thu: Demo 01 có đủ 8 route khớp thiết kế desktop, navigation hoạt động, mã cuối là TypeScript và `typecheck` sạch.

### Phase 2 — Tailwind

- Tạo Demo 02 từ TSX của Demo 01.
- Chuyển style theo từng trang và từng section, không paste tất cả một lần.
- Xóa CSS thường sau khi toàn bộ 8 trang đã đối chiếu.

Điểm nghiệm thu: đủ 8 route và không còn CSS layout/component cũ.

### Phase 3 — MUI

- Tạo Demo 03 từ cấu trúc và nội dung của Demo 01.
- Tạo theme Beautice.
- Chuyển primitive của toàn bộ 8 trang sang MUI component.
- Customize bằng `sx`, variant và theme override.

Điểm nghiệm thu: đủ 8 route, UI giống thiết kế và không mang vẻ Material mặc định.

### Phase 4 — CSS-in-JS

Theo thứ tự:

1. Demo 04 styled-components.
2. Demo 05 Emotion + MUI.
3. Demo 06 twin.macro + Emotion.
4. Demo 07 twin.macro + MUI + customize MUI.

Mỗi demo phải đủ 8 route và build riêng trước khi sang demo kế tiếp.

### Phase 5 — So sánh và bàn giao

- Viết `docs/comparison.md`.
- So sánh dependency, cách viết, bundle, ưu/nhược điểm và độ khó.
- Chạy toàn bộ build/typecheck/lint/smoke/visual.
- Hoàn thiện README hướng dẫn.

## 9. Kiểm thử và tiêu chí hoàn thành

Mỗi demo được xem là hoàn thành khi:

- Chạy được bằng script riêng.
- Production build thành công.
- Không có lỗi console.
- Có đủ 8 route và điều hướng đúng giữa các trang.
- TypeScript demo chạy `tsc --noEmit` không lỗi.
- Không thiếu ảnh hoặc dùng URL ảnh tạm.
- Header menu, anchor navigation, form interaction và nút back-to-top hoạt động.
- Có alt text, label form và keyboard focus.
- Không có horizontal overflow ở các viewport kiểm tra.
- Cả 8 route ở desktop 1440px vượt qua visual review.
- Công nghệ styling đúng ràng buộc, không “lén” giữ CSS từ demo trước.

Script root dự kiến:

```json
{
  "scripts": {
    "dev:css": "...",
    "dev:tailwind": "...",
    "dev:mui": "...",
    "dev:styled": "...",
    "dev:emotion-mui": "...",
    "dev:twin-emotion": "...",
    "dev:twin-mui": "...",
    "build:all": "...",
    "typecheck": "...",
    "lint": "...",
    "test:smoke": "...",
    "test:visual": "..."
  }
}
```

## 10. Rủi ro và cách xử lý

### Figma không có layer thật

- Dùng PNG và asset làm nguồn chuẩn.
- Không tự nhận là pixel-perfect nếu chưa có screenshot diff.
- Tách reference crop cho từng trang từ ảnh tổng hợp; ưu tiên ảnh export riêng nếu được cung cấp.
- Nếu sau này có file `.fig` đầy đủ, cập nhật tokens chứ không viết lại tùy tiện.

### twin.macro và Tailwind 4

- Tailwind 4 là lựa chọn cho demo Tailwind thuần.
- twin.macro mới nhất trong repository là 3.4.1 và tài liệu thảo luận chưa xác nhận Tailwind 4.
- Khóa Tailwind 3.4.x trong Demo 06/07.
- Ghi phiên bản và lý do trong ADR.

### MUI làm sai visual

- Không dùng component mặc định rồi coi là hoàn thành.
- Theme, `components.styleOverrides`, variants và `sx` phải tái tạo token Beautice.

### Quá nhiều code trùng

- Chấp nhận trùng UI implementation giữa các demo vì đây là bài so sánh công nghệ.
- Chỉ chia sẻ content, token và asset registry.
- Không chia sẻ styled component giữa các demo.

### Sai khác giữa các demo

- Toàn bộ 8 route của Demo 01 TypeScript CSS là implementation chuẩn.
- Mỗi route của demo sau phải so sánh screenshot với route tương ứng trong Demo 01 và ảnh Figma.

## 11. Thứ tự ưu tiên khi tiếp tục

1. Không tạo đồng thời tất cả demo.
2. Khởi tạo workspace và tài liệu structure.
3. Dựng đủ 8 trang của Demo 01 từ HTML/CSS/JavaScript, bắt đầu với Home 1.
4. Convert Demo 01 sang React JavaScript và đạt visual baseline cho toàn website.
5. Chuyển chính Demo 01 sang TypeScript.
6. Làm lần lượt 6 demo styling còn lại.

## 12. Tài liệu kỹ thuật tham khảo

- [Vite Getting Started](https://vite.dev/guide/)
- [Vite TypeScript behavior](https://vite.dev/guide/features.html#typescript)
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [Material UI](https://mui.com/material-ui/)
- [MUI styled utility](https://mui.com/system/styled/)
- [MUI style interoperability](https://mui.com/material-ui/integrations/interoperability/)
- [MUI with styled-components](https://mui.com/material-ui/integrations/styled-components/)
- [styled-components basics](https://styled-components.com/docs/basics)
- [styled-components TypeScript API](https://styled-components.com/docs/api)
- [Emotion styled](https://emotion.sh/docs/styled)
- [Emotion TypeScript](https://emotion.sh/docs/typescript)
- [twin.macro repository and Vite examples](https://github.com/ben-rogerson/twin.macro)

## 13. Trạng thái

- [x] Nhận và phân tích yêu cầu.
- [x] Nghiên cứu tài liệu chính thức.
- [x] Chốt structure và phiên bản chiến lược.
- [x] Lập kế hoạch.
- [x] Phase 0 — workspace và design contract.
- [ ] Phase 1 — Demo 01: HTML → React JS → React TS.
- [ ] Phase 2 — Tailwind.
- [ ] Phase 3 — MUI.
- [ ] Phase 4 — CSS-in-JS/twin.
- [ ] Phase 5 — kiểm thử và bàn giao.

### Kết quả Phase 0

- npm workspace và Git repository đã được khởi tạo.
- 8 route chuẩn đã được định nghĩa trong `packages/design-contract`.
- 8 ảnh desktop đã được tách từ ảnh tổng hợp và kiểm tra kích thước.
- 100 asset gốc đã được lập inventory kèm kích thước, SHA-256 và nhóm file trùng.
- Design tokens, shared content, semantic asset mapping và reference manifest đã được tạo.
- Tài liệu file structure, design inventory, ADR và visual checklist đã được viết.
- `npm run validate:phase0` đã vượt qua.
- Figma connector trả `INVALID_ARGUMENT` cho node gốc/metadata; PNG gốc là nguồn chuẩn hiện tại.
