import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h1-footer-area footer-1 tj-theme-dark">
      <div className="h1_footer_widgets container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_footer_widgets_wrap">
                <div className="tj_footer_widget footer_info tj-fade" data-delay=".5">
                  <div className="footer_logo">
                    <Link href="/" className="logo">
                      <img src="/assets/images/logos/secondary-logo.svg" alt="QUAD" />
                    </Link>
                  </div>
                  <div className="subscription_wrap">
                    <div className="footer_desc">
                      Subscribe to our newsletter and get the latest design inspiration.
                    </div>
                    <div className="footer_subscription">
                      <form action="/">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email*"
                        />
                        <button type="submit" className="icon_btn">
                          <span>
                            <i className="tji-arrow-right"></i>
                            <i className="tji-arrow-right"></i>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <hr className="tj-fade" data-delay=".5" />

                <div className="tj_footer_widget widget-nav-menu tj-fade" data-delay=".6">
                  <h3 className="widget_title">[ <span>Company</span> ]</h3>
                  <ul>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">Home</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">Pages</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">Services</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">Blog</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">Contact</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text">FAQ</span></a></li>
                  </ul>
                </div>

                <hr className="tj-fade" data-delay=".6" />

                <div className="tj_footer_widget widget-nav-menu tj-fade" data-delay=".7">
                  <h3 className="widget_title">[ <span>Services</span> ]</h3>
                  <ul>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> Brand identity</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> Development</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> UI/UX design</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> Creative</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> Marketing</span></a></li>
                    <li><a className="flip-text-wrap" href="#"><span className="flip-text"> Direction</span></a></li>
                  </ul>
                </div>

                <hr className="tj-fade" data-delay=".7" />

                <div className="tj_footer_widget footer_contact tj-fade" data-delay=".8">
                  <div className="tj_footer_contact">
                    <a href="tel:+12345678901" className="contact_link tj-random-char-blink">
                      +1 234 567 8901
                    </a>
                    <a href="mailto:hello@quad.com" className="contact_link tj-random-char-blink">
                      hello@quad.com
                    </a>
                  </div>

                  <ul className="tj_socials">
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

                  <div className="tj_contact">
                    <div className="sec_subtitle contact_title">[ <span>Location</span> ]</div>
                    <div className="contact_info">
                      123 Creative lee Street, Suite 820, California, NY 10001, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h1_footer_bottom container-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_footer_bottom_wrap">
                <nav className="tj_footer_nav">
                  <ul>
                    <li><a href="/policy-privacy">Policy &amp; privacy</a></li>
                    <li><a href="/policy-privacy">Term &amp; condition</a></li>
                  </ul>
                </nav>

                <div className="tj_copyright">
                  &copy;<span>2026</span>{" "}
                  <Link href="/" target="_blank" rel="noopener noreferrer">
                    QUAD.
                  </Link>{" "}
                  all right reserved.
                </div>

                <button id="back_to_top" type="button" className="tj_back_to_top">
                  Back to top
                  <span>
                    <i className="tji-arrow-up"></i>
                    <i className="tji-arrow-up"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h3_footer_large_text_area tj-fade" data-delay=".3">
          <h2 className="h3_footer_large_text tj-text-gardient "><span>STARTUP AGENCY</span>
          </h2>
        </div>
    </footer>
  );
}
