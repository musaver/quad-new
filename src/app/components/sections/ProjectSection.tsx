const projects = [
  {
    num: "01",
    title: "Brandmark",
    category: "Branding",
    year: "2026",
    description:
      "We built a fresh brand identity for a growing startup, establishing a clear visual direction and strong market presence.",
    image: "/assets/images/projects/h1-project-img-1.webp",
  },
  {
    num: "02",
    title: "Stationery",
    category: "Branding",
    year: "2026",
    description:
      "Modern professional card set designed with simplicity and precision to leave a strong, lasting impression.",
    image: "/assets/images/projects/h1-project-img-2.webp",
  },
  {
    num: "03",
    title: "Experience",
    category: "Branding",
    year: "2026",
    description:
      "We revitalized the brand identity with a modern visual system, improving clarity, consistency, recognition all digital touchpoints.",
    image: "/assets/images/projects/h1-project-img-3.webp",
  },
  {
    num: "04",
    title: "Interface",
    category: "Branding",
    year: "2026",
    description:
      "We redesigned the SaaS platform to improve usability, streamline workflows, and deliver a more intuitive user experience.",
    image: "/assets/images/projects/h1-project-img-5.webp",
  },
];

export default function ProjectSection() {
  return (
    <section className="h2-project-section tj-theme-dark fix" style={{ paddingBottom: '40px' }}>
      <div className="blocks-shape">
        <svg viewBox="0 0 400 185" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300 0H350V46.25H300V0Z" fill="currentColor" className="svg-elem-1"></path>
          <path d="M350 0H400V46.25H350V0Z" fill="currentColor" className="svg-elem-2"></path>
          <path d="M350 46H400V93H350V46Z" fill="currentColor" className="svg-elem-3"></path>
          <path d="M250 46.25H300V92.5H250V46.25Z" fill="currentColor" className="svg-elem-4"></path>
          <path d="M300 92.5H350V138.75H300V92.5Z" fill="currentColor" className="svg-elem-5"></path>
          <path d="M350 138.75H400V185H350V138.75Z" fill="currentColor" className="svg-elem-6"></path>
          <path d="M250 138.75H300V185H250V138.75Z" fill="currentColor" className="svg-elem-7"></path>
          <path d="M200 138H250V185H200V138Z" fill="currentColor" className="svg-elem-8"></path>
          <path d="M200 92.5H250V138.75H200V92.5Z" fill="currentColor" className="svg-elem-9"></path>
          <path d="M150 92.5H200V138.75H150V92.5Z" fill="currentColor" className="svg-elem-10"></path>
          <path d="M100 92.5H150V138.75H100V92.5Z" fill="currentColor" className="svg-elem-11"></path>
          <path d="M50 92.5H100V138.75H50V92.5Z" fill="currentColor" className="svg-elem-12"></path>
          <path d="M50 138H100V185H50V138Z" fill="currentColor" className="svg-elem-13"></path>
          <path d="M0 92.5H50V138.75H0V92.5Z" fill="currentColor" className="svg-elem-14"></path>
          <path d="M0 138H50V185H0V138Z" fill="currentColor" className="svg-elem-15"></path>
          <path d="M150 46H200V93H150V46Z" fill="currentColor" className="svg-elem-16"></path>
        </svg>
      </div>
      <div className="h2_projects_header d-flex flex-wrap align-items-end justify-content-between gap-3">
        <div className="section_heading">
          <span className="sec_subtitle tj-fade">
            [ <span>Our Recent Projects</span> ]
          </span>
          <h2 className="sec_title fs-80 tj-text-light-1 tj-chars-up">
            Measurable Outcomes. Real-World Impact.
          </h2>
          <p className="desc fs-18 tj-text-light-2 tj-fade" data-delay="0.15" style={{ maxWidth: '700px', marginTop: '20px' }}>
            Claims are easy; results are harder. At QUAD, we believe in demonstrating
            tangible value. Explore our success stories and see the transformations we've enabled.
          </p>
        </div>
        <div className="tj-fade ms-auto align-self-start" data-direction="right" data-delay="0.2">
          <a href="/projects" className="tj_icon_btn text-underline-btn light-btn">
            <div className="icon_btn">
              <span>
                <i className="tji-arrow-right"></i>
                <i className="tji-arrow-right"></i>
              </span>
            </div>
            <span className="underline-text">Explore more</span>
          </a>
        </div>
      </div>
      <div className="h2_projects_wrap">
        {projects.map((project) => (
          <div key={project.num} className="h2_projects_item active">
            <div className="project_sl">\{project.num}</div>
            <div className="project_title_wrap">
              <h3 className="project_title split-flip-text-wrap">
                <a href="/project-details">
                  <span className="split-flip-text">{project.title}</span>
                </a>
              </h3>
              <div className="project_year">
                [ <span>{project.category} - {project.year}</span> ]
              </div>
            </div>
            <div className="project_content">
              <p className="project_desc">{project.description}</p>
              <div className="project_btn_wrap">
                <a href="/project-details" className="tj_marquee_btn light-btn">
                  <span className="text_btn">
                    <span>Learn more</span>
                  </span>
                  <span className="icon_btn">
                    <i className="tji-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="project_image">
              <a href="/project-details">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
