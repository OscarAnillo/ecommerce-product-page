import { useState } from "react";

const desktopPictures = [
  { src: "images/image-product-1.jpg" },
  { src: "images/image-product-2.jpg" },
  { src: "images/image-product-3.jpg" },
  { src: "images/image-product-4.jpg" },
];

export const DesktopModal = () => {
  const [displayPictureModal, setDisplayPictureModal] = useState(0);

  const clickHandlerModalPicture = (e) => {
    setDisplayPictureModal(e.target.src);
  };

  return (
    <div id="modal-container">
      <div id="modal" onClick={clickHandlerModalPicture}>
        <img src={displayPictureModal} alt="" />
        {desktopPictures.map((picture) => (
          <div className="map-div-pictures" key={picture.src}>
            <img src={picture.src} alt="" />
          </div>
        ))}
        <div id="close">x</div>
      </div>
    </div>
  );
};
