const projects = [
  {
    id: "tesis-notus",
    title: "On-Device NLP Modules",
    image: "/images/project-notus.png",
    description:
      "Post-ASR correction and summarization modules with Phi-4-mini for the Notus product, integrating WhisperX, llama.cpp, and PyTorch in a local desktop solution.",
    longDescription:
      "I developed a local post-ASR correction and summarization system as part of a thesis for Ingenius, demonstrating statistically significant improvements in text quality and precision.",
    techs: ["Python", "PyTorch", "Flet", "Phi-4-mini", "llama.cpp", "WhisperX", "i18n"],
    status: "completed",
    category: "On-Device AI",
  },
  {
    id: "etecsa-platform",
    title: "Digital Transformation Assessment Platform",
    image: "/images/project-etecsa.png",
    description:
      "I contributed to the database design and backend of a digital assessment platform for companies, with a Vue.js frontend and Spring Boot services.",
    longDescription:
      "As part of a 3-developer team, I implemented backend logic, data modeling, and supported the user interface for an organizational assessment solution at ETECSA.",
    techs: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "HTML", "CSS"],
    status: "completed",
    category: "Full Stack",
  },
  {
    id: "langgraph-agent",
    title: "LangGraph Agent (Coming Soon)",
    description:
      "Future project placeholder showing active learning in AI agents built with LangGraph and agentic architectures.",
    techs: ["LangGraph", "AI Agents", "Prompt Engineering"],
    status: "upcoming",
    category: "AI Agents",
  },
];

export default projects;
