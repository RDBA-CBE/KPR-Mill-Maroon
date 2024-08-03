"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useState } from "react";
import { Inverstors1_Data, Inverstors2_Data } from "@/utils/constant.utils";
export default function Regulation62() {

  const backgroundImages = "/assets/images/kprmill-images/Investors/Code-of-Conduct/banner.jpg";
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Code of Conduct" imageUrl={backgroundImages}>
        {/* visa details section */}
        <section className="visa-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="visa-sidebar default-sidebar">
                  <div className="sidebar-widget category-widget">
                    <ul className="category-list clearfix">
                      <li>
                        <Link href="/regulation-46-of-the-lodr">
                          Disclosures under Regulation 46 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/regulation-62-of-the-lodr">
                          Disclosures under Regulation 62 of the LODR
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors-contact">
                          Inverstors Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/media-download">Media / Download</Link>
                      </li>
                      <li>
                        <Link href="/financial-result">Financial Results</Link>
                      </li>
                      <li>
                        <Link href="/share-holding-pattern">
                          Share Holding Pattern
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate-governance">
                          Corporate Governance{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/code-of-conduct" className="current">Code of Conduct</Link>
                      </li>
                      <li>
                        <Link href="/policy-info">Policy Info</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="sidebar-widget travel-widget">
                    <div className="widget-content p_relative">
                      <figure className="image-box">
                        <img src="assets/images/resource/travel-1.jpg" alt="" />
                      </figure>
                      <div className="content-box">
                        <h3>Travel Pass</h3>
                        <ul className="list-item clearfix">
                          <li>Application Form</li>
                          <li>Checklist</li>
                          <li>Guidelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget download-widget">
                    <div className="widget-content">
                      <div className="icon-shape">
                        <img src="assets/images/icons/icon-15.png" alt="" />
                      </div>
                      <h3>
                        Annual Report / <br />
                        Online Appointment
                      </h3>
                      <ul className="download-list clearfix">
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="visa-details">
                            <i className="icon-50"></i>
                            <p>Application Form</p>
                            <span>450kb</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="visa-details-content">
                  <div className="content-one ">
                    <div className="text mb_45">
                      <h3>
                        Code of Conduct and Ethics for Directors and Senior
                        Management
                      </h3>
                      <h5 className="mb_10">
                        1. INTRODUCTION AND APPLICABILITY
                      </h5>
                      <ul className="code-list-style clearfix">
                        <li>
                          This Code shall be applicable to each Director and
                          member of the Senior Management of K.P.R. Mill
                          Limited.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h5 className="mb_10">2. DEFINITIONS</h5>

                      <ul className="code-list-style clearfix">
                        <li>
                          “Board” means the Board of Directors of the Company.
                        </li>
                        <li>
                          “Company” means K.P.R. Mill Limited, a public limited
                          company incorporated under the laws of India and whose
                          registered office is at No. 9, Gokul Buildings, 1st
                          Floor, A.K.S. Nagar, Thadagam Road, Coimbatore 641
                          001, Tamil Nadu, India.
                        </li>
                        <li>
                          “Code” means this code of conduct and ethics
                          applicable to each Director and Senior Management, as
                          amended from time to time.
                        </li>
                        <li>
                          “Director” means each member of the Board of Directors
                          of the Company, as may be appointed from time to time.
                        </li>
                        <li>
                          “Senior Management” mean employees of the Company,
                          other than Directors, that are members of its core
                          management team and includes all executive committee
                          members of the Company, functional heads of the
                          Company and such other employees of the Company as may
                          be designated as members of the Senior Management for
                          the purpose of this Code by the Chairman or Managing
                          Director of the Company from time to time.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h5 className="mb_10">3. TERM</h5>
                      <ul className="code-list-style clearfix">
                        <li>The Code shall have immediate effect.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h5 className="mb_10">4. OBJECTIVE</h5>

                      <ul className="code-list-style clearfix">
                        <li>
                          To set standards of ethical conduct and ensure these
                          standards are upheld in day-today activities.
                        </li>
                        <li>
                          To set standards of corporate governance by complying
                          with all applicable laws, rules and regulations and
                          all applicable policies and procedures adopted by the
                          Company and to fulfill the responsibilities to
                          stakeholders.
                        </li>
                        <li>
                          To set and implement high standards of transparency,
                          integrity, accountability and corporate social
                          responsibility in all dealings.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text mb_45">
                      <h5 className="mb_10">5. THE CODE</h5>
                      <p className="mb_10">
                        Each Director and each member of Senior Management will
                        always act in the best interests of the Company and in
                        accordance with the authority conferred on him or her
                        and shall, without prejudice to the foregoing, always
                        act in accordance with this Code.
                      </p>
                      <p className="mb_10">
                        The Code seeks to set standards for, and regulate, the
                        subjects described below.
                      </p>
                      <ul className="code-list-style clearfix mb_10">
                        <li>Prudent Conduct and Behaviour</li>
                        <li>Transparency, Honesty and Integrity</li>
                        <li>Fair Dealing</li>
                        <li>Team Work and Spirit</li>
                        <li>Conflict of Interest</li>
                        <li>Compliance with Laws and Regulations</li>
                        <li>Financial Record keeping and Reporting</li>
                        <li>Other Directorships</li>
                        <li>Confidentiality</li>
                        <li>Insider Trading</li>
                        <li>Gifts and Donations</li>
                        <li>Protection of Company’s Assets.</li>
                        <li>Amendment</li>
                        <li>Periodical Review and Compliance with the Code.</li>
                      </ul>
                      <p className="mb_10">
                        The Company is committed to conducting its business
                        prudently and in accordance with all applicable laws,
                        rules and regulations and with the highest standards of
                        corporate governance and business ethics both in letter
                        and spirit. The Company is committed to being a good
                        corporate citizen.
                      </p>
                      <p className="mb_10">
                        To uphold the reputation and values of the Company, the
                        Directors and members of Senior Management must always
                        abide by the policies and procedures that govern the
                        conduct of the Company’s business. Each Director and
                        each member of Senior Management will always act to
                        uphold the Code. The Chief Financial Officer and the
                        Company Secretary of the Company will act as
                        facilitators and will be available to the Directors and
                        members of Senior Management to answer questions and to
                        help them comply with the Code.
                      </p>

                      <p className="mb_10">
                        Each Director and member of Senior Management will
                        always act with the utmost care, skill and diligence and
                        in accordance with the highest standards of personal and
                        professional integrity, honesty and ethical conduct,
                        while working on the Company’s premises, at Company
                        sponsored business and social events, or at any other
                        place where the Directors and Senior Management
                        represent the Company. They shall at all times exercise
                        their powers for the purposes they were conferred and
                        for the benefit and prosperity of the Company and
                        discharge their fiduciary duties in a fair and impartial
                        manner.
                      </p>

                      <p className="mb_10">
                        In carrying out their duties and responsibilities, each
                        Director and member of Senior Management shall endeavor
                        to deal fairly and honestly with shareholders,
                        creditors, lenders, customers, suppliers, employees and
                        competitors. The Directors and Senior Management shall
                        make their best efforts to contribute to an environment
                        that encourages teamwork, builds confidence and empowers
                        people through personal and professional growth. They
                        shall attempt to build teams that grow together,
                        complement each other and share their knowledge and
                        skills with each other.
                      </p>

                      <p className="mb_10">
                        The Directors and Senior Management of the Company must
                        avoid situations involving actual or potential conflicts
                        of interest. They shall not engage in any business,
                        relationship or activity, which may lead to a conflict
                        of interest with the Company or affect their ability to
                        perform their duties and responsibilities objectively
                        and effectively.
                      </p>
                      <p className="mb_10" style={{ fontWeight: "bold" }}>
                        A conflict of interest may arise where, directly or
                        indirectly, and without limitation:
                      </p>
                      <ul className="code-list-style clearfix mb_10">
                        <li>
                          an independent judgment of the Company’s interest
                          cannot be exercised;
                        </li>
                        <li>
                          an employee accepts any personal benefits or gifts or
                          entertainment beyond what is considered to be
                          customary in the industry in which the Company
                          operates either by himself or herself or through his
                          family as a result of his position in the Company from
                          any person or company with which the Company has
                          business dealings;
                        </li>
                        <li>
                          an employee engages in any business activity that
                          detracts from such employee’s ability to devote
                          appropriate time and attention to his or her
                          responsibilities to the Company;
                        </li>
                        <li>
                          an employee has a significant interest in any
                          supplier, customer or competitor of the Company;
                        </li>
                        <li>
                          an employee of the Company is also an employee of any
                          supplier, customer, business associate or competitor
                          of the Company;
                        </li>
                        <li>
                          an employee is directly or indirectly concerned or
                          interested in a contract or arrangement or proposed
                          contract or arrangement entered into or to be entered
                          into by or on behalf of the Company.
                        </li>
                      </ul>
                      <p className="mb_10">
                        Prior written approval from the Board (with the relevant
                        Director being disqualified from voting and excluded
                        from the quorum) is required if any of the above arises
                        or is anticipated to arise.
                      </p>
                      <p className="mb_10">
                        In carrying out their duties and responsibilities, the
                        Directors and Senior Management shall comply with all
                        applicable laws, rules and regulations.
                      </p>
                      <p className="mb_10">
                        If any Director or member of Senior Management knows of,
                        or suspects, a violation of any applicable laws, rules
                        or regulations or this Code, he or she must immediately
                        report such violation to the Board or any designated
                        person thereof. Such person should as far as possible
                        provide the details of suspected violations with all
                        known particulars relating to the issue. The Company
                        recognizes that resolving such problems or concerns will
                        advance the overall interests of the Company and will
                        help to safeguard the Company’s assets, financial
                        integrity and reputation.
                      </p>
                      <p className="mb_10">
                        The Directors and Senior Management shall take all
                        necessary steps to ensure that no reprisal, threat,
                        retribution or retaliation is made, or carried out,
                        against any person who has in good faith reported a
                        violation or a suspected violation of law or against any
                        person who is assisting in any investigation or process
                        in relation to such a violation.
                      </p>
                      <p className="mb_10">
                        The Company will take appropriate action against any
                        Director and members of Senior Management whose actions
                        are found to violate the Code or any other policy of the
                        Company, after giving him or her a reasonable
                        opportunity of being heard. Where laws, rules or
                        regulations have been violated, the Company will
                        cooperate fully with the appropriate authorities and
                        regulators. Strict compliance with accounting principles
                        is critical to ensure that all financial transactions
                        are properly identified, analysed and recorded. The
                        Directors and Senior Management shall make reasonable
                        efforts to ensure that all business records and reports
                        are accurate, complete and reliable.
                      </p>
                      <p className="mb_10">
                        No Director or member of Senior Management should serve
                        on the board of directors of, or become a member of the
                        senior management of, or have a significant influence
                        over the management or policies of, a competitor of the
                        Company.
                      </p>
                      <p className="mb_10">
                        The Directors and Senior Management shall maintain the
                        confidentiality of information entrusted to them,
                        including that of any customer, supplier or business
                        associates of the Company to which the Company has a
                        duty to maintain confidentiality, except when disclosure
                        is authorised. The use of confidential information for
                        his or her own advantage or profit is also prohibited.
                        These obligations apply not only during the course of
                        their employment with the Company but also for a period
                        of one year following the termination of their
                        employment with the Company.
                      </p>
                      <p className="mb_10">
                        The Directors and Senior Management shall comply with
                        the provisions of the “Code of Internal Procedures and
                        Conduct for Prevention of Insider Trading” as per
                        Schedule B of regulation 9(1) of SEBI (Prohibition of
                        Insider Trading) Regulations, 2015 as amended from time
                        to time.
                      </p>
                      <p className="mb_10" style={{ fontWeight: "bold" }}>
                        The Directors and Senior Management shall not:
                      </p>
                      <ul className="code-list-style clearfix mb_10">
                        <li>
                          exploit directly or indirectly for their own personal
                          gain, opportunities that are discovered through the
                          use of the Company’s property (including intellectual
                          property), information or position, without the
                          specific prior written approval of the Board;
                        </li>
                        <li>
                          divert directly or indirectly to his or her own
                          advantage any business opportunity that the Company is
                          pursuing or an opportunity that the Company may be
                          pursing in the near future, without the specific prior
                          written approval of the Board;
                        </li>
                        <li>
                          {" "}
                          compete directly or indirectly with any business of
                          the Company or with any business that the Company is
                          considering, without the specific prior written
                          approval of the Board. The Directors and Senior
                          Management shall not receive or offer, directly or
                          indirectly, any payments, gifts, donations,
                          hospitality and comparable benefits which are intended
                          or perceived to be intended to influence any business
                          favors, without the specific prior written approval of
                          the Board. The Directors and Senior Management shall
                          endeavor to protect the Company’s assets at all times
                          and shall use them for legitimate business purposes
                          only. They shall not use the Company’s assets or
                          manpower or company related information for illegal or
                          unethical purposes or for their personal use unless
                          approved by the Board in writing. Care should be taken
                          to ensure that assets are not misappropriated, loaned
                          to others, or sold or donated without appropriate
                          authorization.
                        </li>
                      </ul>

                      <p className="mb_10">
                        This Code may be amended, modified or varied by the
                        Board as they deem necessary in the interests of the
                        Company and subject to the provisions of applicable
                        laws, regulations or guidelines.
                      </p>

                      <p className="mb_10">
                        The Directors and Senior Management shall in the last
                        month of every financial year or whenever this Code is
                        revised, acknowledge the understanding of the Code and
                        execute an undertaking to continue complying with it.
                        New Directors or members of Senior Management shall
                        execute such an undertaking at the time of their
                        induction.
                      </p>
                    </div>
                  </div>

                  <div className="content-one ">
                    <div className="text">
                      <h5 className="mb_10">
                        6. DUTIES OF INDEPENDENT DIRECTORS:
                      </h5>
                      <p className="mb_10">
                        Pursuant to the Regulation 17 (5)(b) of the Securities
                        and Exchange Board of India (Listing Obligations and
                        Disclosure Requirements) Regulations, 2015, the Duties
                        of Independent Directors as laid down in the Companies
                        Act, 2013 are furnished here below.
                      </p>
                      <p className="mb_10" style={{ fontWeight: "bold" }}>
                        The independent directors shall—
                      </p>
                      <ul className="code-list-style clearfix mb_15">
                        <li>
                          undertake appropriate induction and regularly update
                          and refresh their skills, knowledge and familiarity
                          with the company;
                        </li>
                        <li>
                          seek appropriate clarification or amplification of
                          information and, where necessary, take and follow
                          appropriate professional advice and opinion of outside
                          experts at the expense of the company;
                        </li>
                        <li>
                          strive to attend all meetings of the Board of
                          Directors and of the Board committees of which he is a
                          member;
                        </li>
                        <li>
                          participate constructively and actively in the
                          committees of the Board in which they are chairpersons
                          or members;
                        </li>
                        <li>
                          strive to attend the general meetings of the company;
                        </li>
                        <li>
                          where they have concerns about the running of the
                          company or a proposed action, ensure that these are
                          addressed by the Board and, to the extent that they
                          are not resolved, insist that their concerns are
                          recorded in the minutes of the Board meeting;
                        </li>
                        <li>
                          keep themselves well informed about the company and
                          the external environment in which it operates;
                        </li>
                        <li>
                          not to unfairly obstruct the functioning of an
                          otherwise proper Board or committee of the Board;
                        </li>
                        <li>
                          pay sufficient attention and ensure that adequate
                          deliberations are held before approving related party
                          transactions and assure themselves that the same are
                          in the interest of the company;
                        </li>
                        <li>
                          ascertain and ensure that the company has an adequate
                          and functional vigil mechanism and to ensure that the
                          interests of a person who uses such mechanism are not
                          prejudicially affected on account of such use;
                        </li>
                        <li>
                          report concerns about unethical behaviour, actual or
                          suspected fraud or violation of the company’s code of
                          conduct or ethics policy;
                        </li>
                        <li>
                          acting within his authority, assist in protecting the
                          legitimate interests of the company, shareholders and
                          its employees;
                        </li>
                        <li>
                          not disclose confidential information, including
                          commercial secrets, technologies, advertising and
                          sales promotion plans, unpublished price sensitive
                          information, unless such disclosure is expressly
                          approved by the Board or required by law.
                        </li>
                      </ul>

                      <h5 className="mb_10">SCHEDULE B</h5>
                      <p className="mb_5">
                        [See sub-regulation (1) of regulation 9]
                      </p>
                      <p className="mb_10" style={{ fontWeight: "bold" }}>
                        Minimum Standards for Code of Conduct for Listed
                        Companies to Regulate, Monitor and Report Trading by
                        Designated Persons
                      </p>
                      <ul className="code-list-style clearfix mb_10">
                        <li>
                          The compliance officer shall report to the board of
                          directors and in particular, shall provide reports to
                          the Chairman of the Audit Committee, if any, or to the
                          Chairman of the board of directors at such frequency
                          as may be stipulated by the board of directors, but
                          not less than once in a year.
                        </li>
                        <li>
                          All information shall be handled within the
                          organisation on a need-to-know basis and no
                          unpublished price sensitive information shall be
                          communicated to any person except in furtherance of
                          legitimate purposes, performance of duties or
                          discharge of legal obligations. The code of conduct
                          shall contain norms for appropriate Chinese Walls
                          procedures, and processes for permitting any
                          designated person to “cross the wall”.
                        </li>

                        <li>
                          Designated Persons and immediate relatives of
                          designated persons in the organisation shall be
                          governed by an internal code of conduct governing
                          dealing in securities.
                        </li>

                        <li>
                          <span>
                            (i) Designated persons may execute trades subject to
                            compliance with these regulations. Towards this end,
                            a notional trading window shall be used as an
                            instrument of monitoring trading by the designated
                            persons. The trading window shall be closed when the
                            compliance officer determines that a designated
                            person or class of designated persons can reasonably
                            be expected to have possession of unpublished price
                            sensitive information. Such closure shall be imposed
                            in relation to such securities to which such
                            unpublished price sensitive information relates.
                            Designated persons and their immediate relatives
                            shall not trade in securities when the trading
                            window is closed.
                          </span>
                          <br />
                          <span>
                            (ii). Trading restriction period shall be made
                            applicable from the end of every quarter till 48
                            hours after the declaration of financial results.
                            The gap between clearance of accounts by audit
                            committee and board meeting should be as narrow as
                            possible and preferably on the same day to avoid
                            leakage of material information.
                          </span>
                          <br />
                          <span>
                            (iii). The trading window restrictions mentioned in
                            sub-clause (1) shall not apply in respect of –
                          </span>
                          <br />
                          <span>
                            transactions specified in clauses (i) to (iv) and
                            (vi) of the proviso to sub-regulation (1) of
                            regulation 4 and in respect of a pledge of shares
                            for a bonafide purpose such as raising of funds,
                            subject to pre-clearance by the compliance officer
                            and compliance with the respective regulations made
                            by the Board;
                          </span>
                          <br />
                          <span>
                            transactions which are undertaken in accordance with
                            respective regulations made by the Board such as
                            acquisition by conversion of warrants or debentures,
                            subscribing to rights issue, further public issue,
                            preferential allotment or tendering of shares in a
                            buy-back offer, open offer, delisting offer or
                            transactions which are undertaken through such other
                            mechanism as may be specified by the Board from time
                            to time.
                          </span>
                        </li>
                        <li>
                          The timing for re-opening of the trading window shall
                          be determined by the compliance officer taking into
                          account various factors including the unpublished
                          price sensitive information in question becoming
                          generally available and being capable of assimilation
                          by the market, which in any event shall not be earlier
                          than forty-eight hours after the information becomes
                          generally available.
                        </li>
                        <li>
                          When the trading window is open, trading by designated
                          persons shall be subject to pre-clearance by the
                          compliance officer, if the value of the proposed
                          trades is above such thresholds as the board of
                          directors may stipulate.
                        </li>
                        <li>
                          Prior to approving any trades, the compliance officer
                          shall be entitled to seek declarations to the effect
                          that the applicant for pre-clearance is not in
                          possession of any unpublished price sensitive
                          information. He shall also have regard to whether any
                          such declaration is reasonably capable of being
                          rendered inaccurate.
                        </li>
                        <li>
                          The code of conduct shall specify any reasonable
                          timeframe, which in any event shall not be more than
                          seven trading days, within which trades that have been
                          pre-cleared have to be executed by the designated
                          person, failing which fresh pre-clearance would be
                          needed for the trades to be executed.
                        </li>
                        <li>
                          The code of conduct shall specify the period, which in
                          any event shall not be less than six months, within
                          which a designated person who is permitted to trade
                          shall not execute a contra trade. The compliance
                          officer may be empowered to grant relaxation from
                          strict application of such restriction for reasons to
                          be recorded in writing provided that such relaxation
                          does not violate these regulations. Should a contra
                          trade be executed, inadvertently or otherwise, in
                          violation of such a restriction, the profits from such
                          trade shall be liable to be disgorged for remittance
                          to the Board for credit to the Investor Protection and
                          Education Fund administered by the Board under the
                          Act.
                          <br />
                          <span>
                            Provided that this shall not be applicable for
                            trades pursuant to exercise of stock options.
                            Provided that this shall not be applicable for
                            trades pursuant to exercise of stock options.
                          </span>
                        </li>
                        <li>
                          The code of conduct shall stipulate such formats as
                          the board of directors deems necessary for making
                          applications for pre-clearance, reporting of trades
                          executed, reporting of decisions not to trade after
                          securing pre-clearance and for reporting level of
                          holdings in securities at such intervals as may be
                          determined as being necessary to monitor compliance
                          with these regulations.
                        </li>
                        <li>
                          Without prejudice to the power of the Board under the
                          Act, the code of conduct shall stipulate the sanctions
                          and disciplinary actions, including wage freeze,
                          suspension, recovery, etc., that may be imposed, by
                          the listed company required to formulate a code of
                          conduct under sub-regulation (1) of regulation 9, for
                          the contravention of the code of conduct. Any amount
                          collected under this clause shall be remitted to the
                          Board for credit to the Investor Protection and
                          Education Fund administered by the Board under the
                          Act.
                        </li>
                        <li>
                          The code of conduct shall specify that in case it is
                          observed by the listed company required to formulate a
                          code of conduct under sub-regulation (1) of regulation
                          9, that there has been a violation of these
                          regulations, it shall promptly inform the stock
                          exchange(s) where the concerned securities are traded,
                          in such form and such manner as may be specified by
                          the Board from time to time.{" "}
                        </li>
                        <li>
                          Designated persons shall be required to disclose names
                          and Permanent Account Number or any other identifier
                          authorized by law of the following persons to the
                          company on an annual basis and as and when the
                          information changes:
                          <br />
                          <span>a.immediate relatives</span>
                          <br />
                          <span>
                            b.persons with whom such designated person(s) shares
                            a material financial relationship
                          </span>
                          <br />
                          <span>
                            c.Phone, mobile and cell numbers which are used by
                            them In addition, the names of educational
                            institutions from which designated persons have
                            graduated and names of their past employers shall
                            also be disclosed on a one-time basis.
                          </span>
                          <br />
                          <span className="mt-3">
                            Explanation – The term “material financial
                            relationship” shall mean a relationship in which one
                            person is a recipient of any kind of payment such as
                            by way of a loan or gift from a designated person]
                            during the immediately preceding twelve months,
                            equivalent to at least 25% of the annual income of
                            such designated person] but shall exclude
                            relationships in which the payment is based on arm’s
                            length transactions.
                          </span>
                        </li>
                        <li>
                          Listed entities shall have a process for how and when
                          people are brought ‘inside’ on sensitive transactions.
                          Individuals should be made aware of the duties and
                          responsibilities attached to the receipt of Inside
                          Information, and the liability that attaches to misuse
                          or unwarranted use of such information.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*visa details end*/}
      </Layout>
    </>
  );
}
