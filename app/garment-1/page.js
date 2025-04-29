"use client";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/elements/Gallery";
import { useEffect } from "react";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
  const [state, setState] = useSetState({
    garmentPage: {},
    galleryData:{},
    images:[]
  });

  useEffect(() => {
    slugData();
    galleryData();
  }, []);

  const slugData = async () => {
    try {
      const res = await axios.get(
        `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=garment`
      );

      if (res?.data?.length > 0) {
        setState({
          garmentPage: res?.data?.[0]?.content?.rendered,
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const galleryData = async () => {
    try {
      const res = await axios.get(
        `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=garment-gallery`
      );

      if (res?.data?.length > 0) {
        setState({
          galleryData: res?.data?.[0],
        });
      } else {
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("galleryData", state.galleryData);

  useEffect(() => {

    if (state.galleryData?.content?.rendered) {
      const images = parseImageData(state.galleryData.content.rendered);
     
      
      setState({
        images:images
      });
   
    }
  }, [state.galleryData]);

  console.log("images",state.images);
  

  const parseImageData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const AllImg = doc.querySelectorAll('img');

    console.log("AllImg",AllImg);
    

    if (!AllImg) return [];

    return Array.from(AllImg).map((data) => {

     
      return {
        imgSrc: data?.getAttribute("src") || null,
        imgAlt: data?.getAttribute("alt") || "",
      };
    });
  };
  
  

  const BannerImage =
    "/assets/images/kprmill-images/Products/Garment/banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Yarn"
        imageUrl={BannerImage}
      >
        <div dangerouslySetInnerHTML={{ __html: state.garmentPage }} />

        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title mb_25 text-center">
              <span className="sub-title">Reach Your Dream</span>
              <h2>Gallery</h2>
            </div>
            <Gallery data={state.images} />
          </div>
        </section>
      </Layout>
    </>
  );
}
