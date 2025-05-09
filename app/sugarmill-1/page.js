"use client";
import Layout from "@/components/layout/Layout";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { useEffect } from "react";
export default function Sugarmill() {

   const [state, setState] = useSetState({
      aboutPage: {},
     
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
            slug: "sugarmill",
            _embed: true,
          },
        }
      );
  
      if (res?.data?.length > 0) {
        const pageData = res.data[0];
        const featuredImage = pageData._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        const pageTitle = pageData.title?.rendered;
  
        setState({
          aboutPage: pageData.content?.rendered,
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
  

  // const backgroundImage = "/assets/images/kprmill-images/Infrastructure/Sugarmill/banner.jpg";

  // useEffect(() => {
  //   if (!state.aboutPage) return;
  
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(state.aboutPage, "text/html");
  //   const backgroundImage = doc.querySelector('#banner-image img');
  //   const bannersrc = backgroundImage?.getAttribute("src")

  //   setState({backgroundImage:bannersrc})
  // }, [state.aboutPage]);

  console.log("backgroundImage",state.backgroundImage);
  
    
  
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={2}
        breadcrumbTitle={state.pageTitle}
        imageUrl={`${state?.backgroundImage}`}
        // imageUrl={backgroundImage}
      >
    
    <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
        
      </Layout>
    </>
  );
}
