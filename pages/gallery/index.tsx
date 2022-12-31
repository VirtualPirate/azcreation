import GalleryCarousel from "../../components/gallery-carousel/gallery-carousel.component";
import { useState, useRef, MouseEvent } from "react";
import DeskNav from "../../components/desk-nav/desk-nav.component";

import styles from "./gallery.module.css";

import fs from "fs";

type GalleryProps = {
  images: Array<string>;
};

export default function Gallery({ images }: GalleryProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const galleryDialog = useRef<HTMLDialogElement | null>(null);

  function openModal() {
    setIsOpen(true);
    galleryDialog.current?.showModal();
  }

  function closeModal() {
    setIsOpen(false);
    galleryDialog.current?.close();
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
      <DeskNav />
      <div>
        {modalIsOpen ? (
          <div className={styles.close_button} onClick={closeModal}>
            &#10006;
          </div>
        ) : (
          ""
        )}

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
                >
                  <img src={`./graphics/manipulation/${image}`} alt="" />
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

export async function getStaticProps() {
  const images = fs.readdirSync("public/graphics/manipulation/");

  return { props: { images } };
}
