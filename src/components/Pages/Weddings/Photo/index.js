import React from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../../media-links/photos";
import { useComponentLogic } from "./hooks";

function Photo() {
  const { openLightbox, closeLightbox, currentImage, viewerIsOpen } =
    useComponentLogic();
  return (
    <div className="container">
      <div className="photo">
        <Gallery photos={photos} onClick={openLightbox} />
      </div>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Photo;
