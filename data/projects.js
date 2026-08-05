const projects = [
  {
    id: "tesis-notus",
    title: "On-Device NLP Modules",
    image: "/images/project-notus.png",
    imageLarge: "/images/project-notus.png",
    description:
      "Post-ASR correction and summarization modules with Phi-4-mini for the Notus product, integrating WhisperX, llama.cpp, and PyTorch in a local desktop solution.",
    longDescription:
      "Undergraduate thesis developed for Ingenius to improve the textual quality of the Notus transcription system (based on Whisper/WhisperX). I designed, implemented and thoroughly evaluated two modules powered by the on-device small language model Phi-4-mini, running entirely locally without external APIs to preserve audio privacy.\n\nPost-ASR linguistic correction: a pipeline for chunking, inference and post-generation validation that corrects punctuation, capitalization and homophones while controlling hallucination risk with lexicon-based validation. I evaluated two approaches — Jaccard/NPR chunk-level validation and lexical fusion with NED at word level — and selected the most robust solution using a Taguchi L9 experimental design and Friedman/Nemenyi statistical tests.\n\nAutomatic summarization: extended an existing single-style summarizer to support three styles (academic, colloquial, technical) and three length levels (short, medium, long), implemented with a Map-Reduce architecture to overcome the model context window for long transcripts.\n\nUI integration: I integrated both modules into the Notus UI (Flet/Flutter), implementing configuration dialogs, asynchronous per-chunk progress indicators, Markdown-rendered results and actions to copy/save/regenerate while keeping coherent visual flows.\n\nExperimental evaluation: built a corpus of 10 Spanish audios (~2.5 hours) with human-verified transcripts (RTVE, UN, editorial sources). Results: the corrector significantly restores punctuation (ΔF1p = +0.0120, Wilcoxon p = 0.0039) with minimal controlled cost in WER/CER and a lexical damage of 0.052% on already-correct words. The summarizer achieves an average BERTScore of 0.869 (range 0.842–0.901) vs Claude Sonnet 4.6 references, showing high semantic consistency across styles and lengths.",
    techs: ["Python", "PyTorch", "Flet", "Phi-4-mini", "llama.cpp", "WhisperX", "i18n"],
    links: [],
    status: "completed",
    category: "On-Device AI",
  },
  {
    id: "etecsa-platform",
    title: "Digital Transformation Assessment Platform",
    image: "/images/project-etecsa.png",
    imageLarge: "/images/project-etecsa.png",
    description:
      "I contributed to the database design and backend of a digital assessment platform for companies, with a Vue.js frontend and Spring Boot services.",
    longDescription:
      "Digital transformation maturity models let organizations self-assess across dimensions such as processes, technology, culture and data governance, positioning themselves on a maturity scale from traditional operation to full digitalization. Their value lies in providing a roadmap to prioritize areas and measure progress, yet they often remain dispersed in documents and spreadsheets.\n\nI collaborated on TETR4DIG, a desktop application that digitizes the TETR4DIG maturity model used by ETECSA to assess digital transformation across organizational units. The project replaces manual evaluation processes with a centralized tool that standardizes survey application and result consolidation.\n\nMy contribution focused on database design and backend development: I modeled a normalized PostgreSQL schema to represent survey instruments, responses and results consistently across units without duplication or inconsistency when generating reports.\n\nHighlights:\n- Desktop interface in Java Swing, designed for non-technical evaluators with guided flows prioritizing clarity\n- Normalized PostgreSQL schema for instruments and survey results\n- Exportable reports by organizational unit\n- Developed in collaboration with ETECSA stakeholders over nine months\n\nStack: Java 22, Java Swing, PostgreSQL",
    techs: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "HTML", "CSS"],
    links: [],
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
