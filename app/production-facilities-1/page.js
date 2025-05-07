"use client";
import Layout from "@/components/layout/Layout";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { useEffect } from "react";
export default function Certifications() {

   const [state, setState] = useSetState({
      aboutPage: {},
     
    });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=production-facilities`
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

  const backgroundImage =
  "/assets/images/kprmill-images/About/production-facilities-banner-img.jpg";
  
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Production Facilities"
        imageUrl={backgroundImage}
      >
    
    <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
        
      </Layout>
    </>
  );
}
