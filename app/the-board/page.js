"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const page = () => {
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

  const BackgroundImage = "/assets/images/kprmill-images/About/the-board-banner-img.jpg"
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="The Board" imageUrl= {BackgroundImage}>
      <section className="faq-section">
        <div className="auto-container">
          <div className="sec-title  mb_30 centred">
            <span className="sub-title" style={{ color: "black" }}>
            The minds that drive our success
            </span>
            <h2>Pioneering Leadership</h2>
            <p>
            The Board consists of Dignitaries, Technical experts, eminent Professionals from different fraternity with proven experience in Textile Industry and / or various fields such as Corporate Law, Banking, Medical, Chartered Accountancy and Company Secretary. The Board constantly endeavors to achieve the highest standards of Corporate Governance. It comprises of twelve Directors viz., One Executive Chairman, Five Executive Directors and Six Independent Directors (Including two woman Directors) having no business relationship with the Company and constituting 50% of Board’s composition in compliance with the Listing Regulations & Companies Act, 2013 (‘Act’).
            </p>
          </div>
          <div className="row clearfix">
            {/* FAQ Column 1 */}
            <div className="col-12 faq-column">
              <div className="faq-content">
                <ul className="accordion-box">
                  {/* FAQ Item 1 */}
                  <li className="accordion block active-block">
                    <div
                      className={
                        isActive.key == 1 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(1)}
                    >
                      <div className="icon-box"></div>
                      <h5 style={{cursor:"pointer"}}>MR. K.P. RAMASAMY - CHAIRMAN</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 1
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                        <strong>Mr. K. P. Ramasamy</strong> , fondly&nbsp; known as&nbsp; ‘ KPR ‘,was born&nbsp; in an Agricultural Family at&nbsp;&nbsp; Kalliampudur Village, Erode District. KPR is the Founder, Mentor and Chairman of ‘KPR Group’. He made a humble beginning as a Power loom cloth Manufacturer in 1971. <strong>His strategic plans &amp; dynamic management crowned him as one of the ‘Top 100 CEO’s of India’ successively. </strong>
                          {" "}
                          <Link href="/mr-k-p-ramasamy"> Read More..</Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* FAQ Item 2 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 2 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(2)}
                    >
                      <div className="icon-box"></div>

                      <h5  style={{cursor:"pointer"}}>MR. KPD SIGAMANI - MANAGING DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 2
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                        <strong>Mr. KPD. Sigamani</strong>,&nbsp; is a Promoter of KPR Group of Companies. He is a Managing Director of its flagship Company ‘KPR Mill Limited (KPR) a Textile conglomerate in India.&nbsp; He holds a Master of Science degree in Mathematics from PSG College of Arts and Science, Coimbatore, Tamil Nadu. <Link href="/mr-kpd-sigamani"> Read More..</Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* FAQ Item 3 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 3 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(3)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. P. NATARAJ - MANAGING DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 3
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                        <b>Mr. P. Nataraj, </b>a Science Graduate and Fellow Member of the Institute of Chartered Accountants of India, is a Managing Director of KPR Mill Limited. He has around three decades of experience in the apparel industry, especially in marketing of fabric, knitted apparel and cotton yarn. He effectively utilises his rich knowledge in financial aspects to steer Financial Management, Internal Control, Project implementation and Cotton procurement of the Company. Under his guidance and active participation, the Company successfully concluded Public issue of Shares at Premium and listing of Equity shares. He is a Member in ‘Cotton Yarn Advisory Board’ constituted by the Government of India.
                          <Link href="/mr-p-nataraj"> Read More..</Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* FAQ Item 4 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 4 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(4)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. C.R. ANANDAKRISHNAN - EXECUTIVE DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 4
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                      <b>Mr. C.R. Anandakrishnan,</b> is the son of Mr. K.P. Ramasamy, the Chairman of K.P.R. Group. After completing his Bachelor’s degree in Business Management, he meritoriously completed Master’s Degree in Business Administration at University of Philadelphia in 2001, where he acquired management skills of international standard.</p>

                      </div>

                      <div className="text mt-10">
                     <p><b> Mr. C.R. Anandakrishnan</b> is a young, energetic and enthusiastic entrepreneur who joined the management team of the K.P.R Group in the year 2002. Since then, he has been contributing his talented efforts for the growth of the Group. He has widely travelled across the world for choosing suitable technology and machinery for textile mills. He visited Srilanka for studying the large scale garment manufacturing process. Under his able administration, K.P.R’s prestigious Textile Processing Unit was established with a Trendsetter Effluent Treatment Plant that is adjudged as ‘State of the Art’ Processing Unit adhering to the highest International Standards. Since 2008, he was functioning as ‘President’ (Processing Division) of K.P.R. Mill Limited. Considering his significant role in formulation and implementation of Business Plan, he was appointed as “Executive Director” of K.P.R. Mill Limited during 2011 and has been functioning as such looking after the various Expansion and Modernisation Schemes of K.P.R. Group. Presently he is managing the operations of Processing Division, Garment Units, some of the Spinning Units, Co-gen cum Sugar Plants at Karnataka and the Authorised Dealerships of Premium Brand Motor Cars ‘AUDI’ at Coimbatore. As a Member in the ‘Coimbatore Round Table 9’he is rendering services to the Society.</p>
                     
                      </div>
                      <div className="text mt-10">
                      <p>He is also a Director in K.P.R. Sugar Mill Limited and Jahnvi Motor Private Limited.</p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 5 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 5 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(5)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. E.K. SAKTHIVEL - EXECUTIVE DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 5
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                        <b>Mr. E.K. Sakthivel,</b> is a Commerce Graduate and completed MBA in 2005 from Bharathiar University. He has over 14 years of experience in Production & Marketing of Apparels. He joined the Management Team of KPR Mill Limited (KPR) in 2007, as ‘Head-Operations’ (Garment Division), Tirupur and has been functioning as such. Since his appointment, the Garment Unit, Tirupur had seen a rapid growth in the volume of Business and performance. Considering his significant role in formulation and implementation of various Business plans in the Garment segment, he was involved in Expansion and Modernisation schemes and setting up of new units of KPR. His managerial competence elevated him as an ‘Executive Director’ of the Company in 2016. His marketing skills secured new International Buyers besides widening the business from existing clientele.
                        </p>
                      </div>
                      <div className="text mt-10">
                        <p>
