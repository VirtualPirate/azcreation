import Head from "next/head";

import DeskNav from "../../components/desk-nav/desk-nav.component";
import VideoEditingNavigation from "../../components/video-editing-navigation/video-editing-navigation.component";

export default function VideoEditing() {
  return (
    <>
      <Head>
        <title>Video Editing</title>
        <meta
          name="description"
          content="This is the navigation page for videos editing content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DeskNav />
      <VideoEditingNavigation />
    </>
  );
}
