# Kế hoạch dự án Beautice Learning Lab

> Bản kế hoạch làm lại, có hiệu lực từ ngày 30/07/2026. Những implementation
> cũ vẫn còn trong lịch sử Git nhưng không còn là baseline để tiếp tục phát
> triển.

## 1. Mục tiêu

Tái tạo website Beautice Beauty Clinic với độ chính xác cao so với thiết kế,
sau đó triển khai cùng website bằng 7 phương pháp styling để học và so sánh:

1. React + CSS thuần. Quá trình học đi qua HTML/CSS/JavaScript thuần, React
   JavaScript và kết thúc bằng React TypeScript trong cùng Demo 01.
2. React TypeScript + Tailwind CSS.
3. React TypeScript + Material UI.
4. React TypeScript + styled-components.
5. React TypeScript + Emotion/MUI.
6. React TypeScript + twin.macro/Tailwind/Emotion.
7. React TypeScript + twin.macro/Tailwind/MUI, bao gồm customize MUI component.

Mỗi demo là một website hoàn chỉnh gồm 8 route:

| Thứ tự | Route | Trang |
|---:|---|---|
| 1 | `/` | Home 1 |
| 2 | `/home-2` | Home 2 |
| 3 | `/about` | About |
| 4 | `/services` | Services |
| 5 | `/gallery` | Gallery |
| 6 | `/team` | Team |
| 7 | `/blog` | Blog |
| 8 | `/contact` | Contact |

Phạm vi cuối cùng vẫn là **7 demo × 8 trang = 56 route implementation**.

## 2. Trạng thái workspace hiện tại

Theo quyết định làm lại từ đầu:

- Toàn bộ implementation và kết quả test cũ đã được xóa khỏi working tree.
- Workspace monorepo tối thiểu và app `01-react-css` đã được khởi tạo lại theo
  kiến trúc phân tầng mới.
- `Button` dùng chung và component `SiteHeader` đã được dựng; desktop visual diff
  của Header vẫn đang chờ nghiệm thu.
- `.git` và lịch sử commit cũ được giữ lại để có thể tham khảo hoặc khôi phục.
- `AGENTS.md` và `PROJECT_PLAN.md` được giữ làm tài liệu điều phối.
- Thư mục ảnh gốc
  `Beautice - Clinic & Beauty Consultation Website Design (Community)/` được
  giữ nguyên với 100 file.
- Thư mục `reference/` được giữ nguyên với ảnh desktop, manifest và dữ liệu đối
  chiếu hiện có.

Các commit cũ chỉ là lịch sử học tập, không có nghĩa Phase 1 hiện tại đã hoàn
thành:

```text
5d45bde  phase-1-react-ts
a454cba  React JavaScript
427966b  HTML/CSS/JavaScript baseline
f853dc9  Phase 0 inventory
```

## 3. Nguồn thiết kế và nguyên tắc bảo toàn

- Figma Community file: `D4GfZoq69kzblUipF6ASjE` chỉ được lưu như định danh
  nguồn thiết kế.
- Desktop Home 1 chuẩn: `1440 × 4989px`.
- Desktop Home 2 chuẩn: `1440 × 4897px`.
- Các ảnh chuẩn desktop khác nằm trong `reference/screens/desktop/`.
- Asset gốc nằm trong
  `Beautice - Clinic & Beauty Consultation Website Design (Community)/`.
- Không gọi Figma connector, không đọc node Figma và không phụ thuộc quyền truy
  cập Figma trong quá trình triển khai.
- Ảnh reference local, asset gốc, manifest và thông số do người dùng cung cấp là
  nguồn chuẩn duy nhất để code và đối chiếu.
- Không xóa, đổi tên, ghi đè hoặc chỉnh sửa trực tiếp asset gốc.
- Asset dùng trong app phải được copy sang app bằng tên giữ nguyên hoặc thông
  qua asset registry; không sửa file nguồn.
