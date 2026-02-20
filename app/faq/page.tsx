import { Header } from "@/components/header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ | Systems Integration",
  description:
    "Frequently asked questions about our services, process, and technology expertise.",
  alternates: {
    canonical: "https://www.systemsintegration.co/faq",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What does Systems Integration offer?",
      answer:
        "We provide seven core services: Integration & Migration Services, AI-SEO Automation, AI/ML Learning & Automation, Data Solutions & Governance, Web & Mobile App Development, DevOps & Cloud, and Cybersecurity & Ethical Hacking (EHaaS). Each service is designed to solve enterprise-scale business challenges.",
    },
    {
      question: "How can Integration & Migration Services help my business?",
      answer:
        "We eliminate manual workflows and data silos by connecting your existing tools, apps, and platforms. Our services include zero-downtime migrations, data pipeline automation, and technology upgrades that modernize your tech stack.",
    },
    {
      question: "What is AI-SEO Automation and how does it work?",
      answer:
        "Our LangChain-powered AI-SEO strategy uses AI to optimize your content for search engines and LLM platforms like ChatGPT, Gemini, and Claude. We combine structured data, semantic optimization, and automated pipelines for improved digital visibility.",
    },
    {
      question: "How does AI/ML Learning & Automation benefit our operations?",
      answer:
        "We embed intelligence into your business processes through intelligent process automation, predictive analytics, NLP solutions, recommendation engines, and LLM-powered chatbots. This reduces costs, increases efficiency, and improves accuracy in decision-making.",
    },
    {
      question: "What does your Data Solutions & Governance service include?",
      answer:
        "We design secure, trusted data ecosystems with enterprise data architecture, ETL/ELT pipelines, data lakes, quality management, metadata cataloging, governance frameworks for compliance (GDPR, HIPAA), and business intelligence dashboards.",
    },
    {
      question: "Can you build custom web and mobile applications?",
      answer:
        "Yes. We develop high-performance web applications (React, Next.js, Vue), native and cross-platform mobile apps (Flutter, React Native), scalable APIs, and e-commerce/SaaS platforms. Our focus is on fast, secure, and user-centric experiences.",
    },
    {
      question: "How does your DevOps & Cloud service accelerate deployment?",
      answer:
        "We set up CI/CD pipelines, manage cloud migrations to AWS/Azure/GCP, containerize applications with Docker/Kubernetes, implement Infrastructure as Code, and provide comprehensive monitoring and observability solutions.",
    },
    {
      question: "What is Cybersecurity & Ethical Hacking as a Service (EHaaS)?",
      answer:
        "We provide continuous security testing through web application penetration testing, infrastructure assessments, red team simulations, social engineering tests, and breach attack simulations to identify and mitigate vulnerabilities before attackers do.",
    },
    {
      question: "How do you approach a new project?",
      answer:
        "We start with a strategic assessment of your business goals and technical landscape. We conduct competitive analysis, identify quick wins, and design a phased implementation roadmap that balances immediate value with long-term transformation.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have deep expertise across Healthcare, Financial Services, Manufacturing, Oil & Gas, Aerospace & Defense, Education, Transportation, and Real Estate. Each industry has unique regulatory and security requirements that we understand thoroughly.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We offer post-implementation support, monitoring, optimization, and continuous improvements. Many clients engage us on retainer for strategic advisory, technology roadmap planning, and security assessments.",
    },
    {
      question: "How do you measure project success?",
      answer:
        "Success metrics depend on the project: cost savings, uptime improvements, revenue increases, faster time-to-market, compliance achievements, or security risk reduction. We establish KPIs upfront and track them rigorously throughout engagement.",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white">
            Find answers to common questions about our services, process, and
            expertise.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Didn't find your answer?
          </h2>
          <p className="text-white mb-6">
            Reach out directly to discuss your specific questions and challenges.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>


    </main>
  );
}
