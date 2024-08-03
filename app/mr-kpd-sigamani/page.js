import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
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
export default function MrKPDSigamani() {
  const backgroundImage =
    "/assets/images/kprmill-images/Mr-KPD-Sigamani/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Mr. KPD. Ramasamy"
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
                      src="/assets/images/kprmill-images/Mr-KPD-Sigamani/sigamani-img.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h2>Mr. KPD. Sigamani</h2>
                    <span
                      className="designation"
                      style={{ color: "#daad19", fontWeight: "500" }}
                    >
                      MANAGING DIRECTOR, K.P.R.MILL LIMITED
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
                    <div className="text mb_20">
                      <p className="mb_10">
                        He has travelled widely across the globe on business and
                        gained in-depth knowledge on the export of textiles. His
                        ability, skill experience and untiring efforts garnered
                        the confidence of the leading Global Buyers.{" "}
                      </p>
                      <p className="mb_10">
                        His perseverance and ardent efforts entailed KPR as one
                        of those Export units that enabled elevation of the Knit
                        Wear Town ‘Tirupur’, to a pre-dominant position among
                        the exporting fraternity in India.{" "}
                      </p>
                      <p className="mb_10">
                        {" "}
                        It may be noted that K.P.R. Mill Limited is now one of
                        the Top 500 Listed Companies in India and its Management
                        is consistently accredited as Top 100 CEO’s (Chief
                        Executive Officer) of the Country. As regards his social
                        activities, he is a Rotarian .As a member of Rotary Club
                        of Tirupur, he has rendered various social welfare
                        activities to the needy people in an around Tirupur. He
                        is a Trustee of “Mother Care Value Trust Hospital”,
                        promoted by an internationally reputed importer M/s
                        Mother Care, providing free medical treatment for
                        children and expectant mothers.
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
                textAlign: "center",
              }}
            >
              <p style={{ color: "black" }} >
                He is also a Life Time Trustee of KPR Charities, which has
                promoted an Educational Institution with the State of the Art
                Facilities under the name “K.P.R.Institute of Engineering and
                Technology extending quality education to the society.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-style-two sec-pad pt-0 centred">
          <div className="auto-container">
            <div className="row clearfix mt_30">
              <div className="col-lg-6 col-md-6 col-sm-12 mb_20 feature-block">
                <div
                  className="feature-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                    <img src="/assets/images/kprmill/award-1.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                    </div>
                    <h3>
                      <Link href="/#">
                        He oversees the functioning of ‘KPR IAS Academy’ which
                        offers ‘Free’ coaching to the aspirants of IAS, IPS,
                        UPSC, and TNPSC exams, which were once considered to be
                        inaccessible to the common man.
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12  mb_20 feature-block">
                <div
                  className="feature-block-two wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                    <img src="/assets/images/kprmill/award-2.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                    </div>
                    <h3>
                      <Link href="/#">
                        Under his able guidance the Academy transform the lives
                        of under privileged incumbents to succeed in the complex
                        examinations producing responsible administrators to the
                        Nation.
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt_20"
              style={{
                backgroundColor: "#f5f5f5",
                padding: "50px",
                borderRadius: "100px 0px 100px 0px",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontWeight: "600", lineHeight: "40px" }}>
                To quote a credential, in the UPSC All India Civil Services
                Examination of 2017-18, Six Candidates of the KPR IAS ACADEMEY
                have successfully cleared and selected for the Civil Services.
              </h4>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
