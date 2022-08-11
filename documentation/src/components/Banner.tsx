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
          to="/gettingstarted/quickstart"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">Getting Started</button>
        </Link>
      </div>
      <div className="logos-frameworks">
        <div className="item">
          <img alt="SolidJS" src="https://www.solidjs.com/assets/logo.123b04bc.svg" />
        </div>
        <div className="item">
          <img alt="SolidJS" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fsveltejs%2Fsvelte%2F29052aba7d0b78316d3a52aef1d7ddd54fe6ca84%2Fsite%2Fstatic%2Fimages%2Fsvelte-android-chrome-512.png&f=1&nofb=1" />
        </div>
        <div className="item">
          <img alt="SolidJS" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
        </div>
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
