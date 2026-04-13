const teamMembers = [
  {
    name: "Pintér Beatrix",
    designation: "UI/UX Designer",
    image: "/assets/images/team/team-member-3.png",
    delay: ".5",
  },
  {
    name: "Molnár Fruzsina",
    designation: "Graphic Designer",
    image: "/assets/images/team/team-member-2.png",
    delay: ".6",
  },
  {
    name: "Surány Izabella",
    designation: "Creative Director",
    image: "/assets/images/team/team-member-1.png",
    delay: ".7",
  },
  {
    name: "Kelemen Krisztina",
    designation: "Full-Stack Dev",
    image: "/assets/images/team/team-member-4.png",
    delay: ".8",
  },
];

export default function TeamSection() {
  return (
    <section className="h1-team-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_team_wrapper">
              <div className="team_section_header">
                <div className="team_desc fs-18 tj-fade" data-direction="left">
                  Our team is a group of a passionate and skilled professionals dedicated to
                  bringing your ideas life. From designer to developers.
                </div>

                <div className="section_heading">
                  <span className="sec_subtitle tj-fade">
                    [ <span>Meet The Team</span> ]
                  </span>
                  <h2 className="sec_title tj-reveal-line">
                    Dedicated to design &amp; innovation
                  </h2>

                  <div className="tj-fade d-none d-lg-inline-flex">
                    <a href="/team" className="tj_icon_btn flip-text-wrap view-all-btn">
                      <div className="icon_btn scale">
                        <span>
                          <i className="tji-arrow-right"></i>
                          <i className="tji-arrow-right"></i>
                        </span>
                      </div>
                      <span className="flip-text">View all members</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="team_items">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="tj_team_member tj-fade"
                    data-direction="left"
                    data-delay={member.delay}
                  >
                    <div className="member_image tj-glitch-hover">
                      <img src={member.image} alt="Team" />
                      <div
                        className="bg_image"
                        data-bg-image="/assets/gif/h1-bg.gif"
                      ></div>
                    </div>

                    <div className="member_info">
                      <h3 className="name tj-fz-h5">
                        <a href="/team-details">{member.name}</a>
                      </h3>
                      <span className="designation">{member.designation}</span>
                      <ul className="tj_socials socials">
                        <li>
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="tji-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="tji-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="tji-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center tj-fade d-lg-none">
                <a href="/team" className="tj_icon_btn flip-text-wrap view-all-btn">
                  <div className="icon_btn scale">
                    <span>
                      <i className="tji-arrow-right"></i>
                      <i className="tji-arrow-right"></i>
                    </span>
                  </div>
                  <span className="flip-text">View all members</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
