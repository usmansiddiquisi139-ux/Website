export const toolsDatabase = {
  // Cloud Platforms
  AWS: { name: "AWS", category: "Cloud" },
  Azure: { name: "Azure", category: "Cloud" },
  GCP: { name: "GCP", category: "Cloud" },

  // Databases
  PostgreSQL: { name: "PostgreSQL", category: "Database" },
  MongoDB: { name: "MongoDB", category: "Database" },
  Snowflake: { name: "Snowflake", category: "Database" },
  BigQuery: { name: "BigQuery", category: "Database" },
  Oracle: { name: "Oracle", category: "Database" },

  // Frontend Frameworks
  "React.js": { name: "React.js", category: "Frontend" },
  "Next.js": { name: "Next.js", category: "Frontend" },
  "Vue.js": { name: "Vue.js", category: "Frontend" },
  Tailwind: { name: "Tailwind", category: "Frontend" },

  // Backend Frameworks
  "Node.js": { name: "Node.js", category: "Backend" },
  Express: { name: "Express", category: "Backend" },
  FastAPI: { name: "FastAPI", category: "Backend" },
  Python: { name: "Python", category: "Backend" },

  // Mobile
  Flutter: { name: "Flutter", category: "Mobile" },
  "React Native": { name: "React Native", category: "Mobile" },
  Firebase: { name: "Firebase", category: "Mobile" },

  // DevOps & Infrastructure
  Docker: { name: "Docker", category: "DevOps" },
  Kubernetes: { name: "Kubernetes", category: "DevOps" },
  Terraform: { name: "Terraform", category: "DevOps" },
  Ansible: { name: "Ansible", category: "DevOps" },
  Jenkins: { name: "Jenkins", category: "DevOps" },
  "GitHub Actions": { name: "GitHub Actions", category: "DevOps" },

  // Data & ETL
  Kafka: { name: "Kafka", category: "Data" },
  Airflow: { name: "Airflow", category: "Data" },
  dbt: { name: "dbt", category: "Data" },
  Talend: { name: "Talend", category: "Data" },

  // AI/ML
  TensorFlow: { name: "TensorFlow", category: "AI/ML" },
  PyTorch: { name: "PyTorch", category: "AI/ML" },
  "Hugging Face": { name: "Hugging Face", category: "AI/ML" },
  LangChain: { name: "LangChain", category: "AI/ML" },
  "OpenAI API": { name: "OpenAI", category: "AI/ML" },

  // Monitoring & Observability
  Prometheus: { name: "Prometheus", category: "Monitoring" },
  Grafana: { name: "Grafana", category: "Monitoring" },
  "ELK Stack": { name: "ELK Stack", category: "Monitoring" },

  // BI & Analytics
  "Power BI": { name: "Power BI", category: "BI" },
  Tableau: { name: "Tableau", category: "BI" },

  // Security
  "Burp Suite": { name: "Burp Suite", category: "Security" },
  "OWASP ZAP": { name: "OWASP ZAP", category: "Security" },
  Metasploit: { name: "Metasploit", category: "Security" },
  Nessus: { name: "Nessus", category: "Security" },
}

export type ToolKey = keyof typeof toolsDatabase

export const getTool = (toolName: string) => {
  return (
    toolsDatabase[toolName as ToolKey] || {
      name: toolName,
      category: "Other",
    }
  )
}

export const getToolsByCategory = (toolNames: string[]) => {
  const categorized: Record<string, (typeof toolsDatabase)[ToolKey][]> = {}
  toolNames.forEach((name) => {
    const tool = getTool(name)
    if (!categorized[tool.category]) {
      categorized[tool.category] = []
    }
    categorized[tool.category].push(tool)
  })
  return categorized
}
