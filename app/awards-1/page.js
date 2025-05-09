"use client";
import Layout from "@/components/layout/Layout";

import { useEffect } from "react";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
  const [state, setState] = useSetState({
    aboutPage: {},
    awardsData:[]
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        "https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages",
        {
          params: {
            slug: "awards",
            _embed: true,
          },
        }
      );
  
      if (res?.data?.length > 0) {
        const pageData = res.data[0];
        const featuredImage = pageData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        const pageTitle = pageData.title?.rendered;
  
        setState({
          aboutPage: pageData,
          backgroundImage: featuredImage,
          pageTitle: pageTitle,
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };



  useEffect(() => {

    if (state.aboutPage?.content?.rendered) {
      const awardsData = parseData(state.aboutPage.content.rendered);
     
      
      setState({
        awardsData:awardsData
      });
   
    }
  }, [state.aboutPage]);

  console.log("aboutPage",state?.aboutPage);


  const parseData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const awardsCon = doc.querySelector('.awards-Parent');

    console.log("awardsCon",awardsCon);
    

    if (!awardsCon) return [];

    const awardsChil = awardsCon.querySelectorAll(".awards-Chil");
    const cleanText = (text) => text?.replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim() || '';

    // console.log("awardsChil",EvolutionChil);
    


    return Array.from(awardsChil).map((data) => {

      console.log("awardsChil", data);
      
      const img = data.querySelector("img");
      const year = cleanText(data.querySelector(".awards-year")?.textContent);
      const content = data.querySelector(".awards-content")
      const paradata = data.querySelectorAll(".awards-content .paradata")
      
      const title = data.querySelector(".awards-content .sec-title h3")?.innerHTML
      const paragraph = data.querySelector(".awards-content p")?.innerHTML
      const list = data.querySelector(".awards-content ul")?.innerHTML
      const paradataArray = Array.from(paradata).map((data)=>{
        console.log("paradata",data);
        
         const head = data.querySelector(".paradata .sec-title h3")?.innerHTML
         const para = data.querySelector(".paradata .paradata-content")?.innerHTML

         return {
          head:head || "",
          para:para || ""
         }
      })
   


      console.log("paradataArray", paradataArray)
      

      
      
      return {
        imgSrc: img?.getAttribute("src") || null,
        year:year || null,
        imgAlt: img?.getAttribute("alt") || "",
        content: content || "",
        title:title || null,
        paragraph:paragraph || null ,
        list:list || null,
        paradataArray:paradataArray || null
        
                 
      };
    });
  };

  console.log("awardsData",state?.awardsData);
  
  

 
  

  const BannerImage =
    "/assets/images/kprmill-images/About/awards-banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle={state.pageTitle}
        // imageUrl={BannerImage}
        imageUrl={`${state?.backgroundImage}`}
      >
       {/* <div dangerouslySetInnerHTML={{ __html: state.aboutPage?.content?.rendered}} /> */}


       <section className="sec-title centred mt_50">
          <h3>KPR Group – Awards, Appreciations and Recognitions</h3>
          <div className="text" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <p style={{ width: "70%", fontSize: "16px" }}>
              Recognitions, awards, appreciations, and accolades are part of life at KPR – thanks to our commitment to business excellence, humane initiatives and environment-friendly measures. Our CEO and other senior executives’ fore vision as well as business acumen have helped us to jostle shoulder to shoulder with business stalwarts and eminent personalities.
            </p>
          </div>
      </section>

      <section className="auto-container">
        {state.awardsData.map((award, index) => (
          <section
            key={award.year}
            className={`awards-style-three p_relative ${index === 0 ? "" : "pt-0"}`}
          >
            <div className="auto-container">
              <div className="row clearfix award-row">
               { award?.year && 
                <div className={`col-lg-3 col-md-6 col-sm-12 content-column no-gutters  ${index % 2 !== 0 ? "order-md-2 title-col-2" : "title-col-1"}`}>
                  <div className="title">
                    <h2>{award?.year}</h2>
                  </div>
                </div>
                }

                <div className={`${award?.year ? "col-lg-3 col-md-6 col-sm-12" : "col-lg-6 col-md-6 col-sm-12"}content-column no-gutters image-col ${index % 2 !== 0 ? "order-md-1" : ""}`}>
                  <div className="image-box award-image-outer">
                    <figure className="image">
                      <img src={award?.imgSrc} alt={award?.imgAlt} />
                    </figure>
                  </div>
                </div>

                <div className={`col-lg-6 col-md-12 col-sm-12 content-column content-col no-gutters ${index % 2 !== 0 ? "order-3" : ""}`}>
                <div className="content_block_two mb_25 award-content-main">
                  <div className="text content-box p_relative d_block">

                    {award?.paradataArray.length > 0 && (
                      award?.paradataArray?.map((data)=>(
                      <>
                        {data?.head && (
                        <div className="sec-title mb_10">
                          <h3 style={{ fontSize: "20px" }} dangerouslySetInnerHTML={{__html:data?.head}}></h3>
                        </div>
                        )}
                        {data?.para && ( 
                        <div className="text" >
                          <p  dangerouslySetInnerHTML={{__html:data?.para}}>
                            
                          </p>
                        </div>
                        )}
                      </>
                      ))
                      
                    )
                    }
                    

                    {award?.title && award?.paradataArray?.length <= 0 ?(
                      <div className="sec-title mb_10">
                        <h3 style={{ fontSize: "20px" }}>{award?.title}</h3>
                      </div>
                    ) : null}

                      <div className="text award-content-main">
                        <ul className="about-list-style clearfix" dangerouslySetInnerHTML={{__html:award?.list}}>
                          
                        </ul>
                      </div>

                    {/* <ul className="about-list-style clearfix">
                      {award.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul> */}
                  </div>
                </div>
                 
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      </Layout>
    </>
  );
}
