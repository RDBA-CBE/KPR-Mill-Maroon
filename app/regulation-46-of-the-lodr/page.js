"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { Inverstors1_Data, Regulation_46 } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
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
                <InvestorsSideMenu isActive="regulation-46-of-the-lodr" />
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
                                                  justifyContent: "end",
                                                  marginBottom: "10px",
                                                }}
                                              >
                                                <i
                                                  className="fa fa-download"
                                                  style={{
                                                    fontSize: "20px",
                                                    color: "#5a1d00",
                                                  }}
                                                ></i>
                                                {/* <p
                                                  style={{
                                                    fontSize: "14px",
                                                    paddingTop: "5px",
                                                    color: "#5a1d00",
                                                  }}
                                                >
                                                  Click Here
                                                </p> */}
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
