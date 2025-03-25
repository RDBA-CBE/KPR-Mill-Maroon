import Link from "next/link";
import React from "react";

export default function Coaching() {
  return (
    <section className="coaching-style-two p_relative sec-pad centred">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: "url(assets/images/kprmill/home/fash-bg-img.png)",
        }}
      ></div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title" style={{ color: "black" }}>
            Awards and Accolades
          </span>
          <h2>Recognition For Sustaining Excellence In The Industry</h2>
        </div>
      
        <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block mb-20">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/images/kprmill/home/tax-award.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">04</span> */}
                </div>
                <h3>
                  <Link href="/#">
                  Tax Payer Awards
                  </Link>
                </h3>
                <p>
                For consecutive Three years, KPR was honoured with the ‘Coimbatore Region’s Prompt & Highest Tax Payer' Award. Presenting the Award, Various Government Dignitaries felicitated Mr.P.Nataraj, FCA,, Managing Director for the good Corporate Governance practices followed by the Company..
                </p>
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block mb-20">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                  <img
                      src="assets/images/kprmill/home/award-img-2024.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">01</span> */}
                </div>
                <h3>
                  <Link href="/#">2024 - Academic Performance</Link>
                </h3>
                <p>
               KPR Employees were conferred their bachelor’s and master’s
degrees. Among them, 11 were honoured with medals – 5 Gold (1 st Rank), 3 silver (2 nd
Rank) and 3 bronze (3 rd Rank)- for their exceptional academic performance, by the
Honourable Governor of Tamil Nadu, Shri R.N. Ravi.<br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block mb-20">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/images/kprmill/home/award-img-1.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">01</span> */}
                </div>
                <h3>
                  <Link href="/#">Forbes Asia - 2023</Link>
                </h3>
                <p>
                  KPR has made its prestigious entry in the list of ‘India’s Top
                  100 Richest’ with a net worth of US $ 2.3 billion as per the
                  reputed Business Magazine ‘Forbes Asia’.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block mb-20">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/images/kprmill/home/award-img-2.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">02</span> */}
                </div>
                <h3>
                  <Link href="/#">
                    First Generation Entrepreneur Award - 2018
                  </Link>
                </h3>
                <p>
                  Honoured by the ‘Cotton Association of India - Mumbai’ with
                  the ‘First Generation Entrepreneur Award for Textile Company
                  in 2018.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block mb-20">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/images/kprmill/home/award-img-3.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">03</span> */}
                </div>
                <h3>
                  <Link href="/#">
                    Established Entrepreneur of the Year - 2017
                  </Link>
                </h3>
                <p>
                  Awarded ‘Established Entrepreneur of the Year’ by the
                  Entrepreneur Organisation Coimbatore during 2017.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
            <div
              className="coaching-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/images/kprmill/home/award-img-4.png"
                      alt=""
                    />
                  </div>
                  {/* <span className="count-text">04</span> */}
                </div>
                <h3>
                  <Link href="/#">
                    Business Today - India's Best CEO's - 2016
                  </Link>
                </h3>
                <p>
                  Our Chairman K.P. Ramasamy features as one of the India’s Best
                  CEOs in a survey published on 1 January 2016.
                </p>
              </div>
            </div>
          </div>
    
        </div>
        <div className="more-content">
          {/* <h5>Assisting with visa preparation for <Link href="index-2">eligibility exams</Link> is a service offered.</h5> */}
          <div className="btn-box">
            <Link href="/awards" className="theme-btn btn-one">
              <span>More Details</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
