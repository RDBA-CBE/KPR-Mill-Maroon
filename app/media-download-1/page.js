"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
import InvestorsSideMenu from "@/components/elements/InvestorsSideMenu";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
export default function MediaGallery() {

  const [state, setState] = useSetState({
    aboutPage: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=media-download`
      );

      if (res?.data?.length > 0) {
        setState({
          aboutPage: res?.data?.[0]?.content?.rendered,
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  
  const handleClick = useCallback(() => {

    window.open(
      "https://file.kprmilllimited.com/file/wp-content/uploads/2018/11/Company_profile.pdf",
      "_blank",
      "noopener noreferrer"
    );
  }, []);


  const backgroundImage =
    "/assets/images/kprmill-images/Investors/Media/banner.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Media & Gallery"
        imageUrl={backgroundImage}
      >
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <InvestorsSideMenu isActive="media-download" />
              </div>

              <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />

              {/* <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one ">
                  <div className="text mb_45">
                      <h3>2024 </h3>
                      <p className=" mb_20">KPR Mill Limited has been steadfast in providing higher education facilities to its women employees embodying their commitment to social responsibility. The company takes immense pride in the fact that over 41,000 women workers have completed their higher education through this remarkable initiative. In the current academic year alone, more than 5,000 women are pursuing their higher studies and steadily increasing every year. With the high standard of education provided at KPR Mill, through excellent coaching of well – trained & experienced Teachers and best Infrastructures, every year its women employees prove their outstanding talent in the Government conducted Examinations securing Medals and Ranks.</p>
                      <p className=" mb_20">At the 15th convocation ceremony of Tamil Nadu Open University, held on 21st Onpm run dev
                        ctober 2024 at Chennai, a total of 579 Employees were conferred their bachelor’s and master’s degrees. Among them, 11 were honoured with medals – 5 Gold (1st Rank), 3 silver (2nd Rank) and 3 bronze (3rd Rank)- for their exceptional academic performance, by the Honourable Governor of Tamil Nadu, Shri R.N. Ravi.</p>
                        <p className=" mb_20">On 25th January 2025, the 11th Convocation Ceremony for women employees of the KPR Group took place as a grand event at Thekkalur celebrating the remarkable achievements of the students. Each of the first-place winners received a cash gift of Rs.5,000, graciously presented by the KPR Group.</p>
                      <div className="image-box">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/investors/media/Deepika-1st-Rank-BBA.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    </div>
                    <div className="text mb_45">
                      <h3>21 st AGM – Video</h3>
                      <div className="video-box p_relative mb_5">
                        <iframe
                          width="560"
                          height="350"
                          src="https://www.youtube.com/embed/OZGzH8mRvOk?si=Fup3S2VDng4kCDOP"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                          style={{ width: "100%" }}
                        ></iframe>
                      </div>
                    </div>

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
              </div> */}
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
