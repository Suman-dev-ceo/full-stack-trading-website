import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,

  learnMore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-5 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="lh-lg">{productDescription}</p>
          <div className="mb-4">
            <a href="" style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-7 p-3">
          <img src={imageURL} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
