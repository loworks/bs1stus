"use client";

import * as Context from "./";
import * as Transition from "@/Libs/Transitions";
import { LoginModalProvider } from "./LoginModalContext";
import { AuthProvider } from "./AuthContext";
export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <LoginModalProvider>
        <Context.NavContext.ManagedUIContext>
          <Transition.TransitionContext.TransitionProvider>
            {children}
          </Transition.TransitionContext.TransitionProvider>
        </Context.NavContext.ManagedUIContext>{" "}
      </LoginModalProvider>
    </AuthProvider>
  );
}
