import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home2/Banner";
import Features from "@/components/sections/home3/Features";
import About from "@/components/sections/home3/About";
import Coaching from "@/components/sections/home3/Coaching";
import Help from "@/components/sections/home3/Help";
import Countries from "@/components/sections/home1/Countries";
import Countries4 from "@/components/sections/home4/Countries";
import Education from "@/components/sections/home3/Education";
import Skills from "@/components/sections/home3/Skills";
import Dream from "@/components/sections/home3/Dream";
import Clients from "@/components/sections/home3/Clients";
import Passport from "@/components/sections/home3/Passport";
// import News from "@/components/sections/home3/News";
import Video from "@/components/sections/home2/Video";
import CoachingTwo from "@/components/sections/home2/Coaching";
import News from "@/components/sections/home2/News";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Banner />
        {/* <Features /> */}
        <Countries4 />
        <About />
        <Clients />
        <Countries />
        <Coaching />
        <Help />
        <Video />
        <CoachingTwo />
        <News />

        {/* <Education />
        <Skills />
        <Dream />
        <Clients />
        <Passport />
        <News /> */}
      </Layout>
    </>
  );
}
