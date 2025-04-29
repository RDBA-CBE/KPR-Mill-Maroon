"use client";
import Layout from "@/components/layout/Layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBuilding, FaUserGraduate, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CustomDate } from "@/utils/constant.utils";

import { useEffect } from "react";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";

const WorkIcon = () => <FaBuilding />;
const EducationIcon = () => <FaUserGraduate />;
const StarIcon = () => <FaStar />;

export default function Home() {
  const [state, setState] = useSetState({
    aboutPage: {},
    evolutionData:[]

  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=evolution`
      );

      if (res?.data?.length > 0) {
        setState({
          aboutPage: res?.data?.[0],
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // console.log("data" ,state.aboutPage);

  useEffect(() => {

    if (state.aboutPage?.content?.rendered) {
      const evolutionData = parseImageData(state.aboutPage.content.rendered);
     
      
      setState({
        evolutionData:evolutionData
      });
   
    }
  }, [state.aboutPage]);

  console.log("evolutionData",state.evolutionData);

  const parseImageData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const EvolutionCon = doc.querySelector('.evolution-Parent');

    console.log("EvolutionCon",EvolutionCon);
    

    if (!EvolutionCon) return [];

    const EvolutionChil = EvolutionCon.querySelectorAll(".evolution-Chil");
    const cleanText = (text) => text?.replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim() || '';

    console.log("EvolutionChil",EvolutionChil);
    


    return Array.from(EvolutionChil).map((data) => {

      console.log("EvolutionChil", data);
      
      const img = data.querySelector("img");
      const year = cleanText(data.querySelector(".evolution-year")?.textContent);
      const title = cleanText(data.querySelector(".evolution-script")?.textContent);
      const paragraph = cleanText(data.querySelector(".evolution-desc")?.textContent);

      console.log("title",title);
      
      
      return {
        imgSrc: img?.getAttribute("src") || null,
        title: title || "",
        year:year || "",
        paragraph: paragraph || "",
        imgAlt: img?.getAttribute("alt") || "",
      };
    });
  };
  

  const BannerImage =
    "/assets/images/kprmill-images/About/evolution-banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Evolution"
        imageUrl={BannerImage}
      >
          <section className="dream-style-three p_relative">
                  <div className="auto-container">
                    <div className="sec-title  mb_30 centred">
                      <span className="sub-title" style={{ color: "black" }}>
                      Our significant breakthroughs
                      </span>
                      <h2 style={{ fontSize: "18px", lineHeight: "30px" }}>
                        The fore vision and enterprising efforts of KPR leaders has
                        resulted in one of the India’s largest vertically integrated
                        Apparel manufacturing Companies. Right from day one, KPR is
                        consistently driven by values, ethics and principles.
                      </h2>
                    </div>

                       <VerticalTimeline>
                       {state?.evolutionData?.map((data,index)=>(
                           <VerticalTimelineElement
                                          key={index}
                                          visible={true}
                                          className="vertical-timeline-element--work"
                                          date={
                                            <CustomDate
                                              date={data?.year}
                                              firstLine={data?.title}
                                              secondLine={data?.paragraph}
                                            />
                                          }
                                          iconStyle={{ background: "#daad19", color: "#fff" }}
                                          icon={<WorkIcon />}
                                        >
                                          <img
                                            src={data?.imgSrc}
                                            alt={data?.imgAlt}
                                            width={400}
                                            height={300}
                                          />
                            </VerticalTimelineElement>
                        ))}
                        </VerticalTimeline>
                        
                    
                   
                  </div>
                </section>
      </Layout>
      
    </>
  );
}
