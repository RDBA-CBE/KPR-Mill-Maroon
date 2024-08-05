import Link from "next/link";
import React from "react";

export default function Help() {
  return (
    <section className="help-section p_relative">
      <div className="pattern-layer">
        {/* <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-45.png)" }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-46.png)" }}
        ></div> */}
        {/* <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)' }}></div> */}
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 single-column">
            <div className="sec-title light mb_20">
              <span className="sub-title" style={{ color: "black" }}>
                Corporate Social Responsibility
              </span>
              <h2 style={{ color: "black" }}>
                Environmental, Social and
                <br /> Governance
              </h2>
            </div>
            <div className="single-item mb_30">
              <div className="esg_content">
                <p className="mb_10">
                  At KPR Mill we emphasize social equality and sustainability.
                  We carefully select our supply chain and continuously seek
                  innovative approaches to enhance our manufacturing practices
                  to ensure the well-being of our people and environment.
                </p>
                <p>
                  Our certifications highlight our environment-friendly
                  production approaches, adherence to socially responsible
                  working conditions and employee health and safety in our
                  manufacturing facilities, thereby enhancing the local
                  community and society at large.
                </p>
              </div>
            </div>

            <div className="row clearfix mb_30">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul className="help-list-style-one clearfix">
                  <li>Community Development</li>
                  <li>Health and Safety</li>
                  <li>Higher Education</li>
                  <li>Sports Activities</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul className="help-list-style-one clearfix">
                  <li>Recreation facilities</li>
                  <li>Green Initiatives</li>
                  <li>Credentials</li>
                  <li>Better Corporate Governance</li>
                </ul>
              </div>
            </div>

            <div>
              <Link
                href="/community-development"
                className="theme-btn btn-two"
                style={{ backgroundColor: "#5a1d00" }}
              >
                <span>Know More</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="esg_image-box">
              <img src="assets/images/kprmill/home/esg-vector-img.png" alt="" />
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-12 single-column">
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon mb_13"><i className="icon-44"></i></div>
                  <span className="count-text">03</span>
                </div>
                <h3><Link href="index-3">Get Ready To <br />Receive your Visa</Link></h3>
                <p>Equaly blame belongs those fail their all duty through weak shrinking.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
