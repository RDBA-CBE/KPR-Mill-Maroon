"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import {
  AnualResult_2016,
  AnualResult_2017,
  AnualResult_2018,
  AnualResult_2019,
  AnualResult_2020,
  AnualResult_2021,
  AnualResult_2022,
  AnualResult_2023,
  AnualResult_2024,
  Audited_Unaudited,
  Inverstors1_Data,
  Inverstors2_Data,
  Subsidary_cos,
} from "@/utils/constant.utils";
import { useSetState } from "@/utils/states.utils";
import { groupedByYear } from "@/utils/function.utils";
import ListComponents from "../components/listComponents";
export default function SubSidiaryCos() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    ReportData();
  }, []);

  const ReportData = async () => {
    try {
      const groupedData = await groupedByYear("3757");
      setState({ data: groupedData });
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const backgroundImage =
    "/assets/images/kprmill-images/Financials-Subsidiary-Cos/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Financials – Subsidiary Cos"
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
                      {/* <li>
                        <Link href="/regulation-62-of-the-lodr">
                          Disclosures under Regulation 62 of the LODR
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/investors-contact">
                          Inverstors Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/media-download">Media / Download</Link>
                      </li>
                      <li>
                        <Link href="/financial-result" className="current">
                          Financial Results
                        </Link>

                        <ul className="category-list clearfix">
                          <li>
                            <Link href="/financial-result">Annual Reports</Link>
                          </li>
                          <li>
                            <Link href="/financial-result-audited-unaudited">
                              Audited / Unaudited Results
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/financial-result-subsidiary-cos"
                              className="current"
                            >
                              Financials – Subsidiary Cos
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-of-indepentet-directors">
                              Appointment of Independent Directors
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-of-voting-result-of-agm">
                              Voting Results of AGM and Postal Ballot
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-of-company-information">
                              Company Information
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-con-col-invitation-and-transcript">
                              Con-call Invitations and Transcript
                            </Link>
                          </li>
                        </ul>
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

              <ListComponents
                data={state.data}
                title="Financials – Subsidiary Cos"
              />
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
