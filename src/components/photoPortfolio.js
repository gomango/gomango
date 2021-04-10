import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { photos } from "./media-links/photos";

function PhotoPortfolio() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div className="col-sm-3 my-3">
              <img
                src={photo.src}
                className="img-fluid"
                onClick={() => setToggler(!toggler)}
                alt="wedding-images"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button> */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "/wedding_img/wed_img_3.jpg",
          "/wedding_img/wed_img_4.jpg",
          "/wedding_img/wed_img_5.jpg",
          "/wedding_img/wed_img_6.jpg",
          "/wedding_img/wed_img_7.jpg",
          "/wedding_img/wed_img_8.jpg",
          "/wedding_img/wed_img_9.jpg",
          "/wedding_img/wed_img_10.jpg",
          "/wedding_img/wed_img_11.jpg",
          "/wedding_img/wed_img_12.jpg",
          "/wedding_img/wed_img_13.jpg",
          "/wedding_img/wed_img_14.jpg",
          "/wedding_img/wed_img_16.jpg",
          "/wedding_img/wed_img_18.jpg",
          "/wedding_img/wed_img_19.jpg",
          "/wedding_img/wed_img_20.jpg",
          "/wedding_img/wed_img_21.jpg",
          "/wedding_img/wed_img_22.jpg",
          "/wedding_img/wed_img_23.jpg",
          "/wedding_img/wed_img_24.jpg",
          "/wedding_img/wed_img_27.jpg",
          "/wedding_img/wed_img_15.jpg",
          "/wedding_img/wed_img_1.jpg",
          "/wedding_img/wed_img_2.jpg",
          "/wedding_img/wed_img_25.jpg",
          "/wedding_img/wed_img_26.jpg",
        ]}
      />
    </>
  );
}

export default PhotoPortfolio;
