import styles from "./theme-toggle-bar.module.css";

import { useState, useRef, useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/theme.context";

export default function ThemeToggleBar() {
  const stateRef = useRef<HTMLDivElement>(null);
  const [barState, setBarState] = useState<boolean>(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  function toggleTheme() {
    if (theme === "red") setTheme("green");
    else setTheme("red");
  }

  return (
    <div
      className={styles.bar}
      onClick={() => {
        setBarState(!barState);
        toggleTheme();
      }}
    >
      <div
        className={`${styles.bar_state} ${styles[`bar_state_${barState}`]}`}
        ref={stateRef}
      ></div>
    </div>
  );
}
