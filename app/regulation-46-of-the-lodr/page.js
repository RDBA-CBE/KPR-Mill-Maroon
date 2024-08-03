"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { Inverstors1_Data, Regulation_46 } from "@/utils/constant.utils";
export default function Regulation46() {
  const backgroundImage =
    "/assets/images/kprmill-images/Investors/Disclosures-under-Regulation-46-of-the-LODR/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Disclosures under Regulation 46 of the LODR"
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
                        <Link
                          href="/regulation-46-of-the-lodr"
                          className="current"
                        >
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
                          Corporate Governance
                        </Link>
                      </li>
                      <li>
                        <Link href="/code-of-conduct">Code of Conduct</Link>
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
                    {/* <div className="text mb_45">
                      <h2>Business Visa</h2>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet magna suscipit, fermentum mattis erat rutrum.
                        Porta semper lacus cursus, feugiat primis ultrice and
                        ligula risus auctor tempus feugiat dolor and lacinia.
                        Vivamus ac ultricies ex. Donec lacinia lacus libero.
                      </p>
                    </div>
                    <figure className="image-box">
                      <img src="assets/images/resource/visa-12.jpg" alt="" />
                    </figure>
                    <div className="lower-text">
                      <p>
                        A foreign national traveling to the United States to
                        conduct temporary business needs a visitor visa (B-1)
                        unless qualifying for entry under the Visa Waiver
                        Program.
                      </p>
                    </div> */}
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped ">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "#daad19",
                              color: "white",
                              fontSize: "18px",
                            }}
                          >
                            <th>S.No</th>
                            <th>PARTICULARS AS PER LODR</th>
                            <th style={{ width: "150px" }}>PAGE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Regulation_46.map((item) => {
                            return (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>

                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      {item?.url &&
                                        item?.url?.map((url) => {
                                          return (
                                            <Link
                                              href={url.link}
                                              target="_blank"
                                            >
                                              <div
                                                className="icon-shape text-center "
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  marginBottom: "10px",
                                                }}
                                              >
                                                <i
                                                  className="fa fa-download"
                                                  style={{
                                                    fontSize: "14px",
                                                    paddingRight: "5px", color:"#5a1d00"
                                                  }}
                                                ></i>
                                                <p
                                                  style={{
                                                    fontSize: "14px",
                                                    paddingTop: "5px",
                                                    color: "#5a1d00",
                                                  }}
                                                >
                                                  Click Here
                                                </p>
                                              </div>
                                            </Link>
                                          );
                                        })}
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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
