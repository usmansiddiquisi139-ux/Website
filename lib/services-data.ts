import { Database, Brain, Search, Smartphone, Cloud, Link2, Shield } from "lucide-react"

export interface ServiceCapability {
  title: string
  bullets: string[]
  tools?: string[]
}

export interface Step {
  title: string
  description: string
  deliverable?: string
}

export interface Metric {
  label: string
  value: string
  description: string
}

export interface Service {
  slug: string
  icon?: any
  title: string
  headline?: string
  overview?: string
  description?: string
  features?: string[]
  capabilities: ServiceCapability[]
  tools?: string[]
  benefits?: string[]
  platforms?: string[]
  whyChooseUs?: string[]
  typicalUseCases?: string[]
  ctas?: { label: string; href?: string }[]
  industry?: string[]
  outcomes?: string[]
  tagline?: string
  color: string
  glow?: string
  hideCTA?: boolean
  workflow?: Step[]
  metrics?: Metric[]
  frameworks?: string[]
  image?: string
}

export const getFeatures = (capabilities: ServiceCapability[]): string[] => {
  return capabilities.reduce((acc: string[], cap) => [...acc, ...cap.bullets], [])
}

export const services: Service[] = [
  {
    slug: "integration-migration-services",
    icon: "Link2",
    title: "Integration & Migration",
    headline: "Seamlessly Connect. Effortlessly Upgrade. Future-Proof Your Business.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&q=80",
    overview:
      "In today's fast-moving digital world, disconnected systems are costly. We eliminate manual workflows, unify scattered data, and modernize tech stacks with end-to-end Integration & Migration solutions.",
    description:
      "We connect your existing tools, apps, and platforms to create a single, automated ecosystem — no more data silos, just smooth real-time communication between CRM, ERP, website, APIs, and data sources.",
    features: [
      "Zero-downtime migration strategies",
      "Data verification & integrity checks",
      "Automated data pipelines",
      "Real-time data synchronization",
      "Unified analytics and reporting",
      "Modern technology upgrades",
    ],
    workflow: [
      {
        title: "Discovery & Audit",
        description: "Comprehensive mapping of existing data flows, silos, and technology dependencies.",
        deliverable: "System Interaction Map"
      },
      {
        title: "Architecture Design",
        description: "Designing the target state using modern integration patterns (API, Webhooks, ETL).",
        deliverable: "Technical Blueprint"
      },
      {
        title: "Pipeline Development",
        description: "Building resilient data pipelines with automated validation and error handling.",
        deliverable: "Staged Environment"
      },
      {
        title: "Validated Migration",
        description: "Executing data transfer with dual-write patterns ensuring zero system downtime.",
        deliverable: "Live Synchronization"
      },
      {
        title: "Optimization & Handover",
        description: "Continuous monitoring setup and training for internal teams.",
        deliverable: "Operational Dashboard"
      }
    ],
    metrics: [
      { label: "Downtime", value: "0%", description: "Zero-downtime migration strategy" },
      { label: "Data Integrity", value: "100%", description: "Comprehensive verification checks" },
      { label: "Efficiency", value: "40%", description: "Reduction in operational overhead" }
    ],
    frameworks: ["Agile Migration", "Zero-Downtime Architecture", "ETL/ELT Best Practices"],
    capabilities: [
      {
        title: "Data & Application Migration",
        bullets: [
          "Migrate legacy systems, databases and applications to modern cloud or on-prem platforms",
          "Zero-downtime migration strategies",
          "Data verification & integrity checks to prevent data loss",
        ],
        tools: ["AWS", "Azure", "GCP", "Snowflake", "BigQuery", "PostgreSQL", "MongoDB"],
      },
      {
        title: "Multiple Data Source Unification",
        bullets: [
          "Centralize spreadsheets, CRMs, ERPs and APIs into a single source of truth",
          "Automated pipelines for collection, cleaning, transformation and reporting",
          "Unified analytics and reporting layers",
        ],
        tools: ["ETL/ELT", "Airflow", "dbt", "Fivetran", "Power BI", "Tableau"],
      },
      {
        title: "Technology Upgrades",
        bullets: [
          "Re-platform web and application stacks to modern architectures",
          "Enable seamless integration and future expansion",
          "Reduce maintenance and operational costs",
        ],
        tools: ["Node.js", "Python", "REST APIs", "GraphQL", "Talend", "MuleSoft"],
      },
    ],
    tools: [
      "REST APIs",
      "GraphQL",
      "Talend",
      "Zapier",
      "Azure Logic Apps",
      "MuleSoft",
      "Kafka",
      "Snowflake",
      "BigQuery",
      "Airflow",
      "dbt",
      "Fivetran",
      "Power BI",
      "Tableau",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
      "GCP",
    ],
    outcomes: [
      "Real-time data sync across platforms",
      "Error-free automated processes",
      "Improved operational efficiency and visibility",
      "Faster performance and scalability after migration",
    ],
    benefits: ["Real-time data sync across platforms", "Error-free automation", "Improved efficiency and visibility"],
    platforms: ["AWS", "Azure", "GCP", "Snowflake", "BigQuery", "PostgreSQL", "MongoDB"],
    whyChooseUs: [
      "Seamless transition — zero downtime during migration",
      "Secure and reliable architecture",
      "Automated, error-free workflows",
      "Scalable solutions designed for your future growth",
    ],
    typicalUseCases: [
      "Enterprise Cloud Migration (LMS/EHR/ERP)",
      "Cross-Platform Interoperability (API/Webhooks)",
      "Data Warehouse Centralization (ETL/ELT Pipelines)",
      "Legacy Tech Stack Modernization",
      "IoT & Edge Device Data Integration",
    ],
    ctas: [
      { label: "Book a Free Consultation", href: "/contact" },
      { label: "Talk to Our Experts", href: "/contact" },
    ],
    color: "from-red-500",
    glow: "group-hover:shadow-red-500/50",
  },
  {
    slug: "langchain-ai-seo-automation",
    icon: "Search",
    title: "LangChain AI-SEO & Growth Intelligence",
    headline: "Strategy-led discoverability for the Generative AI era.",
    overview:
      "We move beyond traditional search. We architect digital authority for both search engines and LLM ecosystems (GEO/AIO), ensuring your enterprise is the first choice for both humans and AI agents.",
    description:
      "Leveraging LangChain and autonomous agents, we automate the end-to-end SEO lifecycle—from programmatic content generation to real-time indexing—guaranteeing your brand stays at the top of Google and AI assistant results.",
    capabilities: [
      {
        title: "Programmatic SEO & Content Scale",
        bullets: [
          "Deploy thousands of high-quality, high-intent landing pages with automated LLM-driven pipelines",
          "Automated generation of meta-data, semantic headers, and context-aware FAQs",
        ],
        tools: ["LangChain", "Next.js", "Python", "Vercel"],
      },
      {
        title: "Generative Engine Optimization (GEO)",
        bullets: [
          "Optimize content for discovery in ChatGPT, Gemini, Perplexity, and Claude",
          "Strategic citation growth and entity-based authority building",
        ],
        tools: ["RAG Architecture", "Semantic Marking", "JSON-LD"],
      },
      {
        title: "Search Intent Automation",
        bullets: [
          "Autonomous agents that analyze real-time search trends and adjust content strategy in hours, not months",
          "Predictive keyword clustering based on user journey mapping",
        ],
        tools: ["LangGraph", "OpenAI API", "Hugging Face"],
      },
      {
        title: "Semantic Authority Mapping",
        bullets: [
          "Topical clustering and entity relationship mapping to build industry's first-choice authority",
          "Wikidata and Knowledge Graph integration for enhanced AI interpretability",
        ],
        tools: ["MarketMuse", "Ahrefs", "Surfer SEO", "Neo4j"],
      },
    ],
    tools: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Python",
      "Next.js",
      "Schema.org",
      "JSON-LD",
      "Wikidata",
      "Ahrefs",
      "Surfer SEO",
      "Pinecone",
    ],
    outcomes: [
      "Dominant rankings in traditional Search and AI generative results",
      "Increased citation frequency by AI personal assistants",
      "Scalable lead generation through programmatic intent targeting",
      "Future-proof brand discoverability in the agentic web era",
    ],
    image: "https://images.unsplash.com/photo-1557833006-c9f4827dd4f0?auto=format&q=80",
    tagline: "Strategy-Led AIO",
    color: "from-green-500",
    glow: "group-hover:shadow-green-500/50",
    workflow: [
      {
        title: "Semantic Discovery",
        description: "Mapping the entity landscape and identifying authority gaps in Search & LLM ecosystems.",
        deliverable: "Discoverability Audit"
      },
      {
        title: "Topographic Mapping",
        description: "Clustering intent to build a resonant content architecture that AI agents can easily cite.",
        deliverable: "Strategic Roadmap"
      },
      {
        title: "Autonomous Pipeline",
        description: "Deploying programmatic content agents to scale high-intent pages with 100% semantic accuracy.",
        deliverable: "Agentic SEO Engine"
      },
      {
        title: "GEO Hardening",
        description: "Continuous monitoring of citation rates across ChatGPT, Gemini, and Perplexity.",
        deliverable: "Visibility Dashboard"
      }
    ],
    metrics: [
      { label: "AI Citation", value: "High", description: "Verified discovery in LLM responses" },
      { label: "Semantic Share", value: "+60%", description: "Increase in topical authority markers" },
      { label: "Scale Speed", value: "10x", description: "Acceleration in content deployment" }
    ],
    frameworks: ["GEO (Generative Engine Optimization)", "AIO (AI Optimization)", "LangChain/LangGraph Framework"]
  },
  {
    slug: "ai-ml-learning-automation",
    icon: "Brain",
    title: "AI/ML Learning & Automation",
    headline: "Embed intelligence into your operations",
    overview:
      "Use AI and ML to automate repetitive tasks, uncover insights from complex data and enable predictive decision-making.",
    description:
      "We move beyond basic automation — embedding intelligence into business processes to reduce cost, increase efficiency and improve accuracy.",
    capabilities: [
      {
        title: "Intelligent Process Automation (RPA + AI)",
        bullets: ["Automate repetitive workflows with RPA plus AI orchestration"],
        tools: ["UiPath", "Python", "OpenAI API", "FastAPI"],
      },
      {
        title: "Predictive Analytics & Forecasting Models",
        bullets: ["Time-series forecasting, demand and churn models"],
        tools: ["scikit-learn", "TensorFlow", "PyTorch", "Pandas"],
      },
      {
        title: "NLP & Computer Vision Solutions",
        bullets: ["Document understanding, sentiment, image/video analysis"],
        tools: ["Hugging Face", "OpenCV", "Transformers", "PyTorch"],
      },
      {
        title: "Recommendation Systems & Personalization Engines",
        bullets: ["Personalized product and content recommendations"],
        tools: ["TensorFlow Recommenders", "PyTorch", "Neo4j"],
      },
      {
        title: "AI Agent & Chatbot Development (LLM-powered)",
        bullets: ["Conversational AI and task-oriented agents"],
        tools: ["LangChain", "OpenAI API", "FastAPI"],
      },
      {
        title: "MLOps Integration",
        bullets: ["CI/CD for models, monitoring and model governance"],
        tools: ["Docker", "Kubernetes", "MLflow", "DVC"],
      },
    ],
    tools: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "LangChain",
      "scikit-learn",
      "Hugging Face",
      "FastAPI",
      "Docker",
      "Kubernetes",
    ],
    outcomes: [
      "Reduced operational costs through intelligent automation",
      "Enhanced accuracy and speed in decision-making",
      "Predictive insights for proactive strategies",
      "Personalized customer experiences driven by AI",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad195?auto=format&q=80",
    color: "from-purple-500",
    glow: "group-hover:shadow-purple-500/50",
    workflow: [
      { title: "Problem Scoping", description: "Identifying automation blockers and high-impact AI use cases.", deliverable: "Opportunity Roadmap" },
      { title: "Model Selection", description: "Evaluating LLMs and custom ML models for specific tasks.", deliverable: "Technical Specs" },
      { title: "Pilot Build", description: "Developing a functional MVP in an isolated sandbox environment.", deliverable: "Functional Prototype" },
      { title: "Scaling & MLOps", description: "Deploying model with robust monitoring and auto-scaling.", deliverable: "Production AI System" }
    ],
    metrics: [
      { label: "Task Speed", value: "10x", description: "Acceleration of automated workflows" },
      { label: "Accuracy", value: "98%", description: "Verified model precision markers" }
    ],
    frameworks: ["MLOps Lifecycle", "Human-in-the-Loop", "Responsible AI Framework"]
  },
  {
    slug: "data-solutions-governance",
    icon: "Database",
    title: "Data Solutions & Governance",
    headline: "Turning raw data into trusted intelligence",
    overview:
      "Design, secure and govern enterprise data ecosystems so data is accurate, trusted and accessible for analytics, AI and decision-making.",
    capabilities: [
      {
        title: "Data Architecture & Warehouse Design",
        bullets: ["Enterprise data models, warehouse design and partitioning"],
        tools: ["Snowflake", "BigQuery", "PostgreSQL", "Oracle", "Azure Synapse"],
      },
      {
        title: "ETL/ELT Pipeline Development & Integration",
        bullets: ["Reliable, testable pipelines for batch and streaming"],
        tools: ["Talend", "Airflow", "dbt", "Kafka"],
      },
      {
        title: "Data Lake & Real-Time Streaming Solutions",
        bullets: ["Event-driven architectures and streaming data platforms"],
        tools: ["Kafka", "AWS S3", "Azure Data Lake"],
      },
      {
        title: "Data Quality & Master Data Management",
        bullets: ["Data validation, de-duplication and MDM"],
        tools: ["Informatica", "Ataccama", "Talend DQ"],
      },
      {
        title: "Metadata & Cataloging Solutions",
        bullets: ["Data catalog, lineage and discovery"],
        tools: ["Collibra", "Alation", "Apache Atlas"],
      },
      {
        title: "Data Governance & Compliance Frameworks",
        bullets: ["GDPR, HIPAA, ISO controls and policy enforcement"],
        tools: ["OneTrust", "Azure Purview", "Google DLP"],
      },
      {
        title: "Business Intelligence & Dashboarding",
        bullets: ["Operational dashboards, self-service BI and reporting"],
        tools: ["Power BI", "Tableau", "Apache Superset", "Oracle OAS"],
      },
    ],
    tools: [
      "SQL",
      "Talend",
      "Apache Kafka",
      "Snowflake",
      "Oracle OAS",
      "Power BI",
      "Tableau",
      "Superset",
      "dbt",
      "Airflow",
      "Azure Synapse",
      "BigQuery",
    ],
    outcomes: [
      "Trusted, high-quality data for business decisions",
      "Improved data discoverability and lineage tracking",
      "Regulatory compliance and data security assurance",
      "Empowered analytics and reporting ecosystem",
    ],
    image: "/images/services/data-governance.jpg",
    color: "from-blue-500",
    glow: "group-hover:shadow-blue-500/50",
    workflow: [
      { title: "Landscape Review", description: "Mapping data sources, quality issues, and compliance gaps.", deliverable: "Data Maturity Audit" },
      { title: "Warehouse Design", description: "Modeling the data layer for performance and governance.", deliverable: "Schema Blueprint" },
      { title: "Pipeline Build", description: "Developing ETL/ELT flows with built-in quality checks.", deliverable: "Verified Data Layer" },
      { title: "Compliance Link", description: "Applying security and governance policies automatically.", deliverable: "Trust Framework" }
    ],
    metrics: [
      { label: "Data Quality", value: "99.9%", description: "Verified data accuracy benchmarks" },
      { label: "Operational Speed", value: "+75%", description: "Reduction in manual data processing" }
    ],
    typicalUseCases: [
      "Enterprise Data Governance Frameworks",
      "Real-Time Analytics & Decision Intelligence",
      "Regulatory Compliance Management (GDPR/HIPAA)",
      "Automated MDM & Data Quality Pipelines",
      "Sovereign Data Storage Solutions"
    ],
    frameworks: ["Data Vault 2.0", "GDPR/HIPAA Compliance", "Modern Data Stack"]
  },
  {
    slug: "web-mobile-app-development",
    icon: "Smartphone",
    title: "Web & Mobile App Development",
    headline: "Building fast, intelligent, and impactful digital products.",
    overview:
      "Modern web and mobile experiences — fast, secure, scalable and optimized for users. We blend front-end innovation, back-end architecture and modern deployment practices.",
    capabilities: [
      {
        title: "Responsive Web Applications (SPA / PWA)",
        bullets: ["High-performance single page and progressive web apps"],
        tools: ["React.js", "Next.js", "Vue.js", "Tailwind"],
      },
      {
        title: "Native & Cross-Platform Mobile Apps",
        bullets: ["iOS, Android and cross-platform frameworks"],
        tools: ["Flutter", "React Native", "Firebase"],
      },
      {
        title: "Custom API & Backend Development",
        bullets: ["Scalable REST/GraphQL backends and microservices"],
        tools: ["Node.js", "Express", "FastAPI"],
      },
      {
        title: "UI/UX Design & Interactive Prototyping",
        bullets: ["Design systems and rapid prototyping"],
        tools: ["Figma", "Adobe XD", "Framer"],
      },
      {
        title: "E-Commerce, SaaS & Platform Development",
        bullets: ["Platform engineering and integrations"],
        tools: ["Next.js", "Stripe API", "Shopify API", "AWS"],
      },
    ],
    tools: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Flutter",
      "React Native",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind",
      "PostgreSQL",
      "Firebase",
      "AWS",
    ],
    outcomes: [
      "High-performance apps with excellent user experience",
      "Reduced time-to-market with modern frameworks",
      "Scalable and secure digital products",
      "Consistent UI/UX across platforms",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    color: "from-yellow-500",
    glow: "group-hover:shadow-yellow-500/50",
    workflow: [
      { title: "UX Prototyping", description: "Creating interactive wireframes and user flow diagrams.", deliverable: "Interactive Prototype" },
      { title: "Agile Development", description: "Building product in 2-week sprints with continuous feedback.", deliverable: "Sprint Demo" },
      { title: "QA & Hardening", description: "Rigorous testing across devices and security penetration.", deliverable: "Release Candidate" },
      { title: "Store Launch", description: "Managing App Store/Google Play submission and production sync.", deliverable: "Live Application" }
    ],
    metrics: [
      { label: "Performance", value: "95+", description: "Google Lighthouse score average" },
      { label: "Retention", value: "+30%", description: "Improvement in user engagement markers" }
    ],
    frameworks: ["Atomic Design", "Agile/Scrum", "TDD (Test Driven Development)"]
  },
  {
    slug: "devops-cloud",
    icon: "Cloud",
    title: "DevOps & Cloud",
    headline: "Deploy faster. Scale smarter. Operate securely.",
    overview:
      "Modern infrastructure, automated deployments and scalable cloud solutions that support continuous delivery and innovation.",
    capabilities: [
      {
        title: "CI/CD Pipeline Setup & Automation",
        bullets: ["End-to-end pipeline design using modern CI systems"],
        tools: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"],
      },
      {
        title: "Cloud Migration & Modernization",
        bullets: ["Re-platforming, lift-and-shift and cloud native transformations"],
        tools: ["AWS", "Azure", "GCP"],
      },
      {
        title: "Containerization & Orchestration",
        bullets: ["Docker, Kubernetes and orchestration best practices"],
        tools: ["Docker", "Kubernetes", "Helm"],
      },
      {
        title: "Infrastructure as Code",
        bullets: ["Terraform, Ansible and reproducible infra"],
        tools: ["Terraform", "Ansible"],
      },
      {
        title: "Monitoring & Observability",
        bullets: ["Prometheus, Grafana, log aggregation and SLOs"],
        tools: ["Prometheus", "Grafana", "ELK Stack"],
      },
    ],
    tools: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    outcomes: [
      "Accelerated deployment cycles with automated CI/CD",
      "Improved infrastructure reliability and scalability",
      "Enhanced visibility through monitoring and observability",
      "Optimized cloud cost and resource utilization",
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200",
    color: "from-cyan-500",
    glow: "group-hover:shadow-cyan-500/50",
    workflow: [
      { title: "Infra Audit", description: "Reviewing existing cloud costs and bottleneck analysis.", deliverable: "Audit Report" },
      { title: "IaC Automation", description: "Scripting infrastructure using Terraform and Ansible.", deliverable: "Automated Environment" },
      { title: "CI/CD Setup", description: "Automating testing and deployment with zero-human-touch.", deliverable: "Continuous Delivery" },
      { title: "Scaling Ops", description: "Implementing Kubernetes and auto-healing mechanisms.", deliverable: "Self-Healing Cluster" }
    ],
    metrics: [
      { label: "Deployment", value: "Hourly", description: "Increase in release frequency" },
      { label: "Cloud Cost", value: "-25%", description: "Reduction in monthly infrastructure burn" }
    ],
    frameworks: ["SRE (Site Reliability Engineering)", "Infrastructure as Code", "GitOps"]
  },

  // 🛡️ New Cybersecurity Service
  {
    slug: "ethical-hacking-as-a-service",
    icon: "Shield",
    title: "Cybersecurity & Ethical Hacking",
    headline: "Adaptive Security Testing for an Evolving Threat Landscape",
    overview:
      "Our Ethical Hacking as a Service (EHaaS) provides continuous, strategic testing to identify and mitigate vulnerabilities across applications, infrastructure, and people. We simulate real-world attacks to help you stay ahead of evolving threats.",
    capabilities: [
      {
        title: "Web & Application Security Testing",
        bullets: [
          "Comprehensive testing of web and mobile applications to uncover vulnerabilities in authentication, authorization, and session management.",
          "Assessment of APIs, backend integrations, and cloud-based services.",
          "Identification of misconfigurations and insecure coding practices through OWASP-based methodologies.",
        ],
        tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "Nikto", "Postman", "Kali Linux"],
      },
      {
        title: "Infrastructure Penetration Testing",
        bullets: [
          "In-depth vulnerability assessments for internal and external networks.",
          "Identification of misconfigurations, privilege escalations, and patch gaps.",
          "Comprehensive testing across firewalls, routers, and endpoint systems.",
        ],
        tools: ["Nessus", "Wireshark", "Metasploit", "Hydra", "PowerSploit", "OpenVAS"],
      },
      {
        title: "Red Teaming & Adversary Simulation",
        bullets: [
          "End-to-end attack simulations mimicking real-world threat actors.",
          "Assessment of incident response readiness and SOC capabilities.",
          "Collaborative blue team exercises to enhance detection and response.",
        ],
        tools: ["Cobalt Strike", "Atomic Red Team", "Empire", "BloodHound", "Splunk", "ELK Stack"],
      },
      {
        title: "Social Engineering Testing",
        bullets: [
          "Evaluation of physical, personnel, and organizational security controls.",
          "Phishing, vishing, and smishing simulations to test employee awareness.",
          "Actionable insights for policy enhancement and staff training.",
        ],
        tools: ["GoPhish", "King Phisher", "SET (Social Engineering Toolkit)"],
      },
      {
        title: "Breach & Attack Simulation (BAS)",
        bullets: [
          "Automated, continuous testing of your security controls and response capabilities.",
          "Identification of gaps between prevention, detection, and response systems.",
          "Simulation of real-world attacker tactics for measurable resilience.",
        ],
        tools: ["SafeBreach", "AttackIQ", "Picus Security", "XM Cyber"],
      },
    ],
    tools: [
      "Burp Suite",
      "OWASP ZAP",
      "Metasploit",
      "Nmap",
      "Nessus",
      "Cobalt Strike",
      "Wireshark",
      "GoPhish",
      "Atomic Red Team",
      "OpenVAS",
      "AttackIQ",
      "SafeBreach",
      "XM Cyber",
      "Splunk",
      "ELK Stack",
    ],
    outcomes: [
      "Proactive identification and mitigation of critical vulnerabilities.",
      "Enhanced security posture and resilience through continuous testing.",
      "Improved compliance with standards like ISO 27001, NIST, and SOC 2.",
      "Strengthened internal response through red vs. blue team exercises.",
    ],
    whyChooseUs: [
      "Ethical hackers with real-world offensive security expertise.",
      "Continuous and adaptive testing beyond traditional pentesting.",
      "Comprehensive coverage from apps to infrastructure to people.",
      "Actionable reporting with remediation guidance.",
    ],
    typicalUseCases: [
      "Security testing during SDLC and product release cycles.",
      "Annual or quarterly penetration tests for compliance and audit readiness.",
      "Continuous breach simulation for security control validation.",
      "Internal awareness and phishing simulation campaigns.",
    ],
    ctas: [
      { label: "Book a Security Assessment", href: "/contact" },
      { label: "Request a Demo", href: "/contact" },
    ],
    color: "from-indigo-500",
    glow: "group-hover:shadow-indigo-500/50",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    workflow: [
      { title: "Threat Profiling", description: "Analyzing target surface area and likely attack vectors.", deliverable: "Threat Model" },
      { title: "Offensive Phase", description: "Conducting controlled exploits across apps and systems.", deliverable: "Exploit Report" },
      { title: "Strategy Deep Dive", description: "Collaborating with teams to design remediation steps.", deliverable: "Security Roadmap" },
      { title: "Resilience Check", description: "Re-testing and validating all security control fixes.", deliverable: "Compliance Certificate" }
    ],
    metrics: [
      { label: "MTTR", value: "-60%", description: "Reduction in mean time to response" },
      { label: "Risk Score", value: "90+", description: "Post-remediation security rating" }
    ],
  },
]
