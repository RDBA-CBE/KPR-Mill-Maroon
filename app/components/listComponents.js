import Link from "next/link";
import React from "react";

export default function ListComponents(props) {
  const { data, title } = props;
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 content-side">
      <div className="visa-details-content">
        <div className="content-one mb_45">
          <div className="table-responsive-sm">
          {[...data?.entries()]?.map(([year, reports]) => (
              <table
               
                className="table big-table table-striped mb_30 "
              >
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        backgroundColor: "#daad19",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      {`${title} ${year}`}
                    </th>
                  </tr>
                </thead>
                <tbody>
                               {reports.map((report) => {
                                 return (
                                   <tr key={report?.id}>
                                     <td>
                                     {report?.title}
                                       <br />
                                       {report?.subject && (
                                         <span
                                           style={{
                                             fontSize: "14px",
                                             color: "#032B66",
                                           }}
                                         >
                                           <b>Sub:</b> {report?.subject}
                                         </span>
                                       )}
                                       {report?.reference && (
                                         <>
                                           <br />
                                           <span
                                             style={{
                                               fontSize: "14px",
                                               color: "#032B66",
                                             }}
                                           >
                                             <b>Ref:</b> {report?.reference}
                                           </span>
                                         </>
                                       )}
                                     </td>
                                     <td>
                                       <ul className="download-list clearfix">
                                         <li>
                                           {report?.files &&
                                             report?.files?.map((file) => {
                                               return (
                                                <a
                                                  href={file?.file}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                   <div
                                                     className="icon-shape text-center "
                                                     style={{
                                                       display: "flex",
                                                       alignItems: "right",
                                                       justifyContent: "end",
                                                       marginBottom: "10px",
                                                     }}
                                                   >
                                                   {
                                                       file?.name && (
                                                         <p style={{
                                                           fontSize: "16px", paddingTop: "5px",
                                                           color: "#5a1d00", paddingRight:"8px", 
                                                         }}>{file?.name}</p>
                                                       )
                                                     }
                                                    <i
                                                       className="fa fa-download"
                                                       style={{
                                                         fontSize: "16px",
                                                         color: "#5a1d00",
                                                       }}
                                                     ></i>
                                                     {/* <p
                                                       style={{
                                                         fontSize: "14px",
                                                         paddingTop: "5px",
                                                         color: "#0d6efd",
                                                       }}
                                                     >
                                                       Click Here
                                                     </p> */}
                                                   </div>
                                                 </a>
                                               );
                                             })}
                                         </li>
                                       </ul>
                                     </td>
                                   </tr>
                                 );
                               })}
                             </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
