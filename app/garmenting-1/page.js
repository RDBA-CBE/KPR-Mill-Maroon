"use client";
import Layout from "@/components/layout/Layout";

export default function Garmenting() {
  const backgroundImage =
    "/assets/images/kprmill-images/Infrastructure/Garmenting/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Garmenting"
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
                  <div className="content-box p_relative d_block mb-0">
                    {/* <div className="sec-title mb_5">
                      <span className="sub-title">Reach Your Dream</span>
                      <h3>GARMENTS</h3>
                    </div> */}

                    <div className="garmenting-title-outer" >
                      <p className="garmenting-title" >
                        KPR Garment, the exclusive garmenting center is ranked
                        among the largest garment manufacturing facilities in
                        India with total capacity of 177 million garments per
                        annum.  Inspired by customer delight and the desire to make
                        innovative designs, it creates mesmerizing fashion
                        trends for men, women, boys and girls. Entire garments
                        produced are exclusively for international markets.
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
                    <img src="/assets/images/kprmill-images/Infrastructure/Garmenting/garmenting-1.jpg" alt="" />
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
              <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25">
                      <h5 style={{ paddingBottom: "10px", fontWeight: "500" }}>
                        Inspiring Facilities:
                      </h5>
                      <ul className="about-list-style clearfix">
                        <li>Top-of-the-line design studio</li>
                        <li>Top-tier Gerber & Lectra Spreader cutter</li>
                        <li>Juki, PFAFF and Pegasus sewing machines</li>
                        <li>High-end Barudan embroidery machines, Japan</li>
                        <li>
                          Power-packed Hebbeckker printing machines, Germany
                        </li>
                        <li>
                        Large, computerized, automatic storage facility from Godrej and  Sieger  India
                        </li>
                        <li>4-point checking system for consistent quality</li>
                        <li>
                          A bar code tracking system for enhanced efficacy and
                          timely delivery
                        </li>
                        <li>An effective airport system for metal free zone</li>
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

              <div className="col-lg-6 col-md-12 col-sm-12  order-lg-1 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/Garmenting/img.png"
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
