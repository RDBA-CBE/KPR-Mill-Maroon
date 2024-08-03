"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import {
  AboutQuality,
  AnualResult_2016,
  AnualResult_2017,
  AnualResult_2018,
  AnualResult_2019,
  AnualResult_2020,
  AnualResult_2021,
  AnualResult_2022,
  AnualResult_2023,
  AnualResult_2024,
  Inverstors1_Data,
  Inverstors2_Data,
} from "@/utils/constant.utils";
export default function Quality() {
  const backgroundImage =
    "/assets/images/kprmill-images/About/quality-banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Quality"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="sec-title text-center  mb_20">
              <h3>Award-winning Quality Control Initiatives</h3>
            </div>
            <div className="row clearfix">
              {/* <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="visa-sidebar default-sidebar">
                  <div className="sec-title  mb_20">
                    <h3>Award-winning Quality Control Initiatives</h3>
                  </div>
                  <div className="sidebar-widget category-widget">
                    <img
                      src="/assets/images/kprmill/about/quality-1.jpg"
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                  <div className="sidebar-widget travel-widget">
                    <img
                      src="/assets/images/kprmill/about/quality-2.jpg"
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one">
                    <div className=" table-responsive-sm">
                      <table class="table table-striped">
                        <thead
                          style={{ backgroundColor: "#daad19", color: "black" }}
                        >
                          <tr>
                            <th>
                              <h3
                                style={{ marginBottom: "0px", color: "black" }}
                              >
                                Phase
                              </h3>
                            </th>
                            <th>
                              <h3
                                style={{ marginBottom: "0px", color: "black" }}
                              >
                                Initiative
                              </h3>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {AboutQuality.map((item) => {
                            return (
                              <tr>
                                <td style={{ fontWeight: "600" }}>
                                  {item.Phase}
                                </td>
                                <td>{item?.Initiative}</td>
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
