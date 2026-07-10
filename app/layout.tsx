import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduCenter | Quản lý trường học và học thêm",
  description: "Nền tảng quản lý học sinh, giáo viên, lớp học, điểm danh, học phí và kết quả học tập.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