- Không tuyên bố pixel-perfect nếu chưa có screenshot diff ở đúng viewport.

## 4. Quyết định kiến trúc mới

### 4.1. Kiến trúc phân tầng dài hạn

Kiến trúc được thiết kế cho toàn bộ phạm vi 7 demo × 8 trang ngay từ đầu.
Thứ tự làm từng trang chỉ là chiến lược triển khai, không phải cách chia kiến
trúc.

Workspace sử dụng mô hình monorepo:

```text
TrainingReact/
├─ apps/                     7 website độc lập theo kỹ thuật styling
├─ packages/                 content, token và asset mapping dùng chung
├─ reference/                dữ liệu local và ảnh đối chiếu
├─ tooling/                  cấu hình và script dùng cho phát triển
├─ tests/                    smoke, visual và accessibility
└─ docs/                     tài liệu kiến trúc và quyết định
```

Mỗi app sử dụng cấu trúc React quen thuộc, phân loại source theo trách nhiệm:

```text
src/
├─ app/          Bootstrap ứng dụng
├─ assets/       Ảnh, icon và font dùng trong source
├─ components/   Common UI, layout và component đặc thù trang
├─ constants/    Token, navigation và asset mapping
├─ hooks/        Custom React hook
├─ layouts/      Khung bố cục dùng lại giữa nhiều route
├─ pages/        Component tương ứng route
├─ routes/       Khai báo route khi ứng dụng có nhiều route
├─ services/     API/service khi có backend
├─ store/        Global state khi thực sự cần
├─ styles/       Reset và global style
├─ types/        Kiểu TypeScript sau checkpoint chuyển đổi
└─ utils/        Hàm tiện ích thuần
```

Trách nhiệm của từng tầng:

| Tầng | Trách nhiệm |
|---|---|
| `app` | Bootstrap ứng dụng và ghép route/page |
| `pages` | Route, page canvas, background cấp trang và ghép component |
| `components/common` | UI tái sử dụng như Button, Input, Icon và Logo |
| `components/layout` | Header, Footer hoặc layout dùng ở nhiều page |
| `components/home-one` | Component chỉ thuộc Home 1 |
| `constants` | Token, link menu và asset mapping |
| `services`, `store`, `routes`, `guards` | Chỉ tạo khi ứng dụng thật sự cần API, state, route hoặc auth |

Page chỉ ghép component, component common không được import page, và component
layout không được phụ thuộc vào một page cụ thể. Không tạo trước thư mục trống
cho API, store, guard hoặc page chưa đến lượt làm.

Giữa các demo chỉ chia sẻ content, design token và asset mapping thông qua
`packages/design-contract`. Không chia sẻ React component hoặc styling
implementation để bảo đảm mỗi demo thật sự thể hiện đúng kỹ thuật được giao.

Tài liệu chi tiết:

- `docs/architecture.md`
- `docs/folder-structure.md`

### 4.2. Làm tuần tự từng trang

Không scaffold hoặc triển khai đồng thời tất cả các trang.

Thứ tự bắt buộc:

1. Hoàn thiện Home 1.
2. Nghiệm thu Home 1 desktop và responsive.
3. Làm Home 2.
4. Tiếp tục About, Services, Gallery, Team, Blog và Contact.
5. Chỉ bắt đầu demo công nghệ tiếp theo sau khi đủ 8 trang của demo hiện tại.

Trong một trang cũng làm tuần tự từng component; component hiện tại phải được
đo, dựng và kiểm tra trước khi sang component kế tiếp.

### 4.3. Page canvas và component frame

Mỗi trang có một page canvas làm hệ tọa độ gốc. Ví dụ Home 1:

```css
.home-one-page {
  position: relative;
  isolation: isolate;
  width: 1440px;
  height: 4989px;
  margin-inline: 0;
  overflow: hidden;
  background: #ffffff;
}
```

Tại viewport desktop chuẩn `1440px`:

