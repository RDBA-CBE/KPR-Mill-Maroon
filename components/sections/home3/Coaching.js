import Link from "next/link";
import React from "react";

export default function Coaching() {
  return (
    <section className="coaching-style-three">
      <div className="sec-title mb_30 mt_30 centred">
        <span className="sub-title" style={{ color: "black" }}>
          Sustainable Lifestyle
        </span>
        <h2>Products</h2>
      </div>
      <div className="outer-container clearfix">
        <div className="coaching-block-three">
          <div className="inner-box">
            <div className="static-content">
              <figure className="image-box">
                <img
                  src="/assets/images/kprmill-images/Home-Page/products-yarn-img.jpg"
                  alt=""
                />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-38"></i></div> */}
                <h3>
                  <Link href="/yarn">YARN</Link>
                </h3>
                <p>
                  KPR Yarns have a distinct identity in terms of quality and
                  durability
                </p>
              </div>
            </div>
            <div className="overlay-content">
              <figure className="image-box">
                <img
                  src="/assets/images/kprmill-images/Home-Page/products-yarn-img.jpg"
                  alt=""
                />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-38"></i></div> */}
                <h3>
                  <Link href="/yarn">YARN</Link>
                </h3>
                <p>
                  KPR Yarns have a distinct identity in terms of quality and
                  durability
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="coaching-block-three">
          <div className="inner-box">
            <div className="static-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/fab.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-39"></i></div> */}
                <h3>
                  <Link href="/fabric">FABRIC</Link>
                </h3>
                <p>
                  Our fabrics are crafted innovatively and are tailored to
                  customer specification
                </p>
              </div>
            </div>
            <div className="overlay-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/fab.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-39"></i></div> */}
                <h3>
                  <Link href="/fabric">FABRIC</Link>
                </h3>
                <p>
                Our fabrics are crafted innovatively and are tailored to
                customer specification
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="coaching-block-three">
          <div className="inner-box">
            <div className="static-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/garm.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-40"></i></div> */}
                <h3>
                  <Link href="garments">GARMENT</Link>
                </h3>
                <p>
                KPR offers high quality knitted garments for men, women and
                children.
                </p>
              </div>
            </div>
            <div className="overlay-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/garm.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-40"></i></div> */}
                <h3>
                  <Link href="/garment">GARMENT</Link>
                </h3>
                <p>
                  KPR offers high quality knitted garments for men, women and
                  children.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="coaching-block-three">
          <div className="inner-box">
            <div className="static-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/sugar.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-41"></i></div> */}
                <h3>
                  <Link href="/sugar">SUGAR</Link>
                </h3>
                <p>
                  White Crystal Sugar manufactured from the best quality
                  Sugarcane Co-gen facilitates.
                </p>
              </div>
            </div>
            <div className="overlay-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/sugar.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-41"></i></div> */}
                <h3>
                  <Link href="/sugar">SUGAR</Link>
                </h3>
                <p>
                  White Crystal Sugar manufactured from the best quality
                  Sugarcane Co-gen facilitates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="coaching-block-three">
          <div className="inner-box">
            <div className="static-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/ethanol-power.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-41"></i></div> */}
                <h3>
                  <Link href="/ethanol-power">ETHANOL & POWER</Link>
                </h3>
                <p>90 MW CO-GEN, 61.92 MW (66 Windmills), 40 MW Solar & 470 KLPD of Ethanol</p>
              </div>
            </div>
            <div className="overlay-content">
              <figure className="image-box">
                <img src="assets/images/kprmill/home/ethanol-power.jpg" alt="" />
              </figure>
              <div className="content-box">
                {/* <div className="icon-box"><i className="icon-41"></i></div> */}
                <h3>
                  <Link href="/ethanol-power">ETHANOL & POWER</Link>
                </h3>
                <p>Capacity: 90 MW power and 470 KLPD of Ethanol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
