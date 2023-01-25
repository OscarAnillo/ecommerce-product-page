import { useState } from "react";

const desktopPictures = [
  { src: "images/image-product-1.jpg" },
  { src: "images/image-product-2.jpg" },
  { src: "images/image-product-3.jpg" },
  { src: "images/image-product-4.jpg" },
];

export const DesktopPictureDisplay = () => {
  const [seeMobilePicture, setSeeMobilePicture] = useState(
    desktopPictures[0].src
  );

  const clickHandlerDesktopPicture = (e) => {
    setSeeMobilePicture(e.target.src);
  };
  return (
    <div className="desktop-picture-div">
      <div onClick={clickHandlerDesktopPicture}>
        <img src={seeMobilePicture} alt="" />
        {desktopPictures.map((picture) => (
          <div className="map-div-pictures">
            <img src={picture.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
