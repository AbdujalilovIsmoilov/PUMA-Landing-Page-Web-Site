import { Card } from "../../../UI/Card/Card";
import "./feature.scss";

export const Feature = () => {
  return (
    <section className="Feature">
      <div className="container">
        <h2 className="Feature-title">Feature</h2>
        <h3 className="Feature-dark">We have best feature in Shoes</h3>
        <div className="Feature__container">
          <Card
            object={{
              img: "../../../../images/section/feature-icon-1.svg",
              title: "Quality",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.`,
              link: "Read More",
            }}
          />
          <Card
            object={{
              img: "../../../../images/section/feature-icon-2.svg",
              title: "Flexible",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.`,
              link: "Read More",
            }}
          />
          <Card
            object={{
              img: "../../../../images/section/feature-icon-3.svg",
              title: "Long Lasting",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.`,
              link: "Read More",
            }}
          />
        </div>
      </div>
    </section>
  );
};
