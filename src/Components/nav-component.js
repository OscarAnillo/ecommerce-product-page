export const NavBarComponent = ({
  showMobileMenu,
  clickHandlerMobileMenu,
  addCart,
  showCartMenu,
  showCartMenuHandler,
  productAmount,
}) => {
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
        {addCart.length !== 0 && (
          <div className="cart-number">
            {addCart.map((x) => (
              <p key={x.id}>{x.value}</p>
            ))}
          </div>
        )}
        <img
          src="images/icon-cart.svg"
          alt=""
          className="mobile-cart"
          onClick={showCartMenuHandler}
        />
        <img src="images/image-avatar.png" alt="" className="mobile-avatar" />
        {showCartMenu && (
          <div className="cart-menu-mobile">
            <div>
              <p className="cart-p">Cart</p>
              <hr />
              {addCart.length !== 0 ? (
                <div className="cart-menu-row">
                  <div>
                    <img
                      src="images/image-product-1-thumbnail.jpg"
                      alt=""
                      className="thumbnail"
                    />
                  </div>
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      $125.00 x{" "}
                      {addCart.map((x) => (
                        <span>{x.value}</span>
                      ))}
                      = <strong>{productAmount}.00</strong>
                    </p>
                  </div>
                  <div>
                    <img src="images/icon-delete.svg" alt="" />
                  </div>
                </div>
              ) : (
                <p>Your cart is empty</p>
              )}
              {addCart.length !== 0 && (
                <button className="checkout-btn">Checkout</button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="desktop">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="desktop list-items">
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
        <img src="images/image-avatar.png" alt="" className="desktop-avatar" />
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
