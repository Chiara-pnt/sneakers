import "./App.css";
import { useState, useEffect } from "react";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import HeroMobile from "./components/HeroMobile";
import HeroDesktop from "./components/HeroDesktop";
import { ContextProvider } from "./components/ContextProvider";

function App() {
  const [screenSizeSmall, setScreenSizeSmall] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 600px)");
    function screenTest(e) {
      if (e.matches) {
        /* the viewport is 600 pixels wide or less */
        setScreenSizeSmall(true);
      } else {
        /* the viewport is more than 600 pixels wide */
        setScreenSizeSmall(false);
      }
    }

    mql.addEventListener("change", screenTest);
  }, []);

  return (
    <div className="App">
      <ContextProvider>
        {screenSizeSmall ? (
          <>
            <NavbarMobile />
            <HeroMobile />
          </>
        ) : (
          <>
            <NavbarDesktop />
            <HeroDesktop />
          </>
        )}
      </ContextProvider>
    </div>
  );
}

export default App;
