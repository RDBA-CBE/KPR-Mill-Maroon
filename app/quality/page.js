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
        
            <div className="sec-title mb_20 text-center">
                    <h4>At KPR Mills, our team ensures that every piece of apparel we produce reflects our commitment to quality. That's why we pay close attention to every detail like the fabric's texture, the precision of our stitching, colourfastness and optimal fit. Our quality analysts conduct stringent quality checks at each phase of our manufacturing process to ensure that each garment adheres to the highest quality standards and customer specifications.</h4>
           </div>

           <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                    <div className="content-one">

                    <div className=" table-responsive-sm">

                      <table class="table table-striped">
                      <tbody>
                          <tr>
                            <td class="headcol">Fabric Quality:</td>
                            <td>The quality of the fabric we choose elevates the look, feel and longevity of the garment. For this reason, we meticulously assess the durability, appearance and feel of every material we use for producing apparel. Our quality analysts test for elements like fibre type, yarn construction, fabric weight, and weave structure to ensure superior fabric quality.</td>
                          </tr>
                          <tr>
                          <td class="headcol">Stitching Quality:</td>
                            <td>Strong and precise stitching elevates the durability of the garment to achieve exceptional fabric garment and customer satisfaction. Our quality team conducts seam strength, seam slippage, and stitch density tests to ensure every garment is built to last.</td>
                          </tr>
                          <tr>
                          <td class="headcol">Colourfastness:</td>
                            <td>To ensure vibrant colours and lasting hues we test each fabric for washing, light exposure, and friction at our manufacturing facility. The tests we conduct for colourfastness include thorough washing, light, and rubbing tests to ensure our garments stay bright and beautiful after every wash. </td>
                          </tr>
                          <tr>
                          <td class="headcol">Shrinkage:</td>
                            <td>Our quality team carefully performs shrinkage testing to determine the amount of shrinkage to the garment after every wash, because it's essential to ensure that the size and shape of our garment do not change even after numerous washes.</td>
                          </tr>
                          <tr>
                          <td class="headcol">Garment measurements:</td>
                            <td>Elevating customer comfort is our priority that's why we use various measuring tools like measurement tapes, rulers, etc., to check the dimensions to ensure the perfect garment fit and sizing.</td>
                          </tr>
                          <tr>
                          <td class="headcol">AQL Standards:</td>
                            <td>At KPR Mills, we use globally recognized AQL(Acceptable Quality Limit) statistical sampling approach to ensure exceptional product quality during our production process. We adopt AQL 1.5 and AQL 2.5 standards to ensure our batch garments meet customer specifications before being shipped from our production facility.</td>
                          </tr>
                         
                          </tbody>
                      </table>
                    </div>

                    </div>
                </div>
              </div>
           </div>
  
    



         

                   <br></br>
            <div className="sec-title text-center  mb_20 mt-40">
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
