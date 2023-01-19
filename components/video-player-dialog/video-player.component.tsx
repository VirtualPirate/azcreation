import styles from "./video-player-dialog.module.css";

type VideoInfo = {
  title: string;
  id: string;
};

type VideoPlayerProps = {
  current: VideoInfo;
  children: JSX.Element | JSX.Element[];
};

export default function VideoPlayer({ current, children }: VideoPlayerProps) {
  return <></>;
}
