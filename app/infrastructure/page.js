"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBuilding, FaUserGraduate, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CustomDate } from "@/utils/constant.utils";
import VisaSlider from "@/components/slider/VisaSlider";

export default function Infrastructure() {
  const BackgroundImage =
    "/assets/images/kprmill-images/Infrastructure/banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Infrastructure"
        imageUrl={BackgroundImage}
      >
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">
                Advanced Facilities for superior outcomes
              </span>
              <h2 style={{ fontSize: "18px", lineHeight: "30px" }}>
                Whether it is our finest yarn, functional fabric, the unparallel
                detailing, or the vibrant garments; every KPR product has
                something special to offer. The three quintessential elements
                that contribute significantly to bring you the supreme quality
                KPR collection is the unified efforts of material, men and
                machine.
              </h2>
            </div>
            <div class="row clearfix p_relative">
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-1.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-1">
                <div className="text facility-box-1-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2">Model Factory</h3>
                  </div>
                  <p>
                    We are proud and happy that our facility is a ‘Model
                    Factory’ and many industry stalwarts, senior executives,
                    government officials and internationa delegates have visited
                    KPR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix" style={{ position: "relative" }}>
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-2">
                <div className="text facility-box-2-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2">Quality Focus</h3>
                  </div>
                  <p>
                    We source only the best raw materials and rope in extremely
                    talented individuals and deploy sophisticated as well as
                    modern machines across all departments. Our agile
                    infrastructure has enabled us to offer flexibility, shorter
                    lead time and processing orders of any quantity to our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix" style={{ position: "relative" }}>
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-3.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-1">
                <div className="text facility-box-1-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2">Testing Equipment</h3>
                  </div>
                  <p>
                    We have installed high-tech quality control and testing
                    equipment such as Uster Tester-5, Uster HVI 1000 Spectrum,
                    Uster AFIS Pro-2, Uster Zweigle Hairiness Tester –G566 and
                    UsterClassimate Quantum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix p_relative">
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-4.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-2">
                <div className="text facility-box-2-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2" style={{ color: "white" }}>
                      Location Advantage
                    </h3>
                  </div>
                  <p style={{ color: "white" }}>
                    Entire operations of the Company are strategically located
                    around 50km radius from Tirupur & Coimbatore – one of the
                    Asia’s largest apparel manufacturing clusters. The close
                    proximity to buyers reduces material handling costs and
                    facilitates immediate feedback on the product quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix" style={{ position: "relative" }}>
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-5.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-1">
                <div className="text facility-box-1-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2">Leading-edge Technology</h3>
                  </div>
                  <p>
                    We have deployed modern as well as sophisticated machines
                    across all departments. The high speed imported machines
                    ensure precision and efficiency. Our state of the art
                    machinery helps us to produce garments on par with
                    international standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix p_relative">
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-6.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-2">
                <div className="text facility-box-2-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2" style={{ color: "white" }}>
                      Vertical Integration
                    </h3>
                  </div>
                  <p style={{ color: "white" }}>
                    KPR Mill is one the largest vertical integrated textile
                    companies in Asia. Our careful vertical integration strategy
                    has ensured a smooth and seamless flow of operations across
                    the company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad-top">
          <div className="auto-container">
            <div class="row clearfix" style={{ position: "relative" }}>
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-7.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-1">
                <div className="text facility-box-1-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2">Active Automation</h3>
                  </div>
                  <p>
                    Automation through advanced machines has helped us to
                    achieve precision, high quality and timely delivery. Our
                    autoconers are sensor-enabled to ensure faster and better
                    production. Our Automatic Motorized Bobbin Transport System
                    is the most advanced and enables us to speed up production
                    efficiently. While we could improve production efficiency,
                    thus the labor cost is highly economised. Spinbike Plus.
                    Introduction of Spinbike Plus at our facility has increased
                    the comfort level of our workforce by reducing walking by
                    95%. Moreover, we are able to deploy minimum workforce and
                    increase efficiency better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative section-extrapad">
          <div className="auto-container">
            <div class="row clearfix p_relative">
              <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div
                  class="image-box pl-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <figure className="image facility-img-outer">
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/infrastructure-8.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="facility-box-2">
                <div className="text facility-box-2-content">
                  <div className="sec-title mb_5 text">
                    <h3 className="mb-2" style={{ color: "white" }}>
                      New Processing Capacity
                    </h3>
                  </div>
                  <p style={{ color: "white" }}>
                    We have also commenced operations in the state of the art
                    Processing Unit II, which will add value to the Garment
                    Division. The advanced technology of cold processing adopted
                    therein reduces the water consumption by 30% and eliminates
                    the usage of salt completely. This eco - friendly facility
                    will economise the cost of production and enhance the Fabric
                    quality with excellent colour uniformity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="news-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">
                Advanced Facilities for superior outcomes
              </span>
              <h2 style={{ fontSize: "18px", lineHeight: "30px" }}>
                Whether it is our finest yarn, functional fabric, the unparallel
                detailing, or the vibrant garments; every KPR product has
                something special to offer. The three quintessential elements
                that contribute significantly to bring you the supreme quality
                KPR collection is the unified efforts of material, men and
                machine.
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-1.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                   
                      <h3>
                        <Link href="#">Model Factory</Link>
                      </h3>
                      <p>
                        We are proud and happy that our facility is a ‘Model
                        Factory’ and many industry stalwarts, senior executives,
                        government officials and internationa delegates have
                        visited KPR.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-2.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                     
                      <h3>
                        <Link href="#">Quality Focus</Link>
                      </h3>
                      <p>
                        We source only the best raw materials and rope in
                        extremely talented individuals and deploy sophisticated
                        as well as modern machines across all departments. Our
                        agile infrastructure has enabled us to offer
                        flexibility, shorter lead time and processing orders of
                        any quantity to our customers.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-3.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                   
                      <h3>
                        <Link href="#">Testing Equipment</Link>
                      </h3>
                      <p>
                        We have installed high-tech quality control and testing
                        equipment such as Uster Tester-5, Uster HVI 1000
                        Spectrum, Uster AFIS Pro-2, Uster Zweigle Hairiness
                        Tester –G566 and UsterClassimate Quantum.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section sec-pad " style={{ padding: "0px" }}>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-4.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                     
                      <h3>
                        <Link href="#">Location Advantage</Link>
                      </h3>
                      <p>
                        Entire operations of the Company are strategically
                        located around 50km radius from Tirupur & Coimbatore –
                        one of the Asia’s largest apparel manufacturing
                        clusters. The close proximity to buyers reduces material
                        handling costs and facilitates immediate feedback on the
                        product quality.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-5.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                    
                      <h3>
                        <Link href="#">Leading-edge Technology</Link>
                      </h3>
                      <p>
                        We have deployed modern as well as sophisticated
                        machines across all departments. The high speed imported
                        machines ensure precision and efficiency. Our state of
                        the art machinery helps us to produce garments on par
                        with international standards.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill-images/Infrastructure/infrastructure-6.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                    
                      <h3>
                        <Link href="#">Vertical Integration</Link>
                      </h3>
                      <p>
                        KPR Mill is one the largest vertical integrated textile
                        companies in Asia. Our careful vertical integration
                        strategy has ensured a smooth and seamless flow of
                        operations across the company.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* coaching-section */}
        {/* <section className="coaching-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                  <div className="inner-box">
                    <div className="image-box clearfix">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/infrastructure/infra-active-automation.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="#">Active Automation</Link>
                      </h3>
                      <p>
                        Automation through advanced machines has helped us to
                        achieve precision, high quality and timely delivery. Our
                        autoconers are sensor-enabled to ensure faster and
                        better production. Our Automatic Motorized Bobbin
                        Transport System is the most advanced and enables us to
                        speed up production efficiently. While we could improve
                        production efficiency, thus the labor cost is highly
                        economised. Spinbike Plus. Introduction of Spinbike Plus
                        at our facility has increased the comfort level of our
                        workforce by reducing walking by 95%. Moreover, we are
                        able to deploy minimum workforce and increase efficiency
                        better.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                  <div className="inner-box">
                    <div className="image-box clearfix">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/infrastructure/new-processing-capacity-1.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="#">New Processing Capacity</Link>
                      </h3>
                      <p>
                        We have also commenced operations in the state of the
                        art Processing Unit II, which will add value to the
                        Garment Division. The advanced technology of cold
                        processing adopted therein reduces the water consumption
                        by 30% and eliminates the usage of salt completely. This
                        eco - friendly facility will economise the cost of
                        production and enhance the Fabric quality with excellent
                        colour uniformity.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* coaching-section end */}

        <section
          className="dream-style-three p_relative"
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                Advanced manufacturing techniques for optimal performance
              </span>
              <h2>Manufacturing Capacity</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-8 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25 table-responsive-sm">
                      <table class="table table-striped ">
                        <thead style={{ backgroundColor: "#daad19", color: "black" }}>
                          <tr>
                            <th className="text-center">Segment</th>
                            <th className="text-center">Capacity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Spinning</td>
                            <td>
                              4,00,000 spindles to produce 1,20,000 MT of yarn
                              per annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Knitting</td>
                            <td>
                              Capacity to produce 40,000 MT of fabrics per
                              annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Dyeing</td>
                            <td>Processing 25,000 MT per annum.</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Printing</td>
                            <td>15,000 MT per annum.</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Garmenting</td>
                            <td>
                              177 million pieces of readymade knitted apparel
                              per annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>
                              Power generation
                            </td>
                            <td>
                              66 wind mills with a total captive power
                              generation capacity of 61.92 MW. Co-gen Power
                              Generation Capacity of 90 MW. Roof-Top Power
                              Generation Capacity of 40 MW.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Sugar</td>
                            <td>
                              White Crystal Sugar is made as per the approved
                              standards with Capacity of 20,000 TCD.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Ethanol</td>
                            <td>470 KLPD</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Vortex</td>
                            <td>
                              37,968 Spindles to produce 10,500 MT of Vortex
                              Yarn
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 image-column">
                <div class="image-box pl-3">
                  <figure class="image" style={{ borderRadius: "none" }}>
                    <img
                      src="/assets/images/kprmill-images/Infrastructure/last-img.png"
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
