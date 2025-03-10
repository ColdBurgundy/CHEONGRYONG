export default function LoginPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-6">로그인</h1>
        <input type="text" placeholder="이메일" className="border p-2 mb-4 w-64" />
        <input type="password" placeholder="비밀번호" className="border p-2 mb-4 w-64" />
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          로그인
        </button>
      </div>
    );
  }
  