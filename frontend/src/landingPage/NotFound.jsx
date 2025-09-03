import React from "react";
function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col">
          <h1>404 Page Not Found </h1>
          <p style={{ fontSize: "1.25rem" }} className="text-muted">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
