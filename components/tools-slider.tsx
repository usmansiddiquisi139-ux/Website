"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

const toolLogoMap: Record<string, string> = {
  // Data & Analytics
  PostgreSQL: "/images/tools-slider/PostgreSQL.svg",
  MongoDB: "/images/tools-slider/MongoDB.svg",
  Snowflake: "/images/tools-slider/Snowflake.svg",
  BigQuery: "/images/tools-slider/BigQuery.svg",
  Firebase: "/images/tools-slider/Firebase.svg",
  "Power BI": "/images/tools-slider/Power BI.svg",
  Tableau: "/images/tools-slider/Tableau.svg",
  Airflow: "/images/tools-slider/Airflow.svg",
  dbt: "/images/tools-slider/dbt.svg",
  Kafka: "/images/tools-slider/Kafka.svg",

  // Development Frameworks
  "React.js": "/images/tools-slider/React.js.svg",
  "Vue.js": "/images/tools-slider/Vuejs.svg",
  "Node.js": "/images/tools-slider/Node.js.svg",
  Express: "/images/tools-slider/Express.svg",
  FastAPI: "/images/tools-slider/FastAPI.svg",
  Flutter: "/images/tools-slider/Flutter.svg",
  GraphQL: "/images/tools-slider/GraphQL.svg",

  // Cloud & DevOps
  AWS: "/images/tools-slider/AWS.svg",
  Azure: "/images/tools-slider/Azure.svg",
  GCP: "/images/tools-slider/GCP.svg",
  Docker: "/images/tools-slider/Docker.svg",
  Kubernetes: "/images/tools-slider/Kubernetes.svg",
  Terraform: "/images/tools-slider/Terraform.svg",
  Jenkins: "/images/tools-slider/Jenkins.svg",
  "Github Actions": "/images/tools-slider/Github Actions.svg",

  // Monitoring & Logging
  Prometheus: "/images/tools-slider/Prometheus.svg",
  Grafana: "/images/tools-slider/Grafana.svg",
  "ELK Stack": "/images/tools-slider/ELK Stack.svg",
  Splunk: "/images/tools-slider/Splunk.svg",

  // Security Tools
  "Burp Suite": "/images/tools-slider/Burp Suite.svg",
  Metasploit: "/images/tools-slider/Metasploit.svg",
  Nmap: "/images/tools-slider/Nmap.svg",
  Wireshark: "/images/tools-slider/Wireshark.svg",

  // AI/ML & Data Science
  TensorFlow: "/images/tools-slider/TensorFlow.svg",
  PyTorch: "/images/tools-slider/PyTorch.svg",
  LangChain: "/images/tools-slider/LangChain.svg",
  "OpenAI API": "/images/tools-slider/OpenAI API.svg",
  Python: "/images/tools-slider/Python.svg",

  // ETL & Data Integration
  Fivetran: "/images/tools-slider/Fivetran.svg",
  Talend: "/images/tools-slider/Talend.svg"
}

interface LogoProps {
  src: string
  alt: string
  name: string
}

function ToolLogo({ src, alt, name }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center p-4">
        {!imageError ? (
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-contain max-w-full max-h-full hover:scale-110 transition-transform duration-200"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/70 text-sm font-semibold">
            {name.split(" ")[0]}
          </div>
        )}
      </div>
    </div>
  )
}

const toolCategories = [
  {
    tools: [
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "BigQuery",
      "Firebase",
      "Power BI",
      "Tableau",
      "Airflow",
      "dbt",
      "Kafka",
      "Fivetran",
      "Talend",
    ],
  },
  {
    tools: [
      "React.js",
      "Vue.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Flutter",
      "GraphQL",
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Github Actions",
    ],
  },
  {
    tools: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Splunk",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "OpenAI API",
      "Python",
    ],
  },
]

function CarouselSlider({ tools, animateDirection }: { tools: string[]; animateDirection?: "normal" | "reverse" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1.5,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        direction: animateDirection === "reverse" ? "backward" : "forward",
      }),
    ],
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex gap-4">
          {tools.map((tool) => {
            const logoUrl = toolLogoMap[tool]
            return (
              <div key={tool} className="flex-shrink-0 w-28 flex justify-center">
                <ToolLogo src={logoUrl || ""} alt={`${tool} logo`} name={tool} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function ToolsSlider() {
  return (
    <section className="w-full px-4 sm:px-6 py-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-white">Tools & Technologies We Use</h2>
        <div className="space-y-6">
          {toolCategories.map((category, index) => (
            <CarouselSlider key={index} tools={category.tools} animateDirection={index === 1 ? "reverse" : "normal"} />
          ))}
        </div>
      </div>
    </section>
  )
}
