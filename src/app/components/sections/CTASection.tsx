export default function CTASection() {
  return (
    <section className="h1-cta-section container-space fix">
      <div className="bg_image" data-bg-image="/assets/gif/h1-bg.gif"></div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_cta_wrapper">
              <div className="cta_content">
                <h2 className="cta_title fs-60 tj-reveal-line">
                  Ready for Integrated Digital Growth?
                </h2>
                <p className="cta_description fs-18 color-white" style={{ marginTop: '15px', maxWidth: '600px' }}>
                  Connect with a QUAD specialist today and experience the power of
                  tailored expertise.
                </p>
              </div>

              <div
                className="cta_buttons d-inline-flex flex-wrap tj-fade"
                data-direction="right"
              >
                <a href="/contact" className="tj_user_profile flip-text-wrap">
                  <div className="avatar">
                    <img src="/assets/images/users/h1-hero-user-img.png" alt="USER" />
                  </div>
                  <div className="name flip-text">Start Your Project</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