Presently he oversees the operations of the new ‘State-of–the Art ‘Garment unit at Chengappally, Tirupur catering to the requirements of Top International Brands and some of the Spinning Mills of the Company.  His active involvement in furtherance of the growth prospects of the Company has led him to take various additional responsibilities also.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 6 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 6 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(6)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. P. SELVAKUMAR - WHOLE-TIME DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 6
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                       <p><b>Mr. P. Selvakumar,</b> holds a Master’s Degree in Commerce joined K.P.R. Group in 1996.</p>
                       <p>He has over two Decades of experience in the accounts, finance and taxation areas.</p>
                      <p>After a brief stint in the operational area of its textile units, his acumen in accounting field accredited him to head the accounting activities of the Company till 2008.</p>
                      <p>Subsequently, considering his wide knowledge and skill, he was elevated as ‘Manager (Taxation)’ looking after the matters pertaining to Direct & Indirect Taxation viz, Income Tax, Central Excise, Service Tax, Import & Export Regulations, VAT etc, relating to all entities in KPR Group.</p>
                      <p>Besides, through his versatile ability, liaising with the offices of Central and State Government and representing the Company on all matters of importance.</p>
                      <p>In recognition of his strong dedication & involvement, the Management inducted him as a Whole Time Director of K.P.R. Mill Limited on 28.07.2015.</p>
                      <p>He is also a Director in K.P.R. Sugar Mill Limited, KPR Sugar and Apparels Limited, Quantum Knits Private Limited and KPR Info Solution Private Limited.</p>
                      </div>
                   
                    </div>
                  </li>

                 

                  {/* FAQ Item 8 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 8 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(8)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. M. ALAGIRISWAMY – INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 8
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p><b>Mr. M. Alagiriswamy,</b> Coimbatore, a B.Sc. Graduate in Chemistry, is a reputed Chartered Accountant, Tax Consultant, a Dedicated Correspondent of Educational Institution and an enthusiastic Rotarian.
                        </p>
                      </div>
                      <div className="text">
                        <p>He has rich experience in industry; profession; educational Institutions and in Public Bodies & Local Authorities. He is practicing since 1978, auditing leading Industries, Educational Institutions, reputed Hospitals in and around Coimbatore.
                        </p>
                      </div>
                      <div className="text">
                        <p>He is the Chairman & Correspondent of Geethanjalee Mat. Hr. Sec. School, Coimbatore. Correspondent & Treasurer of Bharathiya Vidhya Bhavan Matric Hr. Sec School, Coimbatore Kendra & Bharathiya Vidhya Bhavan Public School – Ajjanur. Managing Trustee of AVM foundation; A trustee of Shanthi Ashram, Kovaipudur & ‘Save Our Daughters India Trust’ and <b>‘Lodge GKD 221 Charitable Trust’ </b>and an Active Member of Rotary Club of Coimbatore West.
                        </p>
                      </div>
                      <div className="text">
                        <p>He is also a Director in Kovai Medical Center and Hospital Limited.
                        </p>
                      </div>
                      
                    </div>
                  </li>

                  {/* FAQ Item 9 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 9 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(9)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MRS. BHUVANESHWARI - WOMAN INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 9
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                       <b> Mrs. V. Bhuvaneshwari, B. Com, B.L, </b>is Practicing Corporate Law, as a Partner of the Leading Corporate Lawyers Firm at Coimbatore ‘Ramani & Shankar’, since 1996. She has over 36 years of experience specializing exclusively in Corporate and Allied Laws including SEBI, NBFC and FEMA Regulations. She has a track record of structuring and papering many mega domestic and cross-border joint ventures, collaborations, acquisitions, takeovers, technology transfers, IPO’S, FPO’S, Rights Issues, re-structuring and re-organization of business ventures, including FPO’S of Private Sector Banks.
                        </p>
                        <p>She is also a Director in <b>KPR Sugar and Apparels Limited, Chansuba Pumps Private Limited, Kovai Medical Center and Hospital Limited, Sri Kannapiran Mills Limited, Shiva Texyarn Limited and Designated Partner in Mouli Technologies LLP.</b></p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 10 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 10 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(10)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. K.V. RAMANANDA RAO - INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 10
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text mb_10">
                        <p>
                        <b>Mr. K.V. Ramananda Rao (“Kv”),</b> Hyderabad is a Post Graduate Diploma in Business Management from T A Pai Management Institute, Manipal. He started his career in 1996 with Ind Global Financial Trust Ltd (IGFT), a boutique Investment Bank and was with IGFT till June 2000. He joined Ernst & Young during June 2000 and was part of the Corporate Finance team till September 2009. During 2009, Kv joined KPMG as a Partner to set-up and lead its Corporate Finance practice in South India. He returned to Ernst & Young LLP during September 2016 as Partner M&A and Private Equity, leading its southern practice.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                        Presently he is the Chief Executive Officer at XL Sure India Private Limited, a 100% subsidiary of Xcelerate Pte Ltd, a Singapore headquartered Governance Risk & Compliance (GRC) and Environment, Social & Governance (ESG) focused operating and investing platform.

                        </p>
                      </div>
                      <div className="text">
                        <p>
                         His career empowered him with expertise in several private equity/structured debt funding transactions, inbound & outbound M&A transactions across multi-culture, multi-regulatory environments. He also has significant capital market experience having handled several IPOs, Rights Issues, Open Offers and Buyback offers.
                        </p>
                      </div>
                      <div className="text">
                        <p>
                        He is also a Director in Simpliance Technologies Private Limited, Sagarsoft (India) Limited, XL sure India Private Limited, Aparajitha Corporate Services Private Limited, Stirrup Communication Consultants Private Limited, Gieom Business Solutions Private Limited and Designated Partner in Sevenoaks Growth Partners LLP.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 11 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 11 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(11)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. K. THANGAVELU - INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 11
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                        <b>Mr. K. Thangavelu,</b> Coimbatore, a B.Sc. Chemistry Graduate is a Chartered Accountant having the honour of securing rank in both Intermediate and Final level exams. He served Indian Overseas Bank for about 15 years and positions held by him includes Chief – Advances at the bank’s Foreign branch in Bangkok Thailand; Accounts and Treasury Manager at the Head office, Chennai and Acting Board Secretary, Branch Manager at Coimbatore and Mumbai. Further he has served 15 years as Finance Head in private companies in Thailand engaged in Textile garments manufacture & export and readymade Steel roofing manufacturing. His career is credited with 8 years of service in a Hospital as Vice President – Finance and administration.
                        </p>
                        <p>He is also a Director in K.P.R. Sugar Mill Limited, Birin Spinning Mills Limited and C S Corporate Solutions Private Limited.</p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 12 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 12 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(12)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. R. SRIDHARAN - INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 12
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text mb_10">
                        <p>
                        <b>Mr. R. Sridharan,</b> Chennai, is a B. Com graduate and a Fellow member of the Institute of Company Secretaries of India (FCS). He is a veteran practicing Company Secretary and former President of the Institute of Company Secretaries of India (ICSI), New Delhi. He has more than 4 decades of experience in serving multiple organizations such as Murugappa Group, Best & Crompton etc. He is also the founder of Sridharan & Associates, a firm of Company Secretaries providing advisory services to over 300 clients for the past 25 years. He possesses vast experience in the field of Academics. He has served as a regular faculty member of the ICSI-SIRC. He has also presented a long list of papers, articles and talks to multiple academic forums and journals. Some of his key contributions include his articles to the <b>“Chartered Secretary” </b>journal and his talks at various professional development programs organized by the regional councils, chapters, Madras University, ICAI and Institute of Directors at London.
                        </p>
                      </div>

                      <div className="text mb_10">
                        <p>
                        He has also conducted a number of Peer Reviewer Programs all over India and has been appointed as a member of the Independent Evaluation Committee constituted by RBI.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                        He served as the President of the ICSI in 2014-15 closely associating with multiple committees during his tenure. He currently serves as a member of the Peer Review Committee of the ICSI and also regular faculty member of the Institute of Directors (IOD).
                        </p>
                      </div>
                    </div>
                  </li>

                   {/* FAQ Item 13 */}
                   <li className="accordion block">
                    <div
                      className={
                        isActive.key == 13 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(13)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>MR. M.V. JEGANATHAN - INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 13
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text mb_10">
                        <p><b>Mr. M.V. Jeganathan,</b> is a graduate in Mathematics; a Post Graduate in Business Administration from Loyola College; <b>a fellow member of the Institute of Chartered Accountants of India and holds a Diploma in Information System Audit (DISA).</b> He is the Senior Partner of M S Jagannathan and Visvanathan, Chartered Accountants. He has been a practicing Chartered Accountant for more than two decades having rich experience and specializing in Direct Taxes and Corporate Audits in diversified sectors. </p>
                      </div>

                      <div className="text">
                        <p>
                        He holds Directorship in Lakshmi Engineering and Warehousing Limited (Erstwhile Lakshmi Automatic Loom Works Limited) as an Independent Director and is the Chairman of its Audit Committee and a Member of Nomination & Remuneration Committee. He is registered with the Independent Directors Data Bank of IICA.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default page;
