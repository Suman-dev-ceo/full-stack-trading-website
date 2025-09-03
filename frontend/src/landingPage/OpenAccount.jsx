import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col">
          <h1>Open a Zerodha account</h1>
          <p style={{ fontSize: "1.25rem" }} className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button className="btn btn-primary p-2 fs-5 mb-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
