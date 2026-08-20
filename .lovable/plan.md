# Hành Trình Ánh Sáng — Kế hoạch xây dựng

## Tổng quan

Xây dựng trang web một trang (single-page) "HÀNH TRÌNH ÁNH SÁNG — Vương Quốc Ánh Sáng 5D" với 12 section cuộn dọc, full-width. Vibe: tâm linh / chữa lành / 5D, thanh khiết và lãng mạn.

## Quyết định thiết kế (đã chọn)

- **Bảng màu — Blush & Lavender**: `#f8e8ee` (nền hồng nhạt), `#e8c5d0` (hồng pastel), `#c9a0dc` (tím lavender), `#9b72cf` (tím đậm nhấn). Chế độ sáng làm chủ, nền mềm ấm.
- **Typography — Cormorant Garamond (heading) + Karla (body)**: Serif sang trọng cho tiêu đề lớn, sans sạch cho nội dung. Tải qua `<link>` Google Fonts trong `__root.tsx`.
- **Layout — Full-width sections**: Mỗi section là một dải trải đầy chiều ngang, cuộn dọc liên tục. Đây là trang chủ duy nhất; điều hướng dùng hash anchor (`#vuong-quoc`, `#hanh-trinh`...).

## Cấu trúc kỹ thuật

Single route: viết lại `src/routes/index.tsx` (hiện đang là placeholder). Không tạo route riêng cho từng section — đây là trang chủ một trang theo đúng yêu cầu "TRANG CHỦ" với 12 phần. Navigation bằng hash anchor.

### Design tokens (`src/styles.css`)

Thêm vào `:root`:
- `--background: oklch(0.97 0.015 350)` (hồng ngà `#f8e8ee` dạng oklch)
- `--foreground` tối vừa, `--primary: #9b72cf` (tím nhấn), `--accent: #c9a0dc`
- `--font-serif: "Cormorant Garamond", serif`
- `--font-sans: "Karla", sans-serif`
- Gradient token: `--gradient-aurora` lavender→blush cho hero
- Giữ dark mode tokens hiện có (có thể điều chỉnh nhẹ).

### `__root.tsx`

- Cập nhật `head()`: title "Hành Trình Ánh Sáng — Vương Quốc Ánh Sáng 5D", description theo câu hero, og tags tương ứng.
- Thêm `<link>` Google Fonts (Cormorant Garamond + Karla) trong `links` của root head.

### Index page (`src/routes/index.tsx`)

Một component lớn render 12 section theo thứ tự, mỗi section có `id` để nav nhảy tới:

