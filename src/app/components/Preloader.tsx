export default function Preloader() {
  return (
    <div className="tj-preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>

      <div className="loading_marquee">
        <span className="marquee_text"></span>
      </div>

      <div className="tj-preloader_bottom">
        <div className="loading_text">
          [ <span>Loading Please wait...</span> ]
        </div>
        <div className="copyright_text">[ <span>©2026</span> ]</div>
      </div>
    </div>
  );
}
