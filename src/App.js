import { useState } from "react";

/* components */
import { NavBarComponent } from "./Components/nav-component";
import { MobilePictureDisplay } from "./Components/mobile-picture-display";
import { TextComponent } from "./Components/text-component";

import "./App.css";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const clickHandlerMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="App">
      <NavBarComponent
        showMobileMenu={showMobileMenu}
        clickHandlerMobileMenu={clickHandlerMobileMenu}
      />
      <MobilePictureDisplay />
      <div className="container">
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
