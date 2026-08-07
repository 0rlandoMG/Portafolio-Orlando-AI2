const projects = [
  {
    id: "tesis-notus",
    title: "Notus (On-Device NLP Modules)",
    image: "/images/project-notus.png",
    imageLarge: "/images/project-notus.png",
    description:
      "Post-ASR correction and summarization modules with Phi-4-mini for the Notus product, integrating WhisperX, llama.cpp, PyTorch and i18n support in a local desktop solution.",
    longDescription:
      "What it is: undergraduate thesis developed for Ingenius to improve the textual quality of the Notus transcription system (built on Whisper/WhisperX).\n\nMy contribution: I designed, implemented and evaluated two AI modules end to end, integrated them into the product UI, and additionally implemented internationalization (i18n) support for the interface — work that extended beyond the thesis document itself.\n\nHow it was built:\n- Post-ASR linguistic correction: chunking, inference and post-generation validation pipeline that fixes punctuation, capitalization and homophones with the on-device SLM Phi-4-mini, while controlling hallucination risk through lexicon-based validation. Compared two validation strategies (Jaccard/NPR at chunk level vs. NED-based lexical fusion at word level) and selected the most robust one via a Taguchi L9 experimental design and Friedman/Nemenyi statistical tests.\n- Automatic summarization: extended a single-style summarizer to 3 styles (academic, colloquial, technical) × 3 length levels, using a Map-Reduce architecture to overcome the model's context window on long transcripts.\n- UI integration: built the interaction flows in the Notus interface (Flet) — configuration dialogs, async per-chunk progress indicators, Markdown-rendered results, and copy/save/regenerate actions.\n- Internationalization: added multi-language (i18n) support to the product interface.\n\nResults: evaluated on a self-built corpus of 10 Spanish audios (~2.5h) with human-verified transcripts (RTVE, UN, editorial sources).",
    techs: ["Python", "PyTorch", "Flet", "Phi-4-mini", "llama.cpp", "WhisperX", "i18n"],
    stats: {
      summary:
        "Both modules were validated with rigorous statistical testing on a custom Spanish audio corpus. The correction module significantly restored punctuation compared to raw Whisper output, with only a small, controlled effect on transcription accuracy. The summarizer's outputs stayed closely faithful to the source content — near what a much larger reference model produced — across every style and length combination tested.",
      wilcoxon: "ΔF1p +0.0120, p=0.0039",
      bertscore: "0.869 (0.842–0.901)",
    },
    links: [],
    status: "completed",
    category: "On-Device AI",
  },
  {
    id: "etecsa-platform",
    title: "Tetradig (Digital Transformation Assessment Platform)",
    image: "/images/project-etecsa.png",
    imageLarge: "/images/project-etecsa.png",
    description:
      "Full-stack contribution (database, backend and Swing UI) to a desktop platform that digitizes ETECSA's digital transformation maturity assessment.",
    longDescription:
      "What it is: TETR4DIG digitizes the maturity-assessment model ETECSA (the Cuban national telecom company) uses to evaluate digital transformation across its organizational units. The initiative shipped as two separate applications — a desktop app and a companion web app — built by a 3-person team, replacing a manual, spreadsheet-based process with a centralized tool.\n\nMy contribution: I worked across the full stack of the project — modeling the shared PostgreSQL database, building backend logic, implementing parts of the desktop app's Java Swing interface, and contributing to the web app's frontend. The version shown here is the desktop application, which lives on my own GitHub.\n\nHow it was built:\n- Normalized PostgreSQL schema representing survey instruments, responses and results consistently across organizational units, shared by both applications\n- Backend logic connecting the Swing interface to the database layer\n- Desktop interface in Java Swing, designed for non-technical evaluators with guided flows prioritizing clarity\n- Exportable reports by organizational unit\n- Delivered in collaboration with ETECSA stakeholders over nine months",
    techs: ["Java 22", "Java Swing", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/0rlandoMG/Tetr4dig-digital-transformation-assessment", type: "repo" }],
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
    links: [],
    category: "AI Agents",
  },
];

export default projects;
