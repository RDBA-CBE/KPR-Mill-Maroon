"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import {
  Corporate_Governance,
  ShareHolding_Pattern,
} from "@/utils/constant.utils";
import { useSetState } from "@/utils/states.utils";
import { groupedByYear } from "@/utils/function.utils";
import ListComponents from "../components/listComponents";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
export default function ShareHoldingPattern() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    ReportData();
  }, []);

  const ReportData = async () => {
    try {
      const groupedData = await groupedByYear("3696");
      setState({ data: groupedData });
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const backGroundImage =
    "/assets/images/kprmill-images/Investors/Corporate-Governance/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Corporate Governance"
        imageUrl={backGroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <InvestorsSideMenu isActive="corporate-governance" />
              </div>
              <ListComponents data={state.data} title="Corporate Governance" />
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
