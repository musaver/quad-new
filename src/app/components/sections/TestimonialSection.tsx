function StarRating({ rating, label }: { rating: number; label: string }) {
  return (
    <div
      className="tj-rating-wrapper rating"
      content={rating.toString()}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="r-icon">
          <div
            className="r-icon-wrapper r-icon-marked"
            style={
              star === 5 && rating < 5
                ? { ["--r-rating-icon-marked-width" as string]: "60%" }
                : undefined
            }
          >
            <i aria-hidden="true" className="tj tji-star"></i>
          </div>
          <div className="r-icon-wrapper r-icon-unmarked">
            <i aria-hidden="true" className="tj tji-star"></i>
          </div>
        </div>
      ))}
      <span className="label">{label}</span>
    </div>
  );
}

const testimonials = [
  {
    rating: 4.9,
    label: "4.9/5",
    text: "Working with QUAD has been a great game-changer for our business. Their team took the time to understand our goals, redesigned our website, and created a brand",
    author: "Floyd Miles",
    designation: "Co-Founder",
    authorImg: "/assets/images/users/user-list-img-1.png",
    clientLogo: "/assets/images/clients/client-black-img-1.png",
  },
  {
    rating: 4.9,
    label: "4.9/5",
    text: "From start to finish, QUAD always delivered a seamless experience. Their more strategic approach to design and development helped us launch a website functional.",
    author: "Dianne Russell",
    designation: "Co-Founder",
    authorImg: "/assets/images/users/user-list-img-2.png",
    clientLogo: "/assets/images/clients/client-black-img-2.png",
  },
  {
    rating: 4.9,
    label: "4.9/5",
    text: "We partnered with QUAD for a full brand overhaul, and the results exceeded our expectations. They helped us define a clear brand voice, modernized",
    author: "Marvin McKinney",
    designation: "Co-Founder",
    authorImg: "/assets/images/users/user-list-img-3.png",
    clientLogo: "/assets/images/clients/client-black-img-3.png",
  },
  {
    rating: 4.9,
    label: "4.9/5",
    text: "We partnered with QUAD for a full brand overhaul, and the results exceeded our expectations. They helped us define a clear brand voice, modernized",
    author: "Bessie Cooper",
    designation: "Co-Founder",
    authorImg: "/assets/images/users/user-list-img-4.png",
    clientLogo: "/assets/images/clients/client-black-img-4.png",
  },
];

export default function TestimonialSection() {
  return (
    <section className="h2-testimonial-section fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2_testimonial_header container-space d-flex flex-wrap align-items-end justify-content-between">
              <div
                className="trusted-area order-lg-1 order-2 tj-fade"
                data-direction="left"
                data-delay="0.2"
              >
                <div className="quote-icon">
                  <i className="tji-quote"></i>
                </div>
                <div className="trusted_text fw-sbold">
                  <span>800+</span> Trusted international clients choose QUAD.
                </div>
              </div>
              <div className="section_heading order-lg-2 order-1">
                <span className="sec_subtitle tj-fade">
                  [ <span>Clients testimonials</span> ]
                </span>
                <h2 className="sec_title tj-chars-up">
                  Trusted by innovative brands shaping the future with us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h2_testimonial_slider">
        <div className="scroll-slider" data-scroll-speed="40" data-scroll-gap="0">
          <div className="scroll-wrapper">
            {testimonials.map((item, index) => (
              <div key={index} className="tj_testimonial_item h2_testimonial_item">
                <div className="testimonial_content">
                  <StarRating rating={item.rating} label={item.label} />
                  <div className="review_text">
                    <span>&ldquo;{item.text}&rdquo;</span>
                  </div>
                </div>
                <div className="testimonial_bottom">
                  <div className="tj-author-profile">
                    <div className="author-img">
                      <img src={item.authorImg} alt={item.author} />
                    </div>
                    <div className="author-info">
                      <h3 className="name tj-fz-h5">{item.author}</h3>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                  <div className="testimonial_client_img">
                    <img className="front" src={item.clientLogo} alt="Client" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
