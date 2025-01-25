"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="assets/images/footer-logo.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }  onClick={handleMobileMenu}
                >
                  <Link href="/">Home</Link>
                  {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                        <li><Link href="/index-2" onClick={handleMobileMenu}>Home Page 02</Link></li>
                        <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                        <li><Link href="/index-4" onClick={handleMobileMenu}>Home Page 04</Link></li>
                        <li><Link href="/onepage" onClick={handleMobileMenu}>OnePage Home</Link></li>
                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div> */}
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/about-us" onClick={handleMobileMenu}>About Us</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li className={isActive.subMenuKey == 3 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Team</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 3 ? "block" : "none"}` }}>
                        <li><Link href="/team" onClick={handleMobileMenu}>Our Team</Link></li>
                        <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                      </ul>
                       <li><Link href="/about-us" onClick={handleMobileMenu}>About The Company</Link></li>
                       <li><Link href="/vision-mission" onClick={handleMobileMenu}>Vision & Mission</Link></li>
                       <li><Link href="/evolution" onClick={handleMobileMenu}>Evolution</Link></li>
                       <li><Link href="/the-board" onClick={handleMobileMenu}>The Board</Link></li>
                       <li><Link href="/production-facilities" onClick={handleMobileMenu}>Production Facilities</Link></li>
                       <li><Link href="/awards" onClick={handleMobileMenu}>Awards</Link></li>
                       <li><Link href="/certifications" onClick={handleMobileMenu}>Certifications</Link></li>
                       <li><Link href="/quality" onClick={handleMobileMenu}>Quality</Link></li>
                      <div className={isActive.subMenuKey == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2, 3)}><span className="fa fa-angle-right" /></div>
                    </li> */}
                    <li>
                      <Link href="/about-us" onClick={handleMobileMenu}>
                        About The Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/vision-mission" onClick={handleMobileMenu}>
                        Vision & Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="/evolution" onClick={handleMobileMenu}>
                        Evolution
                      </Link>
                    </li>
                    <li>
                      <Link href="/the-board" onClick={handleMobileMenu}>
                        The Board
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/production-facilities"
                        onClick={handleMobileMenu}
                      >
                        Production Facilities
                      </Link>
                    </li>
                    <li>
                      <Link href="/awards" onClick={handleMobileMenu}>
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link href="/certifications" onClick={handleMobileMenu}>
                        Certifications
                      </Link>
                    </li>
                    <li>
                      <Link href="/quality" onClick={handleMobileMenu}>
                        Quality
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/products"  onClick={handleMobileMenu}>Products</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/yarn" onClick={handleMobileMenu}>
                        Yarn
                      </Link>
                    </li>
                    <li>
                      <Link href="/fabric" onClick={handleMobileMenu}>
                        Fabric
                      </Link>
                    </li>
                    <li>
                      <Link href="garment" onClick={handleMobileMenu}>
                        Garments
                      </Link>
                    </li>
                    <li>
                      <Link href="/sugar" onClick={handleMobileMenu}>
                        Sugar
                      </Link>
                    </li>
                    <li>
                      <Link href="/ethanol-power" onClick={handleMobileMenu}>
                      Ethanol & Power
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }  onClick={handleMobileMenu}
                >
                  <Link href="/our-brand"  onClick={handleMobileMenu}>Our Brand</Link>
                  {/* <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                              <li><Link href="/countries" onClick={handleMobileMenu}>Countries Overview</Link></li>
                                <li><Link href="/countries-details" onClick={handleMobileMenu}>United States</Link></li>
                                <li><Link href="/countries-details-2" onClick={handleMobileMenu}>United Kingdom</Link></li>
                                <li><Link href="/countries-details-3" onClick={handleMobileMenu}>Canada</Link></li>
                                <li><Link href="/countries-details-4" onClick={handleMobileMenu}>China</Link></li>
                                <li><Link href="/countries-details-5" onClick={handleMobileMenu}>Bahamas</Link></li>
                                <li><Link href="/countries-details-6" onClick={handleMobileMenu}>Australia</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div> */}
                </li>

                <li
                  className={
                    isActive.key == 6 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/infrastructure"  onClick={handleMobileMenu}>Infrastructure</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 6 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/infrastructure" onClick={handleMobileMenu}>
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/spinning" onClick={handleMobileMenu}>
                        Spinning
                      </Link>
                    </li>
                    <li>
                      <Link href="/knitting" onClick={handleMobileMenu}>
                        Knitting
                      </Link>
                    </li>
                    <li>
                      <Link href="/processing" onClick={handleMobileMenu}>
                        Processing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/printing-and-embroidery"
                        onClick={handleMobileMenu}
                      >
                        Printing & Embroidery
                      </Link>
                    </li>
                    <li>
                      <Link href="garmenting" onClick={handleMobileMenu}>
                        Garmenting
                      </Link>
                    </li>
                    <li>
                      <Link href="/windmill" onClick={handleMobileMenu}>
                        Wind Mill
                      </Link>
                    </li>
                    <li>
                      <Link href="/sugarmill" onClick={handleMobileMenu}>
                        Sugar Mill
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li
                  className={
                    isActive.key == 7 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/regulation-46-of-the-lodr"  onClick={handleMobileMenu}>Investors</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 7 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        href="/regulation-46-of-the-lodr"
                        onClick={handleMobileMenu}
                      >
                        Regulation 46 of the LODR
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/regulation-62-of-the-lodr"
                        onClick={handleMobileMenu}
                      >
                        Regulation 62 of the LODR
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/investors-contact"
                        onClick={handleMobileMenu}
                      >
                        Investors Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/media-download" onClick={handleMobileMenu}>
                        Media / Download
                      </Link>
                    </li>

                    <li
                      className={
                        isActive.subMenuKey == 3
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/financial-result"  onClick={handleMobileMenu}>Financial Results</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 3 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link
                            href="/financial-result"
                            onClick={handleMobileMenu}
                          >
                            Annual Reports
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/financial-result-audited-unaudited"
                            onClick={handleMobileMenu}
                          >
                            Audited / Unaudited Results
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/financial-result-subsidiary-cos"
                            onClick={handleMobileMenu}
                          >
                            Financials – Subsidiary Cos
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/financial-result-of-indepentet-directors"
                            onClick={handleMobileMenu}
                          >
                            Appointment of Independent Directors
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/financial-result-of-voting-result-of-agm"
                            onClick={handleMobileMenu}
                          >
                            Voting Results of AGM and Postal Ballot
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/financial-result-of-company-information"
                            onClick={handleMobileMenu}
                          >
                            Company Information
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/financial-result-con-col-invitation-and-transcript"
                            onClick={handleMobileMenu}
                          >
                            Con-call Invitations and Transcript
                          </Link>
                        </li>
                      </ul>

                      <div
                        className={
                          isActive.subMenuKey == 3
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(7, 3)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>

                    <li>
                      <Link
                        href="/share-holding-pattern"
                        onClick={handleMobileMenu}
                      >
                        Share Holding Pattern
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/corporate-governance"
                        onClick={handleMobileMenu}
                      >
                        Corporate Governance
                      </Link>
                    </li>

                    <li>
                      <Link href="/code-of-conduct" onClick={handleMobileMenu}>
                        Code of Conduct
                      </Link>
                    </li>

                    <li
                      className={
                        isActive.subMenuKey == 15
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/policy-info">Policy Info</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == 15 ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/policy" onClick={handleMobileMenu}>
                            Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/investor-services"
                            onClick={handleMobileMenu}
                          >
                            Investor Services
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/stock-exchange-intimation"
                            onClick={handleMobileMenu}
                          >
                            Stock Exchange Intimations
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/dividend-iepf"
                            onClick={handleMobileMenu}
                          >
                            Dividend / IEPF
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/announcements"
                            onClick={handleMobileMenu}
                          >
                            Announcements
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/investor-presentation"
                            onClick={handleMobileMenu}
                          >
                            Investor Presentation
                          </Link>
                        </li>

                        <li>
                          <Link href="/information" onClick={handleMobileMenu}>
                            Information
                          </Link>
                        </li>
                      </ul>

                      <div
                        className={
                          isActive.subMenuKey == 15
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(7, 15)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(7)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="/careers" onClick={handleMobileMenu}>
                    Careers
                  </Link>
                </li>

                <li
                  className={
                    isActive.key == 8 ? "dropdown current" : "dropdown"
                  } 
                >
                  <Link href="/community-development" onClick={handleMobileMenu}>CSR</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 8 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        href="/community-development"
                        onClick={handleMobileMenu}
                      >
                        Community Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sustained-commitment"
                        onClick={handleMobileMenu}
                      >
                        sustained Commitment
                      </Link>
                    </li>
                    <li>
                      <Link href="/green-initiative" onClick={handleMobileMenu}>
                        Green Initiative
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/higher-studies-and-career-placement"
                        onClick={handleMobileMenu}
                      >
                        Higher Studies And Career Placement
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(8)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Shrivari Srimat, 1045, Avinashi Road, Coimbatore</li>
              <li>
                <Link href="tel:+91-422-2207777">+91-422-2207777</Link>
              </li>
              {/* <li>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </li> */}
            </ul>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
