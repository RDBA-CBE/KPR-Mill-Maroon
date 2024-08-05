"use client";
import Link from "next/link";
import React from "react";
export default function Feature() {
  return (
    <section className="feature-style-two sec-pad pt-0 centred">
      <div className="auto-container">
        <div className="sec-title centred mb_30">
          <h2>KPR Has Multiple Awards To His Credit</h2>
        </div>
        <div className="row clearfix mt_30">
          <div className="col-lg-4 col-md-6 col-sm-12 mb_20 feature-block">
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
                    {" "}
                    To quote a few -‘Star of India ‘Award from the hands of
                    former Prime Minister of India Shri Deva Gowda
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb_20 feature-block">
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
                    ‘Best achiever of Kongu region ‘Award from Dr.Mahalingam
                    Memorial Trust
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb_20 feature-block">
            <div
              className="feature-block-two wow fadeInUp animated"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                <img src="/assets/images/kprmill/award-3.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                </div>
                <h3>
                  <Link href="/#">
                    {" "}
                    ‘Best Entrepreneur’
                    <br /> Award from Coimbatore Management Association
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb_20 feature-block">
            <div
              className="feature-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                <img src="/assets/images/kprmill/award-4.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                </div>
                <h3>
                  <Link href="/#">
                    ‘Best Citizen of Coimbatore’ Award from Lions Club
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb_20 feature-block">
            <div
              className="feature-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                <img src="/assets/images/kprmill/award-5.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                </div>
                <h3>
                  <Link href="/#">
                    ‘Kalingarayar’ Award from Kongu Charitable Trust
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb_20 feature-block">
            <div
              className="feature-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                <img src="/assets/images/kprmill/award-6.png" alt="" style={{width:"60px", marginTop:"-20px"}}/>
                </div>
                <h3>
                  <Link href="index-4">
                    ‘Self-made Entrepreneur’ from Ananda Vikatan Group.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_20" style={{backgroundColor:"#f5f5f5", padding:"50px", borderRadius:"100px 0px 100px 0px",textAlign:"center"}}>
                <h4 style={{fontWeight:"600", lineHeight:"40px"}}>
                  As an active Rotarian sponsored several projects for the
                  welfare of the society like providing basic amenities at
                  villages, dedicating class rooms for schools, donating books
                  to rural children.
                </h4>
              </div>
      </div>
    </section>
  );
}
