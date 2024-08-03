"use client";
import Layout from "@/components/layout/Layout";

export default function PreintingAndEmbroidery() {
  const backgroundImage =
    "/assets/images/kprmill-images/Infrastructure/Printing-And-Embroidery/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Printing And Embroidery"
        imageUrl={backgroundImage}
      >
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="printing-title-outer">
              {/* <span className="sub-title" style={{ color: "black" }}>
              PRINTING & EMBROIDERY
              </span> */}
              {/* <h2>PRINTING & EMBROIDERY</h2> */}
              <p className="printing-title">
                As the pioneer in the embroidery market, KPR continues to design
                the highest quality embroidery job works using latest
                technology. Our printing and embroidery capabilities can create
                wonderful moments in our customers’ lives. Our total garment
                printing capacity is a whopping 1,00,000 pieces /day.
              </p>
            </div>
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25">
                      <p>
                        The printing division is equipped with screen printing
                        and other printing machinery of advanced technology
                        imported from Austria. From design selection to final
                        execution, our expert and experienced personnel ensure
                        guaranteed perfection at every aspect of garment.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        The advance technology machine from Austria empowers us
                        to print sharp designs with high level of accuracy.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        {" "}
                        Entire range of fabrics, such as light and heavy as well
                        as delicate and sensitive fabrics can be printed in the
                        same machine, without any friction. Its ability to print
                        voluminous fabrics with high resolution is a salient
                        feature.
                      </p>
                    </div>
                    <div className="text">
                      <p>
                        All printing and embroidery works are done in-house,
                        enabling us to keep costs affordable for the customer,
                        and ensuring that our customers’ orders are never
                        hampered by third party vendors.
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
                      src="/assets/images/kprmill-images/Infrastructure/Printing-And-Embroidery/printing-1.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
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
                      <p>
                        {" "}
                        Entire range of fabrics, such as light and heavy as well
                        as delicate and sensitive fabrics can be printed in the
                        same machine, without any friction. Its ability to print
                        voluminous fabrics with high resolution is a salient
                        feature.
                      </p>
                    </div>
                    <div className="text">
                      <p>
                        All printing and embroidery works are done in-house,
                        enabling us to keep costs affordable for the customer,
                        and ensuring that our customers’ orders are never
                        hampered by third party vendors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/Printing-And-Embroidery/printing-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>
                        Our modern printing & embroidery machinery includes:
                      </h3>
                    </div>

                    <div className="text mb_25">
                      <ul className="about-list-style clearfix">
                        <li>
                          Sophisticated Technology Printing Machine – Austria
                        </li>
                        <li>Barudan Embroidery machine – Japan</li>
                        <li>Hebbeckker Printing Machine – Germany</li>
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
              <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/Printing-And-Embroidery/printing-3.jpg"
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
