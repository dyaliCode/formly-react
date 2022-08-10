import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "Generator",
    imgSrc: "/logos/cogs.png",
    description: (
      <>
        Using object list fields with attributes, you can generate automatically
        a dynamic form with custom rules.
      </>
    ),
  },
  {
    title: "Styles",
    imgSrc: "/logos/themes.png",
    description: (
      <>
        Full control on style form using classes of diffirent libraries like
        bootstrap and tailwindcss.
      </>
    ),
  },
  {
    title: "Speed",
    imgSrc: "/logos/rocket.png",
    description: (
      <>
        Build fastly a dynamic form with full control of validation and getting
        easly values with custom messages.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
