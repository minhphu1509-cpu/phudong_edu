# PhuDong Edu — EduCenter

Ứng dụng quản lý học sinh, giáo viên, lớp học, lịch học, điểm danh, học phí và kết quả học tập. Dashboard chỉ hiển thị dữ liệu thật từ Supabase.

## Cấu hình Supabase

1. Tạo dự án Supabase.
2. Mở SQL Editor và chạy `supabase-schema.sql`.
3. Trong Authentication > Providers, bật Google và nhập Google OAuth Client ID/Secret.
4. Trong Authentication > URL Configuration, thêm URL Vercel vào Redirect URLs.
5. Trong Vercel, cấu hình bốn biến trong `.env.example` cho Production, Preview và Development.
6. Không đưa service role key vào GitHub hoặc mã nguồn.

## Đăng nhập Gmail

Nút “Tiếp tục với Google / Gmail” dùng Supabase Auth. Lần đăng nhập Google đầu tiên tự động tạo tài khoản. API xác minh access token trước mọi thao tác dữ liệu.

## Triển khai Vercel

Import repository `minhphu1509-cpu/phudong_edu`, chọn Next.js, cấu hình biến môi trường và Deploy.
