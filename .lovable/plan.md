# Đổi toàn bộ chữ sang màu vàng kim

## Mục tiêu

Đổi tất cả chữ trên trang sang tông vàng kim. Chữ in hoa / in đậm dùng vàng gold đậm hơn để tạo độ tương phản và sang trọng.

## Thay đổi

### `src/styles.css` — design tokens

Thay tông tím/lavender hiện tại sang vàng kim:

`:root` (light):
- `--foreground`: vàng gold đậm `oklch(0.55 0.13 75)` (gold #b8860b dạng oklch)
- `--primary`: vàng gold đậm `oklch(0.58 0.14 70)`
- `--primary-foreground`: nền tối (giữ để contrast trên nút gold)
- `--accent`: vàng kim nhạt `oklch(0.82 0.11 80)`
- `--accent-foreground`: gold đậm
- `--secondary-foreground`, `--muted-foreground`, `--card-foreground`, `--popover-foreground`: tông gold vừa
- `--ring`: gold đậm
- `--gradient-text`: gradient vàng gold `linear-gradient(120deg, #b8860b 0%, #d4af37 50%, #f4d160 100%)`
- `--gradient-aurora`: giữ nền hồng nhạt hiện tại (chỉ đổi chữ, không đổi nền) — hoặc nhẹ sang gold nhạt để đồng bộ. Sẽ giữ nền blush hiện tại để chữ gold nổi bật.

`.dark`: tương ứng với gold sáng hơn trên nền tối.

### `src/routes/index.tsx` — không cần đụng

Mọi chữ đều dùng token (`text-foreground`, `text-primary`, `gradient-text`), nên đổi token là đủ. Các class `text-foreground/70`, `text-foreground/80` vẫn dùng opacity trên `--foreground` gold → tự động theo.

## Phạm vi & không làm

- Chỉ sửa `src/styles.css`.
- Không đổi nền hero (giữ aurora blush), không đổi cấu trúc/index.tsx.
- Không hardcode màu trực tiếp trong component.

## Kiểm tra

Build thành công, preview hiển thị chữ vàng gold toàn trang, chữ in hoa gradient-text là gold gradient, contrast đủ đọc được.