- Page canvas có kích thước cố định đúng frame Figma.
- Component cấp cao được đặt bằng tọa độ và kích thước frame Figma.
- Mỗi component tạo một hệ tọa độ cục bộ cho các phần tử con.
- Giữ nguyên số thập phân khi thông số reference cung cấp số đo subpixel.

Ví dụ:

```tsx
<main className="home-one-page">
  <SharedDecoration />
  <SiteHeader />
  <MainSlider />
  <CoreServices />
  <About />
  <ProfessionalTeams />
  <Contact />
  <Footer />
</main>
```

```css
.site-header {
  position: absolute;
  top: 41px;
  left: 50%;
  width: 1140px;
  height: 63px;
  transform: translateX(-50%);
}

.site-header__brand { position: absolute; top: 0; left: 0; }
.site-header__navigation { position: absolute; top: 17px; left: 449px; }
.site-header__contact { position: absolute; top: 4px; left: 982px; }
```

Site Header dùng frame ngoài để căn giữa trong page canvas; phần tử con sử dụng
tọa độ cục bộ trong frame. Tổng hai loại tọa độ phải bằng thông số toàn trang
trong bảng đo.

### 4.4. Không quản lý bố cục bằng chuỗi section height

Không đặt các khối lớn nối tiếp nhau rồi dùng `min-height`, margin và padding
để đẩy toàn bộ phần phía dưới. Cách đó khiến một sai lệch nhỏ ở component trên
làm lệch tất cả component phía sau.

Code được quản lý theo component:

```text
HomeOnePage
├─ SiteHeader
├─ MainSlider
├─ CoreServices
├─ About
├─ ProfessionalTeams
├─ Contact
└─ Footer
```

Component có thể dùng thẻ semantic như `<header>`, `<section>`, `<form>` hoặc
`<footer>`, nhưng semantic HTML không được dùng làm cơ chế quyết định tọa độ
toàn trang.

### 4.5. Flex/Grid bên trong component

Frame ngoài của component được đặt chính xác theo thông số reference. Bên trong frame:

- Dùng Flexbox cho hàng/cột một chiều.
- Dùng CSS Grid cho card grid và bố cục hai chiều.
- Desktop khai báo width, height, gap, padding và `flex-basis` chính xác.
- Không dùng `space-between` nếu thông số reference đã có gap cụ thể.
- Absolute positioning chỉ dùng khi phần tử thực sự chồng lớp hoặc cần tọa độ
  cục bộ độc lập.
- Ảnh phải có width, height và `object-fit` đúng thiết kế.

Flex/Grid không làm mất pixel-perfect nếu các constraint đầu vào được đo chính
xác.

### 4.6. Nền trắng và ảnh trang trí dùng chung

Không tạo `BackgroundLayer` chỉ để hiển thị màu trắng. Màu trắng thuộc CSS của
page canvas.

Quy tắc sở hữu layer:

| Loại phần tử | Nơi đặt |
|---|---|
| Màu nền trắng của trang | CSS của page canvas |
| Ảnh/shape chỉ thuộc một component | Bên trong component đó |
| Ảnh/shape trang trí đi qua từ hai component trở lên | Trực tiếp trong page component |
| Text, button, link, form hoặc nội dung có ý nghĩa | Component nội dung tương ứng |
| Overlay nổi trên nhiều component | Page root với z-index riêng |

Ví dụ bubble đi qua Core Services và About:

```tsx
<main className="home-one-page">
  <img
    className="services-about-bubble"
    src="/assets/Background Bubble-3.png"
    alt=""
    aria-hidden="true"
  />
  <CoreServices />
  <About />
</main>
```

Ảnh trang trí dùng chung sử dụng tọa độ toàn trang, `pointer-events: none` và
`aria-hidden="true"`.

### 4.7. Z-index

Mỗi page canvas tạo stacking context bằng `isolation: isolate`.

Quy ước ban đầu:

