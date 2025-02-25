"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBuilding, FaUserGraduate, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CustomDate } from "@/utils/constant.utils";

const WorkIcon = () => <FaBuilding />;
const EducationIcon = () => <FaUserGraduate />;
const StarIcon = () => <FaStar />;

export default function Evolution() {

  const BackgroundImage = "/assets/images/kprmill-images/About/evolution-banner-img.jpg"
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Evolution" imageUrl= {BackgroundImage}>
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title  mb_30 centred">
              <span className="sub-title" style={{ color: "black" }}>
              Our significant breakthroughs
              </span>
              <h2 style={{ fontSize: "18px", lineHeight: "30px" }}>
                The fore vision and enterprising efforts of KPR leaders has
                resulted in one of the India’s largest vertically integrated
                Apparel manufacturing Companies. Right from day one, KPR is
                consistently driven by values, ethics and principles.
              </h2>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="1984"
                    firstLine="Foundation"
                    secondLine=" Maiden business launched in Coimbatore, Tamilnadu, India, marking the start of our journey."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution1.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="1989"
                    firstLine="First Step"
                    secondLine="Launched our first knitted garment export facility in Tirupur, Tamil Nadu, with a capacity of 11 million garments per annum."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution2.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="1995"
                    firstLine="A Step to Vertical Integration"
                    secondLine="Established our first spinning unit at Sathyamangalam, Tamil Nadu, with 6,000 spindles, later increasing to 30,240 spindles by 1999."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution3.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="2001"
                    firstLine="New Production Facility @ Karumathampatti"
                    secondLine="Set up a spinning mill at Karumathampatti, Tamil Nadu, with 30,240 spindles, and a knitting facility powered by green energy from wind mills.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution4.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="2003"
                    firstLine="New Production Facility @ Neelambur"
                    secondLine="Opened a spinning unit at Neelambur, Tamil Nadu, with 50,784 spindles and a knitting facility with wind mill-powered captive use.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution5.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="2005"
                    firstLine="New Production Facility @ Arasur"
                    secondLine="Established a new facility in Arasur, Tamil Nadu, with 100,800 spindles, a knitting facility, and a garment unit producing 27 million garments annually, powered by wind mills for captive use.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution6.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              
                        <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                // contentStyle={{
                //   background: "rgb(33, 150, 243)",
                //   color: "#fff",
                // }}
                // contentArrowStyle={{
                //   borderRight: "7px solid rgb(33, 150, 243)",
                // }}
                date={
                  <CustomDate
                    date="2006"
                    firstLine="Global Majors Investments"
                    secondLine="Secured private equity investment from leading US corporate ‘Brandot Investments’ and two others, totaling $25 million.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution7.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2007"
                    firstLine="Public Listing"
                    secondLine=" Went public with an IPO, with shares listed on Bombay & National Stock Exchanges, India."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution8.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>


              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2008"
                    firstLine="New Processing Division"
                    secondLine=" Launched a new processing division at Perundurai-Sipcot with a capacity of 9,000 MT."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/2017-new-processing.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2010"
                    firstLine="Business Expansion & Alternative Energy Initiatives"
                    secondLine="Expanded value-added compact spinning to 103,680 spindles at Karumathampatti and upgraded green energy capabilities via wind mills."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution9.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2011"
                    firstLine="Modernisation & Expansion"
                    secondLine="Enhanced Sathyamangalam Mill's spindle capacity to 51,456."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution10.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2012"
                    firstLine="Modernisation & Expansion"
                    secondLine="Introduced a melange yarn project with 16,128 spindles at Karumathampatti."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution11.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2013"
                    firstLine="Sugar & Co-generation"
                    secondLine="Established a co-generation cum sugar plant in Karnataka with 30 MW and 5,000 TCD capacity.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution12.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2014"
                    firstLine="Garment Facility Expansion"
                    secondLine="Increased garment capacity at Arasur by 10 million garments per annum."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution13.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2015"
                    firstLine="Fully Air Conditioned Garment Facility"
                    secondLine="Opened a new greenfield garment facility at Thekkalur with a capacity of 12 million garments per annum."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution14.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2016"
                    firstLine="New Garment Facility"
                    secondLine="Established a new greenfield garment facility at Thekkalur, Tamil Nadu, with a capacity of 36 million garments per annum.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution15.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>      

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2017"
                    firstLine="Environment-friendly Process through Technology"
                    secondLine=" Introduced an eco-friendly processing facility with advanced technology, expanding capacity to 9,000 MT and established a sophisticated high-resolution printing division with 7,500 MT capacity."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution16.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              {/* <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2017"
                    firstLine="New processing Capacity"
                    secondLine="New processing Capacity – SIPCOT, PERUNDURAI"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/2017-new-processing.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement> */}

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2018"
                    firstLine="Technology Enablement"
                    secondLine=" Set up a 10 million garment manufacturing unit at Mekelle, Ethiopia, and began vortex yarn production at Karumathampatti unit."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution17.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>


              {/* <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2018"
                    firstLine="Vortex"
                    secondLine="Vortex Yarn production started at Karumathampatty Unit."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution17.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement> */}

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Expansion"
                    secondLine=" Increased processing capacity from 21,000 MT to 25,000 MT and expanded garment capacity by 10 million garments at Thekkalur."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution18.png"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>


              {/* <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Expansion: Garmenting"
                    secondLine="Brown field garment expansion by 10 Mn Garments at CHENGAPALLI"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution19.png"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement> */}


              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Ethanol Plant and Expansion"
                    secondLine=" Established an ethanol plant in Karnataka with a 130 KLPD capacity and expanded the sugar mill capacity to 10,000 TCD."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution20.png"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Our Retail Brand"
                    secondLine="Launched the 'FASO' 100% organic cotton men’s innerwear retail segment."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution21.png"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="International Office @ Singapore"
                    secondLine="Established a wholly owned subsidiary company at Singapore to expand export activities across Asia."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution22.png"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>      

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2020"
                    firstLine="New Knitting Facility"
                    secondLine="Set up a new knitting facility at Karumathampatti."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/knt20.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2021"
                    firstLine="Expansion & Establishment"
                    secondLine="Increased processing unit capacity by 3,000 MT and established a new garment facility at Changapalli, Tamil Nadu, with a capacity of 42 million garments per annum."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/processing-21.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2022"
                    firstLine="New Sugar Mill"
                    secondLine="Established a new sugar mill facility in Karnataka with a capacity of 10,000 TCD, 50 MW co-generation power generation, and 230 KLPD ethanol extraction."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/sugar-24.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              
              {/* <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2022"
                    firstLine="New Garmenting Facility Establised"
                    secondLine="New Garment Facility establised in Changapalli, Tamil Nadu with capacity of 42 million Garments per Annum."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution23.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement> */}

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2023"
                    firstLine="Solar Power Facility"
                    secondLine="Installed a 12 MW rooftop solar power system at the Arasur factory."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution24.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>


              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2023"
                    firstLine="Vortex Spinning Facility @ Neelambur"
                    secondLine="Added the latest 'Vortex' technology for viscose yarn production at Neelambur."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution25.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2023"
                    firstLine="Expansion: Ethanol Extraction"
                    secondLine="Increased ethanol extraction capacity to 240 KLPD at the sugar mill."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/evolution26.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2024"
                    firstLine="New Vortex Spinning Facility"
                    secondLine="Established a new vortex spinning facility at Sathyamangalam."
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/New-Vortex-24.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2024"
                    firstLine="Expansion: Solar Power"
                    secondLine="Solar power capacity increased to 40 MW"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/solarexp.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2024"
                    firstLine="Expansion: Garment Capacity"
                    secondLine="Boosted garment production by 30 million garments, distributed as 10 million at Thekkalur, 10 million at Arasur, and 10 million at Chengapalli.
"
                  />
                }
                iconStyle={{ background: "#daad19", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <Image
                  src="/assets/images/kprmill/evolution/g-2024.jpg"
                  alt="image 1"
                  width={400}
                  height={300}
                />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </section>
      </Layout>
    </>
  );
}
