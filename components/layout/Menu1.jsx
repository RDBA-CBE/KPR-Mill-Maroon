"use client";
import Models from "@/src/imports/models.import";
import { useSetState } from "@/utils/states.utils";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
// import { useRouter } from "next/router"

export default function Menu1() {
  // const router = useRouter()

  const [state, setState] = useSetState({
    sidebar: [],
    loading: false,
    pages:[]
  });

 useEffect(()=>{
    slugData()
 },[])

  const getSubMenu = async (id) => {
    try {
      setState({ loading: true });
      const res = await Models.auth.sub_menu(id);
console.log('✌️res --->', res);
      setState({ sidebar: res?.results, loading: false });
    } catch (error) {
      setState({ loading: false });

      console.log("✌️error --->", error);
    }
  };

  const navigation = (slug) => {
    console.log("✌️slug --->", slug);
    let path = "#";
    if (slug == "annual-reports") {
      path = "/financial-result";
    } else if (slug == "audited-unaudited-results") {
      path = "/financial-result-audited-unaudited";
    } else if (slug == "financials-subsidiary-cos") {
      path = "/financial-result-subsidiary-cos";
    } else if (slug == "uploads") {
      path = "/uploads";
    } else if (slug == "kpr-profile-downloads") {
      path = "/kpr-profile-downloads";
    } else if (slug == "appointment-independent-directors") {
      path = "/financial-result-of-indepentet-directors";
    } else if (slug == "voting-results-agm-postal-ballot") {
      path = "/financial-result-of-voting-result-of-agm";
    } else if (slug == "company-information") {
      path = "/financial-result-of-company-information";
    } else if (slug == "con-call-invitations-transcript") {
      path = "/financial-result-con-col-invitation-and-transcript";
    } else {
      path = "#";
    }
    return path;
  };





    const slugData = async () => {
        try {
            console.log("hello");
          const res = await axios.get(
            "https://file.kprmilllimited.com/kprdev/wp-json/wp/v2/pages");
      console.log("hello");
      console.log("res",res);
      

      setState({pages:res.data});
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };



console.log("pages", state?.pages);


  return (
    <>
  
      <ul className="navigation clearfix">
        
        <li className="dropdown">
          <Link href="/about-us">About us</Link>
          <ul>
           
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
            <li>
              <Link href="/ethanol-power">Ethanol & Power</Link>
            </li>
           
          </ul>
        </li>

        <li>
          <Link href="/our-brand">Our Brand</Link>
        </li>

        {/* Projects */}

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
              <Link href="/windmill">Wind Mill & Solar</Link>
            </li>
            <li>
              <Link href="/sugarmill">Sugar Mill</Link>
            </li>
           
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

        <li className="dropdown">
          <Link href="/regulation-46-of-the-lodr">Investors</Link>
          <ul>
            <li>
              <Link href="/regulation-46-of-the-lodr">
                Regulation 46 of the LODR
              </Link>
            </li>
            <li>
              <Link
                href="/assets/downloads/Company_profile.pdf"
                target="_blank"
              >
                Company Profile
              </Link>
            </li>
           
            <li>
              <Link href="/investors-contact">Investors Contact</Link>
            </li>
            <li>
              <Link href="/media-download">Media / Download</Link>
            </li>
            <li className="dropdown" onMouseEnter={() => getSubMenu(1)}>
              <Link href="/financial-result">Financial Results</Link>

              <ul>
                {state.loading && <li>Loading...</li>}
                {!state.loading && state.sidebar.length > 0
                  ? state.sidebar?.map((item, idx) => (
                      <li key={idx}>
                        <Link href={navigation(item?.slug)}>{item.name}</Link>
                      </li>
                    ))
                  : null}
                
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
            <li className="dropdown" onMouseEnter={() => getSubMenu(2)}>
              <Link href="/policy-info">Policy Info</Link>

              <ul>
                {state.loading && <li>Loading...</li>}
                {!state.loading && state.sidebar.length > 0
                  ? state.sidebar?.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.slug}>{item.name}</Link>
                      </li>
                    ))
                  : null}
               
              </ul>
            </li>
            <li>
              <Link
                href="https://www.nseindia.com/get-quotes/equity?symbol=KPRMILL"
                target="_blank"
              >
                Share Online (NSE)
              </Link>
            </li>
          </ul>
        </li>

        {/* Blog */}
        <li>
          <Link href="/careers">Careers</Link>
          
        </li>

        {/* Contact */}
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
