import { Database, Brain, Search, Smartphone, Cloud, Link2, Shield } from "lucide-react"

export interface ServiceCapability {
  title: string
  bullets: string[]
  tools?: string[]
}

export interface Service {
  slug: string
  icon: any
  title: string
  headline?: string
  overview: string
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
  glow: string
}

export const getFeatures = (capabilities: ServiceCapability[]): string[] => {
  return capabilities.reduce((acc: string[], cap) => [...acc, ...cap.bullets], [])
}

export const services: Service[] = [
  {
    slug: "integration-migration-services",
    icon: Link2,
    title: "Integration & Migration Services",
    headline: "Seamlessly Connect. Effortlessly Upgrade. Future-Proof Your Business.",
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
      "Migrating legacy ERP/CRM to the cloud",
      "Connecting websites to CRMs, payment gateways, and marketing tools",
      "Centralizing business data from multiple sources into a warehouse",
      "Automating manual workflows & reporting",
      "Integrating IoT, AI, or ML systems with existing infrastructure",
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
    icon: Search,
    title: "LangChain-Powered AI-SEO Automation",
    headline: "AI-first SEO for search engines and LLM ecosystems",
    overview:
      "Leverage LangChain frameworks and AI-SEO strategies to deliver intelligent, scalable and AI-ready digital visibility across search engines and LLM platforms.",
    description:
      "We combine structured data, semantic optimization and automated pipelines to make your content discoverable in ChatGPT, Gemini, Claude, DeepSeek, Ollama and more.",
    capabilities: [
      {
        title: "Automated Content Optimization",
        bullets: ["LLM-driven generation of titles, meta descriptions, FAQs and structured content"],
        tools: ["LangChain", "OpenAI API", "Python", "Next.js"],
      },
      {
        title: "Keyword Intelligence & Clustering",
        bullets: ["Scalable keyword research, clustering and topical mapping for strategic targeting"],
        tools: ["Ahrefs", "MarketMuse", "Surfer SEO", "Python NLP libraries"],
      },
      {
        title: "RAG-Based Content Intelligence",
        bullets: ["Retrieval-Augmented Generation to make content AI-accessible and context-aware"],
        tools: ["LangChain", "FAISS", "Pinecone", "Vector Databases"],
      },
      {
        title: "Schema & Structured Data Integration",
        bullets: ["JSON-LD and Schema.org markup to improve indexing and AI interpretability"],
        tools: ["Schema.org", "Google Search Console", "Wikidata"],
      },
      {
        title: "Autonomous SEO Agents",
        bullets: ["Automate sitemap management, indexing workflows and content briefs"],
        tools: ["LangChain", "OpenAI API", "Python", "Astro"],
      },
    ],
    tools: [
      "LangChain",
      "OpenAI API",
      "Python",
      "Next.js",
      "Astro",
      "Schema.org",
      "Google Search Console",
      "Wikidata",
      "Surfer SEO",
      "MarketMuse",
      "Ahrefs",
    ],
    outcomes: [
      "Future-proof digital presence across search engines and LLMs",
      "Improved discoverability in AI assistants and models",
      "Reduced manual SEO efforts through automation",
      "Higher organic visibility and brand authority",
    ],
    color: "from-green-500",
    glow: "group-hover:shadow-green-500/50",
  },
  {
    slug: "ai-ml-learning-automation",
    icon: Brain,
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
    color: "from-purple-500",
    glow: "group-hover:shadow-purple-500/50",
  },
  {
    slug: "data-solutions-governance",
    icon: Database,
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
    color: "from-blue-500",
    glow: "group-hover:shadow-blue-500/50",
  },
  {
    slug: "web-mobile-app-development",
    icon: Smartphone,
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
    color: "from-yellow-500",
    glow: "group-hover:shadow-yellow-500/50",
  },
  {
    slug: "devops-cloud",
    icon: Cloud,
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
    color: "from-cyan-500",
    glow: "group-hover:shadow-cyan-500/50",
  },

  // 🛡️ New Cybersecurity Service
  {
    slug: "ethical-hacking-as-a-service",
    icon: Shield,
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
  },
]
