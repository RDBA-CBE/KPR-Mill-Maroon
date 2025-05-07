import Models from "@/src/imports/models.import";
import { capitalizeFLetter, image, slug } from "@/utils/function.utils";
import { useSetState } from "@/utils/states.utils";
import Link from "next/link";
import React, { useEffect } from "react";

const InvestorsSideMenu = ({ isActive }) => {

   const [state, setState] = useSetState({
      loading: false,
      data: [],
    });
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        setState({ loading: true });
        const res = await Models.auth.sub_menu(2);
        console.log("✌️res --->", res);
        const data = res?.results || [];
  
        const updateData = data.map((item) => ({
          name: capitalizeFLetter(item?.name),
          slug: slug(item?.slug),
          img: image(item?.slug),
        }));
        setState({ data: updateData, loading: false });
      } catch (error) {
        setState({ loading: false });
        console.log("✌️error --->", error);
      }
    };

   

  return (
    <div className="visa-sidebar default-sidebar">
      <div className="sidebar-widget category-widget">
        <ul className="category-list clearfix">
          <li>
            <Link
              href="/regulation-46-of-the-lodr"
              className={` ${
                isActive === "regulation-46-of-the-lodr" ? "current" : ""
              }`}
            >
              Disclosures under Regulation 46 of the LODR
            </Link>
          </li>
          <li>
          <Link href="/assets/downloads/Company_profile.pdf" target="_blank">
           Company Profile
          </Link>
        </li>
          {/* <li>              
          <Link href="/regulation-62-of-the-lodr">
            Disclosures under Regulation 62 of the LODR
          </Link>
        </li> */}
          <li>
            <Link
              href="/investors-contact"
              className={` ${
                isActive === "inverstors-contact" ? "current" : ""
              }`}
            >
            Investors Contact
            </Link>
          </li>
          <li>
            <Link
              href="/media-download"
              className={`${isActive === "media-download" ? "current" : ""}`}
            >
              Media / Download
            </Link>
          </li>
          <li>
            <Link
              href="/financial-result"
              className={`${isActive === "financial-results" ? "current" : ""}`}
            >
              Financial Results
            </Link>
            {(isActive == "financial-results" ||
              isActive == "financial-result-audited-unaudited" ||
              isActive == "financials-subsidiary-cos" ||
              isActive == "indepented-directors" ||
              isActive == "financial-result-of-voting-result-of-agm" ||
              isActive == "company-information" ||
              isActive == "con-col-invitation-and-transcript" || isActive == "uploads" || isActive == "kpr-profile-downloads") && (
              <ul className="category-list clearfix">
                <li>
                  <Link
                    href="/financial-result"
                    className={`${
                      isActive === "financial-results" ? "current" : ""
                    }`}
                  >
                    Annual Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financial-result-audited-unaudited"
                    className={`${
                      isActive == "financial-result-audited-unaudited"
                        ? "current"
                        : ""
                    }`}
                  >
                    Audited / Unaudited Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financial-result-subsidiary-cos"
                    className={`${
                      isActive == "financials-subsidiary-cos" ? "current" : ""
                    }`}
                  >
                    Financials – Subsidiary Cos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uploads"
                    className={`${
                      isActive == "uploads" ? "current" : ""
                    }`}
                  >
                    Uploads
                  </Link>
                </li>

                <li>
                  <Link
                    href="/kpr-profile-downloads"
                    className={`${
                      isActive == "uploads" ? "current" : ""
                    }`}
                  >
                     Kpr Profile Downloads
                  </Link>
                </li>
               
                <li>
                  <Link
                    href="/financial-result-of-indepentet-directors"
                    className={`${
                      isActive == "indepented-directors" ? "current" : ""
                    }`}
                  >
                    Appointment of Independent Directors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financial-result-of-voting-result-of-agm"
                    className={`${
                      isActive == "financial-result-of-voting-result-of-agm"
                        ? "current"
                        : ""
                    }`}
                  >
                    Voting Results of AGM and Postal Ballot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financial-result-of-company-information"
                    className={`${
                      isActive == "company-information" ? "current" : ""
                    }`}
                  >
                    Company Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financial-result-con-col-invitation-and-transcript"
                    className={`${
                      isActive == "con-col-invitation-and-transcript"
                        ? "current"
                        : ""
                    }`}
                  >
                    Con-call Invitations and Transcript
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/share-holding-pattern"
              className={isActive == "share-holding-pattern" ? "current" : ""}
            >
              Share Holding Pattern
            </Link>
          </li>
          <li>
            <Link
              href="/corporate-governance"
              className={isActive == "corporate-governance" ? "current" : ""}
            >
              Corporate Governance
            </Link>
          </li>
          <li>
            <Link
              href="/code-of-conduct"
              className={isActive == "code-of-conduct" ? "current" : ""}
            >
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link
              href="/policy-info"
              className={isActive == "policy-info" ? "current" : ""}
            >
              Policy Info
            </Link>

            {(isActive == "policy-info" ||
              isActive == "policy" ||
              isActive == "investor-services" ||
              isActive == "stock-exchange-intimation" ||
              isActive == "dividend-iepf" ||
              isActive == "announcements" ||
              isActive == "investor-presentation" ||
              isActive == "information") && (
              <ul className="category-list clearfix">
                <li>
                  <Link
                    href="/policy"
                    className={isActive == "policy" ? "current" : ""}
                  >
                    Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investor-services"
                    className={isActive == "investor-services" ? "current" : ""}
                  >
                    Investor Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stock-exchange-intimation"
                    className={
                      isActive == "stock-exchange-intimation" ? "current" : ""
                    }
                  >
                    Stock Exchange Intimations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dividend-iepf"
                    className={isActive == "dividend-iepf" ? "current" : ""}
                  >
                    Dividend / IEPF
                  </Link>
                </li>

                <li>
                  <Link
                    href="/announcements"
                    className={isActive == "announcements" ? "current" : ""}
                  >
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investor-presentation"
                    className={
                      isActive == "investor-presentation" ? "current" : ""
                    }
                  >
                    Investor Presentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/information"
                    className={isActive == "information" ? "current" : ""}
                  >
                    Information
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
             target="_blank" href="https://www.nseindia.com/get-quotes/equity?symbol=KPRMILL"
            >
            Share Online (NSE)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InvestorsSideMenu;
