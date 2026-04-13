export default function AboutSection() {
  return (
    <section className="h1-about-section container-space fix" id="h1-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_about_content_wrap">
              <div className="section_heading d-flex flex-wrap align-items-start gap-3 justify-content-between">
                <span
                  className="sec_subtitle tj-fade"
                  data-direction="left"
                  data-delay=".2"
                >
                  [ <span>How We Work</span> ]
                </span>

                <h2 className="sec_title title-highlight">
                The QUAD Advantage: Integrated Expertise, Tailored for Your Business
                </h2>
              </div>

              <div className="about_bottom_content tj-fade">
                <div
                  className="desc_wrap tj-fade"
                  data-direction="right"
                  data-delay="0.15"
                >
                  <div className="desc fs-18">
                  Many businesses struggle with managing multiple vendors for ads,
content, web, and AI. At QUAD, we've built a better way. You come to one company, and
we identify your industry and business need. You are then routed to the relevant
specialist team—experts who live and breathe your market. Strategy, execution, and
reporting remain unified across departments, ensuring seamless delivery and
consistent results. This means less vendor chaos for you, faster execution, and stronger
consistency across your brand, marketing, and technology.
                  </div>

                  <a
                    href="/about"
                    className="tj_icon_btn flip-text-wrap about_btn d-none d-md-inline-flex"
                  >
                    <div className="icon_btn scale">
                      <span>
                        <i className="tji-arrow-right"></i>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </div>
                    <span className="flip-text">Know more us</span>
                  </a>
                </div>

                <div className="trusted_features">
                  <ul className="tj_users_list">
                    <li className="tj-fade" data-direction="left" data-delay="0.1">
                      <img src="/assets/images/users/user-list-img-1.png" alt="USER" />
                    </li>
                    <li className="tj-fade" data-direction="left" data-delay="0.15">
                      <img src="/assets/images/users/user-list-img-2.png" alt="USER" />
                    </li>
                    <li className="tj-fade" data-direction="left" data-delay="0.2">
                      <img src="/assets/images/users/user-list-img-3.png" alt="USER" />
                    </li>
                    <li className="tj-fade" data-direction="left" data-delay="0.25">
                      <img src="/assets/images/users/user-list-img-4.png" alt="USER" />
                    </li>
                  </ul>

                  <div
                    className="trusted_text fs-22 fw-sbold tj-fade"
                    data-direction="right"
                    data-delay="0.2"
                  >
                    <span>800+</span> Trusted international clients choose QUAD.
                  </div>

                  <div className="tj-fade d-md-none">
                    <a href="/about" className="tj_icon_btn flip-text-wrap about_btn">
                      <div className="icon_btn scale">
                        <span>
                          <i className="tji-arrow-right"></i>
                          <i className="tji-arrow-right"></i>
                        </span>
                      </div>
                      <span className="flip-text">Know more us</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="about_img" data-speed="2">
                <img src="/assets/images/about/h1-about-img.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