```text
0–9    Shared decoration
10–19  Content component
20–29  Header/navigation
30–39  Overlay, modal hoặc menu mở
```

Không dùng z-index tùy tiện ngoài quy ước nếu chưa ghi lý do.

## 5. Chiến lược responsive

Pixel-perfect và responsive dùng hai chế độ layout, không dùng một bộ tọa độ
cố định cho mọi màn hình.

### Desktop chuẩn

- Nghiệm thu pixel-perfect tại `1440px`.
- Page canvas cố định theo kích thước reference.
- Component frame dùng absolute positioning.
- Component con dùng Flex/Grid với số đo chính xác.

### Dưới 1440px

- Page canvas chuyển thành `width: 100%`, `height: auto`.
- Component cấp cao chuyển về normal flow.
- Bỏ `top`, `left`, width và height cố định không còn phù hợp.
- Flex/Grid được phép wrap, đổi số cột hoặc xếp dọc.
- Shared decoration được resize, reposition hoặc ẩn nếu chỉ mang tính trang trí.
- Không scale toàn bộ canvas 1440px để giả lập responsive.

Khung CSS định hướng:

```css
@media (min-width: 1440px) {
  .page-component {
    position: absolute;
  }
}

@media (max-width: 1439px) {
  .home-one-page {
    width: 100%;
    height: auto;
  }

  .page-component {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    height: auto;
  }
}
```

Viewport kiểm tra:

```text
375 × 812
768 × 1024
1024 × 768
1280 × 800
1440 × 900
1920 × 1080
```

Nếu chưa có frame mobile reference, mobile chỉ được đánh giá là responsive hợp lý,
không được gọi là mobile pixel-perfect.

## 6. Structure dự kiến

Kiến trúc đích được xác định cho cả dự án, nhưng chỉ tạo source của demo và
trang đang làm. Không scaffold trước cả 7 app.

```text
TrainingReact/
├─ AGENTS.md
├─ PROJECT_PLAN.md
├─ package.json
├─ package-lock.json
├─ reference/
├─ Beautice - Clinic & Beauty Consultation Website Design (Community)/
├─ apps/
│  └─ 01-react-css/
├─ packages/
│  └─ design-contract/
├─ docs/
├─ tooling/
└─ tests/
   ├─ smoke/
   ├─ visual/
   └─ accessibility/
```

Kiến trúc bên trong một app:

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

Page là tầng ghép component, không chứa chi tiết của card, button hoặc form.
`components/layout` chứa Header/Footer tái sử dụng, `components/common` chứa UI
nhỏ tái sử dụng, còn component chỉ dành cho một page nằm ở thư mục page đó.

Không tạo thư mục rỗng để mô phỏng kiến trúc. Thư mục chỉ xuất hiện khi có file
thật và trách nhiệm rõ ràng.

### Frame registry

Tọa độ cấp cao không được lặp lại ở nhiều file. Chúng được lưu trong một frame
registry có type:

```ts
export interface DesignFrame {
  left: number;
  top: number;
  width: number;
  height: number;
  rotation?: number;
  opacity?: number;
}
```

CSS có thể nhận giá trị qua CSS custom properties hoặc class riêng. Không tạo
component abstraction quá phức tạp nếu chỉ làm code khó đọc hơn.

## 7. Home 1 — baseline đầu tiên

### 7.1. Frame cấp cao đã đo

| Component/frame | Left | Top | Width | Height |
|---|---:|---:|---:|---:|
| Home 1 | `0` | `0` | `1440` | `4989` |
| Site Header | `150` | `41` | `1140` | `63` |
| Main Slider | `0` | `0` | `1286.5` | `805` |
| Core Services | `150` | `936` | `1140` | `732` |
| About Us | `150` | `1448` | `1291.1458740234375` | `1028.8857421875` |
| Professional Teams | `178` | `2344` | `1085` | `861` |
| Contact Us | `-0.33` | `3142` | `1290.327392578125` | `1072` |
| Site Footer | `0` | `4283.66` | `1440` | `705.342041015625` |

