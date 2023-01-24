import { useState } from "react";

const mobilePictures = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

export const MobilePictureDisplay = () => {
  const [seeMobilePicture, setSeeMobilePicture] = useState(0);

  const clickHandlerPrev = () => {
    setSeeMobilePicture((prevState) => prevState - 1);
  };

  const clickHandlerNext = () => {
    setSeeMobilePicture((prevState) => prevState + 1);
  };

  return (
    <div className="mobile-picture-div">
      <button
        onClick={clickHandlerPrev}
        disabled={seeMobilePicture === 0}
        className="prev-mobile"
      >
        <img src="images/icon-previous.svg" alt="" />
      </button>
      <img src={mobilePictures[seeMobilePicture]} alt="" className="products" />
      <button
        onClick={clickHandlerNext}
        disabled={seeMobilePicture === 3}
        className="next-mobile"
      >
        <img src="images/icon-next.svg" alt="" />
      </button>
    </div>
  );
};
