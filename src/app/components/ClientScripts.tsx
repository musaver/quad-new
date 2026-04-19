"use client";

import { useEffect } from "react";

/**
 * Scripts required for the marketing home page (hero, sections, header, GSAP).
 * Omitted vs full template: Three/WebGL/hover, isotope/imagesloaded, vanilla-tilt,
 * window-shape showcase, img-distortion modules — add back when those routes exist.
 */
const SCRIPT_GROUPS = [
  [
    "/assets/js/jquery.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/swiper.min.js",
  ],
  [
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/gsap-scroll-trigger.min.js",
    "/assets/js/gsap-scroll-to-plugin.min.js",
    "/assets/js/gsap-split-text.min.js",
    "/assets/js/gsap-custom-easc.min.js",
    "/assets/js/meanmenu.js",
    "/assets/js/magiccursor.js",
    "/assets/js/venobox.min.js",
  ],
  ["/assets/js/gsap-scroll-smoother.js"],
  [
    "/assets/js/preloader.js",
    "/assets/js/gsap-custom-animations.js",
  ],
  ["/assets/js/main.js"],
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

function loadScriptGroup(scripts: string[]): Promise<void[]> {
  return Promise.all(scripts.map(loadScript));
}

async function loadAllScripts(): Promise<void> {
  for (const group of SCRIPT_GROUPS) {
    await loadScriptGroup(group);
  }
}

export default function ClientScripts() {
  useEffect(() => {
    void loadAllScripts();
  }, []);

  return null;
}