Nếu thông số do người dùng cung cấp không có Top hoặc Left thì giá trị đó được
hiểu là `0`.

### 7.2. Site Header đã đo

| Component con | Left toàn trang | Top toàn trang | Left trong Header | Top trong Header | Width | Height |
|---|---:|---:|---:|---:|---:|---:|
| Main Logo | `150` | `41` | `0` | `0` | `258` | `63` |
| Main Menu | `599` | `58` | `449` | `17` | `481` | `25` |
| Home | `599` | `59` | `449` | `18` | `66` | `24` |
| About | `710` | `58` | `560` | `17` | `55` | `24` |
| Service | `810` | `59` | `660` | `18` | `69` | `24` |
| Gallery | `925` | `59` | `775` | `18` | `67` | `24` |
| Blog | `1039` | `59` | `889` | `18` | `41` | `24` |
| Contact Button | `1132` | `45` | `982` | `4` | `158` | `52` |

Thông số bổ sung:

- Main Menu có border width `1px`; màu và style chưa đo.
- Contact Button có border radius `50px`.

### 7.3. Main Slider đã đo một phần

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Frame 1 (`Frame 1.png`) | `685` | `263` | `601.5` | `397.5` |
| Title | `189` | `316` | `430` | `128` |
| Description | `189` | `444` | `474` | `54` |
| More Details Button | `189` | `526` | `200` | `58.36` |
| Slide Button | `685` | `796.85` | `71` | `8.15` |
| Slide Background (`Background Bubble-1.png`, lật ngang) | `0` | `0` | `1266.42` | `743` |

Typography đã đo:

- Title: Poppins `600`, `48px`, line-height `125%`, letter-spacing `0%`, `#091156`.
- Description: Poppins `500`, `16px`, line-height `100%`, letter-spacing `10%`, `#091156`.
- Slide Background: dùng `Background Bubble-1.png`, lật ngang.

### 7.4. Core Services đã đo một phần

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Title & Desc. | `296` | `936` | `848` | `192` |
| Service Card Left | `150` | `1210` | `343` | `458` |
| Service Card Mid | `549` | `1210` | `343` | `458` |
| Service Card Right | `947` | `1210` | `343` | `458` |

Assets card theo thứ tự trái sang phải: `Animation1-1.png`, `Animation2-1.png`,
`Animation3-1.png`. Chi tiết vị trí/kích thước ảnh và typography trong card chờ
đo bổ sung. Core Services sẽ dùng một `ServiceCard` chung với dữ liệu từng card;
`Main Services` là eyebrow prop, không dùng React state.

Title & Desc. bên trong Core Services:

| Text | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Main Services | `664` | `936` | `113` | `20` |
| Learn services to focus on your beauty | `354` | `968` | `732` | `97` |
| Description | `296` | `1077` | `848` | `51` |

### 7.5. About Us đã đo một phần

About Us là component riêng của Home 1. `SectionHeading` và `Button` tiếp tục là
component dùng chung; `WatchVideo` là component common mới. `Background Bubble-3.png`
là trang trí dùng chung, được đặt tại page root vì nó đi qua About Us và phần kế tiếp.

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Title & Desc. | `150` | `1802.44` | `664` | `292` |
| About Us eyebrow | `151` | `1802.44` | `73` | `20` |
| Heading | `150` | `1834.44` | `664` | `52` |
| Description | `150` | `1898.44` | `483` | `196` |
| Clinic image (`unsplash_LRXYS0tSyGc.png`) | `814` | `1847` | `476` | `350` |
| Learn More Button | `150` | `2143.44` | `200` | `58.36` |
| Watch Video | `394` | `2148.44` | `213` | `49` |
| Watch Video play button | `394` | `2148.44` | `49` | `49` |
| Watch Video label | `456` | `2159.44` | `151` | `27` |
| Background Bubble-3 | `493` | `1448` | `948.15` | `1028.89` |

