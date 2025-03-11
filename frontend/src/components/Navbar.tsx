"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [menuPositions, setMenuPositions] = useState<{ [key: string]: number }>({});
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateMenuPositions = () => {
      const navbarRect = document.querySelector(".navbar-container")?.getBoundingClientRect();
      const containerRect = document.querySelector(".container")?.getBoundingClientRect();

      if (!navbarRect || !containerRect) return;

      const positions: { [key: string]: number } = {};
      document.querySelectorAll(".nav-item").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const menuName = el.textContent?.trim() || "";

        // ✅ 웹페이지 왼쪽이 아니라 컨테이너 왼쪽 기준으로 조정
        positions[menuName] = rect.left - containerRect.left;
      });

      setMenuPositions(positions);
    };

    updateMenuPositions();
    window.addEventListener("resize", updateMenuPositions);
    return () => window.removeEventListener("resize", updateMenuPositions);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (hideTimeout) clearTimeout(hideTimeout); // ⏳ 서브네비바 숨김 타이머 해제
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    // ⏳ 1초 후에 서브네비바를 숨기도록 타이머 설정
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 1000);
    setHideTimeout(timeout);
  };

  const handleSubMenuEnter = () => {
    if (hideTimeout) clearTimeout(hideTimeout); // ⏳ 서브네비바 유지
  };

  const menuItems = [
    { 
      name: "청룡",
      subItems: [
        { name: "동아리 소개", href: "/cheongryong/intro" },
        { name: "공지사항", href: "/cheongryong/notice" },
        { name: "일정", href: "/cheongryong/schedule" }
      ] 
    },
    { 
      name: "팀", 
      subItems: [
        { name: "운영진", href: "/team/staff" },
        { name: "선수단", href: "/team/players" },
        { name: "일반부원", href: "/team/members" }
      ] 
    },
    { 
      name: "기록",
      subItems: [
        { name: "기록관리", href: "/records/stats" },
        { name: "전력분석", href: "/records/analysis" }
      ] 
    }
  ];
  

  const rightMenuItems = [
    { 
      name: "커뮤니티",
      subItems: [
        { name: "활동모습", href: "/community/activities" },
        { name: "자유게시판", href: "/community/forum" }
      ] 
    },
    { 
      name: "참고영상",
      subItems: [
        { name: "투수", href: "/reference/pitchers" },
        { name: "내야수", href: "/reference/infielders" },
        { name: "외야수", href: "/reference/outfielders" },
        { name: "작전/주루", href: "/reference/tactics" },
        { name: "트레이닝", href: "/reference/training" }
      ] 
    },
    { 
      name: "Special",
      subItems: [
        { name: "운영진", href: "/special/staff" },
        { name: "선수단", href: "/special/players" },
        { name: "일반부원", href: "/special/members" }
      ] 
    }
  ];
  
  
  const allMenuItems = [...menuItems, ...rightMenuItems];

  return (
    <nav
      className={`sticky top-0 w-full bg-white shadow-md z-40 transition-all duration-300 ${
        scrollProgress > 0 ? "py-4" : "py-6"
      } border-b-3 border-[#2155A4] navbar-container`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* 왼쪽 메뉴 */}
        <div className="flex space-x-15 relative z-50 justify-end flex-1 pr-30 navbar-font">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href || "#"} className="text-md font-medium relative block overflow-hidden">
                <span className="nav-item absolute left-0 w-full text-[var(--cauBlue)] opacity-0 transform translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                  {item.name}
                </span>
                <span className="block group-hover:translate-y-full group-hover:opacity-0 transition-all duration-350">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* 중앙 로고 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50 transition-transform duration-300"
          style={{
            transform: `translateY(${15 + scrollProgress * 5}px) scale(${1 - scrollProgress * 0.2})`,
          }}
        >
          <Link href="/">
            <Image src="/logo.svg" alt="팀 로고" width={150} height={150} priority />
          </Link>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex space-x-15 relative z-50 justify-start flex-1 pl-30 navbar-font">
          {rightMenuItems.map((item) => (
            <div
              key={item.name}
              className="relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href = "#"} className="text-md font-medium relative block overflow-hidden">
                <span className="nav-item absolute left-0 w-full text-[var(--cauBlue)] opacity-0 transform translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                  {item.name}
                </span>
                <span className="block group-hover:translate-y-full group-hover:opacity-0 transition-all duration-350">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ 서브네비바 */}
      {hoveredMenu && (
        <div
          className={`absolute left-0 w-full bg-gray-100 shadow-lg transition-all duration-500 ease-in-out ${
            scrollProgress > 0 ? "top-[60px]" : "top-[80px]"
          } opacity-100 visible`}
          onMouseEnter={() => setHoveredMenu(hoveredMenu)}
          onMouseLeave={() => setTimeout(() => setHoveredMenu(null), 200)}
        >
        <div className="flex flex-col items-start px-6 py-3">
        {/* ✅ `menuItems` + `rightMenuItems`를 함께 검색하여 서브네비바에 표시 */}
        {(
          [...menuItems, ...rightMenuItems].find((menu) => menu.name === hoveredMenu)?.subItems || []
        ).map((subItem) => (
          <Link
            key={subItem.name}  // ✅ key는 subItem.name을 사용
            href={subItem.href || "#"}  // ✅ href가 없으면 기본값 설정
            className="text-md px-4 py-2 text-gray-800 hover:text-blue-600 transition block"
            style={{
              position: "relative",
              left: `${
                (menuPositions[hoveredMenu] || 0) -
                (document.querySelector(".container")?.getBoundingClientRect().left || 0)
              }px`,
            }}
          >
            {subItem.name}
          </Link>
        ))}
        </div>
        </div>
      )}




    </nav>
  );
}
