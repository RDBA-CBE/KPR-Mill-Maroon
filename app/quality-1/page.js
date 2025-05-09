"use client";
import Layout from "@/components/layout/Layout";

import { useEffect } from "react";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
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
            slug: "quality",
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

  const BannerImage =
    "/assets/images/kprmill-images/About/quality-banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle={state.pageTitle}
        // imageUrl={BannerImage}
        imageUrl={`${state?.backgroundImage}`}
      >
        <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
      </Layout>
    </>
  );
}
