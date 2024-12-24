"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export default function Banner() {
  return (
    <section className="banner-section p_relative">
      <Swiper
        {...swiperOptions}
        className="banner-carousel owl-theme owl-carousel owl-dots-none"
      >
        <SwiperSlide className="slide-item p_relative">
          <section className="banner-style-two p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/kprmill-images/Home-Page/banner.jpg)",
              }}
            ></div>
            {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div> */}
            <div className="auto-container">
              <div className="content-box p_relative d_block">
                {/* <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div> */}
                <h2>
                  One Of The Largest<span> Vertically Integrated </span>Textile
                  Company
                </h2>
                <p>
                  Over 40 years of experience in textile and apparel
                  manufacturing, with diversified business interests across
                  Yarn, Fabrics, Garments, and White Crystal Sugar
                </p>
                <div className="btn-box ">
                  <Link href="/about-us" className="theme-btn btn-two">
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className="slide-item p_relative">
          <section className="banner-style-two p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/kprmill-images/Home-Page/banner-4.jpg)",
              }}
            ></div>
            {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div> */}
            <div className="auto-container">
              <div className="content-box p_relative d_block">
                {/* <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div> */}
                <h2>
                  “FASO” - <span>Our Flagship</span> Brand
                </h2>
                <p>
                  Revolutionizing the Indian market segment with high-quality,
                  comfortable and 100% organic innerwear and athleisure wear
                </p>
                <div className="btn-box responsive-margin">
                  <Link href="/our-brand" className="theme-btn btn-two">
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className="slide-item p_relative">
          <section className="banner-style-two p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/kprmill-images/Home-Page/banner-3.jpg)",
              }}
            ></div>
            {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div> */}
            <div className="auto-container">
              <div className="content-box p_relative d_block">
                {/* <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div> */}
                <h2>
                  Driven By <span>A Dynamic</span> Leadership Team
                </h2>
                <p>
                  With rich experience in textile and apparel manufacturing, who
                  provides the necessary thought leadership to take us forward
                </p>
                <div className="btn-box responsive-margin">
                  <Link href="/products" className="theme-btn btn-two">
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className="slide-item p_relative">
          <section className="banner-style-two p_relative">
            <div
              className="bg-layer"
              style={{
                backgroundImage:
                  "url(/assets/images/kprmill-images/Home-Page/banner-2.jpg)",
              }}
            ></div>
            {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div> */}
            <div className="auto-container">
              <div className="content-box p_relative d_block">
                {/* <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div> */}
                <h2>
                  Modern <span>manufacturing</span> facility
                </h2>
                <p>
                  Housing cutting-edge machinery integrated with the latest
                  automation technologies to craft and produce the finest
                  fashion garments that offer a unique blend of style and
                  comfort
                </p>
                <div className="btn-box">
                  <Link href="/infrastructure" className="theme-btn btn-two">
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <div className="owl-nav">
        <button type="button" className="owl-prev h1p">
          <span className="icon-10"></span>
        </button>
        <button type="button" className="owl-next h1n">
          <span className="icon-11"></span>
        </button>
      </div>
    </section>
  );
}
