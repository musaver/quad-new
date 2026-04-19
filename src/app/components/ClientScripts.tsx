"use client";

import { useEffect } from "react";

// Critical path only — three/hover/webgl + module distortion load after main (idle)
const SCRIPT_GROUPS = [
  [
    "/assets/js/jquery.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/swiper.min.js",
    "/assets/js/vanilla-tilt.min.js",
    "/assets/js/imagesloaded-pkgd.js",
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
    "/assets/js/isotope.pkgd.min.js",
  ],
  ["/assets/js/gsap-scroll-smoother.js"],
  [
    "/assets/js/preloader.js",
    "/assets/js/gsap-custom-animations.js",
    "/assets/js/window-shape-animation.js",
  ],
  ["/assets/js/main.js"],
];

/** Loads after main.js — order: THREE → hover (needs three+gsap) → webgl (needs THREE) */
const DEFERRED_THREE_STACK = [
  "/assets/js/three.js",
  "/assets/js/hover-effect.umd.js",
  "/assets/js/webgl.js",
];

const MODULE_SCRIPTS = [
  "/assets/js/tj-img-distortion.js",
  "/assets/js/img-revel/index.js",
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

function loadDeferredHeavyScripts(): void {
  const run = () => {
    void (async () => {
      for (const src of DEFERRED_THREE_STACK) {
        await loadScript(src);
      }
      MODULE_SCRIPTS.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.type = "module";
        document.body.appendChild(script);
      });
    })();
  };

  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(() => run(), { timeout: 3000 });
  } else {
    setTimeout(run, 0);
  }
}

async function loadAllScripts(): Promise<void> {
  for (const group of SCRIPT_GROUPS) {
    await loadScriptGroup(group);
  }
  loadDeferredHeavyScripts();
}

export default function ClientScripts() {
  useEffect(() => {
    void loadAllScripts();
  }, []);

  return null;
}
