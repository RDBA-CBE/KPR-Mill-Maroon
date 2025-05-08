"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
export default function Regulation62() {

  const [state, setState] = useSetState({
    aboutPage: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=code-of-conduct`
      );

      if (res?.data?.length > 0) {
        setState({
          aboutPage: res?.data?.[0]?.content?.rendered,
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };


  const backgroundImages = "/assets/images/kprmill-images/Investors/Code-of-Conduct/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Code of Conduct" imageUrl={backgroundImages}>
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <InvestorsSideMenu isActive={"code-of-conduct"}/>
              </div>

              <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />

            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
