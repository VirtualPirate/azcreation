import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";

import styles from "./desk-nav-rect.module.css";

export default function DeskNavRect() {
  const { theme } = useContext(ThemeContext);
  return <div key={theme} className={styles.sliced_rect}></div>;
}
