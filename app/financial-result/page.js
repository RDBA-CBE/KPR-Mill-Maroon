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
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import { useEffect } from "react";
import axios from "axios";
import { useSetState } from "@/utils/states.utils";
import Models from "@/src/imports/models.import";
export default function FinancialResult() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setState({ loading: true });
      const res = await Models.auth.documentList(1);
      const data = res?.results || [];
      const groupedByYearMap = new Map();
      data.forEach((item) => {
        const year = item.year;
        if (!groupedByYearMap.has(year)) {
          groupedByYearMap.set(year, []);
        }
        groupedByYearMap.get(year).push(item);
      });
      setState({ data: groupedByYearMap, loading: false });
    } catch (error) {
      setState({ loading: false });
      console.log("✌️error --->", error);
    }
  };


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
                <InvestorsSideMenu isActive="financial-results" />
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
                    {state.loading ? (
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          color: "#daad19",
                        }}
                      >
                        Loading ....
                      </div>
                    ) : [...state.data?.entries()]?.length > 0 ? (
                      <div className="table-responsive-sm">
                        {[...state.data?.entries()]?.map(([year, reports]) => (
                          <table
                            className="table big-table table-striped"
                            key={year}
                          >
                            <thead>
                              <tr>
                                <th
                                  colSpan="2"
                                  style={{
                                    backgroundColor: "#daad19",
                                    color: "white",
                                    fontSize: "18px",
                                  }}
                                >
                                  Annual Reports {year}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {reports?.map((report) => (
                                <tr key={report?.id}>
                                  <td>
                                    {report?.title}
                                    <br />
                                    {report?.subject && (
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          color: "#032B66",
                                        }}
                                      >
                                        <b>Sub:</b> {report?.subject}
                                      </span>
                                    )}
                                    {report?.reference && (
                                      <>
                                        <br />
                                        <span
                                          style={{
                                            fontSize: "14px",
                                            color: "#032B66",
                                          }}
                                        >
                                          <b>Ref:</b> {report?.reference}
                                        </span>
                                      </>
                                    )}
                                  </td>

                                  <td>
                                    <ul className="download-list clearfix">
                                      {report?.files?.map((file) => (
                                        <li key={file?.id}>
                                          <a
                                            href={file?.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <div
                                              className="icon-shape text-center"
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                              }}
                                            >
                                              {file?.name && (
                                                <p
                                                  style={{
                                                    fontSize: "16px",
                                                    paddingTop: "5px",
                                                    color: "#5a1d00",
                                                    paddingRight: "8px",
                                                  }}
                                                >
                                                  {file?.name}
                                                </p>
                                              )}
                                              <i
                                                className="fa fa-download"
                                                style={{
                                                  fontSize: "16px",
                                                  color: "#5a1d00",
                                                }}
                                              ></i>
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ))}
                      </div>
                    ) : (
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          color: "#daad19",
                        }}
                      >
                        No Records Found
                      </div>
                    )}
                  </div>

                  {/* <div className="content-one  mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped ">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                            alignItems: "end",
                                            justifyContent: "end",
                                          }}
                                        >
                                          <i
                                            className="fa fa-download"
                                            style={{
                                              fontSize: "16px",
                                              color: "#5a1d00",
                                            }}
                                          ></i>
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
                      <table class="table big-table table-striped">
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
                                                  alignItems: "end",
                                                  justifyContent: "end",
                                                  marginBottom: "10px",
                                                }}
                                              >
                                                {url?.name && (
                                                  <p
                                                    style={{
                                                      fontSize: "16px",
                                                      paddingTop: "5px",
                                                      color: "#5a1d00",
                                                      paddingRight: "8px",
                                                    }}
                                                  >
                                                    {url?.name}
                                                  </p>
                                                )}
                                                <i
                                                  className="fa fa-download"
                                                  style={{
                                                    fontSize: "16px",
                                                    color: "#5a1d00",
                                                  }}
                                                ></i>
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
                  </div> */}
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
