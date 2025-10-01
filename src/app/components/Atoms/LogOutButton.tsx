// components/LogoutButton.tsx

"use client"; // これを追加

import React from "react";
import { useAuth } from "@/components/Context/AuthContext"; // AuthContext をインポート

export default function LogoutButton({
  className,
  label = "LogOut",
}: {
  className?: string;
  label?: string;
}) {
  const { logout } = useAuth(); // AuthContext から logout 関数を取得

  const handleLogout = () => {
    logout(); // logout 関数を実行
  };

  return (
    <button onClick={handleLogout} className={`${className}`}>
      {label}
    </button>
  );
}
