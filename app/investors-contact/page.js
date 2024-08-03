"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
export default function Regulation62() {

  const backgroundImage = "/assets/images/kprmill-images/Investors/Inverstors-contact/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Inverstors Contact" imageUrl={backgroundImage}
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
                        <Link href="/investors-contact" className="current">
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
                        <Link href="/code-of-conduct" >Code of Conduct</Link>
                      </li>
                      <li>
                        <Link href="/policy-info">Policy Info</Link>
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
                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>
                        Contact Information of Registrars and Share Transfer
                        Agents
                      </h3>
                      <p className="mb_5">
                        Please note that the Registrar and Share Transfer Agent
                        of the Company has been changed from KFin Technologies
                        Private Limited to ‘NSDL Database Management Limited‘
                        whose address and contact details are given below:
                      </p>
                      <p>
                        <b>NSDL Database Management Limited</b>
                      </p>
                      <p>
                        <b>Contact Person: Mr. Sunil Kamble</b>
                      </p>
                      <p>
                        4th Floor, Tower 3, One International Center Senapati
                        Bapat Marg, Prabhadevi,
                      </p>
                      <p>Mumbai – 400 013.</p>
                      <p>
                        <b>Contact:</b> 022 – 49142700 /<b>2578</b>
                      </p>
                      <p>
                        <b>Fax:</b> 022-49142503
                      </p>
                      <p>
                        <b>Email:</b> investor.ndmlrta@nsdl.co.in
                      </p>
                      <p>
                        <b>Website:</b> www.ndml-nsdl.co.in
                      </p>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>
                        Contact information of the Designated Officer of the
                        Company
                      </h3>

                      <p>P.Kandaswamy,</p>
                      <p>
                        <b>Company Secretary</b>
                      </p>
                      <p>Phone No: 0422 – 2207777</p>
                      <p>E-mail id: investors@kprmill.com</p>
                      <p>kandaswamy@kprmill.com</p>
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
