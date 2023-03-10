import Head from "next/head";
import { Inter } from "@next/font/google";

import DeskNav from "../components/desk-nav/desk-nav.component";
import IntroSection from "../components/intro-section/intro-section.component";
import FooterContacts from "../components/footer-contacts/footer-contacts.component";
import GalleryNavSection from "../components/gallery-nav-section/gallery-nav-section.component";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AZcreation</title>
        <meta
          name="description"
          content="This is the home page of AZCreation Studio portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preload" as="image" href="/graphics/background-red.png" />
        <link rel="preload" as="image" href="/graphics/red-subject-down.png" />
        <link rel="preload" as="image" href="/graphics/red-subject-up.png" />
        <link rel="preload" as="image" href="/graphics/strange-down.png" />
        <link rel="preload" as="image" href="/graphics/strange-up.png" />
      </Head>
      <DeskNav />
      <IntroSection />
      <GalleryNavSection />
      <FooterContacts />
    </>
  );
}
