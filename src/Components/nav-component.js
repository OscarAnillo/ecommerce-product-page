export const NavBarComponent = ({ showMobileMenu, clickHandlerMobileMenu }) => {
  return (
    <nav className="nav">
      <div className="mobile">
        <img
          src="images/icon-menu.svg"
          alt=""
          className="mobile-menu-icon"
          onClick={clickHandlerMobileMenu}
        />
        <img src="images/logo.svg" alt="" className="mobile-menu-logo" />
      </div>
      <div className="mobile">
        <img src="images/icon-cart.svg" alt="" className="mobile-cart" />
        <img src="images/image-avatar.png" alt="" className="mobile-avatar" />
      </div>
      <div className="desktop">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="desktop">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="desktop">
        <img src="images/icon-cart.svg" alt="" />
        <img src="images/image-avatar.png" alt="" />
      </div>
      {showMobileMenu ? (
        <div className="main-open-menu-mobile">
          <div className="open-menu-mobile">
            <div>
              <img
                src="images/icon-close.svg"
                alt=""
                onClick={clickHandlerMobileMenu}
                role="button"
              />
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};
