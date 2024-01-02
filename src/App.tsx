import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { DarkModeProvider } from "./contexts/darkModeContext";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <DarkModeProvider>
        <Header />
        <Outlet />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
