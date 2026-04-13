export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h1-hero-section container-space h1HeroAnimation"
        data-speed="1.4"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_hero_content_wrap">
                <div className="hero_top_content d-flex flex-wrap align-items-start justify-content-between">
                  <div className="h1_hero_shape_animation">
                    <img src="/assets/gif/hero-shape.gif" alt="Shape" />
                  </div>

                  <h1 className="hero_title uppercase fs-100">
                    <i className="tji-arrow-big-right"></i>
                    Specialized Digital<br />
                    Growth Teams<br />
                    Under One Roof
                  </h1>
                </div>

                <div className="hero_bottom_content">
                  <div className="bottom_left_content">
                    <ul className="tj_icon_list">
                      <li>
                        <span className="icon">
                          <i className="tji-globe"></i>
                        </span>
                        <span className="text">Based in Islamabad, Pakistan</span>
                      </li>
                    </ul>

                    <div className="desc fs-18">
                      From marketing and content to software and AI systems, we
                      connect every client with niche-specific experts who
                      understand their industry and deliver coordinated digital
                      execution.
                    </div>

                    <div className="hero_buttons d-inline-flex flex-wrap">
                      <a href="#guided-discovery" className="tj_user_profile flip-text-wrap">
                        <div className="avatar">
                          <img src="/assets/images/users/h1-hero-user-img.png" alt="USER" />
                        </div>
                        <div className="name flip-text">Find Your Specialist Team</div>
                      </a>

                      <a href="/project" className="tj_bordered_btn flip-text-wrap">
                        <span className="flip-text">See our work</span>
                      </a>
                    </div>
                  </div>

                  <div className="tj_scroll_down">
                    <span className="icon">
                      <i className="tji-arrow-down-circle"></i>
                    </span>
                    <span className="text">[ <span> SCROLL DOWN </span> ]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Video */}
      <div className="h1-video-section container-space h1HeroAnimation">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h1_hero_video_wrap">
                <div className="h1_hero_video">
                  <video autoPlay loop muted playsInline>
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
    </>
  );
}
