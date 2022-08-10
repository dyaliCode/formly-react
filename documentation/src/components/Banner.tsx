import React from "react";
import Link from "@docusaurus/Link";

function BannerText() {
  return (
    <div className="bannerContent">
      <h1>FormlyJS</h1>

      <p>
        A good solution to generate dynamic forms using rules, styles and more.
      </p>

      <div className="bannerBtns">
        <Link
          to="/quickstart/install#pre-requisites"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">Getting Started</button>
        </Link>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />
    </div>
  );
}

export default Banner;
