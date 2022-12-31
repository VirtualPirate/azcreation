import { ThemeContext } from "../../contexts/theme.context";
import { useContext } from "react";

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

  return (
    <div className={styles.intro_box}>
      <div className={`${styles.box_stroke} ${styles.box}`}></div>
      <div className={`${styles.glow_box} ${styles.box}`}></div>

      <img
        src={themeAssets[theme].subjectUp}
        alt=""
        className={`${styles.subject_up} ${styles.subject}`}
      />
      <img
        src={themeAssets[theme].subjectDown}
        alt=""
        className={`${styles.subject_down} ${styles.subject}`}
      />
    </div>
  );
}
