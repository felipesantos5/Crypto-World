import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ErrorPageComponent } from "../components/errorPageComponent/errorPageComponent";
import { DarkModeProvider } from "../contexts/darkModeContext";

export const Errorpage = () => {
  return (
    <DarkModeProvider>
      <Header />
      <ErrorPageComponent />
      <Footer />
    </DarkModeProvider>
  );
};
