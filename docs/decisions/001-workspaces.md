# ADR 001: npm workspaces cho 7 demo

## Trạng thái

Accepted.

## Quyết định

Dùng một repository với `apps/*` và `packages/*`. Mỗi demo là một package chạy/build độc lập; `@beautice/design-contract` là package dùng chung duy nhất ở giai đoạn đầu.

## Lý do

- Dependency Tailwind, MUI, styled-components, Emotion và twin.macro không bị trộn.
- Có thể chạy và nộp từng demo riêng.
- Dễ so sánh cấu hình và bundle.
- Một lockfile bảo đảm phiên bản nhất quán.

## Hệ quả

UI component không được chia sẻ giữa các demo. Có chủ đích lặp implementation để chứng minh từng phương pháp styling; chỉ route, token, content và asset mapping được dùng chung.
