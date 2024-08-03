import React from "react";
import Link from "next/link";
export default function Features() {
  return (
    <section className="feature-section alternat-3">
      <div className="auto-container">
        <div className="inner-container">
          {/* <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div> */}
          <div className="row clearfix ">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block no-gutters">
              {/* <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/kprmill/home/icon-1.png" alt="" />
                  </div>
                  <h3>
                    <Link href="/">What's New</Link>
                  </h3>
                  <p>
                    Manufacturer and supplier of an eclectic range of
                    high-quality, comfortable and 100% organic innerwear and
                    athleisure wear for the Indian market under our brand
                    “FASO”.
                  </p>
                </div>
              </div> */}
              <img
                src="/assets/images/kprmill-images/Home-Page/whats-new.png"
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block no-gutters">
              {/* <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/kprmill/home/icon-3.png" alt="" />
                  </div>
                  <h3>
                    <Link href="/about-us">About Us</Link>
                  </h3>
                  <p>
                    With over 40 years of expertise in the textile sector and a
                    modern manufacturing facility, we can produce the finest
                    fashion garments that offer a unique blend of style and
                    comfort.
                  </p>
                </div>
              </div> */}
              <img
                src="/assets/images/kprmill-images/Home-Page/about-us.png"
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block no-gutters">
              {/* <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/kprmill/home/icon-2.png" alt="" />
                  </div>
                  <h3>
                    <Link href="/awards">Awards</Link>
                  </h3>
                  <p>
                    KPR Mill sustains exceptional standards in terms of quality,
                    adherence to eco-friendly practices and humane initiatives,
                    which earned us numerous recognitions and awards.
                  </p>
                </div>
              </div> */}
              <img
                src="/assets/images/kprmill-images/Home-Page/awards.png"
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block no-gutters">
              {/* <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/kprmill/home/icon-4.png" alt="" />
                  </div>
                  <h3>
                    <Link href="/certifications">Certifications</Link>
                  </h3>
                  <p>
                    We are synonymous with quality in textile and apparel
                    manufacturing and are recognized by and accredited by
                    domestic and international certification agencies.
                  </p>
                </div>
              </div> */}
              <img
                src="/assets/images/kprmill-images/Home-Page/cert.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
