import styles from "./gallery-carousel.module.css";

import { useEffect, useRef, useState } from "react";

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

  return (
    <div className={styles.carousel} data-carousel>
      <button
        className={`${styles.carousel_button} ${styles.carousel_button_prev}`}
        data-carousel-button="prev"
        ref={prev_button}
        onClick={prevButtonEvent}
      >
        &#10094;
      </button>
      <button
        className={`${styles.carousel_button} ${styles.carousel_button_next}`}
        data-carousel-button="next"
        ref={next_button}
        onClick={nextButtonEvent}
      >
        &#10095;
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
