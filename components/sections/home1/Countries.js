"use client";
import Link from "next/link";
import { useState } from "react";

export default function Countries() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <section className="countries-section p_relative centred">
        {/* <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div> */}
        <div className="outer-container">
          <div className="sec-title mb_30 centred">
            <span className="sub-title" style={{ color: "black" }}>
              Our strategic capabilities
            </span>
            <h2>Infusing Fashion Trends With Distinctive Style</h2>
          </div>
          <div className="tabs-box">
            {/* <div className="tab-btn-box mb_60">
              <ul className="tab-btns tab-buttons clearfix" role="tablist">
                <li className="nav-link" onClick={() => handleOnClick(1)}>
                  <a
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>Education</span>
                  </a>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <a
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>Immigration</span>
                  </a>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <a
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span>Business</span>
                  </a>
                </li>
              </ul>
            </div> */}
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1200ms"
            >
              <div
                className={
                  "tab-pane fadeInUp animated show active tab-pane fadeInUp animated"
                }
              >
                <div className="row align-items-center">
                  <div className="content-box clearfix">
                    <div className="countries-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/kprmill/home/spinning.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="text">
                          <h3>
                            <Link href="/spinning">Spinning</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="countries-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/kprmill/home/Knitting.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="text">
                          <h3>
                            <Link href="/knitting">Knitting</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="countries-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/kprmill/home/processing.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="text">
                          <h3>
                            <Link href="/processing">Processing</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="countries-block-one">
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src="/assets/images/kprmill/home/garments.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="text">
                          <h3>
                            <Link href="/garment">Garments</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
