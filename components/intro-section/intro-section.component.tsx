import IntroSubject from "../intro-subject/intro-subject.component";

import styles from "./intro-section.module.css";

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <IntroSubject />

      <div className={styles.intro_wrapper}>
        <h2 className={styles.intro_heading}>AZ CREATION STUDIO</h2>
        <p className={styles.intro_text}>
          I am a self taught designer. Currently a Filmmaker as a career path.
          I&#39;ve designing experience of over 4 Years. I started at the early
          age 16. Fascinated by Photography, Filemaking and Designing. Since,
          then I have never stopped learning
        </p>
      </div>
    </section>
  );
}
