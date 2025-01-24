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
                        KPR’s Men’s Wear collection is crafted to blend style, quality, and functionality, making it the perfect choice for the modern man. From formal wear to casual outfits, our range caters to diverse occasions and preferences. Each garment is designed with precision to offer a tailored fit, enhancing your confidence and appeal. With a focus on durability, our clothes retain their quality even after repeated use, ensuring long-lasting satisfaction. Featuring breathable fabrics and innovative designs, KPR Men’s Wear redefines everyday comfort while keeping you effortlessly stylish.
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
                          KKPR’s Ladies Knit Wear collection is designed to offer the perfect combination of elegance and comfort. Tailored for the modern woman, our range includes versatile options suitable for casual outings, workplace attire, and festive occasions. Each piece is crafted with precision to ensure a flattering fit and enduring style. The use of premium-quality, breathable fabrics ensures all-day comfort while maintaining a chic and sophisticated look. With a focus on durability, vibrant patterns, and timeless designs, KPR’s Ladies Knit Wear adds a touch of glamour to your wardrobe.
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
            <div className="row clearfix"><p>&nbsp;</p><p>&nbsp;</p></div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="row clearfix">
                  <div className="col-lg-7 col-md-7 col-sm-12 order-lg-2  content-column"   style={{ display: "flex", alignItems: "center" }}>
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_5">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3>Kid’s Wear</h3>
                      </div>
                      <div className="text ">
                        <p style={{color:"black"}}>
                        KPR’s Kids' Wear collection is thoughtfully curated to combine functionality with fashion, ensuring your child looks and feels their best. Our garments are made with hypoallergenic fabrics, keeping your child’s delicate skin safe and irritation-free. The collection includes a wide variety of options, from comfy everyday essentials to stylish party wear. Designed to handle the rough-and-tumble of childhood, our clothes maintain their color and shape even after multiple washes. With an emphasis on innovative designs and cheerful patterns, KPR’s Kids' Wear adds a touch of joy to your child’s wardrobe.
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
              <div
                    className="col-lg-6 col-md-5 col-sm-12 order-lg-1 content-column">
                  <img src="/assets/images/kprmill-images/Products/Garment/g1.jpg" />
                  </div>
                  <div
                    className="col-lg-6 col-md-5 col-sm-12 order-lg-1 content-column">
                    <img src="/assets/images/kprmill-images/Products/Garment/g2.jpg" />
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