Typography đã đo: eyebrow Poppins `600` / `16px` / `125%`; heading Poppins
`600` / `36px` / `125%` / `#091156`; description Poppins `400` / `16px` /
`100%` / letter-spacing `10%`; Watch Video label Poppins `600` / `16px` /
`100%` / letter-spacing `10%` / `#8B8B8B`. Ảnh có radius `50px`, shadow
`0 0 50px 25px #C4C4C4`; độ mờ shadow chưa được đo nên phải xác nhận bằng
visual diff.

### 7.6. Professional Teams đã đo một phần

Professional Teams giữ vai trò layout Home 1. Mỗi người dùng `TeamMemberCard`
common; cụm Twitter/Facebook/Instagram dùng `SocialLinks` common. Ảnh theo thứ
tự trái/giữa/phải: `unsplash_pTrhfmj2jDA-1.png`,
`unsplash_FVh_yqLR9eA-1.png`, `unsplash_mEZ3PoFGs_k.png`.

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Title & Desc. | `296` | `2344` | `848` | `148` |
| Professional Teams eyebrow | `640` | `2344` | `160` | `20` |
| Heading | `354` | `2376` | `732` | `53` |
| Description | `296` | `2441` | `848` | `51` |
| Card trái | `178` | `2670` | `270` | `439` |
| Card phải | `993` | `2670` | `270` | `439` |
| Ảnh trái | `240` | `2670` | `146` | `146` |
| Tên Briyan Nevalli | `182` | `2904` | `263` | `37` |
| Mô tả trái | `178` | `2947` | `270` | `63` |
| Social Twitter / Facebook / Instagram | `206` / `289` / `372` | `3060` | `49` | `49` |
| Nền card giữa | `508` | `2579` | `424` | `626` |

Nền card giữa: `#FFFFFF`, radius `42px`, shadow `0 25px 50px 25px #F6F7FF`.
Toạ độ card giữa được suy ra từ nền card: nội dung bắt đầu ở `586, 2670`; cần
desktop visual diff để xác nhận trước khi coi là perfect pixel.

### 7.7. Contact Us đã đo một phần

Contact Us dùng `SectionHeading` và `Button` common; `Input` là component common
chỉ render form control cơ bản. Toàn bộ visual của field nằm ở Contact Us.

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Title & Desc. | `770` | `3349` | `497` | `169` |
| Contact animation | `150` | `3508` | `520` | `614` |
| Contact form | `770` | `3562` | `520` | `652` |
| First name | `770` | `3562` | `242.21` | `61.58` |
| Last name | `1047.79` | `3562` | `242.21` | `61.58` |
| Email | `770` | `3661.89` | `520` | `61.58` |
| Subject | `770` | `3761.79` | `520` | `61.58` |
| Inquiry | `770` | `3861.68` | `520` | `239.47` |
| Send Message | `771` | `4156` | `248` | `58` |
| Background Bubble-2 (xoay `-180°`) | `-0.33` | `3142` | `1175.73` | `929` |

Field có border `1px #D9DDFE`, radius `15px`; Send Message radius `50px`.

### 7.8. Site Footer đã đo một phần

`SiteFooter` là layout reusable cho tất cả tám trang. Thành phần nội bộ gồm
`FooterBrand`, `FooterLinkGroup`, `FooterSocialLinks` và Back To Top; chúng chỉ
phục vụ Footer, không làm ảnh hưởng common social link của Professional Teams.

| Component con | Left toàn trang | Top toàn trang | Width | Height |
|---|---:|---:|---:|---:|
| Footer BG | `0` | `4283.66` | `1440` | `705.34` |
| Brand / Sidebar | `150` | `4525` | `492` | `191` |
| Footer Logo | `150` | `4525` | `258` | `63` |
| Pages | `771` | `4509` | `131` | `219` |
| Informations | `1075` | `4509` | `215` | `184` |
| Social links | `150` | `4870` | `305` | `27.84` |
| To Top | `1339` | `4783` | `36` | `36` |
| Copyright | `793` | `4868.05` | `497` | `31.18` |

