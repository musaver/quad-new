import Link from "next/link";

export default function Offcanvas() {
  return (
    <>
      <div className="tj-offcanvas-overlay"></div>
      <div className="tj-offcanvas">
        <div className="offcanvas_bg"></div>
        <div className="offcanvas_wrapper">
          <div className="offcanvas_top d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="offcanvas_logo">
              <Link href="/" className="logo">
                <img src="/assets/images/logos/primary-logo.svg" alt="QUAD" />
              </Link>
            </div>

            <button className="offcanvas_close">
              <span className="close-text">Close</span>
              <span className="tj_sidebar_toggle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          <div className="offcanvas_action d-none d-lg-block">
            <h5 className="greetings">
              Glad you&apos;re here!{" "}
              <img src="/assets/images/icons/start.svg" alt="" />
            </h5>
            <a href="/about" className="tj_text_btn">
              Know more us
              <i className="tji-arrow-right"></i>
            </a>
          </div>

          <div className="offcanvas_gallery tj_gallery d-none d-lg-block">
            <img
              className="gallery_img"
              src="/assets/images/gallery/offcanvas-gallery-img-1.png"
              alt="gallery"
            />
            <img
              className="gallery_img"
              src="/assets/images/gallery/offcanvas-gallery-img-2.png"
              alt="gallery"
            />
            <img
              className="gallery_img"
              src="/assets/images/gallery/offcanvas-gallery-img-3.png"
              alt="gallery"
            />
            <img
              className="gallery_img"
              src="/assets/images/gallery/offcanvas-gallery-img-4.png"
              alt="gallery"
            />
          </div>

          <div className="offcanvas_menu mobile_menu d-lg-none"></div>

          <div className="offcanvas_contact tj_contact address">
            <div className="sec_subtitle contact_title">
              [ <span>Location</span> ]
            </div>
            <div className="contact_info">
              123 Creative lee Street, Suite 820, <br />
              California, NY 10001, USA
            </div>
          </div>

          <div className="offcanvas_contact tj_contact contact">
            <div className="sec_subtitle contact_title">
              [ <span>Contact</span> ]
            </div>
            <a href="tel:+12345678901" className="contact_info">
              +1 234 567 8901
            </a>
            <a href="mailto:hello@quad.com" className="contact_info">
              hello@quad.com
            </a>
          </div>

          <ul className="offcanvas_socials tj_socials">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
