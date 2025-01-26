"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect } from "react";

import { useSetState } from "@/utils/states.utils";
import { groupedByYear } from "@/utils/function.utils";
import ListComponents from "../components/listComponents";
import InverstorsSideMenu from "@/components/elements/InvestorsSideMenu";
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
      const groupedData = await groupedByYear("3650");
      console.log("groupedData: ", groupedData);
      setState({ data: groupedData });
    } catch (error) {
      console.log("error: ", error);
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
              <InverstorsSideMenu isActive="financial-results" />
              </div>
              <ListComponents data={state.data} title="Annual Reports" />
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
