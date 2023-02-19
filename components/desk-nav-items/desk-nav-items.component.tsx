import styles from "./desk-nav-items.module.css";
import Link from "next/link";

export default function DeskNavItems() {
  return (
    <div className={styles.nav_items}>
      <Link href="/">
        <span className={styles.nav_item}>HOME</span>
      </Link>
      <Link href="/skills">
        <span className={styles.nav_item}>SKILLS</span>
      </Link>
      <Link href="/gallery">
        <span className={styles.nav_item}>ASSETS</span>
      </Link>
      {/* <Link href="/gallery">
        <span className={styles.nav_item}>ABOUT</span>
      </Link> */}
    </div>
  );
}
