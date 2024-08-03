import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Education from "@/components/sections/home1/Education";
import Feature from "@/components/sections/home4/Feature";
const ProgressBar = ({ label, percent }) => (
  <div className="progress-box">
    <p>{label}</p>
    <div className="bar">
      <div
        className="bar-inner count-bar"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="count-text">{`${percent}%`}</div>
    </div>
  </div>
);
export default function MrKPRamasamy() {
  const backgroundImage =
    "/assets/images/kprmill-images/Mr-K-P-Ramasamy/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Mr. K. P. Ramasamy"
        imageUrl={backgroundImage}
      >
        <section className="team-details p_relative">
          {/* <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-68.png)" }}
          ></div> */}
          <div className="auto-container">
            <div className="team-details-content mb_50">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/kprmill-images/Mr-K-P-Ramasamy/ramasamy-img.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h2>Mr. K. P. Ramasamy</h2>
                    <span
                      className="designation"
                      style={{ color: "#daad19", fontWeight: "500" }}
                    >
                      CHAIRMAN , KPR GROUP
                    </span>
                    {/* <ul className="social-links clearfix mb_16">
                      <li>
                        <Link href="/">
                          <i className="icon-7"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="icon-6"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="icon-4"></i>
                        </Link>
                      </li>
                    </ul> */}
                    <div className="text">
                      <p className="mb_10">
                        Beyond being a very successful Entrepreneur, all through
                        strenuous and enduring efforts, the brilliance of a man
                        is in contributing to the society from what he has
                        earned.
                      </p>
                      <p className="mb_10">
                        Understanding that the holistic approach to the
                        wellbeing of the Employees is not restricted to physical
                        wellness alone but also involves social wellbeing, he
                        formulated an outstanding concept of empowering
                        employees with higher education besides providing
                        trendsetting facilities.
                      </p>
                      <p>
                        <b>
                          KPR is a keen environmentalist and is passionate about
                          sustainable business.
                        </b>{" "}
                        He was instrumental in planting more than one lakh trees
                        in the Villages and at Units; Re-cycling waste water at
                        all plants and uses it for productive purposes;
                        Producing Bio-gas from human waste, thereby reducing
                        usage of LPG; Installation of a massive Effluent
                        Treatment Plant with zero discharge system and adoption
                        of new technology ensuring economised water consumption
                        at its Processing facility.
                      </p>
                    </div>
                    {/* <ul className="info-list clearfix">
                      <li>
                        <span>Specialization : </span>Manager
                      </li>
                      <li>
                        <span>Age : </span>34 Years
                      </li>
                      <li>
                        <span>Experience : </span>6 Years
                      </li>
                      <li>
                        <span>Email : </span>
                        <Link href="mailto:info@yourmail.com">
                          info@yourmail.com
                        </Link>
                      </li>
                      <li>
                        <span>Phone : </span>
                        <Link href="tel:12345678900">(+123) 45678 900</Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="biography-box "
              style={{
                backgroundColor: "#f5f5f5",
                padding: "50px",
                borderRadius: "0px 100px 0px 100px",
                textAlign: "start",
              }}
            >
              <p className="mb_20" style={{ color: "black" }}>
                To quote a yet another social contribution, he himself has led
                the’ Swachch Bharat’ (Clean India) Campaign’ at various villages
                supported by his Employees in a massive way.
              </p>
              <p style={{ color: "black" }}>
                He also founded ‘KPR Charities’ a Public Trust, which through
                its innumerable work is serving our society at a large. It
                imparts high quality education through its Educational
                Institution ‘K.P.R Institute of Engineering &Technology ‘which
                has been ranked at 5th place among the 67 Private Engineering
                colleges at Coimbatore and is also ranked as one of the Top 20
                Institutions in Tamilnadu as per the survey done by ‘Higher
                Education Review Magazine’. The Master Piece of his service
                towards Education is the establishment of ‘KPR IAS Academy’ that
                offers excellent coaching for IAS, IPS, UPSC, TNPSC exams. Many
                of its aspirants have cleared the Exam under various categories,
                which were once considered as inaccessible Career.
              </p>
            </div>
          </div>
        </section>
        <Feature />
      </Layout>
    </>
  );
}
