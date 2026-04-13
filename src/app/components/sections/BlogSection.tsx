const featuredPost = {
  image: "/assets/images/blog/h1-blog-img-1.webp",
  category: "Branding",
  date: "11 - 12 - 2026",
  title: "How strong brand identity drive business growth in 2026",
};

const blogPosts = [
  {
    image: "/assets/images/blog/h1-blog-img-2.webp",
    category: "UX Trends",
    date: "18 - 12 - 2026",
    title: "Design trend shaping the future of digital experiences",
    delay: "0.2",
  },
  {
    image: "/assets/images/blog/h1-blog-img-3.webp",
    category: "Solutions",
    date: "25 - 12 - 2026",
    title: "How technology together scale modern businesses",
    delay: "0.3",
  },
  {
    image: "/assets/images/blog/h1-blog-img-1.webp",
    category: "Solutions",
    date: "25 - 12 - 2026",
    title: "How technology together scale modern businesses",
    delay: "0.2",
  },
  {
    image: "/assets/images/blog/h1-blog-img-2.webp",
    category: "Branding",
    date: "18 - 12 - 2026",
    title: "How technology together scale modern businesses",
    delay: "0.3",
  },
  {
    image: "/assets/images/blog/h1-blog-img-3.webp",
    category: "UX Trends",
    date: "18 - 12 - 2026",
    title: "Design trend shaping the future of digital experiences",
    delay: "0.2",
  },
  {
    image: "/assets/images/blog/h1-blog-img-1.webp",
    category: "UX Trends",
    date: "18 - 12 - 2026",
    title: "Design trend shaping the future of digital experiences",
    delay: "0.3",
  },
];

export default function BlogSection() {
  return (
    <section className="h2-blog-section container-space fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h2_blog_header d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">
                  [ <span>Ideas & Trends</span> ]
                </span>
                <h2 className="sec_title tj-chars-up">
                  Tips and insights for brands
                </h2>
              </div>
              <div
                className="sec_heading_right tj-fade"
                data-direction="right"
                data-delay="0.2"
              >
                <a href="/blog" className="tj_marquee_btn">
                  <span className="text_btn">
                    <span>More blog</span>
                  </span>
                  <span className="icon_btn">
                    <i className="tji-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="h2_blog_wrap tj-sticky-wrapper">
              <div className="h2_blog_left tj-sticky-left">
                <article
                  className="tj_blog_item h2_blog_item_big tj-fade"
                  data-direction="left"
                >
                  <a href="/blog-details" className="blog_image">
                    <img src={featuredPost.image} alt="Blog" />
                  </a>
                  <div className="blog_content">
                    <div className="blog_meta">
                      <div className="blog_meta_item categories">
                        <a href="/blog-details" className="category">
                          {featuredPost.category}
                        </a>
                      </div>
                      <div className="blog_meta_item date">
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <h2 className="blog_title">
                      <a href="/blog-details" className="reveal-hover-text">
                        {featuredPost.title}
                      </a>
                    </h2>
                    <a
                      href="/blog-details"
                      className="tj_icon_btn text-underline-btn light-btn"
                    >
                      <div className="icon_btn">
                        <span>
                          <i className="tji-arrow-right"></i>
                          <i className="tji-arrow-right"></i>
                        </span>
                      </div>
                      <span className="underline-text">Read more</span>
                    </a>
                  </div>
                </article>
              </div>
              <div className="h2_blog_right tj-sticky-right">
                {blogPosts.map((post, index) => (
                  <article
                    key={index}
                    className="tj_blog_item h2_blog_item tj-fade"
                    data-delay={post.delay}
                  >
                    <a href="/blog-details" className="blog_image">
                      <img src={post.image} alt="Blog" />
                    </a>
                    <div className="blog_content">
                      <div className="blog_meta">
                        <div className="blog_meta_item categories">
                          <a href="/blog-details" className="category">
                            {post.category}
                          </a>
                        </div>
                        <div className="blog_meta_item date">
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="blog_title tj-fz-h5">
                        <a href="/blog-details" className="reveal-hover-text">
                          {post.title}
                        </a>
                      </h3>
                      <a
                        href="/blog-details"
                        className="tj_icon_btn text-underline-btn"
                      >
                        <div className="icon_btn">
                          <span>
                            <i className="tji-arrow-right"></i>
                            <i className="tji-arrow-right"></i>
                          </span>
                        </div>
                        <span className="underline-text">Read more</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
