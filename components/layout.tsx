// import Header from "./Header";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string>();

  useEffect(() => {
    if (!user) {
      setUser(Cookies.get("token"));
    }
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
