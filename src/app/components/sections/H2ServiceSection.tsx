const services = [
  {
    num: "01",
    icon: "tji-service-4",
    title: "Growth Marketing",
    description:
      "We don't just run ads; we build systems that bring in customers.",
    categories: ["Paid Ads,", "SEO,", "Lead Gen"],
  },
  {
    num: "02",
    icon: "tji-service-1",
    title: "Creative Production",
    description:
      "High-end visuals and content that actually represent your brand.",
    categories: ["Photography", "Video", "Post Production"],
  },
  {
    num: "03",
    icon: "tji-service-5",
    title: "Digital Products",
    description:
      "Scalable software and websites built for performance, not just looks.",
    categories: ["Web & App Development", "Custom Software"],
  },
  {
    num: "05",
    icon: "tji-service-3",
    title: "AI & Automation",
    description:
      "Enhance efficiency, automate workflows, and deploy intelligent agents.",
    categories: ["Al Chatbots", "Workflow Automation", "Al Agents"],
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
