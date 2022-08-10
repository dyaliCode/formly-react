import "../css/variables.css";
import "../css/style.css";
import "../css/components/home.css";

import React from "react";
import Layout from "@theme/Layout";

import Features from "../components/Features";
import Banner from "../components/Banner";

function Home() {
  return (
    <Layout description="A good solution to generate dynamic forms using rules, styles and more.">
      <main className="homepage">
        <Banner />
        <Features />
      </main>
    </Layout>
  );
}

export default function () {
  return <Home />;
}
