// "use client";
// import Link from "next/link";
// import Layout from "@/components/layout/Layout";

// import { useEffect, useState } from "react";
// import {
//   AnualResult_2016,
//   AnualResult_2017,
//   AnualResult_2018,
//   AnualResult_2019,
//   AnualResult_2020,
//   AnualResult_2021,
//   AnualResult_2022,
//   AnualResult_2023,
//   AnualResult_2024,
//   Audited_Unaudited,
//   Inverstors1_Data,
//   Inverstors2_Data,
//   Inverstors_Preseentation_Data,
// } from "@/utils/constant.utils";
// import { useSetState } from "@/utils/states.utils";
// import { groupedByYear } from "@/utils/function.utils";
// import ListComponents from "../components/listComponents";
// import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
// export default function Policy() {
//   const [state, setState] = useSetState({
//     loading: false,
//     data: [],
//   });

//   useEffect(() => {
//     ReportData();
//   }, []);

//   const ReportData = async () => {
//     try {
//       const groupedData = await groupedByYear("3788");
//       setState({ data: groupedData });
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   };
//   const backgroundImage =
//     "/assets/images/kprmill-images/Investor-Presentation/banner.jpg";
//   return (
//     <>
//       <Layout
//         headerStyle={2}
//         footerStyle={2}
//         breadcrumbTitle="Investor Presentation"
//         imageUrl={backgroundImage}
//       >
//         {/* visa details section */}
//         <section className="visa-details p_relative">
//           <div className="auto-container">
//             <div className="row clearfix">
//               <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
//                <InvestorsSideMenu isActive={"investor-presentation"}/>
//               </div>
//               <ListComponents data={state.data} title="Investor Presentation" />
//             </div>
//           </div>
//         </section>
//         {/*visa details end*/}
//       </Layout>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
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
  Inverstors_Preseentation_Data,
} from "@/utils/constant.utils";
export default function Policy() {

  const backgroundImage = "/assets/images/kprmill-images/Investor-Presentation/banner.jpg"
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Investor Presentation" imageUrl={backgroundImage}>
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
                            <Link href="/announcements">
                              Announcements
                            </Link>
                          </li>
                          <li>
                            <Link href="/investor-presentation" className="current">
                              Investor Presentation
                            </Link>
                          </li>
                          <li>
                            <Link href="/information">
                              Information
                            </Link>
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
                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table  big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th colspan="2"  style={{backgroundColor:"#daad19", color:"white", fontSize:"18px"}}>Investor Presentation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Inverstors_Preseentation_Data.map((item) => {
                            return (
                              <tr>
                                <td>
                                  {item.title}
                                  <br />
                                  {item?.subTitle1 && (
                                    <span
                                      style={{
                                        fontSize: "14px",
                                        color: "#032B66",
                                      }}
                                    >
                                      <b>Sub:</b> {item?.subTitle1}
                                    </span>
                                  )}
                                  {item?.subTitle2 && (
                                    <>
                                      <br />
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          color: "#032B66",
                                        }}
                                      >
                                        <b>Ref:</b> {item?.subTitle2}
                                      </span>
                                    </>
                                  )}
                                </td>
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
                                                  className="icon-50"
                                                  style={{
                                                    fontSize: "20px",
                                                    paddingRight: "5px",
                                                  }}
                                                ></i>
                                                <p
                                                  style={{
                                                    fontSize: "14px",
                                                    paddingTop: "5px",
                                                    color: "#0d6efd",
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