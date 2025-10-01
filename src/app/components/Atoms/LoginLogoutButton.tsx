// components/LoginLogoutButton.tsx
import { isAuthenticated } from "../utils/checkAuth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export default async function LoginLogoutButton({
  className,
}: {
  className?: string;
}) {
  const auth = await isAuthenticated();
  return (
    <>
      {auth ? (
        <LogoutButton className={`${className}`} />
      ) : (
        <LoginButton className={`${className}`} label="Buyer Login" />
      )}
    </>
  );
}
