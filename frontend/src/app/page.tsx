"use client"; // 클라이언트 컴포넌트 설정

import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/players") // 백엔드 API 호출
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">야구 동아리 선수 목록</h1>
      <ul className="mt-4 space-y-2">
        {players.map(player => (
          <li key={player.id} className="text-lg font-medium">
            {player.name} ({player.position})
          </li>
        ))}
      </ul>
    </div>
  );
}

