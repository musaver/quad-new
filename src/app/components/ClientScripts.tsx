"use client";

import { useEffect } from "react";

// Scripts grouped by dependencies for parallel loading
const SCRIPT_GROUPS = [
  // Group 1: Core libraries (no dependencies) - load in parallel
  [
    "/assets/js/jquery.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/three.js",
    "/assets/js/swiper.min.js",
    "/assets/js/vanilla-tilt.min.js",
    "/assets/js/imagesloaded-pkgd.js",
  ],
  // Group 2: Dependencies on jQuery/GSAP/Three - load in parallel
  [
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/gsap-scroll-trigger.min.js",
    "/assets/js/gsap-scroll-to-plugin.min.js",
    "/assets/js/gsap-split-text.min.js",
    "/assets/js/gsap-custom-easc.min.js",
    "/assets/js/meanmenu.js",
    "/assets/js/magiccursor.js",
    "/assets/js/venobox.min.js",
    "/assets/js/hover-effect.umd.js",
    "/assets/js/isotope.pkgd.min.js",
  ],
  // Group 3: Depends on ScrollTrigger
  [
    "/assets/js/gsap-scroll-smoother.js",
    "/assets/js/webgl.js",
  ],
  // Group 4: Custom scripts depending on all above
  [
    "/assets/js/preloader.js",
    "/assets/js/gsap-custom-animations.js",
    "/assets/js/window-shape-animation.js",
  ],
  // Group 5: Main script (depends on everything)
  [
    "/assets/js/main.js",
  ],
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
    script.onerror = () => resolve(); // Continue even on error
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
  // Load module scripts in parallel after all regular scripts
  MODULE_SCRIPTS.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    document.body.appendChild(script);
  });
}

export default function ClientScripts() {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return null;
}
