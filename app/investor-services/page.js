"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { useSetState } from "@/utils/states.utils";
import { groupedByYear } from "@/utils/function.utils";
import ListComponents from "../components/listComponents";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";

export default function InvestorServices() {
  const [state, setState] = useSetState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    ReportData();
  }, []);

  const ReportData = async () => {
    try {
      const groupedData = await groupedByYear("3783");
      setState({ data: groupedData });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleOpenDocument = (url) => {
    if (typeof window !== "undefined") {
      openWindow(url);
    }
  };

  const openWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const backgroundImage =
    "/assets/images/kprmill-images/Investor-Services/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Investor Services"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <InvestorsSideMenu isActive="investor-services" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one">
                    <h3>Investor Services</h3>
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12 content-side">
                        <p style={{ fontWeight: "bold" }} className="mb_10">
                          TDS Download – 2021-22 Q2
                        </p>
                        <p style={{ fontWeight: "bold" }} className="mb_10">
                          PHYSICAL SHAREHOLDERS – COMPLIANCE OF SEBI REQUIREMENT
                        </p>
                        <p className="mb_10">
                          As per SEBI Circular No.
                          SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2021/655 dated
                          November 3, 2021,
                          SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2021/687 dated
                          December 14, 2021 &
                          SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37 dated March
                          16, 2023{" "}
                          <b>
                            & SEBI/HO/MIRSD/POD-1/P/CIR/2023/158 dated September
                            26, 2023,
                          </b>{" "}
                          SEBI has mandated the Listed Companies to disseminate
                          in their website the requirement for all its
                          shareholders holding shares in Physical form to
                          furnish their valid PAN,Address with Pin code, Email
                          address, Mobile number, Bank account details,
                          Nomination and Specimen signature for their
                          corresponding folio numbers.
                        </p>
                        <p>
                          Accordingly, the required documents to be provided by
                          the shareholders are uploaded herein.
                        </p>
                        <p className="mb_10">
                          Hence immediate furnishing of documents is requested.
                        </p>
                        <p className="mb_10">
                          You are hereby requested to kindly furnish the above
                          documents to the Registrar and Transfer Agents of the
                          company (“RTA”) viz NSDL Database Management Limited
                          in the format/mode as prescribed under above mentioned
                          SEBI Circular. Address and contact details of RTA are
                          given below:
                        </p>

                        <p style={{ fontWeight: "bold" }} className="mb_10">
                          NSDL Database Management Limited
                        </p>
                        <p>4th Floor, Tower 3, </p>
                        <p>One International Center, </p>
                        <p>Senapati Bapat Marg,</p>
                        <p>Prabhadevi,</p>
                        <p>Mumbai – 400 013.</p>
                        <p>
                          <b>Phone:</b> 022-49142700
                        </p>
                        <p>
                          <b>Email:</b> investor.ndmlrta@nsdl.co.in
                        </p>
                        <p>_</p>
                        <p className="mb_10">_</p>

                        <p
                          style={{ textDecoration: "underline" }}
                          className="mb_10"
                        >
                          SEBI – Circular Choice of Nomination in Demat accounts
                        </p>
                        <p
                          className="mb_10"
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          AVAILABILITY OF DISPUTE RESOLUTION MECHANISM AT STOCK
                          EXCHANGES AGAINST LISTED COMPANIES / REGISTRAR TO AN
                          ISSUE AND SHARE TRANSFER AGENTS (RTAs)
                        </p>
                        <p
                          className="mb_10"
                          style={{ textDecoration: "underline" }}
                        >
                          SEBI’s Circular dated January 27, 2023
                        </p>
                        <p className="mb_10">
                          If Shareholders have any dispute against a Listed
                          Company or its Registrar and Share Transfer Agent
                          (RTA) on delay or default in processing of their
                          request, they can file for arbitration with the Stock
                          Exchange.
                        </p>
                        <p className="mb_10" style={{ fontWeight: "bold" }}>
                          For more details, please see the following web links
                          of the Stock Exchanges:
                        </p>
                        <p>BSE – http://tiny.cc/m1l2vz</p>
                        <p>NSE – http://tiny.cc/s1l2vz</p>
                      </div>
                      {/* <div className="col-lg-4 col-md-4 col-sm-12 mt_30 mt-md-0 content-side">
                        <ul className="list clearfix text-center">
                          <div>
                            <i
                              className="icon-50"
                              style={{
                                fontSize: "50px",
                                paddingRight: "5px",
                                color: "#924758",
                              }}
                            ></i>
                          </div>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-ISR-1.pdf"
                              )
                            }
                          >
                            Form ISR 1
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-ISR-2.pdf"
                              )
                            }
                          >
                            Form ISR 2
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-ISR-3.pdf"
                              )
                            }
                          >
                            Form ISR 3
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-ISR-4.pdf"
                              )
                            }
                          >
                            Form ISR 4
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-SH-13.pdf"
                              )
                            }
                          >
                            Form SH 13
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2022/01/Form-SH-14.pdf"
                              )
                            }
                          >
                            Form SH 14
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2023/11/SEBI-CIRCULAR-1.pdf"
                              )
                            }
                          >
                            SEBI Circular
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2023/12/SEBI-CIRCULAR-DATED-17.11.2023-1.pdf"
                              )
                            }
                          >
                            SEBI Circular DATED 17.11.2023
                          </li>
                          <li
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleOpenDocument(
                                "https://kprmilllimited.com/file/wp-content/uploads/2024/06/SEBI-CIRCULAR-DATED-10.06.2024.pdf"
                              )
                            }
                          >
                            SEBI Circular DATED 10.06.2024
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  {/* <div
                    className="content-two p_relative pt_20 mt_20"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderTop: "1px solid #dcdbdb",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          marginBottom: "0px",
                        }}
                        onClick={() =>
                          handleOpenDocument(
                            "https://kprmilllimited.com/file/wp-content/uploads/2024/01/SEBI-CIRCULAR-2.pdf"
                          )
                        }
                      >
                        SEBI – Circular Choice of Nomination
                        <br /> in Demat accounts
                      </h3>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "18px",
                          cursor: "pointer",
                          color: "#032b66",
                        }}
                        onclick={() =>
                          handleOpenDocument(
                            "https://kprmilllimited.com/file/wp-content/uploads/2024/06/SEBI-CIRCULAR-DATED-10.06.2024.pdf"
                          )
                        }
                      >
                        SEBI CIRCULAR DATED 10.06.2024
                      </p>
                    </div>
                  </div> */}
                </div>{" "}
                <div className="mt_30 pt_30" style={{borderTop: "1px solid #dcdbdb"}}>
                <ListComponents data={state.data} title="Investor Services" /></div>
              </div>
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
