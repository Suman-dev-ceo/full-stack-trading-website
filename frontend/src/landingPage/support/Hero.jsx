import React from "react";
function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" " id="supportWrapper">
        <h4 className="fs-5 ">Support Portal</h4> <a href="">Track Tickets</a>
      </div>{" "}
      <div className="row mx-5 ">
        <div className="col-1"></div>
        <div className="col-5">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Eg. how do I activate F&O, Why is my order getting rejeted.."
            className="mb-4"
          />{" "}
          <br />
          <div className="mb-5">
            <a href="" style={{ marginRight: "0.75rem" }}>
              Track account opening
            </a>
            <a href="" style={{ marginRight: "0.75rem" }}>
              Track segment activation
            </a>
            <a href="" style={{ marginRight: "0.75rem" }}>
              Intraday margins
            </a>
            <a href="" style={{ marginRight: "0.75rem" }}>
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol className="lh-lg">
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>{" "}
    </section>
  );
}

export default Hero;
