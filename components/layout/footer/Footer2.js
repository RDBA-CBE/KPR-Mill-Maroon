"use client";
import Link from "next/link";
export default function Footer2() {
  return (
    <>
      <footer className="main-footer style-two">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-3  col-sm-12 footer-column">
                <div className="footer-widget logo-widget footer-logo-widget-section">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="assets/images/footer-logo.png" alt="" />
                    </Link>
                  </figure>
                  <div className="text mt_30">
                    <ul className="post-info list-unstyled  footer-list-address">
                      {/* <li>
                        <Link
                          href="mailto:corporate@kprmill.com"
                          style={{ color: "white" }}
                        >
                          corporate@kprmill.com
                        </Link>
                      </li> */}
                      <li>
                        Shrivari Srimat, 1045, Avinashi Road,
                        Coimbatore - 641018, India.
                      </li>
                      <li>
                        Tel:
                        <Link
                          href="tel:+91-422-2207777"
                          style={{
                            color: "#c6c3c3",
                            paddingLeft: "3px",
                            marginTop: "0px",
                            fontSize: "14px",
                            textDecoration: "underline",
                          }}
                        >
                          +91-422-2207777
                        </Link>
                      </li>
                    </ul>
                    {/* <Link href="index-2">Read More</Link> */}
                  </div>
                  <div className="social-links mt_20">
                    <h5 className="footer-title">Follow Us</h5>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className=" col-lg-9 col-sm-12 footer-column"
                style={{ paddingLeft: "50px" }}
              >
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Who We Are</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/about-us" style={{ color: "white" }}>
                                About The Company
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/vision-mission"
                                style={{ color: "white" }}
                              >
                                Vision & Mission
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/evolution"
                                style={{ color: "white" }}
                              >
                                Evolution
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/the-board"
                                style={{ color: "white" }}
                              >
                                The Board
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/production-facilities"
                                style={{ color: "white" }}
                              >
                                Production Facilities
                              </Link>
                            </li>
                            <li>
                              <Link href="/awards" style={{ color: "white" }}>
                                Awards
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/certifications"
                                style={{ color: "white" }}
                              >
                                Certifications
                              </Link>
                            </li>
                            <li>
                              <Link href="/quality" style={{ color: "white" }}>
                                Quality
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Products</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/yarn" style={{ color: "white" }}>
                                Yarn
                              </Link>
                            </li>
                            <li>
                              <Link href="/fabric" style={{ color: "white" }}>
                                Fabric
                              </Link>
                            </li>
                            <li>
                              <Link href="/garment" style={{ color: "white" }}>
                                Garments
                              </Link>
                            </li>
                            <li>
                              <Link href="/sugar" style={{ color: "white" }}>
                                Sugar
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/ethanol-power"
                                style={{ color: "white" }}
                              >
                                Ethanol & Power
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Infrastructure</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/infrastructure"
                                style={{ color: "white" }}
                              >
                                Overview
                              </Link>
                            </li>
                            <li>
                              <Link href="/spinning" style={{ color: "white" }}>
                                Spinning
                              </Link>
                            </li>
                            <li>
                              <Link href="/knitting" style={{ color: "white" }}>
                                Knitting
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/processing"
                                style={{ color: "white" }}
                              >
                                Processing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/printing-and-embroidery"
                                style={{ color: "white" }}
                              >
                                Printing & Embroidery
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/garmenting"
                                style={{ color: "white" }}
                              >
                                Garmenting
                              </Link>
                            </li>
                            <li>
                              <Link href="/windmill" style={{ color: "white" }}>
                                Windmill
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/sugarmill"
                                style={{ color: "white" }}
                              >
                                Sugar Mill
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget gallery-widget  mb_30">
                      <div>
                        <h5 className="footer-title">Investors</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/regulation-46-of-the-lodr"
                                style={{ color: "white" }}
                              >
                                Regulation 46 of the LODR
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/regulation-62-of-the-lodr"
                                style={{ color: "white" }}
                              >
                                Regulation 62 of the LODR
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investors-contact"
                                style={{ color: "white" }}
                              >
                                Investors Contact
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/media-download"
                                style={{ color: "white" }}
                              >
                                Media / Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result"
                                style={{ color: "white" }}
                              >
                                Financial Results
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/share-holding-pattern"
                                style={{ color: "white" }}
                              >
                                Share Holding Pattern
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/corporate-governance"
                                style={{ color: "white" }}
                              >
                                Corporate Governance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/code-of-conduct"
                                style={{ color: "white" }}
                              >
                                Code of Conduct
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/policy-info  "
                                style={{ color: "white" }}
                              >
                                Policy Info
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget gallery-widget  mb_30">
                      <div>
                        <h5 className="footer-title">Financial Results</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/financial-result"
                                style={{ color: "white" }}
                              >
                                Annual Reports
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-audited-unaudited"
                                style={{ color: "white" }}
                              >
                                Audited / Unaudited Results
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-subsidiary-cos"
                                style={{ color: "white" }}
                              >
                                Financials – Subsidiary Cos
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-of-indepentet-directors"
                                style={{ color: "white" }}
                              >
                                Appointment of Independent Directors
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-of-voting-result-of-agm"
                                style={{ color: "white" }}
                              >
                                Voting Results of AGM and Postal Ballot
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-of-company-information"
                                style={{ color: "white" }}
                              >
                                Company Information
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-con-col-invitation-and-transcript"
                                style={{ color: "white" }}
                              >
                                Con-call Invitations and Transcript
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget gallery-widget  mb_30">
                      <div>
                        <h5 className="footer-title"> Policy Info</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/policy" style={{ color: "white" }}>
                                Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investor-services"
                                style={{ color: "white" }}
                              >
                                Investor Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/stock-exchange-intimation"
                                style={{ color: "white" }}
                              >
                                Stock Exchange Intimations
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dividend-iepf"
                                style={{ color: "white" }}
                              >
                                Dividend / IEPF
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/announcements"
                                style={{ color: "white" }}
                              >
                                Announcements
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investor-presentation"
                                style={{ color: "white" }}
                              >
                                Investor Presentation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/information"
                                style={{ color: "white" }}
                              >
                                Information
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">CSR</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/community-development"
                                style={{ color: "white" }}
                              >
                                Community Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/sustained-commitment"
                                style={{ color: "white" }}
                              >
                                Sustained Commitment
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/green-initiative"
                                style={{ color: "white" }}
                              >
                                Green Initiatives
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/higher-studies-and-career-placement"
                                style={{ color: "white" }}
                              >
                                Higher Studies and Carrer Placement
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    {/* <div className="footer-widget post-widget mb_10">
                      <div>
                        <img
                          src="/assets/images/kprmill/home/footer-img.png"
                          alt="Logo"
                          style={{ height: "280px", width: "100%" }}
                        />
                      </div>
                    </div> */}

                    <div className="footer-widget post-widget mb_10">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/our-brand" style={{ color: "white" }}>
                            Our Brand
                          </Link>
                        </h5>
                      </div>
                    </div>

                    <div className="footer-widget post-widget mb_10">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/careers" style={{ color: "white" }}>
                            Careers
                          </Link>
                        </h5>
                      </div>
                    </div>

                    <div className="footer-widget post-widget">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/contact" style={{ color: "white" }}>
                            Contact Us
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Who We Are</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/about-us" style={{ color: "white" }}>
                                About The Company
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/vision-mission"
                                style={{ color: "white" }}
                              >
                                Vision & Mission
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/evolution"
                                style={{ color: "white" }}
                              >
                                Evolution
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/the-board"
                                style={{ color: "white" }}
                              >
                                The Board
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/production-facilities"
                                style={{ color: "white" }}
                              >
                                Production Facilities
                              </Link>
                            </li>
                            <li>
                              <Link href="/awards" style={{ color: "white" }}>
                                Awards
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/certifications"
                                style={{ color: "white" }}
                              >
                                Certifications
                              </Link>
                            </li>
                            <li>
                              <Link href="/quality" style={{ color: "white" }}>
                                Quality
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Products</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/yarn" style={{ color: "white" }}>
                                Yarn
                              </Link>
                            </li>
                            <li>
                              <Link href="/fabric" style={{ color: "white" }}>
                                Fabric
                              </Link>
                            </li>
                            <li>
                              <Link href="/garments" style={{ color: "white" }}>
                                Garments
                              </Link>
                            </li>
                            <li>
                              <Link href="/sugar" style={{ color: "white" }}>
                                Sugar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-widget post-widget">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/our-brand" style={{ color: "white" }}>
                            Our Brand
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">CSR</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/community-development"
                                style={{ color: "white" }}
                              >
                                Community Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/sustained-commitment"
                                style={{ color: "white" }}
                              >
                                Sustained Commitment
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/green-initiative"
                                style={{ color: "white" }}
                              >
                                Green Initiatives
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/higher-studies-and-career-placement"
                                style={{ color: "white" }}
                              >
                                Higher Studies and Carrer Placement
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-widget post-widget mb_30">
                      <div>
                        <h5 className="footer-title">Infrastructure</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/overview" style={{ color: "white" }}>
                                Overview
                              </Link>
                            </li>
                            <li>
                              <Link href="/spinning" style={{ color: "white" }}>
                                Spinning
                              </Link>
                            </li>
                            <li>
                              <Link href="/knitting" style={{ color: "white" }}>
                                Knitting
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/processing"
                                style={{ color: "white" }}
                              >
                                Processing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/printing-and-embroidery"
                                style={{ color: "white" }}
                              >
                                Printing & Embroidery
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/garmenting"
                                style={{ color: "white" }}
                              >
                                Garmenting
                              </Link>
                            </li>
                            <li>
                              <Link href="/windmill" style={{ color: "white" }}>
                                Windmill
                              </Link>
                            </li>
                            <li>
                              <Link href="/sugar" style={{ color: "white" }}>
                                Sugar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-widget post-widget">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/careers" style={{ color: "white" }}>
                            Careers
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget gallery-widget ml_30 mb_30">
                      <div>
                        <h5 className="footer-title">Investors</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/regulation-46-of-the-lodr"
                                style={{ color: "white" }}
                              >
                                Regulation 46 of the LODR
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/regulation-62-of-the-lodr"
                                style={{ color: "white" }}
                              >
                                Regulation 62 of the LODR
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investors-contact"
                                style={{ color: "white" }}
                              >
                                Investors Contact
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/media-download"
                                style={{ color: "white" }}
                              >
                                Media / Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result"
                                style={{ color: "white" }}
                              >
                                Financial Results
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/share-holding-pattern"
                                style={{ color: "white" }}
                              >
                                Share Holding Pattern
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/corporate-governance"
                                style={{ color: "white" }}
                              >
                                Corporate Governance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/code-of-conduct"
                                style={{ color: "white" }}
                              >
                                Code of Conduct
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/policy-info  "
                                style={{ color: "white" }}
                              >
                                Policy Info
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-widget gallery-widget ml_30 mb_30">
                      <div>
                        <h5 className="footer-title">Financial Results</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link
                                href="/financial-result"
                                style={{ color: "white" }}
                              >
                                Annual Reports
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-audited-unaudited"
                                style={{ color: "white" }}
                              >
                                Audited / Unaudited Results
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result-subsidiary-cos"
                                style={{ color: "white" }}
                              >
                                Financials – Subsidiary Cos
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/media-download"
                                style={{ color: "white" }}
                              >
                                Media / Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/financial-result"
                                style={{ color: "white" }}
                              >
                                Financial Results
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/share-holding-pattern"
                                style={{ color: "white" }}
                              >
                                Share Holding Pattern
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/corporate-governance"
                                style={{ color: "white" }}
                              >
                                Corporate Governance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/code-of-conduct"
                                style={{ color: "white" }}
                              >
                                Code of Conduct
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/policy-info  "
                                style={{ color: "white" }}
                              >
                                Policy Info
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget gallery-widget  mb_30">
                      <div>
                        <h5 className="footer-title"> Policy Info</h5>
                      </div>
                      <div>
                        <div>
                          <ul className="post-info list-unstyled  footer-list">
                            <li>
                              <Link href="/policy" style={{ color: "white" }}>
                                Policy
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investor-services"
                                style={{ color: "white" }}
                              >
                                Investor Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/stock-exchange-intimation"
                                style={{ color: "white" }}
                              >
                                Stock Exchange Intimations
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dividend-iepf"
                                style={{ color: "white" }}
                              >
                                Dividend / IEPF
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/announcements"
                                style={{ color: "white" }}
                              >
                                Announcements
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/investor-presentation"
                                style={{ color: "white" }}
                              >
                                Investor Presentation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/information"
                                style={{ color: "white" }}
                              >
                                Information
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-widget post-widget">
                      <div>
                        <h5 className="footer-title">
                          <Link href="/contact-us" style={{ color: "white" }}>
                            Contact Us
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="footer-bottom ">
              <div className="copyright ">
                <p className="footer-content">
                  Copyright 2025 &copy; KPR MILL LIMITED. Concept by{" "}
                  <Link
                    href="https://irepute.in/"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    repute
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
