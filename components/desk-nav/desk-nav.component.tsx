import Link from "next/link";

import styles from "./desk-nav.module.css";

import ThemeToggleBar from "../theme-toggle-bar/theme-toggle-bar.compoent";
import DeskNavRect from "../desk-nav-rect/desk-nav-rect.component";
import DeskNavItems from "../desk-nav-items/desk-nav-items.component";
import NavBars from "../nav-bars/nav-bars.component";
import SideNav from "../side-nav/side-nav.component";

export default function DeskNav() {
  return (
    <nav className={styles.desk_nav}>
      <DeskNavRect />
      <SideNav />
      <Link href="/">
        <img className={styles.nav_logo} src="/graphics/logo.png" alt="" />
      </Link>
      <div className={styles.right_content}>
        <DeskNavItems />
        <ThemeToggleBar />
      </div>
    </nav>
  );
}
