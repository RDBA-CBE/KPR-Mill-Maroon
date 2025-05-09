"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { Inverstors1_Data, Regulation_46 } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import { useSetState } from "@/utils/states.utils";
import Models from "@/src/imports/models.import";
import axios from "axios";
export default function Regulation46() {

  const [state, setState] = useSetState({
        loading: false,
        data: [],
      });
    
      useEffect(() => {
        getData();
        slugData();
      }, []);

      const slugData = async () => {
        try {
          const res = await axios.get(
            "https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages",
            {
              params: {
                slug: "regulation-46-of-the-lodr",
                _embed: true,
              },
            }
          );
      
          if (res?.data?.length > 0) {
            const pageData = res.data[0];
            const featuredImage = pageData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const pageTitle = pageData.title?.rendered;
      
            setState({
              aboutPage: pageData.content?.rendered,
              backgroundImage: featuredImage,
              pageTitle: pageTitle,
            });
          } else {
            console.error("Page not found");
          }
        } catch (error) {
          console.log("error: ", error);
        }
      };
    
      const getData = async () => {
        try {
          setState({ loading: true });
          const res = await Models.auth.main_menu(5);
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
    "/assets/images/kprmill-images/Investors/Disclosures-under-Regulation-46-of-the-LODR/banner.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle={state.pageTitle}
        imageUrl={`${state?.backgroundImage}`}
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
                    <div className=" table-responsive-sm">
                       {[...state.data?.entries()]?.map(([year, reports]) => ( 
                      <table class="table big-table table-striped ">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "#daad19",
                              color: "white",
                              fontSize: "18px",
                            }}
                          >
                            <th colspan="2" style={{ backgroundColor: "#daad19", color: "white", fontSize: "18px" }}>PARTICULARS AS PER LODR {year}

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
                      ) )}
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
                  ) }
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
