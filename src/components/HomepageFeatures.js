import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/easy_to_use.svg").default,
    description: (
      <>
        Redbrick is a lightweight css framework with styles that are used
        frequently. You can easily get started with the Redbrick starter
        template.
      </>
    ),
  },
  {
    title: "Easy To Customize",
    Svg: require("../../static/img/customizable.svg").default,
    description: (
      <>
        Redbrick comes with a simple config file which lets you customize the
        classes according to your needs. Just tweak the values you want to and
        it will reflect in the complete framework.
      </>
    ),
  },
  {
    title: "With Dynamic Components",
    Svg: require("../../static/img/dynamic.svg").default,
    description: (
      <>
        Redbrick comes with few dynamic components such as navbars, modals etc.
        powered by redbrick.js. You can directly use and modify these
        components.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
