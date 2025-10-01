// components/AuthContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(document.cookie.includes("auth=1"));
  }, []);

  const login = (password) => {
    console.log("Password from environment: ", process.env.WHOLESALE_PASSWORD);

    if (password === process.env.NEXT_PUBLIC_WHOLESALE) {
      document.cookie = "auth=1; path=/";
      setIsAuthenticated(true);
      router.refresh(); // ← ここでサーバー再評価
      return true;
    }
    return false;
  };

  const logout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.refresh(); // ← サーバー状態更新
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
