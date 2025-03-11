import fs from "fs";
import path from "path";
import { marked } from "marked";
import "@/styles/markdown.css"; // ✅ CSS 경로 변경

export default function IntroPage() {
  const filePath = path.join(process.cwd(), "src/app/cheongryong/intro/cheongryong_intro.md");

  let fileContent = "## 동아리 소개 파일을 찾을 수 없습니다.";
  if (fs.existsSync(filePath)) {
    fileContent = fs.readFileSync(filePath, "utf-8");
  }

  const htmlContent = marked(fileContent);

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-cauBlue">동아리 소개</h1>
      {/* ✅ CSS를 직접 적용한 Markdown 스타일 */}
      <article className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
