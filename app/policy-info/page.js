"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
export default function Regulation62() {
  const backgroundImage =
    "/assets/images/kprmill-images/Investors/Policy-Info/banner.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Policy Info"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="visa-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <ul className="category-list clearfix">
                      <li>
                        <Link href="/regulation-46-of-the-lodr">
                          Disclosures under Regulation 46 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/regulation-62-of-the-lodr">
                          Disclosures under Regulation 62 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors-contact">
                          Inverstors Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/media-download">Media / Download</Link>
                      </li>
                      <li>
                        <Link href="/financial-result">Financial Results</Link>
                      </li>
                      <li>
                        <Link href="/share-holding-pattern">
                          Share Holding Pattern
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate-governance">
                          Corporate Governance{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/code-of-conduct">Code of Conduct</Link>
                      </li>
                      <li>
                        <Link href="/policy-info" className="current">
                          Policy Info
                        </Link>

                        <ul className="category-list clearfix">
                          <li>
                            <Link href="/policy">Policy</Link>
                          </li>
                          <li>
                            <Link href="/investor-services">
                              Investor Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/stock-exchange-intimation">
                              Stock Exchange Intimations
                            </Link>
                          </li>
                          <li>
                            <Link href="/dividend-iepf">Dividend / IEPF</Link>
                          </li>

                          <li>
                            <Link href="/announcements">Announcements</Link>
                          </li>
                          <li>
                            <Link href="/investor-presentation">
                              Investor Presentation
                            </Link>
                          </li>
                          <li>
                            <Link href="/information">Information</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="sidebar-widget travel-widget">
                    <div className="widget-content p_relative">
                      <figure className="image-box">
                        <img src="assets/images/resource/travel-1.jpg" alt="" />
                      </figure>
                      <div className="content-box">
                        <h3>Travel Pass</h3>
                        <ul className="list-item clearfix">
                          <li>Application Form</li>
                          <li>Checklist</li>
                          <li>Guidelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget download-widget">
                    <div className="widget-content">
                      <div className="icon-shape">
                        <img src="assets/images/icons/icon-15.png" alt="" />
                      </div>
                      <h3>
                        Annual Report / <br />
                        Online Appointment
                      </h3>
                      <ul className="download-list clearfix">
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one">
                    <div className="sec-title mb_50">
                      <h2 style={{ color: "#5a1d00" }}>Policy Info:</h2>
                    </div>

                    <div className="row clearfix mb-lg-5 mb-0">
                      <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/policy">
                            <img
                              src="/assets/images/kprmill-images/policy-info/policy.png"
                              alt="policy"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link href="/policy" style={{ color: "#032b66" }}>
                            POLICY
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/dividend-iepf">
                            <img
                              src="/assets/images/kprmill-images/policy-info/dividend-iepf.png"
                              alt="divident-iepf"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/dividend-iepf"
                            style={{ color: "#032b66" }}
                          >
                            DIVIDEND / IEPF
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/information">
                            <img
                              src="/assets/images/kprmill-images/policy-info/information.png"
                              alt="Information"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/information"
                            style={{ color: "#032b66" }}
                          >
                            INFORMATION
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/announcements">
                            <img
                              src="/assets/images/kprmill-images/policy-info/announcements.png"
                              alt="Announcements"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/announcements"
                            style={{ color: "#032b66" }}
                          >
                            ANNOUNCEMENTS
                          </Link>
                        </h5>
                      </div>
                    </div>

                    <div className="row clearfix ">
                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/investor-presentation">
                            <img
                              src="/assets/images/kprmill-images/policy-info/investor-presentation.png"
                              alt="Investors-presentation"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/investor-presentation"
                            style={{ color: "#032b66" }}
                          >
                            INVESTOR PRESENTATION
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/stock-exchange-intimation">
                            <img
                              src="/assets/images/kprmill-images/policy-info/stock-exchange-intimations.png"
                              alt="Stock Exchange Intimations"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/stock-exchange-intimation"
                            style={{ color: "#032b66" }}
                          >
                            STOCK EXCHANGE INTIMATIONS
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/investor-services">
                            <img
                              src="/assets/images/kprmill-images/policy-info/investor-services.png"
                              alt="Investor Services"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/investor-services"
                            style={{ color: "#032b66" }}
                          >
                            INVESTOR SERVICES
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
