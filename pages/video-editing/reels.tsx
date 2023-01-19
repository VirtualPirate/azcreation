import Head from "next/head";
import VideosSection from "../../components/videos-section/videos-section.component";

const drive_reels = [
  "https://drive.google.com/file/d/1yKrcbVyHhsl0BKdnYecNq4pzP2S7zQVC/preview",
  "https://drive.google.com/file/d/1mSD7GjzF5dSjyH0im5KOuZb7K0Lj0TgK/preview",
  "https://drive.google.com/file/d/1gDNqD9-IQIZo_gHGJrxAfjwVP_ecjX4q/preview",
];

export default function Reels() {
  return (
    <>
      <Head>
        <title>Reels</title>
        <meta name="description" content="Reels edited are here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VideosSection title="REELS" videos={drive_reels} />
    </>
  );
}
