import Head from "next/head";

import SkillsSection from "../components/skills-section/skills-section.component";
import DeskNav from "../components/desk-nav/desk-nav.component";
import FooterContacts from "../components/footer-contacts/footer-contacts.component";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta name="description" content="Skill page for the owner portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DeskNav />
      <SkillsSection />
      <FooterContacts />
    </>
  );
}
