import styles from "./nav-bars.module.css";

export default function NavBars(props: any) {
  return (
    <div {...props} className={styles.nav_bars}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
