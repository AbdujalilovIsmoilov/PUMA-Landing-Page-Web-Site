import { Card } from "../../../UI/Card/Card";
import "./feature.scss";
import img1 from "../../../images/section/feature-icon-1.svg";
import img2 from "../../../images/section/feature-icon-2.svg";
import img3 from "../../../images/section/feature-icon-3.svg";

export const Feature = () => {
  const images = [
    {
      imgs: img1,
    },
    {
      imgs: img2,
    },
    {
      imgs: img3,
    },
  ];
  const array = [
    {
      id: 1,
      img: images[0],
      title: "Quality",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      feugiat mauris nisl est accumsan quis tempus.`,
      link: "Read More",
    },
    {
      id: 2,
      img: images[1],
      title: "Flexible",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      feugiat mauris nisl est accumsan quis tempus.`,
      link: "Read More",
    },
    {
      id: 3,
      img: images[2],
      title: "Long Lasting",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      feugiat mauris nisl est accumsan quis tempus.`,
      link: "Read More",
    },
  ];
  console.log(array);
  return (
    <section className="Feature">
      <div className="container">
        <h2 className="Feature-title">Feature</h2>
        <h3 className="Feature-dark">We have best feature in Shoes</h3>
        <div className="Feature__container">
          {array.map((item) => (
            <div className="Feature__container_box" key={item.id}>
              <Card object={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
