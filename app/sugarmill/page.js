"use client";
import Layout from "@/components/layout/Layout";

export default function SugarMill() {

  const backgroundImage = "/assets/images/kprmill-images/Infrastructure/Sugarmill/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Sugar Mill" imageUrl= {backgroundImage}>
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
                      <h3>Sugar Mill</h3>
                    </div>

                    <div className="text mb_25">
                      <h5 style={{ paddingBottom: "10px", fontWeight: "600" }}>
                        Sugar
                      </h5>
                      <p>
                        KPR has been proactively exploring new avenues for green
                        power. To attain 100% self sufficiency in meeting our
                        Power requirements through Green Power, a Co-gen Cum
                        Sugar Factory with 90 MW , 20,000 TCD and 470 KLPD of
                        Ethanal Extraction has been established at Almel
                        Village, Sindagi Taluk, Bijapur (DT), Karnataka and at
                        Chinnmageri village Kalaburaji(DT) , one of the highest
                        sugar recovery area. K.P.R. Sugar Mill Limited and K.P.R
                        Sugar and Apparels Limited are a wholly owned subsidiary
                        of K.P.R. Mill Limited. The Co-gen cum Sugar Mill and
                        Ethanol plant , equipped with modern infrastructure.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <h5 style={{ paddingBottom: "10px", fontWeight: "600" }}>
                        Power
                      </h5>
                      <p>
                        Participating in Green Power generation through wind
                        mills and Co-gen facilitates meeting most of our Power
                        requirement through Green Power. Total green power
                        generation capacity 191.92 MW.
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
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/Sugarmill/img.png"
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
