import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row  ">
        <div className="col-6 p-5">
          <img src={imageURL} style={{ width: "100%" }} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="lh-lg">{productDescription}</p>
          <div className="mb-4">
            <a href="" style={{ textDecoration: "none", marginRight: "3rem" }}>
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a href="" style={{ marginRight: "1rem" }}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href="">
              <img src=" media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
