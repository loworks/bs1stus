"use client";
import { useLoginModal } from "@/components/Context/LoginModalContext";
import { useState } from "react";
import { useAuth } from "@/components/Context/AuthContext";
import Link from "next/link"; // 追加：リンクを使うため
import { TransitionLink } from "@/Libs/Transitions";

export default function OverlayLogin() {
  const { isOpen, closeModal } = useLoginModal();
  const { login } = useAuth();
  const [password, setPassword] = useState("");

  // モーダルの背景をクリックで閉じる
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      closeModal();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick} // ここで背景クリックで閉じる機能を追加
    >
      <div
        className="rounded bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {/* モーダルのクリックを伝播しないようにする */}
        <h2 className="mb-4 text-lg font-bold">Buyer Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mb-4 w-full border p-2"
          />
          <button
            type="submit"
            className="w-full bg-black px-4 py-2 text-white"
          >
            Login
          </button>
        </form>
        <button onClick={closeModal} className="text-gray-600 mt-2 text-sm">
          Cancel
        </button>
        {/*
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Need an Account?{" "}
            <TransitionLink
              cleckHandler={closeModal}
              href="/contact"
              className="text-blue-500 hover:underline"
            >
              Contact Us for Access
            </TransitionLink>
          </p>
        </div>*/}
      </div>
    </div>
  );
}
