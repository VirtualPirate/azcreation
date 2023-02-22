import styles from "./gallery.module.css";

import GalleryCarousel from "../gallery-carousel/gallery-carousel.component";
import { GalleryDialogContext } from "../../contexts/gallery-dialog.context";
import { useState, useRef, MouseEvent, useContext, useEffect } from "react";

type GalleryProps = {
  title: string;
  images: Array<string>;
};

export default function Gallery({ title, images }: GalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const { modalState, setModalState } = useContext(GalleryDialogContext);

  const galleryDialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalState(false);
  }, []);

  useEffect(() => {
    if (modalState && !galleryDialog.current?.open)
      // if modal is open
      galleryDialog.current?.showModal();
    else {
      galleryDialog.current?.close();
    }
  }, [modalState]);

  function openModal() {
    setModalState(true);
    // galleryDialog.current?.showModal();
  }

  function closeModal() {
    setModalState(false);
    // galleryDialog.current?.close();
  }

  function dialogClickEvent(event: MouseEvent<HTMLDialogElement>) {
    const rect = galleryDialog.current?.getBoundingClientRect();

    const clickedInDialog =
      rect!.top <= event.clientY &&
      event.clientY <= rect!.top + rect!.height &&
      rect!.left <= event.clientX &&
      event.clientX <= rect!.left + rect!.width;

    if (clickedInDialog === false) closeModal();
  }

  return (
    <>
      <h1 className={styles.h1}> {title} </h1>
      <div>
        {/* {modalIsOpen ? (
          <div className={styles.close_button} onClick={closeModal}>
            &#10006;
          </div>
        ) : (
          ""
        )} */}

        <section className={styles.gallery_section}>
          <div className={`${styles.photo_editing_gallery} ${styles.gallery}`}>
            {/* <h1 className={styles.h1}>MANIPULATIONS</h1> */}
            <div className={styles.gallery_items}>
              {images.map((image, index) => (
                <div
                  className={styles.gallery_item}
                  onClick={() => {
                    setImageIndex(index);
                    openModal();
                  }}
                  key={index}
                >
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <dialog
          ref={galleryDialog}
          className={styles.gallery_dialog}
          onClick={dialogClickEvent}
        >
          <GalleryCarousel images={images} index={imageIndex} />
        </dialog>
      </div>
    </>
  );
}
