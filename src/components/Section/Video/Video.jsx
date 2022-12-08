import "./video.scss";

export const Video = (props) => {
  const { video } = props;
  return (
    <section className="video">
      <div className="container">
        <div className="video__container">
          <div className="video__container_box">
            <h5 className="video__container_box-video">VIDEO</h5>
            <h2 className="video__container_box-title">
              Desire the feel of satisfaction.
            </h2>
            <p className="video__container_box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              auctor proin amet sagittis semper ipsum at lectus. At
            </p>
          </div>
          <div className="video__container_box">
            <img
              src={video}
              alt="video"
              title="video"
              className="video__container_box-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
