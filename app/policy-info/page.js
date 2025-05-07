"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import { useSetState } from "@/utils/states.utils";
import Models from "@/src/imports/models.import";
import { image, slug } from "@/utils/function.utils";
export default function Regulation62() {
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
      const res = await Models.auth.sub_menu(2);
      console.log("✌️res --->", res);
      const data = res?.results || [];

      const updateData = data.map((item) => ({
        name: item?.name.toUpperCase(),
        slug: slug(item?.slug),
        img: image(item?.slug),
      }));
      setState({ data: updateData, loading: false });
    } catch (error) {
      setState({ loading: false });
      console.log("✌️error --->", error);
    }
  };

  console.log("data",state.data);
  

  // const slug = (data) => {
  //   let label = "";
  //   if (data === "policy") {
  //     label = "/policy";
  //   } else if (data === "dividend-iepf") {
  //     label = "/dividend-iepf";
  //   } else if (data === "informations") {
  //     label = "/information";
  //   } else if (data === "announcements") {
  //     label = "/announcements";
  //   } else if (data === "investor-presentation") {
  //     label = "/investor-presentation";
  //   } else if (data === "stock-exchange-intimations") {
  //     label = "/stock-exchange-intimation";
  //   } else if (data === "investor-services") {
  //     label = "/investor-services";
  //   }
  //   return label;
  // };

  // const image = (data) => {
  //   let label = "";
  //   if (data === "policy") {
  //     label = "/assets/images/kprmill-images/policy-info/policy.png";
  //   } else if (data === "dividend-iepf") {
  //     label = "/assets/images/kprmill-images/policy-info/dividend-iepf.png";
  //   } else if (data === "informations") {
  //     label = "/assets/images/kprmill-images/policy-info/information.png";
  //   } else if (data === "announcements") {
  //     label = "/assets/images/kprmill-images/policy-info/announcements.png";
  //   } else if (data === "investor-presentation") {
  //     label =
  //       "/assets/images/kprmill-images/policy-info/investor-presentation.png";
  //   } else if (data === "stock-exchange-intimations") {
  //     label =
  //       "/assets/images/kprmill-images/policy-info/stock-exchange-intimations.png";
  //   } else if (data === "investor-services") {
  //     label = "/assets/images/kprmill-images/policy-info/investor-services.png";
  //   }
  //   return label;
  // };

  const backgroundImage =
    "/assets/images/kprmill-images/Investors/Policy-Info/banner.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Policy Info"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <InvestorsSideMenu isActive="policy-info" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one">
                    <div className="sec-title mb_50">
                      <h2 style={{ color: "#5a1d00" }}>Policy Info:</h2>
                    </div>

                    <div className="row g-4 mb-lg-5 mb-0">
                      {state.data.map((item, index) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 sidebar-side text-center"
                          key={index}
                        >
                          <div className="clients-logo mb_10">
                            <Link href={item.slug}>
                              <img src={item.img} alt={item.name} />
                            </Link>
                          </div>
                          <h5>
                            <Link href={item.slug} style={{ color: "#032b66" }}>
                              {item.name}
                            </Link>
                          </h5>
                        </div>
                      ))}
                    </div>

                    {/* <div className="row clearfix ">
                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/investor-presentation">
                            <img
                              src="/assets/images/kprmill-images/policy-info/investor-presentation.png"
                              alt="Investors-presentation"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/investor-presentation"
                            style={{ color: "#032b66" }}
                          >
                            INVESTOR PRESENTATION
                          </Link>
                        </h5>
                      </div>

                       <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/stock-exchange-intimation">
                            <img
                              src="/assets/images/kprmill-images/policy-info/stock-exchange-intimations.png"
                              alt="Stock Exchange Intimations"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/stock-exchange-intimation"
                            style={{ color: "#032b66" }}
                          >
                            STOCK EXCHANGE INTIMATIONS
                          </Link>
                        </h5>
                      </div>

                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side  text-center">
                        <div className="clients-logo mb_10">
                          <Link href="/investor-services">
                            <img
                              src="/assets/images/kprmill-images/policy-info/investor-services.png"
                              alt="Investor Services"
                            />
                          </Link>
                        </div>
                        <h5>
                          <Link
                            href="/investor-services"
                            style={{ color: "#032b66" }}
                          >
                            INVESTOR SERVICES
                          </Link>
                        </h5>
                      </div> 
                    </div> */}
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
