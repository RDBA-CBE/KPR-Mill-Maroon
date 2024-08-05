"use client";
import Layout from "@/components/layout/Layout";

export default function Windmill() {

  const backgroundImage = "/assets/images/kprmill-images/Infrastructure/Windmill/banner-img.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Windmill" imageUrl= {backgroundImage}>
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
                      <h3>Alternative Energy</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        KPR Mill is a future-focused organization strongly
                        believing in responsible growth. We better understand
                        that long-term solution to meet growing power needs is
                        renewable energy. Ever since setting up of spinning
                        mills it was supported by Wind mills.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        KPR has installed Windmills at diverse, strategic
                        locations in Tamilnadu (Tirunellveli, Theni, Thenkasi, &
                        Coimbatore) with a capacity of 61.92 MW Green power,
                        sufficient enough to meet about 40% of our power
                        requirement. The expansion plans of KPR are always
                        cohered with windmill expansion.
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
                    <img src="/assets/images/kprmill-images/Infrastructure/Windmill/img.png" alt="" />
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