Bottom background nằm ở `0, 4864`, `1440 × 125`, màu `#0D165C`. Twitter và
Instagram là SVG code-native vì không có asset gốc.

### 7.9. Thứ tự triển khai component

- [ ] Page canvas trắng `1440 × 4989`.
- [ ] Shared decorations của Home 1.
- [ ] Site Header (đã code; chờ desktop visual diff).
- [ ] Main Slider.
- [ ] Core Services.
- [ ] About Us.
- [ ] Professional Teams.
- [ ] Contact Us.
- [ ] Site Footer.
- [ ] Desktop screenshot diff.
- [ ] Responsive 5 viewport còn lại.
- [ ] Accessibility và interaction.
- [ ] Build, typecheck, lint, smoke và visual check.

Không sang Home 2 khi checklist Home 1 chưa hoàn thành.

## 8. Quy trình bắt buộc cho từng trang

### Bước 1 — Inventory

- Xác định frame trang, component cấp cao và cây layer.
- Xác định asset chính xác cho từng layer.
- Phân loại decoration dùng chung và decoration cục bộ.
- Ghi thông số vào tài liệu hoặc frame registry.
- Không suy đoán layer. Dùng ảnh reference, manifest và asset gốc; nếu thiếu
  thông số thì ghi rõ phần cần người dùng cung cấp.

### Bước 2 — Page canvas

- Tạo kích thước desktop chuẩn.
- Đặt nền trắng bằng CSS.
- Đặt trang trí dùng chung ở page root.
- Thiết lập stacking context và z-index.

### Bước 3 — Component

Làm lần lượt:

1. Frame ngoài đúng Top/Left/Width/Height.
2. Phần tử con dùng tọa độ tương đối trong frame.
3. Flex/Grid với width, height, padding và gap đã đo.
4. Typography.
5. Asset và `object-fit`.
6. Border, radius, shadow và opacity.
7. Interaction và accessibility.

### Bước 4 — Desktop visual loop

1. Chạy trang tại width `1440px`.
2. Chụp full-page screenshot.
3. So sánh overlay và pixel diff với reference.
4. Sửa theo thứ tự:
   - frame và tọa độ;
   - typography;
   - asset/background;
   - spacing;
   - border, radius, shadow và icon.
5. Không sửa bằng mắt mà không chụp lại.

### Bước 5 — Responsive

- Chuyển component frame sang normal flow dưới `1440px`.
- Xây layout tablet và mobile bằng Flex/Grid.
- Không để horizontal overflow.
- Kiểm tra menu, form, button, keyboard và ảnh.

### Bước 6 — Gate trước trang tiếp theo

Một trang chỉ hoàn thành khi:

- Reference desktop đúng kích thước.
- Frame cấp cao lệch không quá `1px`, trừ sai số render subpixel đã ghi nhận.
- Không có console error.
- Không có asset thiếu.
- Không có horizontal overflow ở các viewport kiểm tra.
- Form, navigation và button hoạt động.
- Có alt text, label, focus keyboard.
- Typecheck, lint và production build thành công.
- Screenshot diff được lưu và review.

## 9. Lộ trình 7 demo

### Demo 01 — React + CSS thuần

Làm tuần tự từng trang. Với mỗi trang:

1. Lưu mốc HTML/CSS/JavaScript thuần.
2. Convert trang đó sang React JavaScript.
3. Đạt desktop pixel accuracy và responsive.
4. Convert trang đó sang React TypeScript.
5. Typecheck sạch trước khi sang trang tiếp theo.

Ràng buộc:

