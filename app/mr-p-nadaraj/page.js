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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img
                      src="/assets/images/kprmill-images/Mr-P-Nadaraj/nadaraj-img.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h2>Mr. P. Nadaraj</h2>
                    <span
                      className="designation"
                      style={{ color: "#daad19", fontWeight: "500" }}
                    >
                      MANAGING DIRECTOR, K.P.R.MILL LIMITED
                    </span>

                    <div className="text mb_20">
                      <p className="mb_10">
                        He is a Member in ‘Cotton Yarn Advisory Board’
                        constituted by the Government of India. He is also a
                        Member in the Textile Panel of Confederation of Indian
                        Industry (CII), Coimbatore and Vice-president of Indian
                        Cotton Federation.
                      </p>
                      <p className="mb_10">
                        {" "}
                        He is an Executive Committee Member of South India Mills
                        Association (SIMA). As an active ‘Melvin Jones
                        Fellowship’ Member of Lions Club he has conducted
                        considerable number of free Eye Camps, free Blood
                        Donation Camps and various other social activities.
                      </p>{" "}
                      <p className="mb_10">
                        {" "}
                        He is a Trustee in ‘Aaliyar Arivu Thirukovil,’ Pollachi
                        that spreads awareness about Meditation, Yoga, Women
                        upliftment and other social welfare activities. He is
                        also a Trustee in K.P.R. Charities.
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
                      Mr. P. Nataraj is a Science Graduate and Fellow Member of
                      the Institute of Chartered Accountants of India.
                    </li>
                    <li style={{color:"black"}}>
                      Promoter & Managing Director, KPR Group, engaged in
                      Textiles, Sugar, Wind & Co-Gen Power and Education
                    </li>
                    <li style={{color:"black"}}>
                      Past Chairman of ‘The Southern India Mills’ Association,
                      Coimbatore
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                  <ul className="code-list-style clearfix">
                    <li style={{color:"black"}}>
                      The Vice-President of ‘Indian Cotton Federation’,
                      Coimbatore
                    </li>
                    <li style={{color:"black"}}>
                      Committee Member, ’ Confederation of Indian Textile
                      Industry’ New Delhi
                    </li>
                    <li style={{color:"black"}}>
                      Council Member, ‘Cotton Textiles Export Promotion Council’
                      Mumbai
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
                        Textile Mills‘in 2018.
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
