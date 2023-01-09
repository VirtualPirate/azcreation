export type SkillType = {
  name: string;
  logo: string;
  skillLevel: 1 | 2 | 3 | 4;
  border_color: string;
  gradient_color: string;
  glow_matrix: string;
};

const skills: Array<SkillType> = [
  {
    name: "PREMIERE PRO",
    logo: "premiere.svg",
    skillLevel: 4,
    border_color: "#E57BF7",
    gradient_color: "#8E23D0",
    glow_matrix: "0 0 0 0 0.898039 0 0 0 0 0.482353 0 0 0 0 0.968627 0 0 0 1 0",
  },
  {
    name: "PHOTOSHOP",
    logo: "photoshop.svg",
    skillLevel: 4,
    border_color: "#01C8FF",
    gradient_color: "#23A7D0",
    glow_matrix: "0 0 0 0 0.00392157 0 0 0 0 0.784314 0 0 0 0 1 0 0 0 1 0",
  },

  {
    name: "ILLUSTRATOR",
    logo: "illustrator.svg",
    skillLevel: 2,
    border_color: "#F87D0C",
    gradient_color: "#D07623",
    glow_matrix:
      "0 0 0 0 0.972549 0 0 0 0 0.490196 0 0 0 0 0.0470588 0 0 0 1 0",
  },

  {
    name: "AFTER EFFECTS",
    logo: "aftereffects.svg",
    skillLevel: 3,
    border_color: "#D192FE",
    gradient_color: "#6F23D0",
    glow_matrix: "0 0 0 0 0.819608 0 0 0 0 0.572549 0 0 0 0 0.996078 0 0 0 1 0",
  },

  {
    name: "LIGHTROOM",
    logo: "lightroom.svg",
    skillLevel: 4,
    border_color: "#B5D2E4",
    gradient_color: "#23D0BB",
    glow_matrix: "0 0 0 0 0.709804 0 0 0 0 0.823529 0 0 0 0 0.894118 0 0 0 1 0",
  },

  {
    name: "ANIMATE",
    logo: "animate.svg",
    skillLevel: 3,
    border_color: "#FF4A1D",
    gradient_color: "#D02D23",
    glow_matrix: "0 0 0 0 1 0 0 0 0 0.290196 0 0 0 0 0.113725 0 0 0 1 0",
  },

  {
    name: "AUDITION",
    logo: "audition.svg",
    skillLevel: 3,
    border_color: "#03E2BB",
    gradient_color: "#03E2BB",
    glow_matrix:
      "0 0 0 0 0.0117647 0 0 0 0 0.886275 0 0 0 0 0.733333 0 0 0 1 0",
  },

  {
    name: "CANVA",
    logo: "canva.png",
    skillLevel: 4,
    border_color: "#54A2FE",
    gradient_color: "#305F95",
    glow_matrix: "0 0 0 0 0.329412 0 0 0 0 0.635294 0 0 0 0 0.996078 0 0 0 1 0",
  },

  {
    name: "MAYA",
    logo: "maya.png",
    skillLevel: 3,
    border_color: "#33BBCB",
    gradient_color: "#23C6D0",
    glow_matrix: "0 0 0 0 0.2 0 0 0 0 0.733333 0 0 0 0 0.796078 0 0 0 1 0",
  },

  {
    name: "Z BRUSH",
    logo: "zbrush.png",
    skillLevel: 1,
    border_color: "#FBFBFB",
    gradient_color: "#FFFFFF",
    glow_matrix: "0 0 0 0 0.984314 0 0 0 0 0.984314 0 0 0 0 0.984314 0 0 0 1 0",
  },
];

export default skills;
