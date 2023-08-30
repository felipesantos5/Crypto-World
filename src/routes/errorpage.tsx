import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ErrorPageComponent } from "../components/errorPageComponent/errorPageComponent";

export const Errorpage = () => {
  return (
    <>
      <Header />
      <ErrorPageComponent />
      <Footer />
    </>
  );
};
