import React from "react";
function Hero() {
  return (
    <div className="container mb-5 p-3">
      <div className="row text-center">
        <div className="row  border-bottom   p-5">
          <h1 className="fs-3"> Pricing</h1>
          <p className="mt-3">
            Free equity investments and flat ₹20 traday and F&O trades
          </p>
        </div>
        <div className="row">
          <div className="col-4  ">
            <img src=" media/images/pricing0.svg" className="p-3" />
            <h1 className="fs-3 mb-3">Free equity delivery</h1>
            <p className="lh-lg">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4  ">
            <img src=" media/images/intradayTrades.svg" className="p-3" />
            <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
            <p className="lh-lg">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 ">
            <img src=" media/images/pricing0.svg" className="p-3" />
            <h1 className="fs-3 mb-3">Free direct MF</h1>
            <p className="lh-lg">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
