import "./App.css";
import { useState, useEffect } from "react";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import HeroMobile from "./components/HeroMobile";
import HeroDesktop from "./components/HeroDesktop";

function App() {
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize, setScreenSize]);

  return (
    <div className="App">
      {screenSize >= 770 ? (
        <>
          <NavbarDesktop />
          <HeroDesktop />
        </>
      ) : (
        <>
          <NavbarMobile />
          <HeroMobile />
        </>
      )}
    </div>
  );
}

export default App;
