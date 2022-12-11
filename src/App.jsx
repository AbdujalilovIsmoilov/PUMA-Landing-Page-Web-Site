import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Video } from "./components/Section/Video/Video";
import { Feature } from "./components/Section/Feature/Feature";
import {SignUp} from "./components/Section/Sign-Up/Sign-up";

export const App = () => {
  return (
    <>
      <Header logo="../../../images/logo/logo.svg" />
      <Main footwear="../images/main/footwear.svg" />
      <Video video="../../../images/section/video.svg" />
      <Feature />
      <SignUp SignUpImg="../../../../images/section/SignUp-img.svg"/>
    </>
  );
};
