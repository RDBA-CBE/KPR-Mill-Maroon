"use client";
import Layout from "@/components/layout/Layout";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { useEffect } from "react";
export default function Certifications() {

   const [state, setState] = useSetState({
      aboutPage: {},
      certificationData:[]

    });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=certifications`
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

  useEffect(() => {

    if (state.aboutPage?.content?.rendered) {
      const certificationData = parseImageData(state.aboutPage.content.rendered);
     
      
      setState({
        certificationData:certificationData
      });

   
    }
  }, [state.aboutPage]);

              

  

  console.log("certificationData",state.certificationData);



  const parseImageData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const certificationCon = doc.querySelector('.cert-Parent');

    const pageHead = doc.querySelector(".elementor-element elementor-element-5293d46");

    console.log("pageHead",pageHead);
    

      setState({
        pageHead:pageHead
      })

    console.log("certificationCon",certificationCon);
    

    if (!certificationCon) return [];

    const certificationChil = certificationCon.querySelectorAll(".cert-Chil");
    const cleanText = (text) => text?.replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim() || '';

    console.log("certificationChil",certificationChil);
    


    return Array.from(certificationChil).map((data) => {

      // console.log("certificationChil", data)
      
      const img = data.querySelector("img");
      const frstLine = (data.querySelector(".cert-frst-line p")?.innerHTML);
      const secLine = (data.querySelector(".cert-sec-line p")?.innerHTML);

      
      
      return {
        imgSrc: img?.getAttribute("src") || null,
        frstLine: frstLine || "",
        secLine:secLine || "",
        imgAlt: img?.getAttribute("alt") || "",
      };
    });
  };

 

  const backgroundImage =
    "/assets/images/kprmill-images/About/certifications-banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Certifications"
        imageUrl={backgroundImage}
      >
    
    {/* <div dangerouslySetInnerHTML={{ __html: state.aboutPage?.content.rendered}} /> */}

    <section className="certification-style-three p_relative">

         <div className="auto-container">

         {/* <div dangerouslySetInnerHTML={{__html:state?.pageHead}}>
         </div> */}

             <div className="sec-title text-center mb_20">
              <span className="sub-title">
                Being recognized for our impeccable quality standards
              </span>
              <h2>International Accreditations</h2>
              <p>
                End-to-end quality initiatives and consistent technology
                upgradation garnered International accreditation’s:
              </p>
            </div>


            {state?.certificationData?.map((data,index)=>{

              const oddIndex = index % 2 !== 0
              
              return(
              
              <>
                  <div class={"row clearfix certification-row-common"}>
                    <div className={`col-lg-8 col-md-8 col-sm-12 ${oddIndex ? "certification-main-col-2" : "certification-main-col-1"} content-column `}>
                      <div class={`pl-3 mb_10 ${ oddIndex ? "certification-image-outer-2" : "certification-image-outer-1"}`}>
                        <figure class="image">
                          <img
                            src={data?.imgSrc}
                            alt={data?.altSrc}
                            // style={{ backgroundColor: oddIndex? "#f5f6f5" : "" }}
                          />
                        </figure>
                      </div>

                      <div className={`${ oddIndex ? "certification-content-outer-2" :"certification-content-outer-1"}`}>
                        <div className="content_block_two">
                          <div className="content-box p_relative d_block">
                            <div className="text mb_10">
                              <p style={{ color: "white" }} dangerouslySetInnerHTML={{__html:data?.frstLine}}>
                              
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="content_block_two">
                          <div className="content-box p_relative d_block">
                            <div className="text ">
                              <p style={{ color: "white" }} dangerouslySetInnerHTML={{__html:data?.secLine}}>
                                
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </>
            )})}


            
          </div>
        </section>
        
      </Layout>
    </>
  );
}
