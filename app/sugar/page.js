"use client";
import Layout from "@/components/layout/Layout";

export default function Yarn() {

  const backgroundImage = "/assets/images/kprmill-images/Products/Sugar/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Sugar" imageUrl= {backgroundImage}>
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            {/* <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                ELEMENTUM TEMPUS
              </span>
              <h2>
              YARN
              </h2>
            </div> */}
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Sugar</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        KPR presents the finest quality White Crystal Sugar
                        manufactured from the best quality sugarcane ensuring
                        better taste and sweetness. Our White Crystal Sugar is
                        made as per the approved standards and is made in
                        perfect hygienic conditions. Capacity : 20000 TCD sugar
                        , 90 MW power and 470 KLPD of Ethanol
                      </p>
                    </div>
                    <div className="text ">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Renewable Power Resource
                      </h5>
                      <p>
                        Participating in Green Power generation through wind
                        mills and Co-gen facilitates meeting most of our Power
                        requirement through Green Power..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/kprmill-images/Products/Sugar/sugar.png" alt="sugar" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="dream-style-three p_relative"
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Highlights:</h3>
                    </div>
                    <div className="text">
                      <ul className="about-list-style clearfix">
                        <li>Completely free from contamination</li>
                        <li>
                          Stringent quality process in cleaning, crystallizing
                          and drying stages
                        </li>
                        <li>
                          Tidy packing for proper storage and transportation
                        </li>
                        <li>Better quality at reasonable price</li>
                      </ul>
                    </div>

                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img src="/assets/images/kprmill-images/Products/Sugar/highlight.png" alt="highlights" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
