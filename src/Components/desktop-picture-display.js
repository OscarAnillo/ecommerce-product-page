import { useEffect, useState } from "react";

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

  useEffect(() => {
    let divClass = document.getElementsByClassName("map-div-pictures");
    divClass[0].addEventListener("click", function () {
      this.classList.add("active");
      divClass[1].className = "map-div-pictures";
      divClass[2].className = "map-div-pictures";
      divClass[3].className = "map-div-pictures";
    });
    divClass[1].addEventListener("click", function () {
      this.classList.add("active");
      divClass[2].className = "map-div-pictures";
      divClass[3].className = "map-div-pictures";
      divClass[0].className = "map-div-pictures";
    });
    divClass[2].addEventListener("click", function () {
      this.classList.add("active");
      divClass[3].className = "map-div-pictures";
      divClass[0].className = "map-div-pictures";
      divClass[1].className = "map-div-pictures";
    });
    divClass[3].addEventListener("click", function () {
      this.classList.add("active");
      divClass[0].className = "map-div-pictures";
      divClass[1].className = "map-div-pictures";
      divClass[2].className = "map-div-pictures";
    });
  }, []);

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
