import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <section className="about-style-three p_relative">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{
              backgroundImage: "url(assets/images/kprmill/home/about-bg.png)",
            }}
          ></div>
          <div
            className="pattern-2"
            style={{
              backgroundImage:
                "url(assets/images/kprmill/home/about-bg-right.png)",
            }}
          ></div>
        </div>
        <figure className="image-layer">
          <img src="assets/images/kprmill/home/about-img.png" alt="" />
        </figure>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 content-column offset-xl-3">
              <div className="content_block_six">
                <div className="content-box mr_20">
                  <div className="sec-title mb_10 lg-mb-20 ">
                    <span className="sub-title" style={{ color: "black" }}>
                      WELCOME TO KPR
                    </span>
                    <h2>About The Company</h2>
                  </div>
                  <div className="text mb_30">
                    <p className="aboutus-content">
                      KPR Mill, established in 1984 in Coimbatore, is one of
                      India’s largest vertically integrated apparel
                      manufacturing companies. With over 40 years of expertise
                      in the textile sector and a modern manufacturing facility
                      that houses cutting-edge machinery, we have the expertise
                      to craft and produce the finest fashion garments that
                      offer a unique blend of style and comfort.
                    </p>
                  </div>
                  <div className="inner-box mb_40">
                  <h3 className="title mb_20">Future-focussed Initiatives:</h3>

                    <div className="single-item">
                      <div className="icon-box">
                        <img
                          src="assets/images/kprmill/home/abt-icon-1.png"
                          alt=""
                        />
                      </div>
                      <h5 className="aboutus-content" style={{ fontWeight: "600" }}>
                        Active Automation:{" "}
                        <span style={{ fontWeight: "400" }}>
                          We leverage technology and have automated our systems
                          and processes across all verticals
                        </span>
                      </h5>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <img
                          src="assets/images/kprmill/home/abt-icon-2.png"
                          alt=""
                        />
                      </div>
                      <h5 className="aboutus-content" style={{ fontWeight: "600" }}>
                        Expanding Horizons:{" "}
                        <span style={{ fontWeight: "400" }}>
                          Establishment of cutting-edge garment manufacturing
                          facility in Ethiopia
                        </span>{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link href="/about-us" className="theme-btn btn-three">
                      <span>Know More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-inner clearfix">
                <div
                  className="image-shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-44.png)",
                  }}
                ></div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Home-Page/about-img-1.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="assets/images/kprmill/home/about-img-2.png"
                      alt=""
                    />
                  </figure>
                  <figure className="image">
                    <img
                      src="assets/images/kprmill/home/about-img-3.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
