const services = [
  {
    num: "01",
    icon: "tji-service-4",
    title: "Digital Marketing",
    description:
      "Drive traffic, generate leads, and optimize campaigns.",
    categories: ["SEO", "Ads", "Leads"],
  },
  {
    num: "02",
    icon: "tji-service-1",
    title: "Content Creation",
    description:
      "High-quality visuals, promotional content, and AI-generated media.",
    categories: ["Visuals", "Promo", "AI Media"],
  },
  {
    num: "03",
    icon: "tji-service-2",
    title: "Post-Production",
    description:
      "Polished graphic design, video editing, and visual refinement.",
    categories: ["Graphics", "Video", "Editing"],
  },
  {
    num: "04",
    icon: "tji-service-3",
    title: "Software Development",
    description:
      "Custom websites, mobile apps, and scalable digital products.",
    categories: ["Web", "Mobile", "Products"],
  },
  {
    num: "05",
    icon: "tji-service-5",
    title: "AI Solutions & Automation",
    description:
      "Enhance efficiency, automate workflows, and deploy intelligent agents.",
    categories: ["AI", "Automation", "Agents"],
  },
];

export default function H2ServiceSection() {
  return (
    <section className="h2-service-section fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2-service-heading-wrap d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="h2-service-left order-2 order-xl-1">
                <p className="desc fs-18 tj-fade" data-delay="0.2">
                  Select a service area below to connect with the right team of
                  specialists for your project.
                </p>
                <div className="tj-fade" data-delay="0.3">
                  <a href="/services" className="tj_marquee_btn">
                    <span className="text_btn">
                      <span>View all services</span>
                    </span>
                    <span className="icon_btn">
                      <i className="tji-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="section_heading order-1 order-xl-2">
                <span className="sec_subtitle tj-fade">
                  [ <span>Find Your Specialist Team</span> ]
                </span>
                <h2 className="sec_title tj-chars-up">
                  What Are You Looking For?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-scroll-slider">
        <div className="h2-service-wrap">
          {services.map((service) => (
            <div
              key={service.num}
              className="h2-service-item-wrap tj-scroll-slider-item"
            >
              <div className="h2-service-item tj-fade">
                <div className="h2-service-top">
                  <div className="service-sl">\{service.num}</div>
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div className="h2-service-content">
                  <h3 className="service-title tj-fz-h4">
                    <a href="/service-details">{service.title}</a>
                  </h3>
                  <p className="service-desc">{service.description}</p>
                  <div className="category-wrap">
                    {service.categories.map((cat) => (
                      <span key={cat} className="category">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="btn-area d-flex justify-content-end">
                  <a
                    href="/service-details"
                    className="tj_icon_btn flip-text-wrap no-border"
                  >
                    <div className="icon_btn hover-bg">
                      <i className="tji-arrow-right"></i>
                    </div>
                    <span className="flip-text">Learn more</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
