"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import axios from "axios";
import { useSetState } from "@/utils/states.utils";
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
          `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=investors-contact`
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

  const backgroundImage = "/assets/images/kprmill-images/Investors/Inverstors-contact/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Investors Contact" imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <InvestorsSideMenu isActive="inverstors-contact" />
              </div>

              <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />



              {/* <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>
                        Contact Information of Registrars and Share Transfer
                        Agents
                      </h3>
                      <p className="mb_5">
                        Please note that the Registrar and Share Transfer Agent
                        of the Company has been changed from KFin Technologies
                        Private Limited to ‘NSDL Database Management Limited‘
                        whose address and contact details are given below:
                      </p>
                      <p>
                        <b>NSDL Database Management Limited</b>
                      </p>
                      <p>
                        <b>Contact Person: Mr. Sunil Kamble</b>
                      </p>
                      <p>
                        4th Floor, Tower 3, One International Center Senapati
                        Bapat Marg, Prabhadevi,
                      </p>
                      <p>Mumbai – 400 013.</p>
                      <p>
                        <b>Tel: 022 – 49142700/ 2578/ 2589</b>
                      </p>
                     
                      <p>
                        <b>Email:</b> nvestor.ndmlrta@ndml.in
                      </p>
                      <p>
                        <b>Website:</b> https://www.ndml.in/rta.php
                      </p>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>
                        Contact information of the Designated Officer of the
                        Company
                      </h3>

                      <p>P.Kandaswamy,</p>
                      <p>
                        <b>Company Secretary</b>
                      </p>
                      <p>Phone No: 0422 – 2207777</p>
                      <p>E-mail id: investors@kprmill.com</p>
                      <p>kandaswamy@kprmill.com</p>
                    </div>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
