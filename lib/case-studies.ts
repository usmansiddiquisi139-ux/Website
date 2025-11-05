export interface CaseStudy {
  title: string
  client: string
  industry: string
  services: string[]
  overview: string
  challenge: string
  solution: string[]
  outcomes: string[]
  technologies: string[]
  results: string
}

export type CaseStudyMap = Record<string, CaseStudy>

export const caseStudyData: CaseStudyMap = {
  "fintech-ai-fraud": {
    title: "AI-Powered Fraud Detection for FinTech",
    client: "Global Payment Processor",
    industry: "fintech",
    services: ["ai-ml", "data"],
    overview:
      "A leading global payment processor was losing millions annually to fraudulent transactions. They needed a real-time system to detect and prevent fraud without impacting legitimate transactions.",
    challenge:
      "The client was operating with rule-based fraud detection yielding only 60% accuracy and high false positive rates blocking legitimate transactions. Their legacy system couldn't scale to billions of daily transactions.",
    solution: [
      "Conducted comprehensive audit of transaction data and fraud patterns",
      "Built ensemble machine learning model combining gradient boosting and neural networks",
      "Implemented real-time inference pipeline processing 100k+ transactions/second",
      "Created feedback loop automatically retraining models weekly",
      "Deployed on Kubernetes with 99.99% uptime SLA",
    ],
    outcomes: [
      "85% reduction in fraud losses ($12M annual savings)",
      "0.1% false positive rate (previously 15%)",
      "Processed 50B+ transactions with < 100ms latency",
      "40% increase in legitimate transaction approval",
    ],
    technologies: ["TensorFlow", "XGBoost", "Python", "Kubernetes", "PostgreSQL"],
    results:
      "The AI-powered system immediately reduced fraud loss by 85%, enabling the client to expand to new markets with confidence. The system continues learning and improving, now handling billions of transactions annually.",
  },
  "healthcare-migration": {
    title: "Zero-Downtime EHR Migration to Cloud",
    client: "Healthcare Network",
    industry: "healthcare",
    services: ["integration", "devops", "security"],
    overview:
      "A major healthcare network with 50 hospitals needed to migrate from legacy on-premises EHR to cloud without affecting patient care or losing a single record.",
    challenge:
      "The system was processing 500M+ patient records, 50k+ daily transactions, and had zero tolerance for downtime. HIPAA compliance was critical.",
    solution: [
      "Designed parallel system architecture with real-time synchronization",
      "Implemented staged migration of 50 hospitals over 6 months",
      "Created dual-write pattern maintaining data consistency",
      "Built comprehensive disaster recovery and rollback procedures",
      "Automated testing with 10k+ test cases ensuring data integrity",
    ],
    outcomes: [
      "100% uptime during entire migration",
      "Zero data loss or corruption",
      "40% reduction in operational costs",
      "HIPAA compliance maintained throughout",
      "2x improvement in system performance",
    ],
    technologies: ["AWS", "Terraform", "PostgreSQL", "Kafka", "Java"],
    results:
      "The healthcare network maintained perfect uptime during the migration, reducing operational costs by 40% while improving system performance and reliability.",
  },
  "manufacturing-predictive": {
    title: "Predictive Maintenance Platform",
    client: "Industrial Manufacturer",
    industry: "manufacturing",
    services: ["ai-ml", "data", "devops"],
    overview:
      "A global manufacturer with 200+ production facilities needed to reduce equipment downtime and maintenance costs through predictive maintenance.",
    challenge:
      "Equipment failures were unpredictable, causing $50k+ losses per hour of downtime. Maintenance was reactive, not proactive.",
    solution: [
      "Deployed 10k+ IoT sensors across all facilities",
      "Built real-time data pipeline collecting 100M+ sensor readings daily",
      "Developed LSTM neural network predicting failures 5-14 days in advance",
      "Implemented predictive maintenance scheduling system",
      "Created mobile alert system for maintenance teams",
    ],
    outcomes: [
      "35% reduction in equipment downtime ($8M annual savings)",
      "92% accuracy in failure prediction",
      "50% reduction in maintenance costs",
      "20% increase in overall equipment effectiveness (OEE)",
      "45-day ROI on IoT deployment",
    ],
    technologies: ["Python", "TensorFlow", "Kafka", "InfluxDB", "Kubernetes"],
    results:
      "The predictive maintenance platform delivered 35% reduction in downtime, equivalent to $8M annual savings, with ROI achieved in just 45 days.",
  },
  "aerospace-security": {
    title: "Enterprise Security Operations Center",
    client: "Aerospace Contractor",
    industry: "aerospace",
    services: ["security", "devops"],
    overview:
      "An aerospace contractor needed to consolidate security operations and achieve CMMC Level 3 compliance for Department of Defense contracts.",
    challenge:
      "Security was fragmented across departments with no centralized monitoring. CMMC Level 3 compliance was mandatory but unclear.",
    solution: [
      "Designed centralized SOC architecture",
      "Deployed SIEM (Splunk) with real-time threat intelligence",
      "Implemented continuous vulnerability scanning",
      "Established incident response procedures",
      "Automated compliance reporting for CMMC",
    ],
    outcomes: [
      "60% reduction in MTTR (mean time to respond)",
      "CMMC Level 3 compliance achieved and maintained",
      "Zero security incidents post-implementation",
      "24/7 security monitoring across all assets",
      "Successful DoD security audits",
    ],
    technologies: ["Splunk", "Elastic Stack", "Terraform", "Kubernetes"],
    results:
      "The SOC achieved CMMC Level 3 compliance on first audit and reduced incident response time by 60%, enabling the contractor to compete for higher-value DoD contracts.",
  },
  "oil-gas-analytics": {
    title: "Seismic Data Analytics Platform",
    client: "Oil & Gas Exploration",
    industry: "oil-gas",
    services: ["data", "devops", "ai-ml"],
    overview:
      "An oil and gas exploration company was drowning in 50TB+ of seismic data but lacked the infrastructure to process it in real-time.",
    challenge: "Processing seismic data took weeks, delaying exploration decisions. No real-time analytics capability.",
    solution: [
      "Built distributed data lake with 50TB+ capacity",
      "Implemented GPU-accelerated processing clusters",
      "Developed machine learning pipeline for automated interpretation",
      "Created real-time analytics dashboard for geologists",
      "Deployed on cloud with auto-scaling",
    ],
    outcomes: [
      "25% improvement in exploration success rate",
      "Real-time seismic data processing (from weeks to hours)",
      "3x cost reduction vs traditional processing",
      "Accelerated time-to-decision by 90%",
      "$50M+ value from improved exploration success",
    ],
    technologies: ["AWS HPC", "CUDA", "PySpark", "Elasticsearch", "Kubernetes"],
    results:
      "Real-time seismic processing capabilities improved exploration success by 25%, generating $50M+ in additional value from improved drilling site selection.",
  },
  "education-platform": {
    title: "Learning Management System Migration",
    client: "University System",
    industry: "education",
    services: ["integration", "devops", "security"],
    overview:
      "A 10-campus university system needed to consolidate and modernize its learning management platform serving 100k+ students.",
    challenge: "Each campus ran separate LMS instances with no data sharing. Students had fragmented experience.",
    solution: [
      "Designed unified cloud-based LMS architecture",
      "Migrated 100k+ student records across platforms",
      "Implemented single sign-on for seamless access",
      "Built analytics dashboard for student success",
      "Enhanced security with encryption and access controls",
    ],
    outcomes: [
      "Unified platform serving 100k+ students",
      "99.9% uptime across all campuses",
      "40% improvement in student engagement",
      "35% reduction in IT operational costs",
      "Real-time insights for student success interventions",
    ],
    technologies: ["Moodle", "AWS", "Kubernetes", "PostgreSQL"],
    results:
      "The unified LMS improved student engagement by 40% while reducing operational costs by 35%, enabling data-driven interventions for student success.",
  },
}

export default caseStudyData
