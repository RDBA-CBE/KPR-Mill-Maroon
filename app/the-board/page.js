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
              The success of a company is directly attributed to the sheer
              determination and dedication of its leaders. This holds true in a
              giant, integrated apparel company like KPR. KPR is led by a
              dynamic management team, which is willing to go the extra mile in
              its quest for innovation and perfection.
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
                          <b> Mr. K. P. Ramasamy </b>, fondly known as ‘ KPR
                          ‘,was born in an Agricultural Family at Kalliampudur
                          Village, Erode District. KPR is the Founder, Mentor
                          and Chairman of ‘KPR Group’. He made a humble
                          beginning as a Power loom cloth Manufacturer in
                          1971.With the able and emphatic support of his younger
                          Brothers his journey expanded from Textile to Sugar,
                          Power, Automobiles and Education creating the Textile
                          Empire ‘KPR Group’, on fabulous values. His drive
                          towards eco- friendly environment installed several
                          windmills at Tamilnadu and established Co-gen cum
                          Sugar Plant at Karnataka to source green power.
                          <b>
                            His strategic plans & dynamic management crowned him
                            as one of the ‘Top 100 CEO’s of India’ successively
                          </b>{" "}
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
                          <b> Mr. KPD.Sigamani</b>, is a Promoter of KPR Group
                          of Companies. He is a Managing Director of its
                          flagship Company ‘KPR Mill Limited (KPR) a Textile
                          conglomerate in India. He holds a Master of Science
                          degree in Mathematics from PSG College of Arts and
                          Science, Coimbatore, Tamil Nadu. He has over 30 years
                          of experience in the Apparel Industry including the
                          Hosiery, Apparel, Fabric and Yarn Export business,
                          with specialized experience in the production and
                          marketing of knitted apparel, fabric etc.{" "}
                          <b>
                            He currently heads the Apparel Division, the major
                            contributor to the export business of the Company
                          </b>
                          . He has travelled widely across the globe on business
                          and gained in-depth knowledge on the export of
                          textiles <Link href="/mr-kpd-sigamani"> Read More..</Link>
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
                          <b>Mr. P. Nataraj</b>, a Science Graduate and Fellow
                          Member of the Institute of Chartered Accountants of
                          India, is a Managing Director of KPR Mill Limited. He
                          has around three decades of experience in the apparel
                          industry, especially in marketing of fabric, knitted
                          apparel and cotton yarn. He effectively utilises his
                          rich knowledge in financial aspects to steer Financial
                          Management, Internal Control, Project implementation
                          and Cotton procurement of the Company. Under his
                          guidance and active participation, the Company
                          successfully concluded Public issue of Shares at
                          Premium and listing of Equity shares. He is a Member
                          in ‘Cotton Yarn Advisory Board’ constituted by the
                          Government of India
                          <Link href="/mr-p-nadaraj"> Read More..</Link>
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
                          <b>Mr. C.R.Anandakrishnan</b>, is the son of Mr. K.P.
                          R. After completing his Bachelor’s degree in Business
                          Management at G.R.D College, Coimbatore, he
                          meritoriously completed Master’s Degree in Business
                          Administration at University of Philadelphia in the
                          year 2001, where he acquired management skills of
                          international standard.Mr. Anandakrishnan is a young,
                          energetic and enthusiastic entrepreneur who joined the
                          management team of the K.P.R group in the year 2002.
                          Since then, he has been contributing his talented
                          efforts for the growth of the Group.He has widely
                          traveled across the world for choosing suitable
                          technology and machinery for textile Companys. He visited
                          Srilanka for studying the large scale garment
                          manufacturing process.Under his able administration,
                          KPR’s prestigious Textile Processing Unit was
                          established with a Trendsetter Effluent Treatment
                          Plant that is adjudged as ‘State of the Art’
                          Processing Unit adhering to the highest International
                          Standards.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          Since 2008, he was functioning as ‘President’
                          (Processing Division) of K.P.R. Mill Limited.
                          <b>
                            Considering his significant role in formulation and
                            implementation of Business Plan, he was appointed as
                            “Executive Director” of K.P.R. Mill Limited during
                            2011 and has been functioning as such looking after
                            the various Expansion and Modernisation Schemes of
                            KPR Group. Presently he is managing the operations
                            of Processing Division, Garment Unit, some of the
                            Spinning Units,Co-gen cum Sugar Plant at Karnataka
                            and the Authorised Dealerships of Premium Brand
                            Motor Cars ‘AUDI’ & High-end International Brand
                            Motorcycles “Harley Davidson’ at Coimbatore.As a
                            Member in the ‘Coimbatore Round Table 9’ he is
                            rendering services to the Society.
                          </b>
                        </p>
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
                          <b>Mr. E.K.Sakthivel</b>, is a Commerce Graduate and
                          completed MBA in 2005 from Bharathiar University. He
                          has over 12 years of experience in Production &
                          Marketing of Apparels .He joined the Management Team
                          of KPR Mill Limited(KPR) in 2007 , as
                          ‘Head-Operations’ (Garment Division) ,Tirupur and has
                          been functioning as such. Since his appointment, the
                          Garment Unit, Tirupur had seen a rapid growth in the
                          volume of Business and performance. Considering his
                          significant role in formulation and implementation of
                          various Business plans in the Garment segment, he was
                          involved in Expansion and Modernisation schemes and
                          setting up of new units of KPR. His managerial
                          competence elevated him as an ‘Executive Director’ of
                          the Company in 2016.
                        </p>
                      </div>
                      <div className="text">
                        <p>
                          His marketing skills secured new International Buyers
                          besides widening the business from existing clientele.
                          Presently he oversees the operations of the new
                          ‘State-of–the Art ‘Garment unit at Thekkalur, catering
                          to the requirements of Top International Brands and
                          some of the Spinning Mills of the Company. His active
                          involvement in furtherance of the growth prospects of
                          the Company has led him to take the responsibility of
                          managing the operations of the Retail business that
                          the Company has recently ventured.
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
                        <p>
                          <b>Mr. P. Selvakumar</b>, holds a Master’s Degree in
                          Commerce. He has over two decades of experience in the
                          accounts, finance and taxation areas. He joined K.P.R
                          in 1996. After a brief stint in the operational area
                          of one of its textile units, his acumen in accounting
                          field accredited him to head the accounting activities
                          of the Company till 2008. Subsequently, considering
                          his wide knowledge and skill, he was elevated as
                          ‘Manager (Taxation)’.
                        </p>
                      </div>
                      <div className="text">
                        <p>
                          Since then he has been functioning as such, looking
                          after the matters pertaining to Direct & Indirect
                          Taxation viz, Income Tax, Central Excise, Service Tax,
                          Import & Export Regulations, VAT etc., relating to all
                          entities in KPR Group. Utilising his versatile
                          ability, he liaisons with the offices of Central and
                          State Government and represents the Company on all
                          matters of importance. In recognition of his strong
                          dedication and involvement and with a view to accord
                          representation to the employees at Board level, the
                          Management has inducted him as a Director of the
                          Company.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* FAQ Item 7 */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 7 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleToggle(7)}
                    >
                      <div className="icon-box"></div>

                      <h5 style={{cursor:"pointer"}}>DR. S. RENGANAYAKEI - WOMAN INDEPENDENT DIRECTOR</h5>
                    </div>
                    <div
                      className={
                        isActive.key == 7
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="text">
                        <p>
                          <b>Dr. Renganayakei</b>, hailing from a well-educated
                          family, is a qualified Physician. She is a visiting
                          Medical Officer at women’s college for more than a
                          decade and for female workers at industrial
                          establishments in and around Coimbatore. Presently,
                          she runs a private hospital and a visiting Consultant
                          in several reputed hospitals at Coimbatore. Her
                          meritorious professional services earned her ‘Doctor
                          of Excellence’ award. Besides being a social worker,
                          she is a strong supporter of numerous orphanages and
                          old-age homes. She conducts free medical camps in
                          villages to spread rural medical awareness. She is
                          also guiding and supporting a Nursing College, an
                          authorised Training Centre of Bharat Sevak Samaj, a
                          National Development Agency promoted by Government of
                          India as allied health school.
                        </p>
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
                        <p>
                          <b>Mr. M. Alagiriswamy</b>, Coimbatore, a B.Sc.
                          Graduate in Chemistry, is a reputed Chartered
                          Accountant, Tax Consultant, a Dedicated Correspondent
                          of Educational Institution and an enthusiastic
                          Rotarian and Freemason of Lodge GKD 221.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          He has rich experience in industry; profession;
                          educational Institutions and in Public Bodies & Local
                          Authorities.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          He is practicing since 1978, auditing leading
                          Industries, Educational Institutions, reputed
                          Hospitals in and around Coimbatore. He is the Chairman
                          & Correspondent of Geethanjalee Mat. Hr. Sec. School,
                          Coimbatore.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          Correspondent & Treasurer of Bharathiya Vidhya Bhavan
                          Matric Hr. Sec School, Coimbatore Kendra & Bharathiya
                          Vidhya Bhavan Public School – Ajjanur. Managing
                          Trustee of AVM foundation; A trustee of Shanthi
                          Ashram, Kovaipudur & ‘Save Our Daughters India Trust’
                          and ‘Lodge GKD 221 Charitable Trust’.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          He is also a Director in Lotus Eye Hospital &
                          Institute Limited and an Active Member of Rotary Club
                          of Coimbatore West.
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
                          <b>Mrs. Bhuvaneshwari</b> B.Com, B.L, is Practicing
                          Corporate Law, as a Partner of the Leading Corporate
                          Lawyers Firm at Coimbatore ‘Ramani & Shankar’, since
                          1996. She has over 36 years of experience specializing
                          exclusively in Corporate and Allied Laws including
                          SEBI, NBFC and FEMA Regulations. She has a track
                          record of structuring and papering many mega domestic
                          and cross-border joint ventures, collaborations,
                          acquisitions, takeovers, technology transfers, IPO’S,
                          FPO’S, Rights Issues, re-structuring and
                          re-organization of business ventures, including FPO’S
                          of Private Sector Banks.
                        </p>
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
                          <b>Mr.K.V.Ramananda Rao</b> (“Kv”), Hyderabad is a
                          Post Graduate Diploma in Business Management from T A
                          Pai Management Institute, Manipal. He started his
                          career in 1996 with Ind Global Financial Trust Ltd
                          (IGFT), a boutique Investment Bank and was with IGFT
                          till June 2000. He joined Ernst & Young during June
                          2000 and was part of the Corporate Finance team till
                          September 2009. During 2009, Kv joined KPMG as a
                          Partner to set-up and lead its Corporate Finance
                          practice in South India. He returned to Ernst & Young
                          LLP during September 2016 as Partner M&A and Private
                          Equity, leading its southern practice.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          Presently he is the Chief Executive Officer at XL Sure
                          India Private Limited, a 100% subsidiary of Xcelerate
                          Pte Ltd, a Singapore headquartered Governance Risk &
                          Compliance (GRC) and Environment, Social & Governance
                          (ESG) focused operating and investing platform.
                        </p>
                      </div>
                      <div className="text">
                        <p>
                          His career empowered him with expertise in several
                          private equity/structured debt funding transactions,
                          inbound & outbound M&A transactions across
                          multi-culture, multi-regulatory environments. He also
                          has significant capital market experience having
                          handled several IPOs, Rights Issues, Open Offers and
                          Buyback offers.
                        </p>
                      </div>
                      <div className="text">
                        <p>
                          He is a Director in Simpliance Technologies Private
                          Limited, Sagarsoft (India) Limited, XL sure India
                          Private Limited, Aparajitha Corporate Services Private
                          Limited, and Stirrup Communication Consultants Private
                          Limited.
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
                          <b>Mr. K. Thangavelu</b>, Coimbatore, a B.Sc.
                          Chemistry Graduate is a Chartered Accountant having
                          the honour of securing rank in both Intermediate and
                          Final level exams. He served Indian Overseas Bank for
                          about 15 years and positions held by him includes
                          Chief – Advances at the bank’s Foreign branch in
                          Bangkok Thailand; Accounts and Treasury Manager at the
                          Head office, Chennai and Acting Board Secretary,
                          Branch Manager at Coimbatore and Mumbai. Further he
                          has served 15 years as Finance Head in private
                          companies in Thailand engaged in Textile garments
                          manufacture & export and readymade Steel roofing
                          manufacturing. His career is credited with 8 years of
                          service in a Hospital as Vice President – Finance and
                          administration. He is a Director in Birin Spinning
                          Mills Limited and C S Corporate Solutions Private
                          Limited.
                        </p>
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
                          <b>Mr. R. Sridharan</b>, Chennai, is a B.Com graduate
                          and a Fellow member of the Institute of Company
                          Secretaries of India (FCS). He is a veteran practicing
                          Company Secretary and former President of the
                          Institute of Company Secretaries of India (ICSI), New
                          Delhi. He has more than 4 decades of experience in
                          serving multiple organizations such as Murugappa
                          Group, Best & Crompton etc. He is also the founder of
                          R. Sridharan & Associates, a firm of Company
                          Secretaries providing advisory services to over 300
                          clients for the past 25 years. He possesses vast
                          experience in the field of Academics. He has served as
                          a regular faculty member of the ICSI-SIRC. He has also
                          presented a long list of papers, articles and talks to
                          multiple academic forums and journals. Some of his key
                          contributions include his articles to the “Chartered
                          Secretary” journal and his talks at various
                          professional development programs organized by the
                          regional councils, chapters, Madras University, ICAI
                          and Institute of Directors at London.
                        </p>
                      </div>

                      <div className="text mb_10">
                        <p>
                          He has also conducted a number of Peer Reviewer
                          Programs all over India and has been appointed as a
                          member of the Independent Evaluation Committee
                          constituted by RBI.
                        </p>
                      </div>

                      <div className="text">
                        <p>
                          He served as the President of the ICSI in 2014-15
                          closely associating with multiple committees during
                          his tenure. He currently serves as a member of the
                          Peer Review Committee of the ICSI and also regular
                          faculty member of the Institute of Directors (IOD).
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
