"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import {
  Anouncement_Data,
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
} from "@/utils/constant.utils";
import { useSetState } from "@/utils/states.utils";
import { groupedByYear } from "@/utils/function.utils";
import ListComponents from "../components/listComponents";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
export default function Policy() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    ReportData();
  }, []);

  const ReportData = async () => {
    try {
      const groupedData = await groupedByYear("3700");
      setState({ data: groupedData });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const backgroundImage =
    "/assets/images/kprmill-images/Announcements/banne.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Announcements"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <InvestorsSideMenu isActive={"announcements"}/>
              </div>
              <ListComponents data={state.data} title="Announcements" />
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
