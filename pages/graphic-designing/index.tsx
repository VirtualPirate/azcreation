import Head from "next/head";

import DeskNav from "../../components/desk-nav/desk-nav.component";
import GraphicDesigningNavigation from "../../components/graphic-designing-navigation/graphic-desiging-navigation.component";

export default function GraphicDesigning() {
  return (
    <>
      <Head>
        <title>Graphic Designing</title>
        <meta
          name="description"
          content="This is the navigation page for videos editing content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DeskNav />
      <GraphicDesigningNavigation />
    </>
  );
}
