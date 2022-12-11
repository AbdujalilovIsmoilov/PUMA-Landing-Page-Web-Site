import "./Sign-up.scss";

export const SignUp = (props) => {
  const { SignUpImg } = props;
  return (
    <section className="SignUp">
      <div className="container">
        <div className="SignUp__container">
          <div className="SignUp__container_box">
            <img
              src={SignUpImg}
              alt="SignUp"
              title="SignUp"
              className="SignUp__container_box-img"
            />
          </div>
          <div className="SignUp__container_box">
            <h2 className="SignUp__container_box-title">
              Sign Up to our Newsletter
            </h2>
            <p className="SignUp__container_box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in elementum tempus, vestibulum faucibus tortor odio
              elit.
            </p>
            <form action="#" className="SignUp__container_box_form">
              <input
                type="text"
                className="SignUp__container_box_form-text"
                placeholder="Enter your email address"
              />
              <button
                className="SignUp__container_box_form-submit"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
