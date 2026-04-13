const services = [
  {
    num: "01",
    title: "Niche-Specific \n Expert Assignment",
    categories: ["Specialists", "Industry Focus", "Expertise"],
    cursorText: "Explore <br/> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "02",
    title: "One Umbrella \n Multiple Divisions",
    categories: ["Unified", "Integrated", "Seamless"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "03",
    title: "Shared Knowledge \n Across Teams",
    categories: ["Collaboration", "Insights", "Synergy"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "04",
    title: "Human-Led Quality \n AI Acceleration",
    categories: ["Quality", "Speed", "Innovation"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
];

export default function ServicesSection() {
  return (
    <section className="h1-services-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_services_wrapper">
              <div className="section_heading text-center" style={{ maxWidth: '100%' }}>
                <span className="sec_subtitle tj-fade">
                  [ <span>Why Choose QUAD</span> ]
                </span>
                <h2 className="sec_title tj-text-light-1 tj-chars-up fs-50">
                  The QUAD Difference: Precision, Integration, and Collective Intelligence
                </h2>
              </div>

              <div className="section_heading_bottom d-flex flex-wrap align-items-center justify-content-between">
                <div className="tj-fade d-none d-lg-inline-flex" data-direction="left">
                  <a href="/about" className="tj_icon_btn flip-text-wrap view-more-btn">
                    <div className="icon_btn scale">
                      <span>
                        <i className="tji-arrow-right"></i>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </div>
                    <span className="flip-text">Learn more</span>
                  </a>
                </div>

                <div className="service_desc fs-18 tj-text-light-2 tj-fade" data-direction="right" style={{ maxWidth: '550px' }}>
                  In a fragmented digital landscape, QUAD stands apart. We offer the convenience
                  of one partner with the precision of specialist execution, ensuring your brand
                  message and technical implementation are always aligned.
                </div>
              </div>

              <div className="h1_services_items">
                {services.map((service) => (
                  <div
                    key={service.num}
                    className="tj_service_item is-active tj-fade"
                    data-cursor-text-service={service.cursorText}
                  >
                    <a href="/service-details" className="service_link"></a>
                    <div className="service_content">
                      <div className="service_count">[ <span>{service.num}</span> ]</div>
                      <h3 className="service_title reveal-hover-text">
                        {service.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < service.title.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </h3>
                      <div className="service_categories">
                        {service.categories.map((cat) => (
                          <span key={cat} className="category">{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tj-fade d-lg-none text-center">
                <a href="/services" className="tj_icon_btn flip-text-wrap view-more-btn">
                  <div className="icon_btn scale">
                    <span>
                      <i className="tji-arrow-right"></i>
                      <i className="tji-arrow-right"></i>
                    </span>
                  </div>
                  <span className="flip-text">More services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
