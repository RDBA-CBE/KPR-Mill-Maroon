"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useCallback } from "react";
import { useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
export default function MediaGallery() {
  const handleClick = useCallback(() => {
    window.open(
      "https://file.kprmilllimited.com/file/wp-content/uploads/2018/11/Company_profile.pdf",
      "_blank",
      "noopener noreferrer"
    );
  }, []);

  const backgroundImage = "/assets/images/kprmill-images/Investors/Media/banner.jpg";

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Media & Gallery" imageUrl={backgroundImage}>
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="visa-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <ul className="category-list clearfix">
                      <li>
                        <Link href="/regulation-46-of-the-lodr">
                          Disclosures under Regulation 46 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/regulation-62-of-the-lodr">
                          Disclosures under Regulation 62 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors-contact">
                          Inverstors Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/media-download" className="current">
                          Media / Download
                        </Link>
                      </li>
                      <li>
                        <Link href="/financial-result">Financial Results</Link>
                      </li>

                      <li>
                        <Link href="/share-holding-pattern">
                          Share Holding Pattern
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate-governance">
                          Corporate Governance
                        </Link>
                      </li>
                      <li>
                        <Link href="/code-of-conduct">Code of Conduct</Link>
                      </li>
                      <li>
                        <Link href="/policy-info">Policy Info</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="sidebar-widget travel-widget">
                    <div className="widget-content p_relative">
                      <figure className="image-box">
                        <img src="assets/images/resource/travel-1.jpg" alt="" />
                      </figure>
                      <div className="content-box">
                        <h3>Travel Pass</h3>
                        <ul className="list-item clearfix">
                          <li>Application Form</li>
                          <li>Checklist</li>
                          <li>Guidelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget download-widget">
                    <div className="widget-content">
                      <div className="icon-shape">
                        <img src="assets/images/icons/icon-15.png" alt="" />
                      </div>
                      <h3>
                        Annual Report / <br />
                        Online Appointment
                      </h3>
                      <ul className="download-list clearfix">
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>20th AGM – Video</h3>
                      <div className="video-box p_relative mb_5">
                        <iframe
                          width="560"
                          height="350"
                          src="https://www.youtube.com/embed/EEVz1qQnElQ?si=oWAy3SyktTVuKNlI"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                          style={{ width: "100%" }}
                        ></iframe>
                      </div>
                    </div>
                    <div className="text mb_20">
                      <p style={{ fontWeight: "600" }}>
                        KPR employees repeat winning Gold medals and CEMCA
                        Award.
                      </p>
                      <p>
                        We are happy to note that well equipped by KPR’s
                        outstanding Employee higher education facilities, at the
                        13th convocation of the TamilNadu Open University (TNOU)
                        on Monday 30th May, 2022 at Chennai, eight employees of
                        KPR have secured Gold medals for securing First Ranks in
                        various courses, from the Governor of Tamilnadu Among
                        them, one girl has secured an award instituted by
                        Commonwealth Educational Media Center for Asia (CEMCA)
                        for securing highest marks.
                      </p>
                    </div>
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/investors/media/gold-medal.jpeg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45 mt_45">
                      <h3>19th AGM – Video</h3>
                      <div className="video-box p_relative mb_5">
                        <iframe
                          width="560"
                          height="350"
                          src="https://www.youtube.com/embed/EEVz1qQnElQ?si=oWAy3SyktTVuKNlI"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                          style={{ width: "100%" }}
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45 mt_45">
                      <h3>18th AGM</h3>
                      <div className="text mb_20">
                        <p style={{ fontWeight: "600" }}>
                          <Link
                            href="https://youtu.be/BWt6AdNADAo?si=En2dj2y0y3um-7PL"
                            target="_blank"
                          >
                            View
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45 mt_45">
                      <h3>Profile 2019</h3>
                      <div className="text mb_20">
                        <button
                          onClick={handleClick}
                          style={{
                            fontWeight: "600",
                            cursor: "pointer",
                            color: "#0d6efd",
                          }}
                        >
                          Download
                        </button>
                      </div>
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
