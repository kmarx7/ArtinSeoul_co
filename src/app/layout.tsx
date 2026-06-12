import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArtLife Seoul | Seoul Culture Now",
  description: "서울의 연극, 클래식, 전시회를 감각적으로 발견하는 문화 큐레이션 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
