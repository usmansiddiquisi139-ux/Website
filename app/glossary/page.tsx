import { Header } from "@/components/header"


export const metadata = {
  title: "Glossary | Systems Integration",
  description: "Technical glossary of terms used in AI, cloud, security, and enterprise technology.",
}

export default function GlossaryPage() {
  const terms = [
    {
      term: "API (Application Programming Interface)",
      definition:
        "A set of protocols and tools that allows different software applications to communicate with each other. APIs define the methods and data formats for requesting and exchanging information.",
    },
    {
      term: "Cloud Migration",
      definition:
        "The process of transferring data, applications, and workloads from on-premises infrastructure to cloud environments, typically for improved scalability, cost efficiency, and flexibility.",
    },
    {
      term: "DevOps",
      definition:
        "A set of practices combining software development and IT operations, emphasizing collaboration, automation, and continuous integration/deployment for faster, more reliable releases.",
    },
    {
      term: "Machine Learning (ML)",
      definition:
        "A subset of artificial intelligence that enables systems to learn and improve from data without being explicitly programmed, using algorithms to identify patterns and make predictions.",
    },
    {
      term: "Kubernetes",
      definition:
        "An open-source container orchestration platform that automates deployment, scaling, and management of containerized applications across clusters of machines.",
    },
    {
      term: "Cybersecurity",
      definition:
        "The practice of protecting computer systems, networks, and data from digital attacks, breaches, and unauthorized access through technical and procedural safeguards.",
    },
    {
      term: "Data Governance",
      definition:
        "A framework and set of policies for managing the availability, usability, integrity, and security of data, ensuring compliance with regulations and business requirements.",
    },
    {
      term: "Zero-Downtime Deployment",
      definition:
        "A software deployment strategy that updates applications or infrastructure without interrupting service availability, maintaining continuous operation throughout the deployment process.",
    },
    {
      term: "MITRE ATT&CK Framework",
      definition:
        "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations, used for threat modeling and security assessments.",
    },
    {
      term: "Penetration Testing (Pen Testing)",
      definition:
        "An authorized security assessment where professionals attempt to breach systems, networks, or applications to identify vulnerabilities before attackers can exploit them.",
    },
    {
      term: "Real-time Processing",
      definition:
        "The ability to process and respond to data immediately as it arrives, rather than in batch mode, enabling instantaneous insights and automated decisions.",
    },
    {
      term: "Scalability",
      definition:
        "The capability of a system to handle increasing amounts of work or load, either by adding resources (vertical scaling) or adding more machines (horizontal scaling).",
    },
  ]

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technical Glossary
          </h1>
          <p className="text-xl text-white">
            Definitions of key technical terms used in modern enterprise technology.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {terms.map((item, idx) => (
              <div key={idx} className="border-b border-white/20 pb-8 last:border-0">
                <h3 className="text-2xl font-bold text-orange-500 mb-3">{item.term}</h3>
                <p className="text-white leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}
