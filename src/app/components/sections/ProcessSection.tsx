export default function ProcessSection() {
  return (
    <section className="h1-process-section container-space fix section-divider">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h1_process_wrapper">
              <div className="section_heading d-block d-xl-none">
                <span className="sec_subtitle tj-fade">
                  [ <span>Simple steps, big results</span> ]
                </span>
                <div className="section_heading_inner">
                  <h2 className="sec_title tj-reveal-line">Our Simple Process.</h2>
                </div>
              </div>

              <div className="h1_process_wrap">
                <div className="process_section_left d-none d-xl-flex">
                  <div className="section_heading">
                    <span className="sec_subtitle tj-fade">
                      [ <span>Simple steps, big results</span> ]
                    </span>
                    <div className="section_heading_inner">
                      <h2 className="sec_title tj-reveal-line">Our Simple Process.</h2>
                    </div>
                  </div>
                  <div className="h1_process_no tj-fade">
                    <span>01.</span>
                    <span>02.</span>
                    <span>03.</span>
                  </div>
                </div>

                <div className="h1_process_images tj-fade">
                  <div className="tj_process_img panel">
                    <img src="/assets/images/process/h1-process-img-1.webp" alt="" />
                  </div>
                  <div className="tj_process_img panel x-100">
                    <img src="/assets/images/process/h1-process-img-2.webp" alt="" />
                  </div>
                  <div className="tj_process_img panel x-100">
                    <img src="/assets/images/process/h1-process-img-3.webp" alt="" />
                  </div>
                </div>

                <div className="h1_process_items tj-fade">
                  <div className="tj_process_item_2">
                    <div className="process_top">
                      <div className="process_wrap d-lg-none">
                        <div className="process_no">01.</div>
                        <div className="process_img">
                          <img src="/assets/images/process/h1-process-img-1.webp" alt="" />
                        </div>
                      </div>
                      <h3 className="process_title tj-fz-h4">Discover ideas</h3>
                      <div className="process_desc">
                        We begin by deeply understanding your brand, goals, and audience.
                        This phase is all about exploring insights, opportunities and
                        creative possibilities.
                      </div>
                    </div>
                    <div className="process_bottom">
                      <div className="step_tags">
                        <div className="sec_subtitle">[ <span>Steps</span> ]</div>
                        <div className="tags">
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Brand understanding</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Goal mapping</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Creative direction</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tj_process_item_2">
                    <div className="process_top">
                      <div className="process_wrap d-lg-none">
                        <div className="process_no">02.</div>
                        <div className="process_img">
                          <img src="/assets/images/process/h1-process-img-2.webp" alt="" />
                        </div>
                      </div>
                      <h3 className="process_title tj-fz-h4">Design solutions</h3>
                      <div className="process_desc">
                        Once the vision are clear, we transform it into a meaningful,
                        user-focused experience through design that drives engagement and
                        measurable growth.
                      </div>
                    </div>
                    <div className="process_bottom">
                      <div className="step_tags">
                        <div className="sec_subtitle">[ <span>Steps</span> ]</div>
                        <div className="tags">
                          <div className="category flip-text-wrap">
                            <span className="flip-text">User centered visual</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">UI/UX execution</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Design refinement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tj_process_item_2">
                    <div className="process_top">
                      <div className="process_wrap d-lg-none">
                        <div className="process_no">03.</div>
                        <div className="process_img">
                          <img src="/assets/images/process/h1-process-img-3.webp" alt="" />
                        </div>
                      </div>
                      <h3 className="process_title tj-fz-h4">Deliver impact</h3>
                      <div className="process_desc">
                        Perfecting the experience, we bring everything to life with
                        precision. From development to handover, ensuring quality,
                        consistency, and long-term success.
                      </div>
                    </div>
                    <div className="process_bottom">
                      <div className="step_tags">
                        <div className="sec_subtitle">[ <span>Steps</span> ]</div>
                        <div className="tags">
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Quality development</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Responsive testing</span>
                          </div>
                          <div className="category flip-text-wrap">
                            <span className="flip-text">Ongoing support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile_button text-center tj-fade d-lg-none">
                <a href="/project" className="tj_icon_btn flip-text-wrap process_btn">
                  <div className="icon_btn scale">
                    <span>
                      <i className="tji-arrow-right"></i>
                      <i className="tji-arrow-right"></i>
                    </span>
                  </div>
                  <span className="flip-text">Start project now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
