import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

const page = () => {
  const BackgroundImage =
    "/assets/images/kprmill-images/About/production-facilities-banner-img.jpg";
  return (
    <Layout
      headerStyle={2}
      footerStyle={2}
      breadcrumbTitle="Production Facilities"
      imageUrl={BackgroundImage}
    >
      <section className="dream-style-three p_relative">
        <div className="auto-container">
          <div className="sec-title  mb_30 text-center">
            <h2 style={{ fontSize: "30px" }}>
              The Company Has ‘State-of-the-Art’ Production Facilities In The
              State Of Tamil Nadu, India.
            </h2>
          </div>
          <div class="row clearfix p_relative">
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
              <div
                class="image-box pl-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="image facility-img-outer">
                  <img
                    src="/assets/images/kprmill-images/About/Yarn.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="facility-box-1">
              <div className="text facility-box-1-content">
                <div className="sec-title mb_5 text">
                  <h3 className="mb-2">The Yarn Division</h3>
                </div>
                <p>
                  The Yarn division has 4,00,000 spindles with a production
                  capacity of 1,20,000 MT per annum. With the most modern
                  machinery of International Standards, KPR produces Combed,
                  Grey Melange, Carded and Compact yarn meant for apparels of
                  world’s Leading Brands. We have added production capacity of
                  10,500 MT Vortex Viscose Yarn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dream-style-three p_relative section-extrapad-top">
        <div className="auto-container">
          <div class="row clearfix" style={{ position: "relative" }}>
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
              <div
                class="image-box pl-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="image facility-img-outer">
                  <img
                    src="/assets/images/kprmill-images/About/fabric.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="facility-box-2">
              <div className="text facility-box-2-content">
                <div className="sec-title mb_5 text">
                  <h3 className="mb-2">Fabric Division</h3>
                </div>
                <p>
                  Fabric division is equipped with high speed automatic circular
                  knitting machines that can knit 40,000 MT per annum of
                  different kinds of fabric. Our Fabric Processing unit has a
                  capacity to process 25,000 MT per annum with trendsetter ETP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dream-style-three p_relative section-extrapad-top">
        <div className="auto-container">
          <div class="row clearfix" style={{ position: "relative" }}>
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
              <div
                class="image-box pl-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="image facility-img-outer">
                  <img
                    src="/assets/images/kprmill-images/About/garmenting.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="facility-box-1">
              <div className="text facility-box-1-content">
                <div className="sec-title mb_5 text">
                  <h3 className="mb-2">The Garment Manufacturing Facility</h3>
                </div>
                <p>
                  The Garment manufacturing facility is one of the largest in
                  India with a capacity to produce 177 million garments per
                  annum. Inspired by customer delight and the desire to make
                  innovative designs, KPR creates fashion trends for men, women
                  and children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dream-style-three p_relative section-extrapad-top">
        <div className="auto-container">
          <div class="row clearfix p_relative">
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
              <div
                class="image-box pl-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="image facility-img-outer">
                  <img
                    src="/assets/images/kprmill-images/About/vertica-integration.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="facility-box-2">
              <div className="text facility-box-2-content">
                <div className="sec-title mb_5 text">
                  <h3 className="mb-2" style={{ color: "white" }}>
                    Vertical Integration
                  </h3>
                </div>
                <p style={{ color: "white" }}>
                  Vertical integration of manufacturing process enables it to
                  customize products as per the client’s specifications with
                  consistent quality assurance in a cost-effective manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dream-style-three p_relative section-extrapad">
        <div className="auto-container">
          <div class="row clearfix" style={{ position: "relative" }}>
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
              <div
                class="image-box pl-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <figure className="image facility-img-outer">
                  <img
                    src="/assets/images/kprmill-images/About/green-power.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="facility-box-1">
              <div className="text facility-box-1-content">
                <div className="sec-title mb_5 text">
                  <h3 className="mb-2">Green Power</h3>
                </div>
                <p>
                  Green Power The Company has installed Wind Mills, Co-Gen plant
                  and Roof top Solar with a total generation capacity of 163.92
                  MW of green power for captive consumption to become self-
                  reliant in power needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="dream-style-three p_relative">
        <div className="auto-container">
          <div className="sec-title  mb_30 text-center">
            <h2 style={{ fontSize: "30px" }}>
              The Company has ‘State-of-the-Art’ production facilities in the
              State of Tamil Nadu, India.
            </h2>
          </div>
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
              <div className="content_block_two">
                <div className="content-box p_relative d_block">
                  <div className="sec-title mb_5">
                    <h3>The Yarn division</h3>
                  </div>

                  <div className="text">
                    <p>
                      The Yarn division has 3, 70,000 spindles with a production
                      capacity of 1,20,000 MT per annum. With the most modern
                      machinery of International Standards, KPR produces Combed,
                      Grey Melange, Carded and Compact yarn meant for apparels
                      of world’s Leading Brands. We have added production
                      capacity of 10,500 MT Vortex Viscose Yarn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
              <div class="image-box pl-3">
                <figure class="image">
                  <img
                    src="/assets/images/kprmill/about/Yarn-Spinning-I.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="dream-style-three p_relative"
        style={{ padding: "0px" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_two">
                <div className="content-box p_relative d_block">
                  <div className="sec-title mb_5">
                    <h3>Fabric division </h3>
                  </div>

                  <div className="text">
                    <p>
                      Fabric division is equipped with high speed automatic
                      circular knitting machines that can knit 40,000 MT per
                      annum of different kinds of fabric. Our Fabric Processing
                      unit has a capacity to process 25,000 MT per annum with
                      trendsetter ETP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box pl_3">
                <figure className="image">
                  <img
                    src="/assets/images/kprmill/about/fabric-Kniting.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="dream-style-three p_relative">
        <div className="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
              <div className="content_block_two">
                <div className="content-box p_relative d_block">
                  <div className="sec-title mb_5">
                    <h3>The Garment manufacturing facility</h3>
                  </div>

                  <div className="text">
                    <p>
                      The Garment manufacturing facility is one of the largest
                      in India with a capacity to produce 177 million garments
                      per annum. Inspired by customer delight and the desire to
                      make innovative designs, KPR creates fashion trends for
                      men, women and children.
                    </p>
                  </div>

               
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
              <div class="image-box pl-3">
                <figure class="image">
                  <img
                    src="/assets/images/kprmill/about/Garmenting-Stitching.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="dream-style-three p_relative"
        style={{ padding: "0px" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_two">
                <div className="content-box p_relative d_block">
                  <div className="sec-title mb_5 ">
                    <h3>Vertical integration</h3>
                  </div>

                  <div className="text">
                    <p>
                      Vertical integration of manufacturing process enables it
                      to customize products as per the client’s specifications
                      with consistent quality assurance in a cost-effective
                      manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box pl_3">
                <figure className="image">
                  <img
                    src="/assets/images/kprmill/about/Processing-Data-Colour.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="dream-style-three p_relative">
        <div className="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
              <div className="content_block_two">
                <div className="content-box p_relative d_block">
                  <div className="sec-title mb_5">
                    <h3>Green Power</h3>
                  </div>

                  <div className="text">
                    <p>
                      Green Power The Company has installed Wind Mills, Co-Gen
                      plant and Roof top Solar with a total generation capacity
                      of 163.92 MW of green power for captive consumption to
                      become self- reliant in power needs.
                    </p>
                  </div>

             
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
              <div class="image-box pl-3">
                <figure class="image">
                  <img
                    src="/assets/images/kprmill/about/green-energy-produ.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default page;
