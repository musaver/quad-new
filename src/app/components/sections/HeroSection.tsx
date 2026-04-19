import HeroVideoArea from "./HeroVideoArea";

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

                  <h1 className="hero_title uppercase fs-90">
                    <i className="tji-arrow-big-right"></i>
                    Your Entire  <br />
                    Digital Department <br />
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
                    Stop managing five different agencies. 
                    We provide specialized teams for marketing, content, software, 
                    and Al-all working together to scale your business.
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

      <HeroVideoArea />
    </>
  );
}
