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
//   Stock_Exchange_Indimation,
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
//       const groupedData = await groupedByYear("3758");
//       setState({ data: groupedData });
//     } catch (error) {
//       console.log("error: ", error);
//     }
//   };
//   const backgroundImage =
//     "/assets/images/kprmill-images/Stock-Exchange-Intimation/banner.jpg";
//   return (
//     <>
//       <Layout
//         headerStyle={2}
//         footerStyle={2}
//         breadcrumbTitle="Stock Exchange Intimation"
//         imageUrl={backgroundImage}
//       >
//         {/* visa details section */}
//         <section className="visa-details p_relative">
//           <div className="auto-container">
//             <div className="row clearfix">
//               <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
//                <InvestorsSideMenu isActive={"stock-exchange-intimation"} />
//               </div>

//               <ListComponents
//                 data={state.data}
//                 title="Stock Exchange Intimations"
//               />
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
  Stock_Exchange_Indimation,
} from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
export default function Policy() {

  const backgroundImage = "/assets/images/kprmill-images/Stock-Exchange-Intimation/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Stock Exchange Intimation" imageUrl={backgroundImage}>
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <InvestorsSideMenu isActive="stock-exchange-intimation" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one mb_45">
                    <div className=" table-responsive-sm">
                      <table class="table  big-table table-striped">
                        <thead>
                          <tr>
                            <th colspan="2" style={{ backgroundColor: "#daad19", color: "white", fontSize: "18px" }}>Stock Exchange Intimation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Stock_Exchange_Indimation.map((item) => {
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
                                              {
                                                  url?.name && (
                                                    <p style={{
                                                      fontSize: "16px", paddingTop: "5px",
                                                      color: "#5a1d00", paddingRight:"8px", 
                                                    }}>{url?.name}</p>
                                                  )
                                                }
                                                <i
                                                  className="fa fa-download"
                                                  style={{
                                                    fontSize: "16px",
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