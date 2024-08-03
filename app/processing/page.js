"use client";
import Layout from "@/components/layout/Layout";

export default function Processing() {
  const backgroundImage =
    "/assets/images/kprmill-images/Infrastructure/Processing/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Processing"
        imageUrl={backgroundImage}
      >
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
              <div class="col-lg-12 col-md-12 col-sm-12 text-center content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    {/* <div className="sec-title mb_5">
                      <span className="sub-title">Reach Your Dream</span>
                      <h3>PROCESSING</h3>
                    </div> */}

                    <div className="text">
                      <div className="sec-title mb_5">
                        <h3>Fabric Dyeing and Processing</h3>
                      </div>
                      <p style={{ fontSize: "18px" }}>
                        The state-of the art fabric processing unit setup at
                        SIPCOT, Perundurai integrates the fabric processing
                        activities of dyeing, bleaching and finishing.<br/> The unit
                        has a processing capacity of 25,000MT per annum and
                        adheres to highest international standards.
                      </p>
                    </div>

                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill/infrastructure/Process-1.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section
          className="dream-style-three p_relative"
          style={{ padding: "0px" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25">
                      <p style={{ fontWeight: "600", paddingBottom: "10px" }}>
                        Our contemporary processing facility (With a processing
                        capacity of 25,000 MT per annum) is marked with advanced
                        machines from industry leaders:
                      </p>
                      <ul className="about-list-style clearfix">
                        <li>ERBATECH, GERMANY – DYEING MACHINE</li>
                        <li>ZIMMER, AUSTRIA – ROTARY PRINTING</li>
                        <li>CORINO, ITALY – SLIT OPENER</li>
                        <li>BRUKNER GERMANY- HEAT SETTING MACHINE</li>
                        <li>SPG PRINTS, AUSTRIA – ENGRAVING FOR PRINTING</li>
                        <li>COLOR SERVICE, ITALY- AUTOMATIC DOSING MACHINE</li>
                        <li>STENTERING – HEAT SETTING</li>
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
                    <img
                      src="/assets/images/kprmill/infrastructure/Process-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <div class="col-lg-12 col-md-12 col-sm-12 text-center content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Effluent Treatment Plant (ETP)</h3>
                    </div>

                    <div className="text mb_25">
                      <p style={{ fontSize: "18px" }}>
                        KPR’s ETP is a positive measure towards sustainability.
                        KPR’s ETP is acclaimed as a trendsetter in Tirupur
                        textile industry as it commissioned its ETP<br/> with modern
                        technology equipment. It has a capability to treat 5mn
                        litres per day and recycle waste water.
                      </p>
                    </div>

                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img style={{ height: "400px" }}
                      src="/assets/images/kprmill/infrastructure/Process-3.jpg"
                      alt=""
                    />
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
