import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
import React from "react";

export default function Clients() {
  return (
    <section className="clients-section alternat-3 p_relative">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{
            backgroundImage: "url(assets/images/kprmill/home/number-bg.jpg)",
          }}
        ></div>
        {/* <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-54.png)" }}
        ></div> */}
      </div>
      <div className="auto-container">
        <div className="inner-box p_relative">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-4 col-sm-12 md-mb-30 count-section">
              <div className="text-center">
                <div className="count-outer">
                  <CounterUp end={400000} />
                </div>
                <p className="count-content">
                  Spindles with a Production capacity
                  <br /> of 1,20,000 MT per annum
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 count-section">
              <div className="text-center">
                <div className="count-outer">
                  <CounterUp end={40000} />
                  <span> MT</span>
                </div>
                <p className="count-content">
                  Capacity to Process per annum with
                  <br /> Trendsetter ETP
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="text-center">
                <div className="count-outer">
                  <CounterUp end={177} />
                  <span> M+</span>
                </div>
                <p className="count-content">
                  Largest in India aith a capacity to
                  <br /> produce garments per annum
                </p>
              </div>
            </div>
            {/* <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-4.png" alt="" /></Link></li>
            <li className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-5.png" alt="" /></Link></li> */}
          </div>
        </div>
      </div>
    </section>
  );
}
