"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Certifications() {
  const backgroundImage =
    "/assets/images/kprmill-images/About/certifications-banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Certifications"
        imageUrl={backgroundImage}
      >
        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title text-center mb_20">
              <span className="sub-title">
                Being recognized for our impeccable quality standards
              </span>
              <h2>International Accreditations</h2>
              <p>
                End-to-end quality initiatives and consistent technology
                upgradation garnered International accreditation’s:
              </p>
            </div>
            <div class="row clearfix">
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-1.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Worldwide Responsible
                        Apparel Production Certificate (WRAP)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Awarded for ensuring apparel
                        production under lawful, humane and ethical conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0   content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-2.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Ethical Trade Initiative
                        (ETI)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For good working conditions of
                        workers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-3.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Global Organic Textile
                        Standard (GOTS)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For organic cotton products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="certification-style-three p_relative"
          style={{ padding: "0px" }}
        >
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0    content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-4.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: OEKO-TEX – Certification
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For raw, semi-finished as well as
                        finished textile products at all processing levels and
                        accessory materials utilised.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-5.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : International Association
                        for Research and Testing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Certified in the field of Textile
                        Ecology for apparel manufacturing operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12   content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-6.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: Ministry of Commerce and
                        Trade
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Certified and recognized as a
                        Trading House.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0   content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-7.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: International Organization
                        for Standardization (ISO)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> ISO 14001 : 2004 Certifications for
                        Environment Management Systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-8.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: TUV-SIMA (The Southern India
                        Mill’s Association)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Awarded with 5 star categories for
                        ‘Excellence in code of discipline of providing Women
                        Employment.’
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-9.png"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: Social Accountability
                        International (SAI)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> SA 8000: 2001 for Social
                        Accountability Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="certification-style-three p_relative"
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-10.jpg"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12 mb_30 mb-md-0   content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-11.jpg"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>

                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12  content-column">
                <div class="image-box pl-3 mb_10">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/Certifications/cert-img-12.jpg"
                      alt=""
                      style={{ backgroundColor: "#f5f6f5" }}
                    />
                  </figure>
                </div>

                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_10">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
