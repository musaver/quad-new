"use client";

import { useEffect } from "react";

const SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/gsap-scroll-trigger.min.js",
  "/assets/js/gsap-scroll-smoother.js",
  "/assets/js/gsap-scroll-to-plugin.min.js",
  "/assets/js/gsap-split-text.min.js",
  "/assets/js/gsap-custom-easc.min.js",
  "/assets/js/meanmenu.js",
  "/assets/js/swiper.min.js",
  "/assets/js/magiccursor.js",
  "/assets/js/venobox.min.js",
  "/assets/js/three.js",
  "/assets/js/hover-effect.umd.js",
  "/assets/js/webgl.js",
  "/assets/js/vanilla-tilt.min.js",
  "/assets/js/imagesloaded-pkgd.js",
  "/assets/js/isotope.pkgd.min.js",
  "/assets/js/preloader.js",
  "/assets/js/gsap-custom-animations.js",
  "/assets/js/window-shape-animation.js",
  "/assets/js/main.js",
];

const MODULE_SCRIPTS = [
  "/assets/js/tj-img-distortion.js",
  "/assets/js/img-revel/index.js",
];

function loadScriptSequentially(
  scripts: string[],
  index: number,
  onComplete: () => void
): void {
  if (index >= scripts.length) {
    onComplete();
    return;
  }

  const script = document.createElement("script");
  script.src = scripts[index];
  script.async = false;
  script.onload = () => loadScriptSequentially(scripts, index + 1, onComplete);
  script.onerror = () => loadScriptSequentially(scripts, index + 1, onComplete);
  document.body.appendChild(script);
}

function loadModuleScript(src: string): void {
  const script = document.createElement("script");
  script.src = src;
  script.type = "module";
  document.body.appendChild(script);
}

export default function ClientScripts() {
  useEffect(() => {
    loadScriptSequentially(SCRIPTS, 0, () => {
      MODULE_SCRIPTS.forEach(loadModuleScript);
    });
  }, []);

  return null;
}
