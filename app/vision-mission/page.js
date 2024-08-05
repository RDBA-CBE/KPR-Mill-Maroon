"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { singleSlugData } from "@/utils/axios.utils";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const [state, setState] = useSetState({
    aboutPage: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("about-the-company");
      if (res && res.length > 0) {
        setState({
          aboutPage: res[0],
        });
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("state.aboutPage: ", state.aboutPage);

  const BackgroundImage =
    "/assets/images/kprmill-images/About/Vision-Mission/banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Vision & Mission"
        imageUrl={BackgroundImage}
      >
        <section className="dream-style-three p_relative pb-0">
          <div className="auto-container">
            <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                Purpose and Future Goals – Our Way Forward
              </span>
              <h2>
                A Largest Vertically Integrated Textile Manufacturer in India
              </h2>
            </div>
            {/* <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      <h3>Vision</h3>
                    </div>

                    <div className="text">
                      <ul className="about-list-style clearfix">
                        <li>Quality’ – The Maxim of KPR</li>
                        <li>
                          To Ensure a strong presence in the global textile
                          market by focusing on quality and exceeding customer
                          and Stakeholder expectations.
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/kprmill/about/vision.png" alt="" />
                  </figure>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="feature-section about-page alternat-3">
          <div className="auto-container">
            <div className="inner-container">
              <div
                className="shape-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-41.png)",
                }}
              ></div>
              <div className="row clearfix">
                <div className="col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      {/* <div className="icon-box">
                        <i className="icon-17"></i>
                      </div> */}

                      <div className="row clearfix">
                        <div
                          className="col-md-4 col-12 text-end"
                          style={{ borderRight: "1px solid #ffffff73" }}
                        >
                          <h1 className="text mb_20 pr_30">
                            <Link
                              href="/"
                              style={{ color: "white", fontWeight: "600" }}
                            >
                              Vision
                            </Link>
                          </h1>
                        </div>
                        <div className="col-md-8 col-12 ">
                          <p
                            className="text mb_10 pl_30"
                            style={{
                              color: "white",
                              fontSize: "20px",
                              lineHeight: "30px",
                            }}
                          >
                            Quality’ – The Maxim of KPR
                          </p>
                          <p className="pl_30" style={{ color: "#fff", fontSize: "20px" }}>
                            To Ensure a strong presence in the global textile
                            market by focusing on quality and exceeding customer
                            and Stakeholder expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="dream-style-three p_relative"
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Mission</h3>
                    </div>
                    <div className="text">
                      <ul className="about-list-style clearfix">
                        <li>
                          Offer innovative, customized and value-added services
                          to Customers.
                        </li>
                        <li>
                          Constantly upgrade technology and skill-sets to cater
                          to the ever-changing needs of the Apparel and Textile
                          industry.
                        </li>
                        <li>Become a process-driven organization</li>
                        <li>
                          Prevail the most preferred one-stop source for
                          readymade knitted garments, fabric and yarn.
                        </li>
                        <li>
                          Deliver added value to Customers, Shareholders,
                          Employees and Society, at large.
                        </li>
                        <li>
                          Be an ethical, transparent and responsible Global
                          Organization.
                        </li>
                      </ul>
                    </div>

                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill/about/mission.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <h3>{state?.aboutPage?.title?.rendered}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: state?.aboutPage?.content?.rendered,
          }}
        ></div> */}
      </Layout>
    </>
  );
}
