"use client";
import Layout from "@/components/layout/Layout";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { useEffect } from "react";
export default function Products() {

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
            slug: "products",
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

  const backgroundImage =
    "/assets/images/kprmill-images/About/certifications-banner-img.jpg";
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle={state.pageTitle}
        // imageUrl={backgroundImage}
        imageUrl={`${state?.backgroundImage}`}
      >
    
    <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
        
      </Layout>
    </>
  );
}
