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
          <h2>Recognition for sustaining excellence in the industry</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
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
                  <Link href="/#">BW – 19 October 2015</Link>
                </h3>
                <p>
                  KPR Mill features on Business World magazine’s 500 Definitive
                  Ranking of India’s Largest Companies survey conducted jointly
                  with KPMG – global network of professional firms providing
                  Audit, Tax and Advisory services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
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
                  <Link href="/#">BT – 1 January 2016</Link>
                </h3>
                <p>
                  Our Chairman K.P. Ramasamy features as one of the India’s Best
                  CEOs in a survey published on 1 January 2016, conducted
                  jointly by Business Today magazine and PricewaterhouseCoopers
                  – a leading assurance, tax, and consulting services provider.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
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
                  <Link href="/#">Financial Express – February 2016</Link>
                </h3>
                <p>
                  KPR Mill has find place in Financial Express Magazine’s
                  India’s Finest 500 Companies List published in February 2016.
                  The company has got special mention in the category ‘Readymade
                  Garments/Apparel.’
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
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
                  <Link href="/#">BT – 1 January 2017</Link>
                </h3>
                <p>
                  Our Chairman K P Ramasamy features yet again as one of the
                  India’s Best CEOs in a survey published on 1 January 2017,
                  conducted jointly by Business Today magazine and
                  PricewaterhouseCoopers – a leading assurance, tax, and
                  consulting services provider.
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
