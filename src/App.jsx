import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Video } from "./components/Section/Video/Video";
import { Feature } from "./components/Section/Feature/Feature";
import { SignUp } from "./components/Section/Sign-Up/Sign-up";
import { Footer } from "./components/Footer/Footer";
import footwear from "./images/main/footwear.svg";
import logo from "./images/logo/logo.svg";
import video from "./images/section/video.svg";
import SignUpImg from "./images/section/SignUp-img.svg";

export const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main footwear={footwear} />
      <Video video={video} />
      <Feature />
      <SignUp SignUpImg={SignUpImg} />
      <Footer intro={logo} />
    </div>
  );
};
