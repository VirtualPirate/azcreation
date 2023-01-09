import { useEffect, useRef } from "react";

import SkillBox from "../skill-box/skill-box.component";

import { SkillType } from "../../models/skillset.model";
import styles from "./skills-section.module.css";
import skills from "../../models/skillset.model";

import anime from "animejs/lib/anime.min.js";

type SkillPropType = {
  skill: SkillType;
  delay: number;
};

function Skill({ skill, delay }: SkillPropType) {
  const skillBarRef = useRef<HTMLDivElement | null>(null);

  const animationDelay = { opacity: 0, animationDelay: `${delay}ms` };

  return (
    <div className={styles.skill} style={{ color: skill.border_color }}>
      <SkillBox {...skill} delay={delay} />
      <img
        src={`/graphics/software_logo/${skill.logo}`}
        className={styles.skill_logo}
        style={animationDelay}
      />
      <div className={styles.skill_name} style={animationDelay}>
        {skill.name}
      </div>
      <div className={styles.skill_level} style={animationDelay}>
        <span>Skill:</span>
        <div className={styles.skill_bar}>
          <div
            ref={skillBarRef}
            className={`${styles.skill_meter} ${
              styles[`skill_meter_${skill.skillLevel}`]
            }`}
            style={{ backgroundColor: skill.border_color }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className={styles.skills_section}>
      {skills.map((skill, index) => {
        return <Skill skill={skill} key={index} delay={50 * index} />;
      })}
    </section>
  );
}
