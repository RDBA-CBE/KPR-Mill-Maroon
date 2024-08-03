"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const backgroundImage = "/assets/images/kprmill-images/Contuct-Us/banner.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Contact Us"
        imageUrl={backgroundImage}
      >
        <div>
          {/* Contact  Section  */}
          <section className="contact-style-two p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="sec-title mb_30">
                      <span className="sub-title">
                        Connect with our team for support and enquiries
                      </span>
                      <h2>
                        Have Questions? <br />
                        Don't Hesitate to Contact Us
                      </h2>
                    </div>
                    <div className="text mb_10">
                      <p>
                        Contact details of KMP authorized for the purpose of
                        determining materiality of an event or information and
                        for the purpose of making disclosure to Stock
                        Exchange(s)
                      </p>
                    </div>
                    <div className="text mb_30">
                      <p>
                        <b> Mr. P. Kandaswamy</b> – Company Secretary Mail Id:{" "}
                        <Link href="mailto:kandaswamy@kprmill.com">
                          kandaswamy@kprmill.com
                        </Link>
                      </p>
                    </div>
                    <div className="location-box pb_40">
                      <div className="icon-box">
                        <i className="icon-61"></i>
                      </div>
                      <h3>Location</h3>
                      <p>
                        Shrivari Srimat, 1045, Avinashi Road, <br />
                        Coimbatore - 641 018, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-62"></i>
                            </div>
                            <h3>Corporate Office</h3>
                            <ul className="info-list clearfix">
                              <li>
                                <h5>Address:</h5>
                                <p>
                                  Srivari Shrimat, 1045, Avinashi Road
                                  Coimbatore – 641 018, India.
                                </p>
                              </li>
                              <li>
                                <h5>Phone:</h5>
                                <p>
                                  <Link href="tel:0422-2207777">
                                    0422-2207777
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <h5>Email:</h5>
                                <p>
                                  <Link href="mailto:corporate@kprmill.com">
                                    corporate@kprmill.com
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <h5>Fax:</h5>
                                <p>0422 – 2207778</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-62"></i>
                            </div>
                            <h3>Registered Office</h3>
                            <ul className="info-list clearfix">
                              <li>
                                <h5>Address:</h5>
                                <p>
                                  SNo.9, Gokul Buildings A.K.S. Nagar, Thadagam
                                  Road Coimbatore – 641 001
                                </p>
                              </li>
                              <li>
                                <h5>CIN:</h5>
                                <p>L17111TZ2003PLC010518</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact  Section End */}
          {/* Google Map Section */}
          <section className="google-map-section p_relative">
            {/*Map Outer*/}
            <div className="auto-container">
              <div className="map-inner p_relative d_block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31331.41725926444!2d76.97716700000001!3d11.006543000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906f37daba1cf%3A0xdff6f2f59fd6f481!2sK.P.R%20Mill%20Limited!5e0!3m2!1sen!2sus!4v1718616300170!5m2!1sen!2sus"
                  height={570}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
          {/* Google Map Section End */}
        </div>
      </Layout>
    </>
  );
}
