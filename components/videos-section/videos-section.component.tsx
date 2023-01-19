import { useRef, useState, MouseEvent, useEffect } from "react";

import DeskNav from "../desk-nav/desk-nav.component";
import styles from "./videos-section.module.css";

type VideosProps = {
  videos: Array<string>;
  title: string;
};

export default function VideosSection({ title, videos }: VideosProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  const videoDialog = useRef<HTMLDialogElement | null>(null);
  const dialogVideo = useRef<HTMLIFrameElement | null>(null);

  function stopVideo() {
    dialogVideo.current?.setAttribute("src", currentVideo);
  }

  function openModal() {
    setIsOpen(true);
    videoDialog.current?.showModal();
  }

  function closeModal() {
    setIsOpen(false);
    videoDialog.current?.close();
    stopVideo();
  }

  function dialogClickEvent(event: MouseEvent<HTMLDialogElement>) {
    const rect = videoDialog.current?.getBoundingClientRect();

    const clickedInDialog =
      rect!.top <= event.clientY &&
      event.clientY <= rect!.top + rect!.height &&
      rect!.left <= event.clientX &&
      event.clientX <= rect!.left + rect!.width;

    if (clickedInDialog === false) closeModal();
  }

  return (
    <>
      <DeskNav />

      <h1 className={styles.h1}>{title}</h1>
      <section className={styles.videos}>
        {videos.map((video, index) => (
          <div key={index} className={styles.video_container}>
            <iframe
              key={index}
              className={styles.video}
              src={video}
              allow="autoplay"
            ></iframe>

            <div
              className={styles.video_overlay}
              onClick={() => {
                setCurrentVideo(video);
                openModal();
              }}
            ></div>
          </div>
        ))}
      </section>

      <dialog
        ref={videoDialog}
        className={styles.gallery_dialog}
        onClick={dialogClickEvent}
      >
        <iframe
          className={styles.dialog_video}
          src={currentVideo}
          allow="autoplay"
          ref={dialogVideo}
        ></iframe>
      </dialog>
    </>
  );
}
