import { useState } from "react";

export const TextComponent = () => {
  const [productAmount, setProductAmount] = useState(125);
  const [productQuantity, setProductQuantity] = useState(1);

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

  return (
    <div className="text-component-div">
      <h3 className="sneaker-h3">Sneaker Company</h3>
      <h1 className="sneaker-h1">Fall limited Editon Sneakers</h1>
      <p className="sneaker-p">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="text-row">
        <div>
          <h2>
            ${productAmount}.00 <span>50%</span>
          </h2>
        </div>
        <div>
          <p>
            <del>$250.00</del>
          </p>
        </div>
      </div>
      <button className="text-first-button">
        <img
          src="images/icon-minus.svg"
          alt=""
          className="minus-image"
          onClick={clickHandlerPrev}
        />
        <span className="prod-quantity">{productQuantity}</span>
        <img
          src="images/icon-plus.svg"
          alt=""
          className="plus-image"
          onClick={clickHandlerNext}
        />
      </button>
      <button className="text-second-button">
        <img src="images/icon-cart.svg" alt="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};
