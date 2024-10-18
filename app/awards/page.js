"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Awards() {
  const backgroundImage =
    "/assets/images/kprmill-images/About/awards-banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Awards"
        imageUrl={backgroundImage}
      >
        <section className="sec-title centred mt_50">
          <h3>KPR Group – Awards, Appreciations and Recognitions</h3>
          <div
            className="text"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <p style={{ width: "70%", fontSize: "16px" }}>
              Recognitions, awards, appreciations, and accolades are part of
              life at KPR – thanks to our commitment to business excellence,
              humane initiatives and environment-friendly measures. Our CEO and
              other senior executives’ fore vision as well as business acumen
              have helped us to jostle shoulder to shoulder with business
              stalwarts and eminent personalities.
            </p>
          </div>
        </section>
        <section className="auto-container">
          <section className="awards-style-three p_relative">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-1">
                  <div className="title">
                    <h2>2023</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters  image-col">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2.jpeg"
                        alt=" 2023 Awawrd Image"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column content-col  no-gutters">
                  <div className="text mb_25 award-content-main">
                    <div className="sec-title mb_10">
                      <h3 style={{fontSize:"20px"}}>Forbes Asia</h3>
                    </div>
                    <ul className="about-list-style clearfix">
                      <li>
                        Under career development process, 194 employees secured
                        placement in various reputed organizations such as Tata
                        Electronics, Tech Mahindra, and Titan etc.
                      </li>
                      <li>
                        <b>
                          KPR has made its prestigious entry in the list of
                          ‘India’s Top 100 Richest’ with a net worth of US $ 2.3
                          billion as per the reputed Business Magazine ‘Forbes
                          Asia’.
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix  award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-2 order-md-2">
                  <div className="title">
                    <h2>2022</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col order-md-1">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2022.jpg"
                        alt="2022 Award Image"
                      />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 content-column  content-col no-gutters order-3">
                  <div className="text mb_25 award-content-main">
                    <div className="sec-title mb_10">
                      <h3 style={{fontSize:"20px"}}>Employee Upliftment</h3>
                    </div>
                    <ul className="about-list-style clearfix">
                      <li>
                        Our Career development process has also uplifted the
                        career growth for 174 employees by securing Placement in
                        various reputed Organizations spread over the Nation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-1">
                  <div className="title">
                    <h2>2020</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2020.jpg"
                        alt="2020 Award Image"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column  content-col no-gutters">
                  <div className="text award-content-main">
                    <ul className="about-list-style clearfix">
                      <li>
                        <b>K.P.Ramasamy</b>, Chairman has been honoured by the
                        renowned Kalinga University, Odisha with ‘Doctorate,
                        D.Litt. (Honoris Causa)’ on 25.01.2020 at the Kalinga
                        University, Odisha.
                      </li>
                      <li>
                        <b>The Chairman</b>, has been conferred with the award
                        ‘Champion of Humanity’ by the Hindustan Chamber of
                        Commerce, Chennai for Business Excellence
                      </li>
                      <li>
                        <b>P.Nataraj Managing Director</b> received ‘G.K.
                        Sundaram Award’ for the Company for its exemplary
                        performance in the field of Industry from the Indian
                        Chamber of Commerce and Industry on 29.1.2020.
                        <br />
                        <span>
                          Ministry of Rural Development , Rural Skills Division,
                          Government of India awarded the Company as one of the
                          ‘Best Performing Employer in DDU – GKY for 2018-19’ on
                          12.2019
                        </span>
                      </li>
                      <li>
                        <b>
                          In Fortune India, financial Magazine’s India’s Largest
                          500 Wealth creators list KPR has improved its ranking
                          to 344 (Last year 365).
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-2 order-md-2">
                  <div className="title">
                    <h2>2019</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col order-md-1">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2019.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 content-column  content-col no-gutters order-3">
                  <div className="content_block_two award-content-main ">
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_10">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3 style={{fontSize:"20px"}}>Business Magazines</h3>
                      </div>
                      <div className="text">
                        {/* <p>
                          Recognitions, awards, appreciations, and accolades are
                          part of life at KPR – thanks to our commitment to
                          business excellence, humane initiatives and
                          environment-friendly measures. Our CEO and other
                          senior executives’ fore vision as well as business
                          acumen have helped us to jostle shoulder to shoulder
                          with business stalwarts and eminent personalities.
                        </p> */}
                        <p>
                          India’s renowned business magazines recognizing and
                          appreciating our insightful business strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-1">
                  <div className="title">
                    <h2>2018</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2018.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 content-column  content-col no-gutters">
                  <div className="content_block_two award-content-main ">
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_10">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        {/* <h3>
                          KPR Group – Awards, Appreciations and Recognitions
                        </h3> */}
                        <h3 style={{fontSize:"20px"}}>
                          First Generation Entrepreneur Award for Textile
                          Company
                        </h3>
                      </div>
                      <div className="text">
                        <p>
                          {/* Recognitions, awards, appreciations, and accolades are
                          part of life at KPR – thanks to our commitment to
                          business excellence, humane initiatives and
                          environment-friendly measures. Our CEO and other
                          senior executives’ fore vision as well as business
                          acumen have helped us to jostle shoulder to shoulder
                          with business stalwarts and eminent personalities.
                        </p>
                        <p>
                          Here are some of the India’s renowned business
                          magazines recognizing and appreciating our insightful
                          business strategies. */}
                          Honoured by the ‘Cotton Association of India - Mumbai’
                          with the ‘First Generation Entrepreneur Award for
                          Textile Company in 2018.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-2 order-md-2">
                  <div className="title">
                    <h2>2017</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col  order-md-1">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2017.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column no-gutters content-col order-3">
                  <div className="content_block_two award-content-main">
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_10">
                        {/* <h3>BT – 1 January</h3> */}
                        <h3 style={{fontSize:"20px"}}>Established Entrepreneur of the Year</h3>
                      </div>

                      <div className="text ">
                        <p>
                          {/* It is no mean achievement to bag a prestigious award
                          or recognition for the second consecutive year. That’s
                          what we have done…
                        </p>
                        <p>
                          Our Chairman K P Ramasamy features yet again as one of
                          the India’s Best CEOs in a survey published on 1
                          January 2017, conducted jointly by Business Today
                          magazine and PricewaterhouseCoopers – a leading
                          assurance, tax, and consulting services provider. */}
                          Awarded ‘Established Entrepreneur of the Year’ by the
                          Entrepreneur Organisation Coimbatore during 2017.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-1">
                  <div className="title">
                    <h2>2016</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col">
                  <div className="image-box award-image-outer">
                    <figure class="image">
                      <img
                        src="/assets/images/kprmill/about/award-2016.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 content-column no-gutters content-col">
                  <div className="content_block_two award-content-main">
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_10">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3 style={{fontSize:"20px"}}>BT – 1 January </h3>
                      </div>

                      <div className="text mb_25">
                        <p>
                          Our Chairman K.P. Ramasamy features as one of the
                          India’s Best CEOs in a survey published on 1 January
                          2016, conducted jointly by Business Today magazine and
                          PricewaterhouseCoopers – a leading assurance, tax, and
                          consulting services provider.
                        </p>
                      </div>
                      <div className="sec-title mb_10">
                        {/* <span className="sub-title">Reach Your Dream</span> */}
                        <h3 style={{fontSize:"20px"}}>Financial Express – February </h3>
                      </div>

                      <div className="text mb_25">
                        <p>
                          KPR Mill has find place in Financial Express
                          Magazine’s India’s Finest 500 Companies List published
                          in February 2016. The company has got special mention
                          in the category ‘Readymade Garments/Apparel.’
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-style-three p_relative pt-0">
            <div className="auto-container">
              <div className="row clearfix award-row">
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters title-col-2 order-md-2">
                  <div className="title">
                    <h2>2015</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 content-column no-gutters image-col order-md-1">
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img
                        src="/assets/images/kprmill/about/award-2015.jpg"
                        alt="2015 Award Image"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column  no-gutters content-col order-3">
                  <div className="content_block_two award-content-main">
                    <div className="content-box p_relative d_block">
                      <div className="sec-title mb_10">
                        <h3 style={{fontSize:"20px"}}>BW – 19 October</h3>
                      </div>

                      <div className="text award-content-main">
                        <ul className="about-list-style clearfix">
                          <li>
                            KPR Mill features on Business World magazine’s 500
                            Definitive Ranking of India’s Largest Companies
                            survey conducted jointly with KPMG – global network
                            of professional firms providing Audit, Tax and
                            Advisory services.
                          </li>
                          <li>
                            KPR Mill finds place in two major categories:
                            ‘Financial Companies’ and ‘Shareholder Returns.’
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
