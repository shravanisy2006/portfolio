// All personal content lives here. Edit this file to update the site's text and links.

export const profile = {
  name: "Shravani Yalagatti",
  initials: "SY",
  role: "Aspiring AI/ML Engineer",
  location: "Pune, India",
  education: "B.Tech CSBS · JSPM's RSCOE, Pune · Class of 2028",
  // Words that cycle in the hero headline
  headlineWords: ["machine learning models", "AI agents", "data pipelines"],
  intro:
    "I use AI and machine learning to build solutions that create real impact, from a large-scale entity-resolution pipeline to a prize-winning civic AI agent.",
  highlights: [
    { label: "1st Runner-Up", detail: "PromptWars x VYOM NMIET 2026" },
    { label: "Rank 1,649 / 89,399", detail: "Amazon ML Challenge 2026" },
  ],
  links: {
    github: "https://github.com/shravanisy2006",
    linkedin: "https://www.linkedin.com/in/shravani-yalagatti/",
    email: "shravanisy2000@gmail.com",
  },
  // Put your photo in /public (e.g. /public/shravani.jpg) and set it here: "/shravani.jpg"
  photo: "/shravani.webp" as string | null,
  // Put your resume PDF in /public and set it here: "/Shravani_Yalagatti_Resume.pdf"
  resume: null as string | null,
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "leadership", label: "Leadership" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
