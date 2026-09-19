"use client";

import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

export function useServiceNav() {
  const pathname = usePathname();
  const currentIndex = services.findIndex((s) => s.path === pathname);

  return {
    prev: currentIndex > 0 ? services[currentIndex - 1] : null,
    next:
      currentIndex < services.length - 1 ? services[currentIndex + 1] : null,
  };
}
