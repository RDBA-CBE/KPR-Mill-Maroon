"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { singleSlugData } from "@/utils/axios.utils";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const [state, setState] = useSetState({
    aboutPage: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("about-the-company");
      if (res && res.length > 0) {
        setState({
          aboutPage: res[0],
        });
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("state.aboutPage: ", state.aboutPage);

  const BannerImage =
    "/assets/images/kprmill-images/About/about-banner-img.jpg";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="About Us"
        imageUrl={BannerImage}
      >
        {/* about-section */}
        {/* <section className="about-style-three about-page p_relative">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-42.png)",
              }}
            ></div>
            <div
              className="pattern-3"
              style={{
                backgroundImage: "url(assets/images/shape/shape-69.png)",
              }}
            ></div>
            <div
              className="pattern-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-70.png)",
              }}
            ></div>
          </div>
          <figure className="image-layer">
            <img src="assets/images/resource/men-2.png" alt="" />
          </figure>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 content-column offset-lg-3">
                <div className="content_block_six">
                  <div className="content-box mr_20">
                    <div className="sec-title mb_20">
                      <span className="sub-title">Who we are?</span>
                      <h2>Leading firm for immigration services.</h2>
                    </div>
                    <div className="text mb_30">
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet magna suscipit, fermentum mattis erat
                        rutrum.Porta semper lacus cursus.
                      </p>
                    </div>
                    <div className="inner-box mb_40">
                      <div className="single-item">
                        <div className="icon-box">
                          <img src="assets/images/icons/icon-13.png" alt="" />
                        </div>
                        <h5>Overseas education and study visa consultants.</h5>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <img src="assets/images/icons/icon-14.png" alt="" />
                        </div>
                        <h5>Top-ranked universities guarantee admissions.</h5>
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link href="about" className="theme-btn btn-two">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div className="image-inner clearfix">
                  <div
                    className="image-shape"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-44.png)",
                    }}
                  ></div>
                  <div className="image-box">
                    <figure className="image">
                      <img src="assets/images/resource/about-3.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <img src="assets/images/resource/about-4.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/resource/about-5.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* about-section end */}
        {/* feature -section */}
        {/* <section className="feature-section about-page alternat-3 pb_150">
          <div className="auto-container">
            <div className="inner-container">
              <div
                className="shape-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-41.png)",
                }}
              ></div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-17"></i>
                      </div>
                      <h3>
                        <Link href="/">Visa</Link>
                      </h3>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-18"></i>
                      </div>
                      <h3>
                        <Link href="/">Passport</Link>
                      </h3>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-19"></i>
                      </div>
                      <h3>
                        <Link href="/">Immigration</Link>
                      </h3>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-20"></i>
                      </div>
                      <h3>
                        <Link href="/">Translation</Link>
                      </h3>
                      <p>
                        Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                        sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* feature-section end */}

        <section className="dream-style-three p_relative" style={{backgroundColor: "rgb(245, 245, 245)"}}>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-column text-center">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      <span className="sub-title">
                        Setting benchmarks for quality
                      </span>
                      <h2>Get The Right Help</h2>
                    </div>
                    <div className="text mb_25">
                      <p>
                        Driven by High Principled Values, KPR Mill is one of the
                        largest vertically integrated, public limited – listed
                        company with diversified business focus spanning across
                        Yarn, Fabrics, Garments and White Crystal Sugar. KPR has
                        earned a great deal of experience over the last 40 years
                        to produce an indelible mark in the textile landscape.
                      </p>
                    </div>
                    <div className="text">
                      <p>
                        Manufacturing an impressive product range of textile
                        varieties such as Readymade Knitted Apparel; Fabrics;
                        Compact, Melange, Carded, Polyster and Combed Yarn, KPR
                        Mill reaches out to global customers with diligence,
                        superior quality and delivery excellence.
                      </p>
                    </div>
                    {/* <ul className="list-item p_relative mb_40 clearfix">
                      <li>
                        <Link href="/">
                          1. Entering & Leaving From Country{" "}
                          <i className="icon-9"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          2. Help & Support <i className="icon-9"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          3. Country Citizenship <i className="icon-9"></i>
                        </Link>
                      </li>
                    </ul> */}
                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img
                      src="/assets/images/kprmill/about/about-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section
          className="coaching-details p_relative sec-pad pb-0"
         
        >
          <div className="auto-container">
            <div className="sec-title  mb_30 centred">
              <span className="sub-title" style={{ color: "black" }}>
                Expanding responsibly through strategic innovation
              </span>
              <h2> KPR Mill Strategic Business Model</h2>
            </div>

            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="coaching-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <div
                      style={{ background: "#daad19", padding: "20px 10px" }}
                    >
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Technology Focus
                      </h3>
                    </div>
                    <ul
                      className="category-list clearfix"
                      style={{ height: "480px" }}
                    >
                      <p style={{ color: "#daad19", textAlign: "center" }}>
                        Leaving No Stone Unturned.
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Cutting-edge technology equipment and tools everywhere.
                      </p>
                      <li className="about-company-section2-link">
                        Vertically-integrated and highly automated.
                      </li>
                      <li className="about-company-section2-link">
                        Advanced machines from industry leaders.
                      </li>
                      <li className="about-company-section2-link">
                        Top of the line design studio.
                      </li>
                      <li className="about-company-section2-link">
                        Digitally Transformed
                      </li>
                      <li className="about-company-section2-link">
                        Frequent Technology Upgradation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="coaching-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <div
                      style={{ background: "#daad19", padding: "20px 10px" }}
                    >
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Product Supremacy
                      </h3>
                    </div>
                    <ul
                      className="category-list clearfix"
                      style={{ height: "480px" }}
                    >
                      <p style={{ color: "#daad19", textAlign: "center" }}>
                        Comfort and value for money.
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Manufacturing a leading range of supreme quality
                        products for all customer segments.
                      </p>
                      <li className="about-company-section2-link">
                        Diverse range in Yarns, Fabric and Garments.
                      </li>
                      <li className="about-company-section2-link">
                        Right quality at the right time with right value.
                      </li>
                      <li className="about-company-section2-link">
                        Healthy, safe and comfortable.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="coaching-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <div
                      style={{ background: "#daad19", padding: "20px 10px" }}
                    >
                      <h3 style={{ color: "white", textAlign: "center" }}>
                        Empowered People
                      </h3>
                    </div>
                    <ul
                      className="category-list clearfix"
                      style={{ height: "480px" }}
                    >
                      <p style={{ color: "#daad19", textAlign: "center" }}>
                        Industry experts and seasoned professionals.
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Helping customers with knowledgeable, ready-to-help
                        experts.
                      </p>
                      <li className="about-company-section2-link">
                        Driven by values.
                      </li>
                      <li className="about-company-section2-link">
                        Facilitating ownership, responsibility and opportunity.
                      </li>
                      <li className="about-company-section2-link">
                        Conducive atmosphere to innovate, excel and better
                        serve.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      <span className="sub-title">
                        Leading the way with a futuristic approach
                      </span>
                      <h2>Future-focused Initiatives</h2>
                    </div>

                    <div className="text ">
                      <ul className="about-list-style clearfix">
                        <li>
                          <span style={{ fontWeight: "bold" }}>
                            Active Automation.
                          </span>{" "}
                          Leveraging technology through automations across all
                          departments.
                        </li>
                        <li>
                          <span style={{ fontWeight: "bold" }}>
                            Expanding Horizons.
                          </span>{" "}
                          Establishment of a state-of-the-art garment
                          manufacturing facility at Ethiopia.
                        </li>
                        <li>
                          <span style={{ fontWeight: "bold" }}>
                            New Ventures.
                          </span>{" "}
                          Foray into retail market to promote KPR Mill garments
                          and ready-to-wear apparels.
                        </li>
                        <li>
                          <span style={{ fontWeight: "bold" }}>
                            People-friendly.
                          </span>{" "}
                          Empowering employees through ultra-modern facilities
                          and higher education opportunities.
                        </li>
                      </ul>
                    </div>

                    {/* <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/img-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="dream-style-three p_relative"
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div className="sec-title mb_20">
              <span className="sub-title">Unique Advantages</span>
              <h2>Why KPR – Key Strengths</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25">
                      <p className="mb_5" style={{ fontWeight: "bold" }}>
                        Close to 4 Decades of Rock-Solid Experience & Location
                        Advantage
                      </p>
                      <ul className="about-list-style clearfix">
                        <li>
                          Enterprising management team with rich experience in
                          Textile and Apparel industry.
                        </li>
                        <li>
                          Strategically located near Tirupur – Asia’s Largest
                          Knitwear Cluster.
                        </li>
                      </ul>
                    </div>

                    <div className="text mb_25">
                      <p className="mb_5" style={{ fontWeight: "bold" }}>
                        Impressive Product Range
                      </p>
                      <ul className="about-list-style clearfix">
                        <li>Unique customer-focused products.</li>
                        <li>
                          Yarn, Fabrics, Garments, White Crystal Sugar and
                          Ethanol.
                        </li>
                      </ul>
                    </div>
                    <div className="text mb_25">
                      <p className="mb_5" style={{ fontWeight: "bold" }}>
                        Quality Assurance – in Every Aspect
                      </p>
                      <ul className="about-list-style clearfix">
                        <li>
                          Excellence: Right from procuring raw materials till
                          final delivery of products.
                        </li>
                        <li>
                          Adherence to: stringent quality norms, government
                          regulations and international standards.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    

                    <div className="text">
                      <p className="mb_5" style={{ fontWeight: "bold" }}>
                        Multitude of Infrastructural Advantages
                      </p>
                      <ul className="about-list-style clearfix">
                        <li>Vertically integrated operations.</li>
                        <li>
                          Advanced technology machineries and state-of-the-art
                          plant.
                        </li>
                        <li>Strong and dedicated workforce.</li>
                        <li>Global scale of operations.</li>
                        <li>
                          Trusted client base, both National & International.
                        </li>
                        <li>
                          Substantial self-sufficiency in power needs through
                          green power generation by windmills.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix mt_20">
            <div class="col-lg-12 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill-images/About/img-2.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>

            {/* <div class="row clearfix mt-5">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    

                 
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img
                      src="/assets/images/kprmill/about/about-2.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* country*/}
        {/* <section className="countries-style-three alternat-2 sec-pad">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title mb_60 centred">
              <span className="sub-title">Countries We Offer</span>
              <h2>
                Immigration Officials approvals for foreign <br />
                citizens can vary by country.
              </h2>
            </div>
            <div className="tabs-box">
              <div className="tab-btn-box mb_50">
                <div className="tab-btns tab-buttons" role="tablist">
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                      <div
                        className="nav-link"
                        onClick={() => handleOnClick(4)}
                      >
                        <div
                          className={
                            activeIndex == 4 ? "tab-btn active" : "tab-btn"
                          }
                        >
                          <h3>
                            <i className="icon-33"></i>Education
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                      <div
                        className="nav-item"
                        onClick={() => handleOnClick(5)}
                      >
                        <div
                          className={
                            activeIndex == 5 ? "tab-btn active" : "tab-btn"
                          }
                        >
                          <h3>
                            <i className="icon-34"></i>Immigration
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                      <div
                        className="nav-item"
                        onClick={() => handleOnClick(6)}
                      >
                        <div
                          className={
                            activeIndex == 6 ? "tab-btn active" : "tab-btn"
                          }
                        >
                          <h3>
                            <i className="icon-14"></i>Business
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                      <div
                        className="nav-item"
                        onClick={() => handleOnClick(7)}
                      >
                        <div
                          className={
                            activeIndex == 7 ? "tab-btn active" : "tab-btn"
                          }
                        >
                          <h3>
                            <i className="icon-17"></i>Tourist
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-content wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div
                  className={
                    activeIndex == 4
                      ? "tab-pane fadeInUp animated show active"
                      : "tab-pane fadeInUp animated"
                  }
                >
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-13.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">United Kingdom</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Working Visa, Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-14.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Bahamas</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Eudcation Visa, Only System
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-15.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Canada</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Resident Visa Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-16.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Brazil</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Student Visa & Admission, Visitor Visa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 5
                      ? "tab-pane fadeInUp animated show active"
                      : "tab-pane fadeInUp animated"
                  }
                >
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-14.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Bahamas</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Eudcation Visa, Only System
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-13.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">United Kingdom</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Working Visa, Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-15.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Canada</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Resident Visa Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-16.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Brazil</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Student Visa & Admission, Visitor Visa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 6
                      ? "tab-pane fadeInUp animated show active"
                      : "tab-pane fadeInUp animated"
                  }
                >
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-15.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Canada</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Resident Visa Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-13.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">United Kingdom</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Working Visa, Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-14.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Bahamas</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Eudcation Visa, Only System
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-16.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Brazil</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Student Visa & Admission, Visitor Visa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 7
                      ? "tab-pane fadeInUp animated show active"
                      : "tab-pane fadeInUp animated"
                  }
                >
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-13.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">United Kingdom</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Working Visa, Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-16.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Brazil</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Student Visa & Admission, Visitor Visa
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-14.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Bahamas</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Eudcation Visa, Only System
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                      <div className="countries-block-four">
                        <div className="inner-box">
                          <div className="flag">
                            <img src="assets/images/icons/flag-15.png" alt="" />
                          </div>
                          <h3>
                            <Link href="index-3">Canada</Link>
                          </h3>
                          <p>
                            Vivamus ac ultricies ex. Donec lacinia lacus libero,
                            sed feugiat diam laoreet eget
                          </p>
                          <div className="text">Visa Type :</div>
                          <span className="designation">
                            Resident Visa Job Visa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* country end */}
        {/* Country 1*/}
        {/* <section className="countries-style-five p_relative">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-61.png)",
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-62.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="sec-title mb_60 light">
              <span className="sub-title">Countries We Offer</span>
              <h2>Apply For Quick Visa</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                <div
                  className="countries-block-five wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="assets/images/resource/countries-9.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="flag">
                        <img src="assets/images/icons/flag-3.png" alt="" />
                      </div>
                    </div>
                    <div className="lower-content">
                      <h5>
                        <Link href="index-4">
                          China <span>Visa</span>
                        </Link>
                      </h5>
                      <span className="text">Avenue, Jersey</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                <div
                  className="countries-block-five wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="assets/images/resource/countries-10.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="flag">
                        <img src="assets/images/icons/flag-5.png" alt="" />
                      </div>
                    </div>
                    <div className="lower-content">
                      <h5>
                        <Link href="index-4">
                          United Kingdom <span>Visa</span>
                        </Link>
                      </h5>
                      <span className="text">Asheville</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                <div
                  className="countries-block-five wow fadeInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="assets/images/resource/countries-11.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="flag">
                        <img src="assets/images/icons/flag-8.png" alt="" />
                      </div>
                    </div>
                    <div className="lower-content">
                      <h5>
                        <Link href="index-4">
                          Brazil <span>Visa</span>
                        </Link>
                      </h5>
                      <span className="text">Amsterdam</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                <div
                  className="countries-block-five wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src="assets/images/resource/countries-12.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="flag">
                        <img src="assets/images/icons/flag-4.png" alt="" />
                      </div>
                    </div>
                    <div className="lower-content">
                      <h5>
                        <Link href="index-4">
                          Australia <span>Visa</span>
                        </Link>
                      </h5>
                      <span className="text">Queensland</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* country 1 end*/}
        {/* chooseus-section */}
        {/* <section className="chooseus-section p_relative">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-71.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title centred mb_60">
              <span className="sub-title">Why Choose Us</span>
              <h2>
                Offer custom-made services that <br />
                our customer needs.
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                <div
                  className="chooseus-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-1.png" alt="" />
                    </div>
                    <h3>
                      <Link href="/">Direct Interviews</Link>
                    </h3>
                    <p>
                      Where did this incorrect belief that everyone dislikes
                      praising happiness come from?
                    </p>
                    <div className="link-btn">
                      <Link href="/">
                        <span>Read More</span>
                        <i className="icon-9"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                <div
                  className="chooseus-block-one wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-2.png" alt="" />
                    </div>
                    <h3>
                      <Link href="/">Faster Processing</Link>
                    </h3>
                    <p>
                      Where did this incorrect belief that everyone dislikes
                      praising happiness come from?
                    </p>
                    <div className="link-btn">
                      <Link href="/">
                        <span>Read More</span>
                        <i className="icon-9"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                <div
                  className="chooseus-block-one wow fadeInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-3.png" alt="" />
                    </div>
                    <h3>
                      <Link href="/">Visa Assistance</Link>
                    </h3>
                    <p>
                      Where did this incorrect belief that everyone dislikes
                      praising happiness come from?
                    </p>
                    <div className="link-btn">
                      <Link href="/">
                        <span>Read More</span>
                        <i className="icon-9"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                <div
                  className="chooseus-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-4.png" alt="" />
                    </div>
                    <h3>
                      <Link href="/">Cost-Effective</Link>
                    </h3>
                    <p>
                      Where did this incorrect belief that everyone dislikes
                      praising happiness come from?
                    </p>
                    <div className="link-btn">
                      <Link href="/">
                        <span>Read More</span>
                        <i className="icon-9"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* chooseus-section */}
        {/* clients-section */}
        {/* <section className="clients-section about-page alternat-2 p_relative">
          <div className="auto-container">
            <div className="inner-box p_relative pt_90">
              <ul className="clients-list">
                <li className="clients-logo">
                  <Link href="/">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </Link>
                </li>
                <li className="clients-logo">
                  <Link href="/">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </Link>
                </li>
                <li className="clients-logo">
                  <Link href="/">
                    <img src="assets/images/clients/clients-3.png" alt="" />
                  </Link>
                </li>
                <li className="clients-logo">
                  <Link href="/">
                    <img src="assets/images/clients/clients-4.png" alt="" />
                  </Link>
                </li>
                <li className="clients-logo">
                  <Link href="/">
                    <img src="assets/images/clients/clients-5.png" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* clients-section */}
        {/* team-section */}
        {/* <section className="team-section alternat-2 p_relative centred">
          <div className="pattern-layer">
            <div
              className="pattern-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-30.png)",
              }}
            ></div>
            <div
              className="pattern-5"
              style={{
                backgroundImage: "url(assets/images/shape/shape-31.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Expert Team Members</span>
              <h2>Our Team at Your Service</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-1.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="icon-26"></i>
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="icon-7"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-6"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-4"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="team-details">Roman Frederick</Link>
                      </h3>
                      <span className="designation">Regional Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-2.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="icon-26"></i>
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="icon-7"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-6"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-4"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="team-details">Jane Cooper</Link>
                      </h3>
                      <span className="designation">Medical Assistant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-3.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="icon-26"></i>
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="icon-7"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-6"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-4"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="team-details">Esther Howard</Link>
                      </h3>
                      <span className="designation">President of Sales</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/team/team-4.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="share-box">
                        <div className="share-icon">
                          <i className="icon-26"></i>
                        </div>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/">
                              <i className="icon-7"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-6"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="icon-4"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link href="team-details">Jenny Wilson</Link>
                      </h3>
                      <span className="designation">Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* team-section */}

        {/* <h3>{state?.aboutPage?.title?.rendered}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: state?.aboutPage?.content?.rendered,
          }}
        ></div> */}
      </Layout>
    </>
  );
}
