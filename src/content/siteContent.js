// siteContent.js v2.0
// The definitive, single source of truth for all text and data for the NLG website.
// This structure is modular and designed for easy maintenance.

const heroContent = {
  title: "The Structure of Home.",
  subtitle: "NLG is the structural engineering practice of Lehlogonolo Gift Ngobeni, fusing mathematical precision with a deep understanding of the poetics of space."
};

const projectsContent = {
  title: "Selected Works",
  items: [
    { 
      id: "project1", 
      title: "The Hillside House", 
      meta: "Johannesburg, Gauteng", 
      description: "A cantilevered structure requiring a complex reinforced concrete beam to create a gravity-defying living space that floats above the landscape.", 
      image: "/images/project-hillside.jpg",
      tags: ["Residential", "Concrete"]
    },
    { 
      id: "project2", 
      title: "The Courtyard Villa", 
      meta: "Stellenbosch, Western Cape", 
      description: "An intricate steel roof truss system designed to span a large central courtyard, creating a seamless indoor-outdoor living experience without internal columns.", 
      image: "/images/project-courtyard.jpg",
      tags: ["Residential", "Steel"]
    },
    { 
      id: "default", 
      title: "The Urban Loft", 
      meta: "Cape Town, Western Cape", 
      description: "Exposed timber beams and intelligent structural reinforcements used to open up a historic industrial building into a light-filled residential loft.", 
      image: "/images/project-loft.jpg",
      tags: ["Renovation", "Timber"]
    }
  ]
};

const processContent = {
  title: "Process",
  items: [
    { 
      id: "01", 
      title: "The Blueprint", 
      description: "A strategy-first engagement. We collaborate with architects and clients to conduct deep research, delivering a comprehensive structural blueprint that is both safe and conceptually ambitious." 
    },
    { 
      id: "02", 
      title: "The Build", 
      description: "We produce world-class construction documentation and provide on-site supervision, ensuring the architectural vision is executed with absolute precision and integrity." 
    },
    { 
      id: "03", 
      title: "The Handoff", 
      description: "We deliver a final set of as-built drawings and documentation, providing a complete record of the home’s structure for future generations. Our commitment is to enduring quality." 
    }
  ]
};

const aboutContent = {
  title: "About NLG",
  paragraphs: [
    "Founded by Lehlogonolo Gift Ngobeni, NLG is a structural engineering practice built on a dual passion for technical rigor and architectural beauty.",
    "We believe the most resonant and meaningful homes are born from a deep collaboration between the engineer and the architect, where the structural system is not a limitation, but a core part of the creative expression."
  ]
};

const footerContent = {
  name: "Lehlogonolo Gift Ngobeni",
  email: "contact@nlg.engineering",
  copyright: "© 2025 NLG Engineering"
};

// The main export combines all the data into a single, clean object.
export const siteData = {
  hero: heroContent,
  projects: projectsContent,
  process: processContent,
  about: aboutContent,
  footer: footerContent
};