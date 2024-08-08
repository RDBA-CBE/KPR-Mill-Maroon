"use client";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/elements/Gallery";
import { Gallerydata } from "@/utils/constant.utils";
import Link from "next/link";

export default function Garments() {
  const backgroundImage =
    "/assets/images/kprmill-images/Products/Garment/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Garment"
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
              <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-0 content-column">
                <div className="content_block_two mb-0">
                  <div className="content-box p_relative d_block mb-0">
                    {/* <div className="sec-title mb_5">
                      <span className="sub-title">Reach Your Dream</span>
                      <h3>GARMENT</h3>
                    </div> */}

                    <div className="text garmenting-title-outer">
                      <p className="garmenting-title">
                        KPR offers supreme range of high quality knitted
                        garments for men, women and children out of 100%
                        conventional cotton, organic cotton, cotton blends and
                        fair trade cotton.
                      </p>
                    </div>
                    <section className="feature-style-two sec-pad pt-0 pb-0 centred">
                      <div className="auto-container">
                        <div className="row clearfix mt_30">
                          <div className="col-lg-6 col-md-6 col-sm-12 mb_20 feature-block">
                            <div
                              className="feature-block-two wow fadeInUp animated mt-0"
                              data-wow-delay="00ms"
                              data-wow-duration="1500ms"
                            >
                              <div
                                className="inner-box mb-0"
                                style={{ paddingTop: "40px" }}
                              >
                                <h3>
                                  <Link href="/#">Garment Types</Link>
                                </h3>
                                <p style={{ fontSize: "18px" }}>
                                  Casual wear, Sports wear, Active wear, Sleep
                                  wear, Work wear
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12  mb_20 feature-block">
                            <div
                              className="feature-block-two wow fadeInUp animated mt-0 mb-0"
                              data-wow-delay="200ms"
                              data-wow-duration="1500ms"
                            >
                              <div
                                className="inner-box mb-0"
                                style={{ paddingTop: "40px" }}
                              >
                                <h3>
                                  <Link href="/#">
                                    Garment Manufacturing Capacity
                                  </Link>
                                </h3>
                                <p style={{ fontSize: "18px" }}>
                                  147 million garments per annum
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/kprmill-images/Products/Garment/garment-img.jpg" alt="" />
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
              <div className="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="row clearfix">
                  <div className="col-lg-7 col-md-7 col-sm-12 order-lg-2  content-column"   style={{ display: "flex", alignItems: "center" }}>
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_5">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3>Men’s Wear</h3>
                      </div>
                      <div className="text ">
                        <p style={{color:"black"}}>
                          KPR produces Men’s garment wear made from best quality
                          fabric. We have a wide ranging collection of men’s
                          wear available in contemporary designs and diversified
                          colours. Our garments come up with the assurance of
                          ‘easy to wash’, ‘enduring freshness’ and ‘soothing
                          comfort level.’
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 col-md-5 col-sm-12 order-lg-1 content-column"
                  
                  >
                    <div className="image-box pl_3">
                      <figure className="image">
                        <img
                          style={{ height: "400px" }}
                          src="/assets/images/kprmill-images/Products/Garment/mens-wear-img.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column pt-md-0 pt-5">
                <div className="row clearfix">
                  <div className="col-lg-7 col-md-7 col-sm-12 order-lg-2 content-column"   style={{ display: "flex", alignItems: "center" }}>
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_5">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3>Women’s Wear</h3>
                      </div>
                      <div className="text ">
                        <p style={{color:"black"}}>
                          KPR presents a unique collection of trendy Ladies Knit
                          Wear in special as well as modern designs and vibrant
                          colour combinations. Made from soft fabric, these
                          modish knit wears are easy to wash and maintain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 col-md-5 col-sm-12 order-lg-1  content-column"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="image-box pl_3 w-100">
                      <figure className="image">
                        <img
                          style={{ height: "400px" }}
                          src="/assets/images/kprmill-images/Products/Garment/womens-wear-img.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="dream-style-three p_relative">
          <div className="auto-container">
           
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      <h3>Women’s Wear</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        KPR presents a unique collection of trendy Ladies Knit
                        Wear in special as well as modern designs and vibrant
                        colour combinations. Made from soft fabric, these modish
                        knit wears are easy to wash and maintain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/Products/Garment/womens-wear-img.jpg"
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
            <div className="sec-title mb_25 text-center">
              <span className="sub-title">Reach Your Dream</span>
              <h2>Gallery</h2>
            </div>
            <Gallery data={Gallerydata} />
          </div>
        </section>
      </Layout>
    </>
  );
}
