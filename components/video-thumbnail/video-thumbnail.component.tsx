import styles from "./video-thumbnail.module.css";

const url = "https://i4.ytimg.com/vi/{video_id}/mqdefault.jpg";

type VideoThumbnailProps = {
  title: string;
  id: string;
};

export function VideoThumbnail({ title, id }: VideoThumbnailProps) {
  return (
    <>
      <div className={styles.frame}>
        <div className={styles.thumbnail}>
          <img
            className={styles.thumbnail_src}
            src={`https://i4.ytimg.com/vi/${id}/mqdefault.jpg`}
            alt=""
          />
        </div>
        <div className={styles.title}> This is title </div>
      </div>
    </>
  );
}
