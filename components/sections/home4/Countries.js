import Link from "next/link";
import React from "react";

export default function Countries() {
  return (
    <section className="countries-style-five p_relative">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{
            backgroundImage: "url(/assets/images/kprmill/home/shape-1.png)",
          }}
        ></div>
        <div
          className="pattern-2"
          style={{
            backgroundImage: "url(/assets/images/kprmill/home/shape-2.png)",
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_60 text-center light">
          <span className="sub-title">Our business</span>
          <h2>KPR Journey</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div
              className="countries-block-five wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Home-Page/whats-new.png"
                      alt=""
                    />
                  </figure>
                </div>
                {/* <div className="lower-content">
                  <h5><Link href="index-4">China <span>Visa</span></Link></h5>
                  <span className="text">Avenue, Jersey</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div
              className="countries-block-five wow fadeInUp animated"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <Link href="/about-us" style={{cursor: "pointer"}}>
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill-images/Home-Page/about-us.png"
                        alt=""
                      />
                    </figure>
                  </Link>{" "}
                </div>
                {/* <div className="lower-content">
                  <h5><Link href="index-4">United Kingdom <span>Visa</span></Link></h5>
                  <span className="text">Asheville</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div
              className="countries-block-five wow fadeInUp animated"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <Link href="/awards" style={{cursor: "pointer"}}>
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill-images/Home-Page/awards.png"
                        alt=""
                      />
                    </figure>
                  </Link>
                </div>
                {/* <div className="lower-content">
                  <h5><Link href="index-4">Brazil <span>Visa</span></Link></h5>
                  <span className="text">Amsterdam</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div
              className="countries-block-five wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <Link href="/certifications" style={{cursor: "pointer"}}>
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Home-Page/cert.png"
                      alt=""
                    />
                  </figure>
                  </Link>
                </div>
                {/* <div className="lower-content">
                  <h5><Link href="index-4">Australia <span>Visa</span></Link></h5>
                  <span className="text">Queensland</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
