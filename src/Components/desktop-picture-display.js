import { useEffect, useState } from "react";
import { DesktopModal } from "./desktop-modal";

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

  useEffect(() => {
    let modalTrigger = document.getElementById("modal-trigger");
    let modalDiv = document.querySelector(".modal-div");
    let close = document.getElementById("close");

    modalTrigger.addEventListener("click", function () {
      modalDiv.style.display = "block";
    });
    window.addEventListener("click", function (e) {
      if (e.target === close) {
        modalDiv.style.display = "none";
      }
    });
  });

  return (
    <div className="desktop-picture-div">
      <div onClick={clickHandlerDesktopPicture}>
        <img src={seeMobilePicture} alt="" id="modal-trigger" />
        {desktopPictures.map((picture) => (
          <div className="map-div-pictures" key={picture.src}>
            <img src={picture.src} alt="" />
          </div>
        ))}
      </div>
      <div className="modal-div">
        <DesktopModal />
      </div>
    </div>
  );
};
