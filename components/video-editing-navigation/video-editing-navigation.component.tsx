import { useEffect, useRef } from "react";
import Link from "next/link";

import styles from "./video-editing-navigation.module.css";

export default function VideoEditingNavigation() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    leftRef.current?.addEventListener("mouseenter", () => {
      containerRef.current?.classList.add(styles.hover_left);
    });

    leftRef.current?.addEventListener("mouseleave", () => {
      containerRef.current?.classList.remove(styles.hover_left);
    });

    rightRef.current?.addEventListener("mouseenter", () => {
      containerRef.current?.classList.add(styles.hover_right);
    });

    rightRef.current?.addEventListener("mouseleave", () => {
      containerRef.current?.classList.remove(styles.hover_right);
    });
  });

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${styles.css_variables}`}
    >
      <div ref={leftRef} className={`${styles.split} ${styles.left}`}>
        <h1 className={styles.h1}>REELS</h1>
        <Link href="/video-editing/reels" className={styles.button}>
          VIEW
        </Link>
      </div>
      <div ref={rightRef} className={`${styles.split} ${styles.right}`}>
        <h1 className={styles.h1}>VIDEOS</h1>
        <Link href="/video-editing/videos" className={styles.button}>
          VIEW
        </Link>
      </div>
    </div>
  );
}
