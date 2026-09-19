"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
