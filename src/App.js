import { NavBarComponent } from "./Components/nav-component";
import { MobilePictureDisplay } from "./Components/mobile-picture-display";
import { TextComponent } from "./Components/text-component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <MobilePictureDisplay />
      <div className="container">
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
