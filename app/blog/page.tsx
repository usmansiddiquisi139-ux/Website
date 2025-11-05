import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Blog | Systems Integration",
  description: "Insights, best practices, and thought leadership on AI, cloud, security, and enterprise technology.",
}

export default function BlogPage() {
  const posts = [
    {
      slug: "zero-downtime-migrations",
      title: "The Art of Zero-Downtime Cloud Migrations",
      excerpt: "How to migrate mission-critical systems without disrupting business operations.",
      publishedDate: "2024-10-15",
      readTime: "8 min read",
      category: "Cloud Strategy",
    },
    {
      slug: "ai-fraud-detection",
      title: "Real-Time Fraud Detection with Machine Learning",
      excerpt: "Implementing ML models to detect fraudulent transactions with 85% reduction in losses.",
      publishedDate: "2024-10-01",
      readTime: "10 min read",
      category: "AI & ML",
    },
    {
      slug: "devops-transformation",
      title: "From DevOps Chaos to CI/CD Excellence",
      excerpt: "Building deployment pipelines that enable faster releases and higher reliability.",
      publishedDate: "2024-09-20",
      readTime: "9 min read",
      category: "DevOps",
    },
    {
      slug: "data-governance-framework",
      title: "Enterprise Data Governance: Building a Scalable Framework",
      excerpt: "How to implement data governance that balances compliance with business agility.",
      publishedDate: "2024-09-05",
      readTime: "12 min read",
      category: "Data Strategy",
    },
    {
      slug: "cybersecurity-essentials",
      title: "Cybersecurity Essentials for Enterprise Leadership",
      excerpt: "Critical security practices every executive should understand.",
      publishedDate: "2024-08-25",
      readTime: "7 min read",
      category: "Security",
    },
    {
      slug: "api-first-architecture",
      title: "Building APIs That Scale: Design Patterns for Enterprise",
      excerpt: "Modern API design principles for system integration at scale.",
      publishedDate: "2024-08-10",
      readTime: "11 min read",
      category: "Architecture",
    },
  ]

  return (
    <main className="min-h-screen bg-transparent">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Blog & Insights</h1>
          <p className="text-xl text-white max-w-2xl">
            Thought leadership on AI, cloud strategy, security, and enterprise transformation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="h-full p-6 rounded-lg border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm hover:border-orange-400 hover:bg-orange-500/20 transition cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold text-orange-300 bg-orange-500/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-white">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-transparent transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="text-sm text-white">
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/services">
              <div className="p-8 rounded-lg border border-orange-500/30 bg-Transparent backdrop-blur-sm hover:border-orange-400 hover:bg-orange-500/20 transition cursor-pointer group text-center">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:bg-clip-text group-hover:bg-Transparent group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-transparent transition-all duration-300">
                  Explore Our Services
                </h3>
                <p className="text-white">
                  Transform these insights into action with our comprehensive service offerings.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
