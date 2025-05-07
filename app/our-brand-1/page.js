"use client";
import Layout from "@/components/layout/Layout";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import { useEffect } from "react";
export default function OurBrand() {

   const [state, setState] = useSetState({
      aboutPage: {},
     
    });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=our-brand`
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

  const backgroundImage = "/assets/images/kprmill-images/Our-Brand/banner.jpg";
  
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Our Brand"
        imageUrl={backgroundImage}
      >
    
    <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
        
      </Layout>
    </>
  );
}
