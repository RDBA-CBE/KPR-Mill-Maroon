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
export default function MrPNadaraj() {
  const backgroundImages =
    "/assets/images/kprmill-images/Mr-P-Nadaraj/banner.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Mr. P. Nadaraj"
        imageUrl={backgroundImages}
      >
        <section className="team-details p_relative">
          {/* <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-68.png)" }}
          ></div> */}
          <div className="auto-container">
            <div className="team-details-content mb_50">
              <div className="row clearfix">
                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/kprmill-images/Mr-P-Nadaraj/nadaraj-img.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                  <div className="content-box" style={{padding:'20px'}}>
                    <h2>Mr. P. Nadaraj</h2>
                    <span
                      className="designation"
                      style={{ color: "#daad19", fontWeight: "500" }}
                    >
                      MANAGING DIRECTOR, K.P.R.MILL LIMITED
                    </span>

                    <div className="text mb_20">
                      <p className="mb_10">
                      P. Nataraj is a Science Graduate and Fellow Member of the Institute of Chartered Accountants of India. Promoter & Managing Director, KPR Group, engaged in Textiles, Sugar, Wind & Co-Gen Power, Automobiles and Education. He has over Three Decades of experience in Textile & Apparel Industry.
                      </p>
                      <p className="mb_10">
                        {" "}
                        He was The Chairman of the Southern India Mills’ Association, Coimbatore and currently serving as a Member in ‘Cotton Yarn Advisory Board’ constituted by the Government of India. He is also a Member in the Textile Panel of Confederation of Indian Industry (CII), Coimbatore and Vice-president of Indian Cotton Federation and the Committee Member, Confederation of Indian Textile Industry, New Delhi and Council Member, Cotton Textiles Export Promotion Council, Mumbai.
                      </p>{" "}
                      <p className="mb_10">
                        {" "}
                        He is an Executive Committee Member of South India Mills Association (SIMA). As an active ‘Melvin Jones Fellowship’ Member of Lions Club he has conducted considerable number of free Eye Camps, free Blood Donation Camps and various other social activities.
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
              <div className=" row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                  <ul className="code-list-style clearfix" >
                    <li style={{color:"black"}}>
                     He is a Trustee in ‘Aaliyar Arivu Thirukovil,’ Pollachi that spreads awareness about Meditation, Yoga, Women upliftment and other social welfare activities. He is also the President of the ‘Vetri Trust’, Tirupur, having noble objectives and rendering innovative services to the Humanity. In addition, he is the Managing Trustee of ‘KPR Charities’ that runs ‘KPR Institute of Engineering and Technology’ & ‘KPR College of Arts, Science and Research’ extending quality education to the society. Also, the Trustee in ‘KPR IAS Academy’ which provides excellent coaching to the aspirants of competitive exams.
                    </li>
                    <li style={{color:"black"}}>
                    Commending his achievements as a successful Entrepreneur, he has been awarded ‘Established Entrepreneur of the Year’ award by the Entrepreneur Organisation Coimbatore during 2017.
                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                  <ul className="code-list-style clearfix">
                    <li style={{color:"black"}}>
                    He is honoured by the ‘Cotton Association of India – Mumbai’ with the ‘First Generation Entrepreneur Award for Textile Mills’ in 2018. Honorable Vice- President of India Sri. Venkiah Naidu had honoured him with an award for ‘Pioneering work’ done in Indian Textile Industry, in 2018.
                    </li>
                    <li style={{color:"black"}}>
                    He is also a Director in K.P.R. Sugar Mill Limited, KPR Sugar and Apparels Limited, Jahnvi Motor Private Limited, Quantum Knits Private Limited, Galaxy Knits Limited, K.P.R. Developers Limited, K P R Holdings Private Limited, K P R Agro Farms Private Limited, K P R Cements Private Limited, KPR Info Solution Private Limited and Confederation of Indian Textile Industry.
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-style-two sec-pad pt-0 centred">
          <div className="auto-container">
            <div className="row clearfix mt_30">
              <div className="col-lg-4 col-md-4 col-sm-12 mb_20 feature-block">
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
                        Awarded ‘Established Entrepreneur of the Year’
                        <br /> by the Entrepreneur Organisation Coimbatore
                        during 2017.
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12  mb_20 feature-block">
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
                        Honoured by the ‘Cotton Association of India - Mumbai’
                        with the ‘First Generation Entrepreneur Award for
                        Textile Company‘in 2018.
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12  mb_20 feature-block">
                <div
                  className="feature-block-two wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                    <img src="/assets/images/kprmill/award-6.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                    </div>
                    <h3>
                      <Link href="/#">
                        Honorable Vice- President of India Sri.Venkiah Naidu,
                        has honored him with An award for ‘Pioneering work’ in
                        Indian Textile Industry, in 2018.
                      </Link>
                    </h3>
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
