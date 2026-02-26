// All assets are self-contained within the project

export const ASSETS = {
  // Logo
  logo: {
    company: "/images/design-mode/s-logo.png",
    width: 32,
    height: 32,
    alt: "Systems Integration Logo",
  },

  // Wallpaper Background - Orange and Black Gradient
  wallpaper: {
    main: "/images/wallpaper-orange-black-gradient.jpg",
    alt: "Orange and Black Gradient Wallpaper",
  },

  // Tool & Technology Logos
  tools: {
    // Databases
    postgresql: "/images/tools/postgresql-logo.svg",
    mongodb: "/images/tools/mongodb-logo.svg",
    snowflake: "/images/tools/snowflake-logo.svg",
    googleCloud: "/images/tools/google-cloud-logo.svg",
    firebase: "/images/tools/firebase-logo.svg",

    // Analytics & BI
    powerBI: "/images/tools/power-bi-logo.svg",
    tableau: "/images/tools/tableau-logo.svg",
    airflow: "/images/tools/airflow-logo.svg",
    dbt: "/images/tools/dbt-logo.svg",
    kafka: "/images/tools/kafka-logo.svg",
    apacheSpark: "/images/tools/apache-spark-logo.svg",
    superset: "/images/tools/superset-logo.svg",

    // Frontend & Backend Frameworks
    react: "/images/tools/react-logo.svg",
    nextjs: "/images/tools/nextjs-logo.svg",
    vuejs: "/images/tools/vuejs-logo.svg",
    nodejs: "/images/tools/nodejs-logo.svg",
    express: "/images/tools/express-logo.svg",
    fastapi: "/images/tools/fastapi-logo.svg",
    flutter: "/images/tools/flutter-logo.svg",

    // Cloud & Infrastructure
    aws: "/images/tools/aws-logo.svg",
    azure: "/images/tools/azure-logo.svg",
    docker: "/images/tools/docker-logo.svg",
    kubernetes: "/images/tools/kubernetes-logo.svg",
    terraform: "/images/tools/terraform-logo.svg",
    jenkins: "/images/tools/jenkins-logo.svg",
    gitlab: "/images/tools/gitlab-logo.svg",
    github: "/images/tools/github-logo.svg",

    // Monitoring & Security
    prometheus: "/images/tools/prometheus-logo.svg",
    grafana: "/images/tools/grafana-logo.svg",
    hashicorp: "/images/tools/hashicorp-logo.svg",
    snyk: "/images/tools/snyk-logo.svg",
    crowdstrike: "/images/tools/crowdstrike-logo.svg",
    collibra: "/images/tools/collibra-logo.svg",
    alation: "/images/tools/alation-logo.svg",

    // AI & ML
    tensorflow: "/images/tools/tensorflow-logo.svg",
    pytorch: "/images/tools/pytorch-logo.svg",
    huggingface: "/images/tools/huggingface-logo.svg",
    langchain: "/images/tools/langchain-logo.svg",
    openai: "/images/tools/openai-logo.svg",
    kaggle: "/images/tools/kaggle-logo.svg",
    python: "/images/tools/python-logo.svg",

    // Enterprise
    microsoft: "/images/tools/microsoft-logo.svg",
    google: "/images/tools/google-logo.svg",
    ibm: "/images/tools/ibm-logo.svg",
    nvidia: "/images/tools/nvidia-logo.svg",
    dell: "/images/tools/dell-logo.svg",
    hp: "/images/tools/hp-logo.svg",
    microsoftFabric: "/images/tools/microsoft-fabric-logo.svg",
    businessCentral: "/images/tools/business-central-logo.svg",
  },

  // Animations & CSS Classes
  animations: {
    fadeIn: "fade-in",
    slideInUp: "slide-in-up",
    gradientText: "gradient-text-orange-red",
    shimmer: "shimmer",
  },

  // Color Theme
  colors: {
    primary: "#FF6B35", // Orange
    secondary: "#1A1A1A", // Black
    accent: "#FF4500", // Red-Orange
    white: "#FFFFFF",
    transparent: "transparent",
  },
}

// Helper function to get tool logo
export function getToolLogo(toolName: string): string {
  const normalizedName = toolName.toLowerCase().replace(/[.\s]+/g, "")
  const logoMap: Record<string, string> = {
    postgresql: ASSETS.tools.postgresql,
    mongodb: ASSETS.tools.mongodb,
    snowflake: ASSETS.tools.snowflake,
    googlecloud: ASSETS.tools.googleCloud,
    firebase: ASSETS.tools.firebase,
    powerbi: ASSETS.tools.powerBI,
    tableau: ASSETS.tools.tableau,
    airflow: ASSETS.tools.airflow,
    dbt: ASSETS.tools.dbt,
    kafka: ASSETS.tools.kafka,
    apachespark: ASSETS.tools.apacheSpark,
    superset: ASSETS.tools.superset,
    reactjs: ASSETS.tools.react,
    nextjs: ASSETS.tools.nextjs,
    vuejs: ASSETS.tools.vuejs,
    nodejs: ASSETS.tools.nodejs,
    express: ASSETS.tools.express,
    fastapi: ASSETS.tools.fastapi,
    flutter: ASSETS.tools.flutter,
    aws: ASSETS.tools.aws,
    azure: ASSETS.tools.azure,
    docker: ASSETS.tools.docker,
    kubernetes: ASSETS.tools.kubernetes,
    terraform: ASSETS.tools.terraform,
    jenkins: ASSETS.tools.jenkins,
    gitlab: ASSETS.tools.gitlab,
    github: ASSETS.tools.github,
    prometheus: ASSETS.tools.prometheus,
    grafana: ASSETS.tools.grafana,
    hashicorp: ASSETS.tools.hashicorp,
    snyk: ASSETS.tools.snyk,
    crowdstrike: ASSETS.tools.crowdstrike,
    collibra: ASSETS.tools.collibra,
    alation: ASSETS.tools.alation,
    tensorflow: ASSETS.tools.tensorflow,
    pytorch: ASSETS.tools.pytorch,
    huggingface: ASSETS.tools.huggingface,
    langchain: ASSETS.tools.langchain,
    openai: ASSETS.tools.openai,
    kaggle: ASSETS.tools.kaggle,
    python: ASSETS.tools.python,
    microsoft: ASSETS.tools.microsoft,
    google: ASSETS.tools.google,
    ibm: ASSETS.tools.ibm,
    nvidia: ASSETS.tools.nvidia,
    dell: ASSETS.tools.dell,
    hp: ASSETS.tools.hp,
    microsoftfabric: ASSETS.tools.microsoftFabric,
    businesscentral: ASSETS.tools.businessCentral,
  }

  return logoMap[normalizedName] || ASSETS.tools.python // Fallback to Python logo
}
