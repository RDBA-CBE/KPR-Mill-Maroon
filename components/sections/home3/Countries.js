"use client";
import CountriesSlider from "@/components/slider/CountriesSlider";
import Link from "next/link";
import React, { useState } from "react";

export default function Countries() {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="countries-style-three alternat-2 sec-pad">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: "url(assets/images/kprmill/home/fash-bg-img.png)",
        }}
      ></div>
      <div className="auto-container">
        <div className="sec-title mb_60 centred">
          <span className="sub-title" style={{ color: "black" }}>
            Our strategic capabilities
          </span>
          <h2>Infusing Fashion Trends with Distinctive Style</h2>
        </div>
        <div className="tabs-box">
          <div className="tab-btn-box mb_50">
            <div className="tab-btns tab-buttons" role="tablist">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-link" onClick={() => handleOnClick(4)}>
                    <div
                      className={
                        activeIndex == 4 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img
                          src="assets/images/kprmill/home/fas-icon-1.png"
                          alt=""
                        />{" "}
                        Spinning
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(5)}>
                    <div
                      className={
                        activeIndex == 5 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img
                          src="assets/images/kprmill/home/fas-icon-4.png"
                          alt=""
                        />{" "}
                        Knitting
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(6)}>
                    <div
                      className={
                        activeIndex == 6 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img
                          src="assets/images/kprmill/home/fas-icon-3.png"
                          alt=""
                        />{" "}
                        Processing
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(7)}>
                    <div
                      className={
                        activeIndex == 7 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img
                          src="assets/images/kprmill/home/fas-icon-2.png"
                          alt=""
                        />{" "}
                        Garments
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-content wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div
              className={
                activeIndex == 4
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/spin-ig-1.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        With a capacity of 4,00,000 spindles, we can produce
                        approximately 1,20,000 MT of high-quality and durable
                        cotton yarn per annum of counts ranging from 10s to 40s.
                      </p>
                      <Link href="/spinning">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/spin-ig-2.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Houses cutting-edge and automatic spinning machinery
                        with Auto Doffer, Bobbin Transporter and Spindle
                        Monitoring system with auto sensors.
                      </p>
                      <Link href="/spinning">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/spin-ig-3.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Well-equipped with an automatic blender and an exclusive
                        Slub yarn manufacturing facility to produce
                        best-in-class Melange and Polyester Cotton Yarn.
                      </p>
                      <Link href="/spinning">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/spin-ig-4.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Have the expertise to produce an extensive range of
                        viscose yarn in various blends to meet distinct client
                        requirements.
                      </p>
                      <Link href="/spinning">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 5
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/kint-img-1.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Equipped with cutting-edge machinery we can knit 40,000
                        MT of cotton fabrics per month in counts ranging from
                        16s to 40s with the gauge of 24 & 28.
                      </p>
                      <Link href="/knitting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/kint-img-2.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Houses high-speed automatic circular knitting machinery
                        to deliver bespoke knitted fabric solutions with
                        innovative designs.
                      </p>
                      <Link href="/knitting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/kint-img-3.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Expertise in knitting best-in-class fabrics to meet
                        specific customer requirements across verticals from
                        apparel manufacturing to home textiles.
                      </p>
                      <Link href="/knitting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/kint-img-4.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Our knitting facilities are strategically positioned and
                        competently supported by a skilled and dedicated
                        workforce to enhance efficiency,
                      </p>
                      <Link href="/knitting">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 6
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/processing-img-1.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Our fabric processing unit is equipped for dyeing,
                        bleaching and finishing processes with the capacity to
                        process 25,000 MT of fabrics per annum, adhering to
                        international norms.
                      </p>
                      <Link href="/processing">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/processing-img-2.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Our processing facility houses cutting-edge Erbatech and
                        Zimmer machinery to ensure high-quality dyeing and
                        printing of our textile solutions.
                      </p>
                      <Link href="/processing">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/processing-img-3.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        We utilize advanced heat setting and stenter technology
                        to elevate fabric appearance and finishes, ensuring they
                        meet our customer’s exact specifications.
                      </p>
                      <Link href="/processing">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/processing-img-4.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Our advanced ETPs help us in our efforts to ensure
                        sustainability by lowering our carbon footprints and the
                        impact on the environment.
                      </p>
                      <Link href="/processing">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 7
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/garments-img-1.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Our exclusive garmenting centre, which is ranked one of
                        the largest garment manufacturing facilities in India
                        can manufacture 177 million garments per annum
                      </p>
                      <Link href="/garmenting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/garments-img-2.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Our advanced design studio is equipped with the latest
                        tools and software to deliver innovative designs that
                        inspire and delight our customers.
                      </p>
                      <Link href="/garmenting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/garments-img-3.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Our modern garment manufacturing unit houses world-class
                        Juki, PFAFF, and Pegasus sewing machines to ensure
                        impeccable stitching and finishing of every garment we
                        create.
                      </p>
                      <Link href="/garmenting">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img
                          src="/assets/images/kprmill-images/Home-Page/garments-img-4.png"
                          alt=""
                        />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        We utilize advanced technology to deliver intricate and
                        high-quality embroidery to elevate the visual appeal of
                        our textile solutions.
                      </p>
                      <Link href="/garmenting">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="countries-style-four sec-pad">
    //   <div
    //     className="pattern-layer"
    //     style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}
    //   ></div>
    //   <div className="auto-container">
    //     <div className="sec-title centred mb_60">
    //       <span className="sub-title">Countries We Offer</span>
    //       <h2>
    //         Immigration Officials approvals for foreign <br />
    //         citizens can vary by country.
    //       </h2>
    //     </div>
    //     <div className="content-box">
    //       {/*Theme Carousel*/}
    //       <CountriesSlider />
    //     </div>
    //   </div>
    // </section>
  );
}
