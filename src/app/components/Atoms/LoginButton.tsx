"use client";
import { useLoginModal } from "@/components/Context/LoginModalContext";

export default function LoginButton({
  className,
  label = "Login",
}: {
  className?: string;
  label?: string;
}) {
  const { openModal } = useLoginModal();

  return (
    <button className={`${className}`} onClick={openModal}>
      {label}
    </button>
  );
}
