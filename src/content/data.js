// This file is the single source of truth for all text content for the NLG site.

const HERO_DATA = {
  title: "NLG.",
  subtitle: "The Structure of Home.",
};

const PROCESS_DATA = [
  {
    number: "01",
    title: "The Blueprint (Strategy)",
    description: "A strategy-first engagement. We conduct deep research to deliver a comprehensive project blueprint, defining the complete strategic and architectural plan."
  },
  {
    number: "02",
    title: "The Build (Design & Dev)",
    description: "Our core offering. The end-to-end design and development of a bespoke, world-class digital experience, guided by our 'Systematic-Poetic' philosophy."
  },
  {
    number: "03",
    title: "The Polish (Refinement)",
    description: "We conduct rigorous internal testing and User Acceptance Testing to ensure the final product is a flawless, award-ready digital experience."
  }
];

const PROJECTS_DATA = [
  {
    title: "The Blueprint as Art",
    client: "NLG Structural Engineers",
    description: "A digital presence that treats the engineer's blueprint not as documentation, but as the central aesthetic.",
    image: "/src/assets/images/project-nlg.jpg",
    tags: ["Web Experience", "Brand Identity"]
  },
];

const ABOUT_DATA = {
  summary: "Our practice is a partnership between a lead designer and a lead developer. We are a small, focused office, not a large, traditional agency. We collaborate with a curated network of specialists to execute our vision.",
  members: [
    { name: "Thapelo Masebe", role: "Lead Designer" },
    { name: "[Partner's Name]", role: "Lead Developer" }
  ]
};

// This exports everything as a single, clean object.
export const AppData = {
    HERO_DATA,
    PROCESS_DATA,
    PROJECTS_DATA,
    ABOUT_DATA
};