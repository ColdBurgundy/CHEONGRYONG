"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#E6E6E6] py-1.5 shadow-sm border-b border-gray-300 relative z-30">
      <div className="container mx-auto flex justify-between items-center px-6 text-xs text-[#7D8285]">
        {/* 왼쪽: 로그인 & 회원가입 */}
        <div className="flex space-x-3">
          <Link href="/login" className="hover:text-blue-600 transition-colors">
            로그인
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/signup" className="hover:text-blue-600 transition-colors">
            회원가입
          </Link>
        </div>

        {/* 오른쪽: 추가 메뉴 (예: 동아리문의, 포인트 시스템) */}
        <div className="flex space-x-3">
          <Link href="#" className="hover:text-blue-600 transition-colors">
            동아리 문의
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            동아리 포인트
          </Link>
        </div>
      </div>
    </header>
  );
}
