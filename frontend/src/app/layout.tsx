import "./globals.css";
import Header from "@/components/Header"; // ✅ Header 컴포넌트 불러오기
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header /> {/* ✅ 헤더가 추가되었는지 확인 */}
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
