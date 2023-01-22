import { ThemeContext, ThemeType } from "../../contexts/theme.context";
import { useContext, useState, useEffect, useRef } from "react";

import anime from "animejs/lib/anime.min.js";

import styles from "./intro-subject.module.css";

const themeAssets = {
  red: {
    subjectUp: "./graphics/red-subject-up.png",
    subjectDown: "./graphics/red-subject-down.png",
  },

  green: {
    subjectUp: "./graphics/strange-up.png",
    subjectDown: "./graphics/strange-down.png",
  },
};

export default function IntroSubject() {
  const { theme } = useContext(ThemeContext);
  const [themeState, setThemeState] = useState<ThemeType>(theme);
  const introBoxRef = useRef<HTMLDivElement | null>(null);

  function popAnimation() {
    if (theme === themeState) return;

    anime({
      targets: introBoxRef.current,
      scale: 0,
      opacity: 0,
      duration: 500,
      easing: "cubicBezier(0, 0, 0.28, 1)",
      complete: () => {
        setThemeState(theme);
        anime({
          targets: introBoxRef.current,
          scale: 1,
          opacity: 1,

          duration: 500,
          easing: "cubicBezier(0, 0, 0.28, 1)",
        });
      },
    });
  }

  function fadeAnimation() {
    if (theme === themeState) return;

    anime({
      targets: introBoxRef.current,
      translateX: -100,
      // scale: 0,
      opacity: 0,
      duration: 500,
      easing: "cubicBezier(0, 0, 0.28, 1)",
      complete: () => {
        setThemeState(theme);
        // introBoxRef!.current!.style!.transform = "translateX(100px)";
        anime({
          targets: introBoxRef.current,
          translateX: 0,
          opacity: 1,

          duration: 500,
          easing: "cubicBezier(0, 0, 0.28, 1)",
        });
      },
    });
  }

  useEffect(fadeAnimation, [theme]);

  return (
    <div ref={introBoxRef} className={styles.intro_box}>
      <div className={`${styles.box_stroke} ${styles.box}`}></div>
      <div className={`${styles.glow_box} ${styles.box}`}></div>

      <img
        src={themeAssets[themeState].subjectUp}
        alt=""
        className={`${styles.subject_up} ${styles.subject}`}
      />
      <img
        src={themeAssets[themeState].subjectDown}
        alt=""
        className={`${styles.subject_down} ${styles.subject}`}
      />
    </div>
  );
}
