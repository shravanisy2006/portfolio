// Section content. Every line here comes from details Shravani confirmed.

export const about = {
  paragraphs: [
    "I'm a third-year B.Tech student in Computer Science & Business Systems at JSPM's Rajarshi Shahu College of Engineering, Pune. I'm drawn to using AI and machine learning to build solutions that create an impact, on real problems in civic services, lending and everyday business.",
    "I like owning a project end to end: framing the problem, designing the system, shipping a working app, and presenting why it matters.",
    "Outside the code, I coordinate as Secretary of Gotham, lead public relations for ACBS, organize cloud events with the RSCOE AWS Student Builder Group, and anchor college events.",
  ],
  now: [
    { label: "Building", value: "Lekha, an invoice and payment ledger for a real shop" },
    { label: "Finishing", value: "Pravasa, an AI travel planner for Karnataka" },
    { label: "Looking for", value: "ML Engineer and Data Scientist internships" },
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Business Systems",
    school: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    period: "2024 – 2028 (expected)",
    results: [
      { label: "CGPA", value: "8.93" },
      { label: "Sem 4 SGPA", value: "9.09" },
    ],
    coursework: ["Machine Learning", "Artificial Intelligence", "Python", "DBMS"],
  },
  {
    degree: "Higher Secondary (12th)",
    school: "JSK College",
    period: "Maharashtra State Board",
    results: [{ label: "Score", value: "78%" }],
  },
  {
    degree: "Secondary (10th)",
    school: "City International School, Morwadi, Pimpri",
    period: "CBSE",
    results: [{ label: "Score", value: "90.8%" }],
  },
];

// Each skill lists the projects where it was actually used.
export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", usedIn: ["Amazon ML Challenge", "LoanLens", "CivicFlow AI", "Lekha"] },
      { name: "Java", usedIn: ["LabLoop"] },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "scikit-learn", usedIn: ["LoanLens", "Amazon ML Challenge"] },
      { name: "LightGBM", usedIn: ["Amazon ML Challenge"] },
      { name: "FAISS", usedIn: ["Amazon ML Challenge"] },
      { name: "RapidFuzz", usedIn: ["Amazon ML Challenge"] },
      { name: "Gemini API", usedIn: ["CivicFlow AI"] },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "Pandas", usedIn: ["LoanLens", "Amazon ML Challenge"] },
      { name: "NumPy", usedIn: ["LoanLens"] },
      { name: "PyArrow", usedIn: ["Amazon ML Challenge"] },
      { name: "Matplotlib", usedIn: ["LoanLens"] },
      { name: "Plotly", usedIn: ["LoanLens"] },
    ],
  },
  {
    title: "Apps & Frameworks",
    skills: [
      { name: "Streamlit", usedIn: ["CivicFlow AI", "LoanLens", "LumaGrid"] },
      { name: "FastAPI", usedIn: ["Lekha"] },
      { name: "Jakarta EE", usedIn: ["LabLoop"] },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", usedIn: ["All projects"] },
      { name: "Streamlit Cloud", usedIn: ["CivicFlow AI", "LoanLens"] },
      { name: "VS Code", usedIn: [] },
      { name: "NetBeans", usedIn: ["LabLoop"] },
    ],
  },
];

export const achievements = [
  {
    kind: "win" as const,
    title: "1st Runner-Up",
    event: "PromptWars x VYOM NMIET",
    year: "2026",
    detail: "National hackathon · Solo entry with CivicFlow AI",
  },
  {
    kind: "competition" as const,
    title: "Global Rank 1,649 of 89,399",
    event: "Amazon ML Challenge",
    year: "2026",
    detail: "Team entry · Business entity resolution · F0.5 0.969",
  },
];

export const roles = [
  {
    position: "Secretary",
    org: "Gotham",
    period: "Oct 2025 – Present",
    points: ["Handle overall coordination for the club"],
  },
  {
    position: "Public Relations Lead",
    org: "ACBS, CSBS Department Association",
    period: "Sep 2026 – Present",
    points: ["Lead public relations and outreach for the department association"],
  },
  {
    position: "Core Team Member",
    org: "RSCOE AWS Student Builder Group",
    period: "Apr 2026 – Present",
    points: ["Organize cloud computing events for students"],
  },
];

export const stagePhotos = [
  { src: "/images/stage/stage-1.webp", alt: "Shravani anchoring an event at the JSPM auditorium podium" },
  { src: "/images/stage/stage-3.webp", alt: "Shravani introducing a speaker at a cloud computing session" },
  { src: "/images/stage/stage-2.webp", alt: "Shravani hosting a session from the podium" },
];

export const certifications = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI × Stanford Online",
    date: "Aug 2026",
    image: "/images/certs/advanced-learning.webp",
    verify: "https://learn.deeplearning.ai/certificates/608fdfaf-39d0-4f5c-88ed-9b09510e38f2",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "Jul 2026",
    image: "/images/certs/supervised-ml.webp",
    verify: "https://learn.deeplearning.ai/certificates/e02ffefa-5946-4810-8858-4052ecf76cf5",
  },
  {
    title: "AI Prompting for Everyone",
    issuer: "DeepLearning.AI",
    date: "Jun 2026",
    image: "/images/certs/ai-prompting.webp",
    verify: "https://learn.deeplearning.ai/certificates/e8431e9a-397d-4cbe-9114-60aeed7974fb",
  },
  {
    title: "Red Hat Application Development I: Programming in Java EE (AD183)",
    issuer: "Red Hat · Certificate of Attendance · 32 credit hours",
    date: "Oct 2026",
    image: "/images/certs/redhat-ad183.webp",
    verify: "https://www.credly.com/badges/077ba1a2-44b0-428c-8305-fbe62fb21a7f",
  },
];

export const workshops = [
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "Jul 2026",
    image: "/images/certs/be10x.webp",
    verify: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971507936",
  },
  {
    title: "Python Using AI Workshop",
    issuer: "AI for Techies",
    date: "Nov 2025",
    image: "/images/certs/ai-for-techies.webp",
    verify: "https://certx.in/certificate/27431ebc-ac17-43c8-9713-f5b20ad95b99767491",
  },
];
