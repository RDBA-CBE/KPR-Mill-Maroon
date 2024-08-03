"use client";
import Layout from "@/components/layout/Layout";

export default function Knitting() {
  const backgroundImage =
    "/assets/images/kprmill-images/Infrastructure/Kintting/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Knitting"
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
                      <h3>KNITTING</h3>
                    </div> */}

                    <div className="text mb_25">
                      <p>
                        KPR’s knitting division in Arasur,Neelambur and
                        Karumathampatty is equipped with high speed automatic
                        circular knitting machines with a capacity to
                        manufacture 40,000 MT of fabrics per annum. These
                        machineries facilitate easy customization and KPR
                        creates innovative designs in fabrics for its global
                        customers. Fabric production enables us to meet both
                        in-house requirements and market needs.
                      </p>
                    </div>
                    <div className="text">
                      <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
                        Housing the contemporary imported knitting machines
                        (Mayer & Cie), we roll out quality fabrics that suit the
                        international garment needs.
                      </h5>
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
                      src="/assets/images/kprmill-images/Infrastructure/Kintting/knitting-1.jpg"
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
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      style={{ height: "400px" }}
                      src="/assets/images/kprmill-images/Infrastructure/Kintting/knitting-1.jpg"
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
