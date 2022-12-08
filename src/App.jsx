import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Video } from "./components/Section/Video/Video";
import { Feature } from "./components/Section/Feature/Feature";

export const App = () => {
  return (
    <>
      <Header logo="../../../images/logo/logo.svg" />
      <Main footwear="../images/main/footwear.svg" />
      <Video video="../../../images/section/video.svg" />
      <Feature />
    </>
  );
};
