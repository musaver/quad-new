"use client";

import { useCallback, useState } from "react";

export default function HeroVideoArea() {
  const [videoReady, setVideoReady] = useState(false);

  const onVideoReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  return (
    <div className="h1-video-section container-space h1HeroAnimation">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_hero_video_wrap">
              <div className="h1_hero_video hero-video-area">
                {!videoReady && (
                  <div
                    className="hero-video-area__loading"
                    aria-busy="true"
                    aria-label="Loading video"
                  >
                    <span className="hero-video-area__spinner" />
                  </div>
                )}
                <video
                  className={videoReady ? "hero-video-area__video is-ready" : "hero-video-area__video"}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/assets/images/projects/h1-project-img-1.webp"
                  onLoadedData={onVideoReady}
                  onCanPlay={onVideoReady}
                  onError={onVideoReady}
                >
                  <source src="/assets/videos/h1-hero.mp4" type="video/mp4" />
                </video>

                <a
                  href="/assets/videos/h1-hero.mp4"
                  data-autoplay="true"
                  data-vbtype="video"
                  data-maxwidth="1200px"
                  className="tj_circle_btn video-popup"
                >
                  <div className="area_bg"></div>
                  <img
                    src="/assets/images/circle-btn/video-btn-text.svg"
                    alt="button-text"
                    className="btn_text"
                  />
                  <i className="tji-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
