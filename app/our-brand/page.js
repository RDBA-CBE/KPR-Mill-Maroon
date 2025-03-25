"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { BrandGallerydata } from "@/utils/constant.utils";
import BrandGallery from "@/components/elements/BrandGallery";

export default function OurBrand() {
  const backgroundImage = "/assets/images/kprmill-images/Our-Brand/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Our Brand"
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
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>FASO – Fashion Retail</h3>
                    </div>

                    <div className="text mb_25">
                      <h5 style={{ fontWeight: "600" }}>
                        Our Fashion Statement
                      </h5>
                      <ul className="about-list-style clearfix">
                        <li>
                          At KPR, we infuse Fashion with Style, merge Color and
                          Order; juxtapose Patterns and Attributes; and Trends
                          and people’s Preferences. That’s KPR’s Fashion Retail
                          for you.
                        </li>
                        <li>
                          In this direction, we have launched a unique and
                          stylish brand ‘FASO’.
                        </li>
                      </ul>
                    </div>

                    <div className="btn-box">
                      <Link
                        href="https://faso.in/"
                        target="_blank"
                        className="theme-btn"
                      >
                        <span>Click Here Buy On-line</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/Our-Brand/brand-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
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
                      <p>
                        KPR brings in the finest range of inner wear and
                        athleisure wear for the Indian market under the brand
                        name FASO. Our three decades of garmenting excellence as
                        well as passion for quality fashion garments has helped
                        us to achieve a distinctive style and comfort wear in
                        the inner garments category.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <p>
                        FASO derives its distinctive advantage by being the
                        unique brand with complete in-house manufacturing
                        competence. This brings the competitive edge of
                        unmatched quality and impeccable workmanship in every
                        product.
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
                      src="/assets/images/kprmill-images/Our-Brand/brand-2.png"
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
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Unique Features</h3>
                    </div>

                    <div className="text mb_25">
                      <ul className="about-list-style clearfix mb_10">
                        <li>
                          Sophisticated air conditioned production facility
                        </li>
                        <li>
                          Bringing in the best-in-class 100% organic cotton
                        </li>
                        <li>
                          Super fine combed compact yarn that brings supreme
                          quality
                        </li>
                        <li>
                          Knitted by the world class knitting machines (Mayer &
                          Cie)
                        </li>
                        <li>
                          Modern processing facility that ensures ultra soft and
                          skin friendly fabric
                        </li>
                        <li>Classic styling and contemporary designs</li>
                      </ul>
                      <p>
                        Designed to suit the modern men and women needs and
                        trend, Faso comes with diverse styles and ranges that
                        suit your needs.
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
                      src="/assets/images/kprmill-images/Our-Brand/brand-3.png"
                      alt=""
                    />
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
            {/* <div className="sec-title mb_5 text-center">
              <span className="sub-title">
                Explore Our Myriad Range of Products
              </span>
              <h2>Gallery</h2>
            </div> */}
            <BrandGallery data={BrandGallerydata} />
          </div>
        </section>
      </Layout>
    </>
  );
}
