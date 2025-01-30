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
                    secondLine="Maiden business at Coimbatore, India"
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
                    firstLine="First Steps"
                    secondLine="Knitted garment export at Tirupur."
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
                    firstLine="First Steps"
                    secondLine="First spinning unit at Sathyamangalam with 6,000 spindles. Increased to 30,240 spindles by 1999"
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
                    firstLine="Business Expansion"
                    secondLine="Spinning mill at Karumathampatti with 30,240 spindles; Knitting facility & Wind mill for captive use"
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
                    firstLine="Business Expansion"
                    secondLine="Spinning unit at Neelambur with 50,784 spindles; Knitting facility & Wind mill"
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
                    firstLine="Business Expansion & Alternative Energy Initiatives"
                    secondLine="At Arasur 1,00,800 spindles; Knitting facility, Garment Unit - 25.9 MN garments and Wind Mills"
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
                    secondLine="Private Equity participation by leading US Corporate ‘Brandot Investments’ & Two others - $ 25 Mn"
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
                    secondLine="IPO at a premium. Shares Listed at Bombay & National Stock Exchanges, India"
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
                    firstLine="New processing division"
                    secondLine="New processing division with 9000 Mt processing capacity at Perundurai-Sipcot,"
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
                    secondLine="Expansion of value-added Compact Spinning with 1,03,680 spindles at Karumathampatti besides upgrading green energy through windmill."
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
                    firstLine="Modernisation cum expansion"
                    secondLine="At Sathyamangalam Mill, enhancing spindles to 51,456."
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
                    firstLine="Modernisation cum expansion"
                    secondLine="Melange yarn project with 16,128 spindles at Karumathampatti."
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
                    firstLine="Sugar cum Co-gen"
                    secondLine="Co-gen cum Sugar Plant at Karnataka – 30 MW and 5000 TCD capacity."
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
                    firstLine="Expansion"
                    secondLine="Expanded Garment capacity at Arasur by 10 Million pieces."
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
                    firstLine="Fully Air Conditioned"
                    secondLine="New green field Garment capacity at Thekkalur with 12 Million pieces."
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
                    firstLine="Expansion"
                    secondLine="Established New green field garment facility of 36 Mn garments at THEKKALUR."
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
                    secondLine="Established new Ecofriendly Processing capacity with Advanced Technology - 9000 MT. Established Sophisticated high resolution printing division – 7500 MT"
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

              <VerticalTimelineElement
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
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2018"
                    firstLine="Technology Enablement"
                    secondLine="Established 10 Million Garment Manufacturing unit at Mekelle, Ethiopia"
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


              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2018"
                    firstLine="Vortex"
                    secondLine="Vortex started at PC unit"
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

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Expansion: Processing"
                    secondLine="Increased Processing capacity from 21000 MT to 25000 MT"
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


              <VerticalTimelineElement
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
              </VerticalTimelineElement>


              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2019"
                    firstLine="Ethanol Plant and Expansion"
                    secondLine="Setup 360 KLPD to 470 KLPD Ethanol Plant at Karnataka. Sugar Mill capacity expanded to 10000 TCD"
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
                    secondLine="Retail Segment: ‘FASO’ 100% Organic Cotton Men’s innerwear launched"
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
                    secondLine="To expand export activities in Asia, established a Wholly owned Subsidiary Company at Singapore"
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
                    secondLine="New Knitting Facility establised at Karumathampatti"
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
                    firstLine="Expansion: Processing"
                    secondLine="Processing Unit Capacity increased by 3000 MT"
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
                    firstLine="New Sugar Mill Established"
                    secondLine="New Sugar mill facility established in Karnataka with Sugar 10,000 TCD; 50 MW Co-Gen Power Ganeration and 230 KLPD Ethanol Ectraction"
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

              
              <VerticalTimelineElement
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
              </VerticalTimelineElement>

              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={
                  <CustomDate
                    date="2023"
                    firstLine="Solar Power Facility"
                    secondLine=" 12 MW Rooftop solar power installed at Arasur factory."
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
                    firstLine="Vortex Spinning Facility"
                    secondLine="Added Latest Technology 'Vortex' to produce viscose yarn"
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
                    secondLine="Increased Ethanol Capacity to 240 KLPD at Sugar Mill I"
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
                    secondLine="Establised New Vortex Spinning Facility @ Sathyamangalam"
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
                    firstLine="Expansion:  Solar Power"
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
