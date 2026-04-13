import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="tj_navigation_wrap_overlay"></div>
      <header className="tj-header header-1 header-absolute">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="tj-header_wrap">
                <div className="site_logo">
                  <Link className="logo" href="/">
                    <img src="/assets/images/logos/primary-logo.png" alt="LOGO" />
                  </Link>
                </div>

                <div className="site_navigation d-none d-lg-inline-flex">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li><Link href="/">Creative agency</Link></li>
                          <li><a href="/index-2">Digital agency</a></li>
                          <li><a href="/index-3">Startup agency</a></li>
                          <li><a href="/skew-showcase">Skew showcase</a></li>
                          <li><a href="/gallery-showcase">Gallery showcase</a></li>
                          <li><a href="/perspective-showcase">Perspective showcase</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li><a href="/about">About us</a></li>
                          <li><a href="/services">Services</a></li>
                          <li><a href="/service-details">Service details</a></li>
                          <li><a href="/team">Team</a></li>
                          <li><a href="/team-details">Team details</a></li>
                          <li><a href="/careers">Careers</a></li>
                          <li><a href="/careers-details">Careers details</a></li>
                          <li><a href="/pricing-plan">Pricing plan</a></li>
                          <li><a href="/error">Error 404</a></li>
                          <li><a href="/policy-privacy">Policy &amp; privacy</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Portfolio</a>
                        <ul className="sub-menu">
                          <li><a href="/project">Portfolio</a></li>
                          <li><a href="/project-details">Portfolio details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="/blog">Blog</a></li>
                          <li><a href="/blog-details">Blog details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="tj-header_right">
                  <a
                    href="/contact"
                    className="tj_btn flip-text-wrap d-none d-md-inline-flex"
                  >
                    <span className="flip-text">Get in touch</span>
                  </a>

                  <button className="tj_sidebar_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