1. **Hero** — `#trang-chu`: nền gradient aurora lavender/blush, tiêu đề Cormorant lớn "HÀNH TRÌNH ÁNH SÁNG / VƯƠNG QUỐC ÁNH SÁNG 5D", đoạn mô tả, 2 CTA (🌟 BẮT ĐẦU HÀNH TRÌNH → cuộn xuống #hanh-trinh; ▶️ KHÁM PHÁ VƯƠNG QUỐC → #vuong-quoc).
2. **Vương Quốc Ánh Sáng 5D** — `#vuong-quoc`: tiêu đề + 5 giá trị (Tình Yêu, Chữa Lành, Sáng Tạo, Phụng Sự, Hợp Nhất) dạng card/ô với icon emoji.
3. **Hành Trình của bạn** — `#hanh-trinh`: 5 bước (Thức Tỉnh → Thanh Lọc → Kết Nối → Kiến Tạo → Phụng Sự) dạng timeline dọc với số 01–05. CTA 🌟 KHÁM PHÁ HÀNH TRÌNH CỦA TÔI.
4. **Bản đồ Vương Quốc** — `#ban-do`: lưới 12 thành phố (Thành phố Tình Yêu, Chữa Lành, Sáng Tạo, Gia Đình, Thiền Định, Phụng Sự, Nghệ Thuật, Thiên Nhiên, Thịnh Vượng, Công Lý, Hợp Nhất, Central Light City). Mỗi ô là card với emoji + tên; Central Light City làm nổi bật (gradient, viền tím). Bản đồ tĩnh dạng grid (không leaflet/mapbox — tránh phức tạp SSR).
5. **Cộng đồng Ánh Sáng** — `#cong-dong`: tiêu đề lớn "KHÔNG AI ĐI TRÊN HÀNH TRÌNH NÀY MỘT MÌNH.", list 7 mối quan tâm, CTA 💛 THAM GIA CỘNG ĐỒNG.
6. **Thư viện Ánh Sáng** — `#thu-vien`: 7 loại nội dung (Sách & Tài liệu, Âm nhạc thiền, Video, Podcast, Bài học 5D, Thực hành thiền, Câu chuyện truyền cảm hứng) dạng card. CTA KHÁM PHÁ THƯ VIỆN.
7. **FUN COSMOS** — `#fun-cosmos`: section đậm more/hải lập, tiêu đề "FUN COSMOS / THE LIGHT JOURNEY", mô tả vũ trụ game, CTA 🎮 KHÁM PHÁ FUN COSMOS.
8. **Sự kiện Ánh Sáng** — `#su-kien`: lưới 6 loại sự kiện (Lễ hội Ánh Sáng, Thiền cộng đồng, Talkshow, Workshop sáng tạo, Sự kiện FUN COSMOS, Hoạt động cộng đồng). CTA XEM TẤT CẢ SỰ KIỆN.
9. **Sản phẩm & Dịch vụ** — `#san-pham`: 6 category (Sản phẩm Ánh Sáng, Sức khỏe & Phong cách sống, Nghệ thuật, Giáo dục, Công nghệ & Game, Dự án cộng đồng).
10. **Câu chuyện Ánh Sáng** — `#cau-chuyen`: tiêu đề "MỖI NGƯỜI ĐỀU CÓ MỘT ÁNH SÁNG BÊN TRONG.", mô tả, CTA ĐỌC CÂU CHUYỆN.
11. **Tham gia hành trình** — `#tham-gia`: tiêu đề "BẠN ĐÃ SẴN SÀNG BƯỚC ĐI CHƯA?", đoạn triết lý, nút 🌟 BẮT ĐẦU HÀNH TRÌNH.
12. **Footer** — `#footer`: thương hiệu "HÀNH TRÌNH ÁNH SÁNG / Light Journey — 5D Kingdom", dòng giá trị, nav links (Về chúng tôi, Vương Quốc 5D, Hành Trình, Cộng đồng, Thư viện, Sự kiện, Liên hệ), câu quote, © 2026.

### Header/nav (trong index hoặc __root)

Header dính (sticky) mờ kính: logo "HÀNH TRÌNH ÁNH SÁNG" + nav hash links tới các section chính (Vương Quốc, Hành Trình, Bản Đồ, Cộng Đồng, Thư Viện, Sự Kiện) + nút BẮT ĐẦU. Chỉ xuất hiện trên trang chủ.

## Chi tiết thẩm mỹ

- Heading: Cormorant Garamond, tracking rộng, gradient text tím-lavender cho tiêu đề lớn hero.
- Section spacing hào nhoáng (py-24/md:py-32), max-width container 6xl cho nội dung.
- Card dùng nền trắng trong suốt / blur nhẹ, border lavender mảnh, radius-lg, hover-scale nhẹ.
- Icon emoji to, đặt trong vòng tròn gradient lavender.
- Motion tiết chế: chỉ fade-in nhẹ khi scroll, hover-scale trên card/CTA — không animate mọi thứ.
- Sử dụng semantic tokens (text-foreground, bg-background, text-primary...) không hardcode màu trực tiếp trừ gradient nền hero.
- Đảm bảo contrast WCAG AA.

## Tài liệu có sẵn

Toàn bộ nội dung text đã được用户提供 đầy đủ — dùng nguyên văn (giữ hoa, emoji).

## Phạm vi & không làm

- Không thêm auth, database, backend — đây là trang landing tĩnh một trang.
- Không tạo route con riêng cho mỗi section (theo lựa chọn layout full-width sections + yêu cầu "TRANG CHỦ").
- Không dùng thư viện map thật (Leaflet/Mapbox) — bản đồ là grid card tĩnh để tránh rủi ro SSR và giữ gọn.

## Kiểm tra sau khi build

- Build thành công, preview render đầy đủ 12 section, nav hash nhảy đúng, header sticky, font Cormorant+Karla tải, contrast OK.
