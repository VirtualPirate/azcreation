import { useSwipeable } from "react-swipeable";
import { useContext, useState } from "react";
import Link from "next/link";

import { SideNavContext } from "../../contexts/side-nav.context";
import NavBars from "../nav-bars/nav-bars.component";
import SideNavItems from "./side-nav-items.component";

import styles from "./side-nav.module.css";

export default function SideNav() {
  const { navState, toggleNavState } = useContext(SideNavContext);

  const swipeHandler = useSwipeable({
    onSwipedLeft: (e) => toggleNavState(),
  });

  return (
    <>
      <NavBars onClick={toggleNavState} />
      <nav
        className={`${styles.side_nav} ${navState ? styles.show : ""}`}
        {...swipeHandler}
      >
        <div className={styles.side_nav_sticky}>
          {/* <button onClick={toggleSideNavState}>
          <img
            src="./graphics/xmark-solid.svg"
            alt="cross mark"
            className={styles.close_side_nav_btn}
          />
        </button>
        <img
          src="./graphics/side-nav-bg.svg"
          className={styles.side_nav_bg}
          alt=""
        /> */}
          <SideNavItems />
        </div>
      </nav>
    </>
  );
}
