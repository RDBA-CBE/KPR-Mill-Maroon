"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Error() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <section className="error-section centred">
          <div className="auto-container">
            <div
              className="content-box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div>
                <div
                  className="title-box"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <p style={{ fontSize: "150px" , marginBottom: "0px", color:"#5a1d00 "}}>4</p>{" "}
                  <div>
                    <img
                      src="/assets/images/kprmill-images/loading-gif.gif"
                      alt="" style={{ width: "100%" }}
                    />
                  </div>
                  <p style={{ fontSize: "150px", marginBottom: "0px", color:"#5a1d00 " }}>4</p>
                 
                </div>
                <div>
                   <h2>Not Found</h2>
                </div>
                <h1>Sorry, Something Went Wrong</h1>
              <p>
                Oops! The page you are looking for does not exist. Please return
                to the site’s homepage.
              </p>
                <div className="btn-box">
                  <Link href="/" className="theme-btn btn-two">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
