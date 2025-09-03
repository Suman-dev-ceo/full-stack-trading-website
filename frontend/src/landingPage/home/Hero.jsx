import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col">
          <img
            src="media/images/homeHero.png"
            alt="Hero Img"
            className="mb-5 img-fluid"
            style={{ width: "85%" }}
          />
          <h1>Invest in everything</h1>
          <p style={{ fontSize: "1.25rem" }} className="text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary p-2 fs-5 mb-5 ">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
