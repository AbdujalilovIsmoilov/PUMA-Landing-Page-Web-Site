export const Card = (props) => {
  const { img, title, description, link } = props.object;
  const {imgs} = img;
  return (
    <section className="Card">
        <div className="Feature__container_box_small">
          <img
            className="Feature__container_box_small-img"
            src={imgs}
            alt="feature-icon"
            title="feature-icon"
          />
        </div>
        <h2 className="Feature__container_box-title">{title}</h2>
        <p className="Feature__container_box-description">{description}</p>
        <a href="#" className="Feature__container_box-link">
          {link}
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
    </section>
  );
};
