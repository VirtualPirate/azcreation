import styles from "./youtube-embed.module.css";

type YoutubeEmbedProps = {
  id: string;
};

export default function YoutubeEmbed({ id }: YoutubeEmbedProps) {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.video_frame}
        // width="853"
        // height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
