# PhuDong Edu — EduCenter

Ứng dụng quản lý học sinh, giáo viên, lớp học, lịch học, điểm danh, học phí và kết quả học tập. Xây dựng bằng Next.js, triển khai trên Vercel và lưu dữ liệu bằng Supabase.

## Chạy cục bộ

```bash
npm install
copy .env.example .env.local
npm run dev
```

## Cấu hình Supabase

1. Tạo dự án tại Supabase.
2. Mở SQL Editor và chạy nội dung `supabase-schema.sql`.
3. Trong Vercel, thêm `SUPABASE_URL` và `SUPABASE_SERVICE_ROLE_KEY` vào Environment Variables.
4. Không đưa service role key vào GitHub hoặc mã nguồn.

## Triển khai Vercel

Import repository `minhphu1509-cpu/phudong_edu`, chọn framework Next.js, cấu hình hai biến môi trường rồi Deploy.
