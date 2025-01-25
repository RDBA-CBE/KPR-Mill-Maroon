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
                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/kprmill-images/Mr-K-P-Ramasamy/ramasamy-img.jpg"
                      alt=""
                    />
                  </figure> 
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                  <div className="content-box" style={{padding:'20px'}}>
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
                      Beyond being a very successful Entrepreneur, all through strenuous and enduring efforts, the brilliance of a man is in contributing to the society from what he has earned.
                      </p>
                      <p className="mb_10">
                      K.P. Ramasamy, known as ‘KPR’, hailed from an agriculture family, made a humble beginning as a Power loom cloth Manufacturer in 1971. With the able and emphatic support of his younger Brothers, the Textile Empire ‘KPR Group’ was built on fabulous values.
                      </p>
                      <p className="mb_10">
                      Understanding that the holistic approach to the well-being of the Employees is not restricted to physical wellness alone but also involves social well-being, he formulated an outstanding concept of empowering employees with higher education besides providing trendsetting facilities.
                      </p>
                      <p className="mb_10">He authored the Industry acclaimed ‘Five-Star rated HR facilities which empower employees with excellent higher education besides providing trendsetting facilities. So far over 31,000 Employees have been benefitted by the Educational facility extended with the tie-up of Universities and hi-tech infrastructure. Infact every year they excel in Government conducted Examinations by securing Higher ranks, Gold Medals and Awards.
                      </p>
                      <p className="mb_10">In addition his career development process for the Employees has also uplifted the career growth for several employees by securing placement in various reputed organisations spread over the nation.
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
            <h4 class="text-center mb-30">KPR is a keen environmentalist and is passionate about sustainable business. </h4>
            <div
              className="biography-box "
              style={{
                backgroundColor: "#f5f5f5",
                padding: "50px",
                borderRadius: "0px 100px 0px 100px",
                textAlign: "start",
              }}
            >
           
              <p className="mb_10" style={{ color: "black" }}>
              His drive towards eco-friendly environment and urge towards renewable energy installed several windmills; established Co-gen cum Sugar Plant and Solar Power Plants to source green power to meet most of KPR’s power requirements.
              </p>
              <p className="mb_10" style={{ color: "black" }}>
              He was instrumental in planting more than one lakh trees in the Villages and at Units; Re-cycling wastewater at all plants and uses it for productive purposes; Producing Bio-gas from human waste, thereby reducing usage of LPG; Installation of a massive Effluent Treatment Plant with zero discharge system and adoption of new technology ensuring economised water consumption at its Processing facility.
              </p>
              <p className="mb_10" style={{ color: "black" }}>
              A keen environmentalist and passionate about sustainable business also founded ‘KPR Charities’ a Public Trust that serves the public with social welfare activities and runs Education Institutions provides high-quality Collegiate Education and KPR IAS Academy which serves the society at large. As an active Rotarian sponsored several projects for the welfare of the society.</p>
              <p className="mb_10" style={{ color: "black" }}>His strategic plans & dynamic management crowned him as one of the ‘Top 100 CEO’s of India’ and ranked KPR Mill Limited as one of the Top 500 Listed Companies by various business magazines successively.
              </p>
              <p className="mb_10" style={{ color: "black" }}>
              KPR has been honoured with multiple awards. To quote a few – ‘Star of India’ Award from the hands of former Prime Minister of India Shri Deva Gowda and conferring on him the ‘Doctorate, D.Litt. (Honoris Causa)’ by the renowned Kalinga University, Odisha.
              </p>
              <p className="mb_10" style={{ color: "black" }}>
              He is also a Director in K.P.R. Sugar Mill Limited, KPR Sugar and Apparels Limited, Jahnvi Motor Private Limited, Quantum Knits Private Limited, Galaxy Knits Limited, K.P.R. Developers Limited, K P R Holdings Private Limited, K P R Agro Farms Private Limited, K P R Cements Private Limited and KPR Info Solution Private Limited.
              </p>
            
            </div>
          </div>
        </section>
        <Feature />
      </Layout>
    </>
  );
}
