const clientLogos = [
  { front: "client-black-img-4.png", back: "client-black-img-3.png" },
  { front: "client-black-img-2.png", back: "client-black-img-7.png" },
  null,
  { front: "client-black-img-3.png", back: "client-black-img-4.png" },
  null,
  { front: "client-black-img-8.png", back: "client-black-img-6.png" },
  { front: "client-black-img-5.png", back: "client-black-img-1.png" },
  null,
  { front: "client-black-img-6.png", back: "client-black-img-8.png" },
  null,
  null,
  { front: "client-black-img-7.png", back: "client-black-img-2.png" },
];

export default function ClientsSection() {
  return (
    <section className="h3_client_section container-space">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3_client_section_header d-flex flex-wrap flex-row-reverse justify-content-end justify-content-lg-between gap-lg-3">
              <span className="sec_subtitle tj-fade" data-direction="left">
                [ <span>Brands That Trust Us</span> ]
              </span>
              <div className="section_heading">
                <h2 className="sec_title tj-split-text">
                  Clients Who Trust Our Creative Expertise.
                </h2>
                <div className="trusted_features h3_client_card tj-fade d-block d-lg-none">
                  <ul className="tj_users_list">
                    <li>
                      <img src="/assets/images/users/user-list-img-1.png" alt="USER" />
                    </li>
                    <li>
                      <img src="/assets/images/users/user-list-img-2.png" alt="USER" />
                    </li>
                    <li>
                      <img src="/assets/images/users/user-list-img-3.png" alt="USER" />
                    </li>
                    <li>
                      <img src="/assets/images/users/user-list-img-4.png" alt="USER" />
                    </li>
                  </ul>
                  <div className="trusted_text ff-heading fs-22 fw-sbold">
                    <span>800+</span> Trusted international clients choose QUAD
                  </div>
                </div>
                <div className="h3_client_action tj-fade">
                  <a href="/contact" className="tj_btn_2">
                    <div className="tj_btn_icon">
                      <i className="tji-arrow-right"></i>
                    </div>
                    <div className="tj_btn_text">More clients</div>
                    <div className="tj_btn_icon">
                      <i className="tji-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3">
              <div className="trusted_features h3_client_card tj-fade d-none d-lg-block">
                <ul className="tj_users_list">
                  <li>
                    <img src="/assets/images/users/user-list-img-1.png" alt="USER" />
                  </li>
                  <li>
                    <img src="/assets/images/users/user-list-img-2.png" alt="USER" />
                  </li>
                  <li>
                    <img src="/assets/images/users/user-list-img-3.png" alt="USER" />
                  </li>
                  <li>
                    <img src="/assets/images/users/user-list-img-4.png" alt="USER" />
                  </li>
                </ul>
                <div className="trusted_text ff-heading fs-22 fw-sbold">
                  <span>800+</span> Trusted international clients choose QUAD
                </div>
              </div>
              <div className="h3_client_wrap tj-fade">
                {clientLogos.map((client, index) => (
                  <div key={index} className="tj_client_item">
                    {client && (
                      <span>
                        <img
                          className="front"
                          src={`/assets/images/clients/${client.front}`}
                          alt="Client"
                        />
                        <img
                          className="back"
                          src={`/assets/images/clients/${client.back}`}
                          alt="Client"
                        />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
