import Link from "next/link";
import { useContext } from "react";

import { SideNavContext } from "../../contexts/side-nav.context";
import { ThemeContext } from "../../contexts/theme.context";
import styles from "./side-nav-items.module.css";

export default function SideNavItems() {
  const { navState, toggleNavState } = useContext(SideNavContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.side_nav_items_wrapper}>
      <div className={styles.logo_card_wrapper}>
        <div className={`${styles.logo_card} ${navState ? styles.show : ""}`}>
          <img src="/graphics/logo.png" className={styles.logo} alt="" />
        </div>
      </div>
      <div className={styles.items_card_wrapper}>
        <div className={styles.items_card}>
          <ul className={styles.side_nav_items}>
            <Link href="/" onClick={toggleNavState}>
              <li>HOME</li>
            </Link>
            <Link href="/skills" onClick={toggleNavState}>
              <li>SKILLS</li>
            </Link>
            <Link href="/gallery" onClick={toggleNavState}>
              <li>ASSETS</li>
            </Link>
            {/* <Link href="/gallery" onClick={toggleNavState}>
              <li>ABOUT</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
