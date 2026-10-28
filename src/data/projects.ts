// Project content. Details come from each project's README and from Shravani.

export type Preview = "pipeline-chart" | "triage-flow" | "model-compare" | "trip-route";

export type FeaturedProject = {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  status?: string;
  badge?: string;
  problem: string;
  role: string;
  approach: string[];
  results: string[];
  stack: string[];
  links: { github?: string; live?: string };
  preview: Preview;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "entity-resolution",
    name: "Business Entity Resolution",
    tagline: "Matching 1.7M businesses across 10M+ noisy records, with no shared IDs.",
    context: "Amazon ML Challenge 2026 · 72-hour hackathon · Team",
    badge: "F0.5 0.969",
    problem:
      "Three data sources list the same businesses written differently: typos, reordered addresses, trade names, names in Indian scripts, decoy records that look like real ones, and a test country never seen in training.",
    role: "Team entry. The full pipeline is published in my repository and runs CPU-only on a 16 GB laptop in about 4–5 hours.",
    approach: [
      "Cleaned and normalized names and addresses, transliterating Indian scripts to Latin",
      "Partitioned records by country and region, learning French regions from the data itself",
      "Searched candidates five ways: TF-IDF on name + address, a phonetic \"sound skeleton\", FAISS vector search and shared building numbers",
      "A LightGBM ranker keeps the 15 best candidates per business",
      "79 pair features feed a LightGBM matcher, with the threshold tuned directly on F0.5 and a one-to-one decision rule",
    ],
    results: [
      "Public leaderboard F0.5: 0.969",
      "Improved from 0.897 to 0.969 over five versions",
      "Rank 1,649 of 89,399 teams",
    ],
    stack: ["Python", "LightGBM", "FAISS", "scikit-learn", "RapidFuzz", "pandas", "PyArrow"],
    links: { github: "https://github.com/shravanisy2006/amazon-ml-challenge-2026-entity-resolution" },
    preview: "pipeline-chart",
  },
  {
    slug: "civicflow",
    name: "CivicFlow AI",
    tagline: "An AI agent that turns a citizen's photo and a short description into a prioritized, routed work order.",
    context: "PromptWars x VYOM NMIET 2026 · 8-hour hackathon · Solo",
    badge: "1st Runner-Up",
    problem:
      "Municipal grievance portals get thousands of unstructured complaints. Officers read each one by hand, miss duplicates, and urgent hazards wait in the same queue as minor litter.",
    role: "Built solo: design, code, security, tests and deployment.",
    approach: [
      "Gemini multimodal reads the photo and text and returns schema-validated JSON: category, severity, hazard flag",
      "A deterministic Python engine, not the LLM, sets the P1–P4 priority, department and SLA, with an explanation for each decision",
      "Duplicate reports are linked and raise the original's priority instead of cluttering the queue",
      "Security: EXIF/GPS stripping, PII redaction, prompt-injection detection, rate limiting and a PIN-protected officer dashboard",
      "Caching, a timeout with one retry, and a rule-based fallback keep the service responding",
    ],
    results: [
      "1st Runner-Up at PromptWars x VYOM NMIET",
      "48 automated tests covering security, scoring, routing and the AI path",
      "Deployed on Streamlit Community Cloud",
    ],
    stack: ["Python", "Gemini API", "Streamlit", "Pydantic", "SQLite", "Pillow", "pytest"],
    links: {
      github: "https://github.com/shravanisy2006/civic-triage-agent",
      live: "https://civic-triage-agent.streamlit.app/",
    },
    preview: "triage-flow",
  },
  {
    slug: "loanlens",
    name: "LoanLens",
    tagline: "Estimating the probability of loan default from LendingClub borrower data.",
    context: "Personal project",
    problem:
      "Lenders need an early estimate of default risk using only information available when the loan is issued, without leaking future information into the model.",
    role: "Built solo: data cleaning, modelling, evaluation and the deployed app.",
    approach: [
      "Cleaned the LendingClub dataset and handled missing values",
      "Kept only features available at loan origination to reduce data leakage",
      "Encoded categorical variables and scaled numerical features",
      "Compared Logistic Regression, Decision Tree and Random Forest with cross-validation",
      "Evaluated on accuracy, precision, recall, F1-score and ROC-AUC",
    ],
    results: [
      "Interactive prediction and loan-scenario explorer",
      "Exploratory data analysis with visualizations",
      "Deployed on Streamlit Community Cloud",
    ],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Plotly", "Matplotlib", "Streamlit"],
    links: {
      github: "https://github.com/shravanisy2006/LoanLens",
      live: "https://loanlens-moadgx936dctbmhimtlc2h.streamlit.app/",
    },
    preview: "model-compare",
  },
  {
    slug: "pravasa",
    name: "Pravasa",
    tagline: "Plan a Karnataka trip by typing or speaking in Kannada or English.",
    context: "AI Travel Planner for Karnataka",
    status: "Coming soon",
    problem:
      "Generic AI chatbots write confident itineraries with made-up distances and prices, and almost nothing works in Kannada or by voice.",
    role: "Built solo.",
    approach: [
      "Gemini understands typed or spoken requests and writes the trip story; it never chooses the places",
      "A planner picks from a curated dataset of 55 Karnataka destinations and fits them into days",
      "Real road distances and routes from OpenStreetMap routing (OSRM)",
      "Weather, hotels, photos and history from Open-Meteo, OpenStreetMap and Wikipedia",
      "The trip story is read aloud in Kannada, and the full itinerary downloads as a PDF",
    ],
    results: ["Kannada and English, typed or spoken", "Budget check, route map and season warnings"],
    stack: ["Python", "Streamlit", "Gemini API", "OSRM", "Folium", "gTTS", "fpdf2"],
    links: { github: "https://github.com/shravanisy2006/Pravasa" },
    preview: "trip-route",
  },
];

export const moreProjects = [
  {
    name: "Lekha",
    tagline: "Invoice and payment-balance ledger built around a real shop's bookkeeping problem.",
    status: "In progress",
    stack: ["Python", "FastAPI"],
  },
  {
    name: "LumaGrid",
    tagline: "Intelligent streetlight management for a simulated IoT smart city grid.",
    status: "AI course mini project",
    stack: ["Python", "Streamlit"],
  },
  {
    name: "LabLoop",
    tagline: "Smart laboratory resource and equipment management system.",
    status: "SDL-II project",
    stack: ["Java", "Jakarta EE", "EJB", "JPA", "JAX-RS"],
  },
];
