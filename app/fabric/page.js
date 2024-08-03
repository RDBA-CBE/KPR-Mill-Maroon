"use client";
import Layout from "@/components/layout/Layout";

export default function Fabric() {

  const backgroundImage = "/assets/images/kprmill-images/Products/Fabric/banner-img.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Fabric" imageUrl= {backgroundImage}>
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
                      <h3>FABRIC</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        Our key fabric products include the entire range of
                        single jersey (also with lycra/spandex), interlock, rib,
                        2 and 3 thread fleece, pique polo, flat bed collar are
                        key products. We produce knitted cotton fabric ranging
                        in counts from 16s to 40s with the gauge of 24 and 28.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Fabric Manufacturing capacity:
                      </h5>
                      <p>40000 MT of fabrics per annum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/kprmill-images/Products/Fabric/fabrics.png" alt="" />
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
                      <h3>Type of Products:</h3>
                    </div>
                    <div className="text">
                      <p>
                        Single Jersey, Interlock, 1 x 1 Rib, 2 x 1 Rib, 3 Thread
                        Fleece, 2 Thread Fleece, Pique polo, Single Jersey with
                        Spandex yarn – all/ alternate feeder & Collar and Cuff.
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

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Special finishes:</h3>
                    </div>
                    <div className="text">
                      <p>
                        Mercerized, Emerising finish, Soft hand feel, Gold
                        Finish, Brushing and Resin Finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
