import { useEffect, useRef } from "react";

import { SkillType } from "../../models/skillset.model";
import anime from "animejs/lib/anime.min.js";

import styles from "./skill-box.module.css";

export interface SkillBoxPropType extends SkillType {
  delay: number;
}

export default function SkillBox({
  name,
  logo,
  skillLevel,
  border_color,
  gradient_color,
  glow_matrix,
  delay,
}: SkillBoxPropType) {
  const gradientPathRef = useRef<SVGPathElement | null>(null);
  const borderPathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const id_name = name.replace(" ", "_");

  useEffect(() => {
    const targets = [gradientPathRef.current, borderPathRef.current];
    const easing = "cubicBezier(0.8, 0.62, 0.85, 1.34)";

    function morphPathAnim() {
      anime({
        targets: targets,
        d: [
          { value: "M75 375 L75 100 L525 95 L525 375 H85Z" },
          { value: "M85 375 L48 123 L609 48 L525 375 H85Z" },
        ],
        duration: 500,
        complete: () => {},
        easing: "cubicBezier(0.8, 0.62, 0.85, 1.34)",
      });
    }

    gradientPathRef.current!.style.opacity = "0";
    borderPathRef.current!.style.opacity = "0";

    anime({
      targets: targets,
      opacity: 1,
      duration: 500,
      complete: morphPathAnim,
      delay: delay,
      easing: easing,
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width="665"
      height="431"
      viewBox="0 0 665 431"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.skill_box}
    >
      <g filter={`url(#filter${id_name}_d_221_162)`}>
        <path
          ref={gradientPathRef}
          // d="M85 375 L48 123 L609 48 L525 375 H85Z"
          d="M75 375 L75 100 L525 95 L525 375 H85Z"
          fill={`url(#paint${id_name}_linear_221_162)`}
        />
        <path
          ref={borderPathRef}
          // d="M85 375 L48 123 L609 48 L525 375 H85Z"
          d="M75 375 L75 100 L525 95 L525 375 H85Z"
          stroke={border_color}
          strokeWidth="4"
        />
      </g>
      <defs>
        <filter
          id={`filter${id_name}_d_221_162`}
          x="0.681641"
          y="0.928223"
          width="663.635"
          height="430.072"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values={glow_matrix} />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_162"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_162"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`paint${id_name}_linear_221_162`}
          x1="612"
          y1="46"
          x2="86"
          y2="377"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradient_color} stopOpacity="0.6" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