- CSS thuần, không CSS-in-JS.
- Không dùng `any`.
- Dùng `import type`.
- Component được tách theo trách nhiệm và frame thiết kế.
- Không tạo một page component khổng lồ.

### Demo 02 — React TypeScript + Tailwind CSS

- Chỉ bắt đầu sau khi Demo 01 đủ 8 trang.
- Chuyển từng trang một sang Tailwind.
- Không giữ CSS layout/component của Demo 01.

### Demo 03 — React TypeScript + Material UI

- Dùng MUI component cho layout và control.
- Theme Beautice là nguồn token.
- Không giữ giao diện Material mặc định.
- Chuyển và nghiệm thu từng trang một.

### Demo 04 — styled-components

- Dùng styled-components và typed theme.
- Chuyển và nghiệm thu từng trang một.

### Demo 05 — Emotion + MUI

- Kết hợp `@emotion/styled`, MUI `styled` và `sx` có kiểm soát.
- Chuyển và nghiệm thu từng trang một.

### Demo 06 — twin.macro + Tailwind + Emotion

- Khóa phiên bản twin/Tailwind tương thích.
- Chuyển và nghiệm thu từng trang một.

### Demo 07 — twin.macro + MUI

- Customize MUI Button, TextField và card bằng twin.macro.
- Ghi rõ thứ tự ưu tiên style.
- Chuyển và nghiệm thu từng trang một.

## 10. Commit và checkpoint

- Commit sau khi một component lớn được nghiệm thu.
- Commit checkpoint sau khi một trang hoàn chỉnh.
- Không gộp nhiều trang chưa kiểm tra vào một commit.
- Tag mốc HTML, React JS và React TS của Demo 01.
- Không dùng commit cũ làm bằng chứng cho implementation mới.

Tên commit gợi ý:

```text
feat(home-1): implement pixel-accurate header
feat(home-1): implement responsive professional team
test(home-1): add desktop visual baseline
checkpoint(home-1): complete React TypeScript page
```

## 11. Trạng thái mới

### Chuẩn bị

- [x] Giữ nguyên 100 asset gốc.
- [x] Giữ nguyên reference hiện có.
- [x] Giữ lịch sử Git.
- [x] Xóa implementation cũ để làm lại.
- [x] Thống nhất kiến trúc page canvas + component frame.
- [x] Thống nhất trang trí dùng chung thuộc page root.
- [x] Thống nhất desktop cố định và responsive flow theo breakpoint.
- [x] Thống nhất kiến trúc phân tầng cho toàn bộ 7 demo × 8 trang.
- [x] Thống nhất quy tắc phụ thuộc giữa các tầng.
- [x] Viết lại `PROJECT_PLAN.md`.
- [x] Viết `docs/architecture.md` và `docs/folder-structure.md`.
- [x] Khởi tạo lại workspace tối thiểu cho Demo 01.
- [x] Tạo asset mapping tối thiểu cho Main Logo của Site Header.
- [ ] Tạo visual test tối thiểu.

### Demo 01 — tiến độ theo trang

- [ ] Home 1.
- [ ] Home 2.
- [ ] About.
- [ ] Services.
- [ ] Gallery.
- [ ] Team.
- [ ] Blog.
- [ ] Contact.

### Demo còn lại

- [ ] Demo 02 — Tailwind.
- [ ] Demo 03 — MUI.
- [ ] Demo 04 — styled-components.
- [ ] Demo 05 — Emotion + MUI.
- [ ] Demo 06 — twin.macro + Emotion.
- [ ] Demo 07 — twin.macro + MUI.

## 12. Việc tiếp theo

1. Chạy Site Header tại viewport `1440px` và đối chiếu với ảnh reference.
2. Bổ sung thông số menu còn thiếu (màu/border nếu có) rồi tinh chỉnh Header.
3. Lưu visual test tối thiểu và nghiệm thu Site Header.

Không dựng trước Main Slider, các page khác hoặc demo khác khi Site Header chưa
được code và đối chiếu.
