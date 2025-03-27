// "use client";
// import Link from "next/link";
// import Layout from "@/components/layout/Layout";

// import { useEffect } from "react";

// import { useSetState } from "@/utils/states.utils";
// import { groupedByYear } from "@/utils/function.utils";
// import ListComponents from "../components/listComponents";
// import InverstorsSideMenu from "@/components/elements/InvestorsSideMenu";
// export default function FinancialResult() {
//   const [state, setState] = useSetState({
//     loading: false,
//     data: [],
//   });

//   useEffect(() => {
//     ReportData();
//   }, []);

//   const ReportData = async () => {
//     try {
//       const groupedData = await groupedByYear("3650");
//       console.log("groupedData: ", groupedData);
//       setState({ data: groupedData });
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   };

//   const backgroundImage =
//     "/assets/images/kprmill-images/Investors/Financial-results/banner.jpg";
//   return (
//     <>
//       <Layout
//         headerStyle={2}
//         footerStyle={2}
//         breadcrumbTitle="Financial Results"
//         imageUrl={backgroundImage}
//       >
//         {/* visa details section */}
//         <section className="visa-details p_relative">
//           <div className="auto-container">
//             <div className="row clearfix">
//               <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
//               <InverstorsSideMenu isActive="financial-results" />
//               </div>
//               <ListComponents data={state.data} title="Annual Reports" />
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
} from "@/utils/constant.utils";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { data } from "isotope-layout";
import { getReportTableData } from "@/utils/axios.utils";
export default function FinancialResult() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    ReportData();
  }, []);

  const ReportData = async () => {
    try {
      const res = await getReportTableData();
      const separatedData = res?.reduce((acc, obj) => {
        const formPostId = obj.form_post_id;
        if (!acc[formPostId]) {
          acc[formPostId] = [];
        }
        acc[formPostId].push(obj);
        return acc;
      }, {});
      setState({ data: separatedData["3641"] });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const FinancialResultData = state.data?.map((item) => {
    return item?.form_value;
  });

  const result2024 = FinancialResultData.filter(
    (item) => item.yearselection && item.yearselection.includes("2024")
  );
  console.log("✌️result2024 --->", result2024);

  const backgroundImage =
    "/assets/images/kprmill-images/Investors/Financial-results/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Financial Results"
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
                        <Link href="/financial-result" className="current">
                          Financial Results
                        </Link>

                        <ul className="category-list clearfix">
                          <li>
                            <Link href="/financial-result" className="current">
                              Annual Reports
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-audited-unaudited">
                              Audited / Unaudited Results
                            </Link>
                          </li>
                          <li>
                            <Link href="/financial-result-subsidiary-cos">
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
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">

                  {/* <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2024
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {result2024.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link
                                        href={item.pdfcfdb7_file}
                                        target="_blank"
                                      >
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div> */}
                  <div className="content-one  mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2024
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2024.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <i
                                           className="fa fa-download"
                                            style={{
                                              fontSize: "22px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
                                          {/* <p
                                            style={{
                                              fontSize: "14px",
                                              paddingTop: "5px",
                                              color: "#0d6efd",
                                            }}
                                          >
                                            Click Here
                                          </p> */}
                                        </div>
                                      </Link>
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

                  <div className="content-one  mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2023
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2023.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2022
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2022.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2021
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2021.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2020
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2020.map((item) => {
                            return (
                              <tr>
                                <td>{item.title}</td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2019
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2019.map((item) => {
                            return (
                              <tr>
                                <td>
                                  {item.title}
                                  <br />
                                  <span
                                    style={{
                                      fontSize: "14px",
                                      color: "#032B66",
                                    }}
                                  >
                                    <b>Sub:</b> {item?.subTitle1}
                                  </span>
                                </td>
                                <td>
                                  <ul className="download-list clearfix">
                                    <li>
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2018
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2018.map((item) => {
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
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2017
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2017.map((item) => {
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
                                      <Link href={item.url} target="_blank">
                                        <div
                                          className="icon-shape text-center "
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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

                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th
                              colspan="2"
                              style={{
                                backgroundColor: "#daad19",
                                color: "white",
                                fontSize: "18px",
                              }}
                            >
                              Annual Reports 2012 to 2016
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AnualResult_2016.map((item) => {
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