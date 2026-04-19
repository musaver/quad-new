const services = [
  {
    num: "01",
    title: "Niche Experts",
    description:
      "You don't get a generalist. You get a team that knows your industry.",
    categories: ["Specialists", "Industry Focus", "Expertise"],
    cursorText: "Explore <br/> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "02",
    title: "Knowledge Transfer",
    description:
      "Our teams share insights across niches, giving you a competitive edge.",
    categories: ["Shared", "Competitive", "Best Practices"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "03",
    title: "AI-Accelerated",
    description:
      "We use AI to work faster and smarter, without losing the human touch.",
    categories: ["AI-Powered", "Human-AI", "Scalable"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
  {
    num: "04",
    title: "Unified Strategy",
    description:
      "One point of contact. One cohesive brand. Zero chaos.",
    categories: ["Cohesive", "Consistent", "Clear"],
    cursorText: "Explore <br /> more<i class='tji-arrow-up-right'></i>",
  },
];

export default function ServicesSection() {
  return (
    <section className="h1-services-section container-space tj-theme-dark fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_services_wrapper h1-services-with-desc">
              <div
                className="section_heading text-center"
                style={{ maxWidth: "100%" }}
              >
                <h2 className="sec_title tj-text-light-1 tj-chars-up fs-50">
                  Why QUAD
                </h2>
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
                      <div className="service_count">
                        [ <span>{service.num}</span> ]
                      </div>
                      <div className="service_body">
                        <div className="service_main">
                          <h3 className="service_title reveal-hover-text">
                            {service.title.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < service.title.split("\n").length - 1 && (
                                  <br />
                                )}
                              </span>
                            ))}
                          </h3>
                          <p className="service_desc">{service.description}</p>
                        </div>
                        <div className="service_categories">
                          {service.categories.map((cat) => (
                            <span key={cat} className="category">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tj-fade d-lg-none text-center">
                <a
                  href="/services"
                  className="tj_icon_btn flip-text-wrap view-more-btn"
                >
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
