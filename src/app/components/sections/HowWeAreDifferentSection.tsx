const differentiators = [
  {
    num: "01",
    icon: "tji-service-2",
    title: "Niche-Specific Expert Assignment",
  },
  {
    num: "02",
    icon: "tji-service-3",
    title: "One Umbrella, Multiple Specialist Divisions",
  },
  {
    num: "03",
    icon: "tji-service-1",
    title: "Shared Knowledge Across Teams",
  },
  {
    num: "04",
    icon: "tji-service-4",
    title: "Human-Led Quality with AI Acceleration",
  },
];

export default function HowWeAreDifferentSection() {
  return (
    <section className="h3-service-section container-space sidebar-sticky-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="section_heading">
              <span className="sec_subtitle tj-fade">
                [ <span>Why QUAD</span> ]
              </span>
              <h3 className="sec_title tj-fade" style={{ fontSize: '20px', lineHeight: '1.3', marginTop: '15px' }}>
                The QUAD Difference: Precision, Integration, and Collective Intelligence
              </h3>
              <div className="desc_wrapper tj-fade">
                <p className="desc">
                  In a fragmented digital landscape, QUAD stands apart. We offer
                  the convenience of one partner with the precision of specialist
                  execution, ensuring your brand message and technical
                  implementation are always aligned.
                </p>
                <div className="tj_icon_btn_wrapper">
                  <a
                    href="/about"
                    className="tj_icon_btn rounded_icon flip-text-wrap no-border"
                  >
                    <div className="icon_btn hover-bg">
                      <i className="tji-arrow-right"></i>
                    </div>
                    <span className="flip-text">Learn more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="h3_service_wrapper hover-active-with-img-wrap">
              <div className="h3_service_items tj-fade" data-delay=".1">
                {differentiators.map((item, index) => (
                  <div
                    key={item.num}
                    className={`tj_service_item hover-active-with-img${index === 0 ? " active" : ""}`}
                    data-cursor-text-service-2="<i class='tji-arrow-right'></i>"
                  >
                    <div className="service_icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="service_content">
                      <div className="service_count">
                        [ <span>{item.num}</span> ]
                      </div>
                      <h3 className="service_title split-flip-text-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="service_icons hover-active-with-img-show">
                <div className="service_icon sidebar-sticky">
                  <i className="tji-service-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
