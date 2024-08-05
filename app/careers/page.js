"use client";
import Layout from "@/components/layout/Layout";

export default function Careers() {

  const backgroundImage = "/assets/images/kprmill-images/Careers/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Careers" imageUrl={backgroundImage}>
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
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-2 content-column text-center">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Are You</h3>
                    </div>

                    <div className="text">
                      {/* <ul className="about-list-style clearfix mb_25">
                        <li>Ready to color outside the lines?</li>
                        <li>An out of the box thinker?</li>
                        <li>Willing to traverse the extra mile?</li>
                        <li>Ready to explore new horizons?</li>
                      </ul> */}
                      <div className="text mb_25">
                        <p>Ready to color outside the lines?</p>
                        <p>An out of the box thinker?</p>
                        <p>Willing to traverse the extra mile?</p>
                        <p>Ready to explore new horizons?</p>
                      </div>
                      <h5 style={{ fontWeight: "600" }}>
                        If you answer is YES, then KPR Mill is the right place.
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
                      src="/assets/images/kprmill-images/Careers/careers-1.png"
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
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Our Yarn Capabilities</h3>
                    </div>
                    <div className="text mb_25">
                      <p>
                        KPR’s leadership in the industry is supported by its
                        skilled workforce that includes industry experts and
                        professionals from leading organisations. We are looking
                        forward to talented go-getters for exciting career
                        opportunities available across functions.
                      </p>
                    </div>

                    <div className="text mb_25">
                      <p>
                        We invite people infused with passion, including those
                        looking for their first step in their career as well as
                        those with significant prior experience, to join our
                        winning team. The work environment at KPR is dynamic and
                        goal oriented thus providing an opportunity for
                        individuals to hone their skills and abilities.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        Explore our current openings and e-mail us your resume
                        for further steps.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        <b>Email:</b>
                        <a href="mailto:corporate@kprmill.com" style={{ color: "#5a1d00" }}>
                          {""} corporate@kprmill.com
                        </a>
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
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Careers/careers-2.png"
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
              <h2>YARN</h2>
            </div> */}
             <div class="row clearfix">
               

               <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column text-center">
                 <iframe
                   src="https://docs.google.com/forms/d/e/1FAIpQLSfm0IkZj3J3rXcI9qp_hT8AAZ3zTnyyCfQibQGr1YTqs9Xs2A/viewform?embedded=true"
                   width="100%"
                   height="1500"
                   frameborder="0"
                   marginwidth="0"
                   marginheight="0"
                 >
                   Loading&#8230;
                 </iframe>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                 <div class="image-box pl-3">
                   <figure class="image">
                     <img
                       src="/assets/images/kprmill-images/Careers/careers-1.png"
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
