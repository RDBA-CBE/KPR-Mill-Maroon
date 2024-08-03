"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnMaven_Proaction: false,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
export default function VisaSlider() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one"
      >
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-1.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-12"></i>
                </div>
                <h3>
                  <Link href="visa-details-4">Model Factory</Link>
                </h3>
                <p>
                  We are proud and happy that our facility is a ‘Model Factory’
                  and many industry stalwarts, senior executives, government
                  officials and internationa delegates have visited KPR.
                </p>
                <div className="link-btn">
                  <Link href="visa-details-4">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-2.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-13"></i>
                </div>
                <h3>
                  <Link href="visa-details-3">Quality Focus</Link>
                </h3>
                <p>
                  We source only the best raw materials and rope in extremely
                  talented individuals and deploy sophisticated as well as
                  modern machines across all departments. Our agile
                  infrastructure has enabled us to offer flexibility, shorter
                  lead time and processing orders of any quantity to our
                  customers.
                </p>
                <div className="link-btn">
                  <Link href="visa-details-3">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-3.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-14"></i>
                </div>
                <h3>
                  <Link href="visa-details">Testing Equipment</Link>
                </h3>
                <p>
                  We have installed high-tech quality control and testing
                  equipment such as Uster Tester-5, Uster HVI 1000 Spectrum,
                  Uster AFIS Pro-2, Uster Zweigle Hairiness Tester –G566 and
                  UsterClassimate Quantum.
                </p>
                <div className="link-btn">
                  <Link href="visa-details">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-1.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-12"></i>
                </div>
                <h3>
                  <Link href="visa-details-4">Location Advantage</Link>
                </h3>
                <p>
                  Entire operations of the Company are strategically located
                  around 50km radius from Tirupur & Coimbatore – one of the
                  Asia’s largest apparel manufacturing clusters. The close
                  proximity to buyers reduces material handling costs and
                  facilitates immediate feedback on the product quality.
                </p>
                <div className="link-btn">
                  <Link href="visa-details-4">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-2.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-13"></i>
                </div>
                <h3>
                  <Link href="visa-details-3">Leading-edge Technology</Link>
                </h3>
                <p>
                  We have deployed modern as well as sophisticated machines
                  across all departments. The high speed imported machines
                  ensure precision and efficiency. Our state of the art
                  machinery helps us to produce garments on par with
                  international standards.
                </p>
                <div className="link-btn">
                  <Link href="visa-details-3">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="visa-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <img src="assets/images/resource/visa-3.jpg" alt="" />
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <i className="icon-14"></i>
                </div>
                <h3>
                  <Link href="visa-details">Vertical Integration</Link>
                </h3>
                <p>
                  KPR Mill is one the largest vertical integrated textile
                  companies in Asia. Our careful vertical integration strategy
                  has ensured a smooth and seamless flow of operations across
                  the company.
                </p>
                <div className="link-btn">
                  <Link href="visa-details">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
