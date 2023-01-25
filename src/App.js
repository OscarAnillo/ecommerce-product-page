import { useState } from "react";

/* components */
import { NavBarComponent } from "./Components/nav-component";
import { MobilePictureDisplay } from "./Components/mobile-picture-display";
import { TextComponent } from "./Components/text-component";
import { DesktopPictureDisplay } from "./Components/desktop-picture-display";

import "./App.css";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [productAmount, setProductAmount] = useState(125);
  const [productQuantity, setProductQuantity] = useState(1);
  const [addCart, setAddCart] = useState([]);
  const [showCartMenu, setShowCartMenu] = useState(false);

  const clickHandlerMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const clickHandlerNext = () => {
    setProductAmount((prevState) => (prevState += 125));
    setProductQuantity((prevState) => prevState + 1);
  };

  const clickHandlerPrev = () => {
    if (productQuantity === 1) {
      return;
    }
    setProductAmount((prevState) => (prevState -= 125));
    setProductQuantity((prevState) => prevState - 1);
  };

  const addToCart = () => {
    setAddCart([addCart, { id: addCart.length, value: productQuantity }]);
  };

  const showCartMenuHandler = () => {
    setShowCartMenu(!showCartMenu);
  };

  return (
    <div className="App">
      <NavBarComponent
        showMobileMenu={showMobileMenu}
        clickHandlerMobileMenu={clickHandlerMobileMenu}
        addCart={addCart}
        showCartMenu={showCartMenu}
        showCartMenuHandler={showCartMenuHandler}
        productAmount={productAmount}
      />
      <MobilePictureDisplay />
      <div className="container">
        <DesktopPictureDisplay />
        <TextComponent
          productAmount={productAmount}
          productQuantity={productQuantity}
          setProductAmount={setProductAmount}
          clickHandlerPrev={clickHandlerPrev}
          clickHandlerNext={clickHandlerNext}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
