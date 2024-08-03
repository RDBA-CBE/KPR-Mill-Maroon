"use client";
import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Maven_Proior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        {/* <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">Home Page 04</Link></li>
                        <li><Link href="/onepage">OnePage Home</Link></li>
                       
                    </ul>
                </li> */}
        <li className="dropdown">
          <Link href="/about-us">About us</Link>
          <ul>
              {/* <li className="dropdown">
                <Link href="/">Team</Link>
                <ul>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/team-details">Team Details</Link>
                  </li>
                </ul>
              </li> */}
            <li>
              <Link href="/about-us">About The Company</Link>
            </li>
            <li>
              <Link href="/vision-mission">Vision & Mission</Link>
            </li>
            <li>
              <Link href="/evolution">Evolution</Link>
            </li>
            <li>
              <Link href="/the-board">The Board</Link>
            </li>
            <li>
              <Link href="/production-facilities">Production Facilities</Link>
            </li>
            <li>
              <Link href="/awards">Awards</Link>
            </li>
            <li>
              <Link href="/certifications">Certifications</Link>
            </li>
            <li>
              <Link href="/quality">Quality</Link>
            </li>
            {/* <li>
              <Link href="/error">404</Link>
            </li> */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/products">Products</Link>
          <ul>
            <li>
              <Link href="/yarn">Yarn</Link>
            </li>
            <li>
              <Link href="/fabric">Fabric</Link>
            </li>
            <li>
              <Link href="/garment">Garments</Link>
            </li>
            <li>
              <Link href="/sugar">Sugar</Link>
            </li>
            {/* <li>
              <Link href="/coaching">Coaching Overview</Link>
            </li>
            <li>
              <Link href="/coaching-details">IELTS Coaching </Link>
            </li>
            <li>
              <Link href="/coaching-details-2">PTE Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-3">OET Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-4">GRE Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-5">GMAT Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-6">SAT Coaching</Link>
            </li> */}
          </ul>
        </li>

        <li>
          <Link href="/our-brand">Our Brand</Link>
        </li>
       
        {/* Projects */}

        <li className="dropdown">
          <Link href="/regulation-46-of-the-lodr">Investors</Link>
          <ul>
            <li>
              <Link href="/regulation-46-of-the-lodr">
                Regulation 46 of the LODR
              </Link>
            </li>
            <li>
              <Link href="/regulation-62-of-the-lodr">
                Regulation 62 of the LODR
              </Link>
            </li>
            <li>
              <Link href="/investors-contact">Investors Contact</Link>
            </li>
            <li>
              <Link href="/media-download">Media / Download</Link>
            </li>
            <li className="dropdown">
              <Link href="/financial-result">Financial Results</Link>

              <ul>
                <li>
                  <Link href="/financial-result">Annual Reports</Link>
                </li>
                <li>
                  <Link href="/financial-result-audited-unaudited">
                  Audited / Unaudited Results
                  </Link>
                </li>
                <li>
                  <Link href="/financial-result-subsidiary-cos">
                  Financials – Subsidiary Cos
                  </Link>
                </li>
                <li>
                  <Link href="/financial-result-of-indepentet-directors">
                  Appointment of Independent Directors
                  </Link>
                </li>
                <li>
                  <Link href="/financial-result-of-voting-result-of-agm">
                  Voting Results of AGM and Postal Ballot
                  </Link>
                </li>
                <li>
                  <Link href="/financial-result-of-company-information">
                  Company Information
                  </Link>
                </li>
                <li>
                  <Link href="/financial-result-con-col-invitation-and-transcript">
                  Con-call Invitations and Transcript
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/share-holding-pattern">Share Holding Pattern</Link>
            </li>
            <li>
              <Link href="/corporate-governance">Corporate Governance </Link>
            </li>
            <li>
              <Link href="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li className="dropdown">
              <Link href="/policy-info">Policy Info</Link>

              <ul>
                <li>
                  <Link href="/policy">Policy</Link>
                </li>
                <li>
                  <Link href="/investor-services">Investor Services</Link>
                </li>
                <li>
                  <Link href="/stock-exchange-intimation">Stock Exchange Intimations</Link>
                </li>
                <li>
                  <Link href="/dividend-iepf">Dividend / IEPF</Link>
                </li>
                <li>
                  <Link href="/announcements">Announcements</Link>
                </li>
                <li>
                  <Link href="/investor-presentation">Investor Presentation</Link>
                </li>
                <li>
                  <Link href="/information">Information</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/infrastructure">Infrastructure</Link>
          <ul>
            <li>
              <Link href="/infrastructure">Overview</Link>
            </li>
            <li>
              <Link href="/spinning">Spinning</Link>
            </li>
            <li>
              <Link href="/knitting">Knitting</Link>
            </li>
            <li>
              <Link href="/processing">Processing</Link>
            </li>
            <li>
              <Link href="/printing-and-embroidery">Printing & Embroidery</Link>
            </li>
            <li>
              <Link href="/garmenting">Garmenting</Link>
            </li>
            <li>
              <Link href="/windmill">Wind Mill</Link>
            </li>
            <li>
              <Link href="/sugarmill">Sugar Mill</Link>
            </li>
            {/* <li>
              <Link href="/visa-details">Business Visa</Link>
            </li>
            <li>
              <Link href="/visa-details-2">Working Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-3">Residence Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-4">Student Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-5">Spouse/Family Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-6">Tourist Visas</Link>
            </li> */}
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/community-development">CSR</Link>
          <ul>
            <li>
              <Link href="/community-development">Community Development</Link>
            </li>
            <li>
              <Link href="/sustained-commitment">sustained Commitment</Link>
            </li>
            <li>
              <Link href="/green-initiative">Green Initiative</Link>
            </li>
            <li>
              <Link href="/higher-studies-and-career-placement">
                Higher Studies And Career Placement
              </Link>
            </li>
          </ul>
        </li>

        {/* Blog */}
        <li >
          <Link href="/careers">Careers</Link>
          {/* <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul> */}
        </li>

       
        {/* Contact */}
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
