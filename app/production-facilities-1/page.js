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
        `  https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages?slug=vproduction-facilities`
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

  const BannerImage =
    "/assets/images/kprmill-images/About/production-facilities-banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Production Facilities"
        imageUrl={BannerImage}
      >
        <div dangerouslySetInnerHTML={{ __html: state.aboutPage }} />
      </Layout>
    </>
  );
}
