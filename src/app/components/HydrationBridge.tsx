"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __quadHydrated?: boolean;
  }
}

/**
 * Marks hydration complete so legacy GSAP can run after React matches the DOM
 * (avoids hydration mismatches on .tj-fade and other GSAP targets).
 */
export default function HydrationBridge() {
  useEffect(() => {
    window.__quadHydrated = true;
    window.dispatchEvent(new Event("quad:hydrated"));
  }, []);

  return null;
}
