"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const LoginModalContext = createContext<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useLoginModal = () => useContext(LoginModalContext);

export function LoginModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <LoginModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LoginModalContext.Provider>
  );
}
