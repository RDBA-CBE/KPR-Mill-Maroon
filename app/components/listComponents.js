import Link from "next/link";
import React from "react";

export default function ListComponents(props) {
  const { data, title } = props;
  return (
    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
      <div className="visa-details-content">
        <div className="content-one mb_45">
          <div className="table-responsive-sm">
            {data?.map((item) => (
              <table
                key={item.title}
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
                      {`${title} ${item.title}`}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.data?.map((items, index) => (
                    <tr key={index}>
                      <td>
                        {items.title}
                        {items?.ref && (
                          <div className="flex gap-5 items-center ">
                            <span
                              className="font-semibold text-gray-700 "
                              style={{
                                fontSize: "14px",
                                color: "#5a1d00",
                                fontWeight: "bold",
                              }}
                            >
                              {` Ref : `}
                            </span>
                            <span
                              className="text-gray-400"
                              style={{
                                fontSize: "14px",
                                color: "#5a1d00",
                                fontWeight: "normal",
                              }}
                            >
                              {` ${items?.ref}`}
                            </span>
                          </div>
                        )}

                        {items?.sub && (
                          <div className="flex gap-5 items-center ">
                            <span
                              className="font-semibold text-gray-700 "
                              style={{
                                fontSize: "14px",
                                color: "#5a1d00",
                                fontWeight: "bold",
                              }}
                            >
                              {` Sub : `}
                            </span>
                            <span
                              className="text-gray-400"
                              style={{
                                fontSize: "14px",
                                color: "#5a1d00",
                                fontWeight: "normal",
                              }}
                            >
                              {` ${items?.sub}`}
                            </span>
                          </div>
                        )}
                      </td>
                      <td>
                        <ul className="download-list clearfix">
                          {items.link?.map((link, idx) => (
                            <li key={idx} className="mb-3">
                              {link["file-pdf-cfdb7_file"]?.endsWith(".mp3") ? (
                                <Link
                                  href={link["file-pdf-cfdb7_file"]}
                                  target="_blank"
                                >
                                  <div
                                    className="icon-shape "
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "end",
                                      gap: "5px",
                                    }}
                                  >
                                    {/* <img
                                      src="assets/images/mp3.png"
                                      alt=""
                                      height={22}
                                      width={22}
                                    /> */}

                                    <p
                                      className="flex gap-5"
                                      style={{
                                        fontSize: "14px",
                                        paddingTop: "5px",
                                        paddingRight: "5px",
                                        color: "#5a1d00",
                                      }}
                                    >
                                      {link?.list}
                                    </p>
                                    <i
                                      className="fa fa-music"
                                      style={{
                                        fontSize: "14px",
                                        color: "#5a1d00",
                                      }}
                                    ></i>
                                  </div>
                                </Link>
                              ) : (
                                <Link
                                  href={link["file-pdf-cfdb7_file"]}
                                  target="_blank"
                                >
                                  <div
                                    className="icon-shape"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "end",
                                    }}
                                  >
                                    {link?.list &&
                                      ![
                                        "Click Here",
                                        "Click Here To Download",
                                        "Click Here to Download",
                                        "Download",
                                      ].includes(link?.list) && (
                                        <p
                                          style={{
                                            fontSize: "14px",
                                            paddingTop: "5px",
                                            paddingRight: "5px",
                                            color: "#5a1d00",
                                          }}
                                        >
                                          {link?.list}
                                        </p>
                                      )}

                                    <i
                                      className="fa fa-download"
                                      style={{
                                        fontSize:
                                          link?.list &&
                                          link?.list !== "Click Here" &&
                                          link?.list !==
                                            "Click Here To Download" &&
                                          link?.list !==
                                            "Click Here to Download" &&
                                          link?.list !== "Download"
                                            ? "14px"
                                            : "22px",
                                        color: "#5a1d00",
                                      }}
                                    ></i>
                                  </div>
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
