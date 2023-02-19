import styles from "./gallery-carousel.module.css";

import { useContext, useEffect, useRef, useState } from "react";

import { GalleryDialogContext } from "../../contexts/gallery-dialog.context";

import { useSwipeable } from "react-swipeable";

type GalleryCarouselProps = {
  images: Array<string>;
  index?: number;
};

export default function GalleryCarousel({
  images,
  index = 0,
}: GalleryCarouselProps) {
  const prev_button = useRef<HTMLButtonElement | null>(null);
  const next_button = useRef<HTMLButtonElement | null>(null);

  const imagesRef = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { modalState, setModalState } = useContext(GalleryDialogContext);

  const swipeHandler = useSwipeable({
    onSwipedLeft: (e) => nextButtonEvent(),
    onSwipedRight: (e) => prevButtonEvent(),
  });

  useEffect(() => {
    imagesRef.current.map((image) => {
      image?.removeAttribute("data-active");
    });
    const validIndex = returnValidIndex(index);
    imagesRef.current[validIndex]?.setAttribute("data-active", "");
    setActiveIndex(validIndex);
  }, [index]);

  function returnValidIndex(index: number) {
    if (index < 0) index = imagesRef.current?.length - 1;
    if (index >= imagesRef.current?.length) index = 0;
    return index;
  }

  function changeImage(offset: number) {
    let newIndex = returnValidIndex(activeIndex + offset);
    imagesRef.current[newIndex]?.setAttribute("data-active", "");
    imagesRef.current[activeIndex]?.removeAttribute("data-active");
    setActiveIndex(newIndex);
  }

  function prevButtonEvent() {
    const offset = -1;
    changeImage(offset);
  }
  function nextButtonEvent() {
    const offset = 1;
    changeImage(offset);
  }

  function closeGalleryModal() {
    setModalState(false);
  }

  return (
    <div className={styles.carousel} data-carousel>
      <button className={styles.cross_button} onClick={closeGalleryModal}>
        <svg
          className={styles.cross_icon}
          // style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M523.662 510.979l345.262-346.825c6.308-6.336 6.284-16.586-0.052-22.895-6.337-6.307-16.586-6.286-22.895 0.052l-345.158 346.721-345.159-346.722c-6.308-6.336-16.558-6.36-22.895-0.052s-6.36 16.558-0.052 22.895l345.263 346.826-345.263 346.824c-6.307 6.336-6.285 16.586 0.052 22.895 3.158 3.143 7.291 4.716 11.422 4.716 4.156 0 8.31-1.59 11.473-4.768l345.159-346.721 345.159 346.721c3.164 3.177 7.319 4.768 11.473 4.768 4.131 0 8.263-1.571 11.422-4.716 6.336-6.308 6.36-16.558 0.052-22.895l-345.263-346.824z" />
        </svg>
      </button>
      <button
        className={`${styles.carousel_button} ${styles.carousel_button_prev}`}
        data-carousel-button="prev"
        ref={prev_button}
        onClick={prevButtonEvent}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="none"
          width="15"
          height="27"
          viewBox="0 0 15 27"
        >
          <g fill-rule="evenodd">
            <path
              fill-rule="nonzero"
              d="M14.258 1.53L13.198.47-.061 13.728l13.259 13.258 1.06-1.06L2.061 13.728z"
            ></path>
          </g>
        </svg>
      </button>
      <button
        className={`${styles.carousel_button} ${styles.carousel_button_next}`}
        data-carousel-button="next"
        ref={next_button}
        onClick={nextButtonEvent}
      >
        <svg
          fill="currentColor"
          stroke="none"
          width="15"
          height="27"
          viewBox="0 0 15 27"
        >
          <g fill-rule="evenodd">
            <path
              fill-rule="nonzero"
              d="M.198 25.926l1.06 1.06 13.259-13.258L1.258.47.198 1.53l12.197 12.198z"
            ></path>
          </g>
        </svg>
      </button>
      <ul data-slides {...swipeHandler}>
        {images.map((image, index) => (
          <li
            key={index}
            className={styles.slide}
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <img src={image} alt="Image" />
          </li>
        ))}
      </ul>
    </div>
  );
}
