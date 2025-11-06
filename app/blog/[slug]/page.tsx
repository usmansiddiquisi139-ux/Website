import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { getAllPosts, getPost } from "@/lib/blog-data";

// 🧩 Find service slug automatically based on category
const findServiceSlug = (category: string) => {
  const match = services.find((s) =>
    s.title.toLowerCase().includes(category.toLowerCase())
  );
  return match ? match.slug : "#";
};

// 🧩 Generate static params
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// 🧠 SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog Not Found | Systems Integration" };

  return {
    title: `${post.title} | Systems Integration`,
    description: post.excerpt,
  };
}

// 🧰 Markdown Formatting — includes ##, ###, and bullet styling
function renderFormattedContent(raw: string) {
  return raw
    // 🟠 Subheadings
    .replace(
      /^## (.*$)/gim,
      "<h2 class='text-3xl font-bold text-orange-400 mt-10 mb-4 border-l-4 border-orange-500 pl-3'>$1</h2>"
    )
    .replace(
      /^### (.*$)/gim,
      "<h3 class='text-2xl font-semibold text-orange-300 mt-8 mb-3'>$1</h3>"
    )
    // 🧾 Lists
    .replace(/^\d+\.\s(.*$)/gim, "<li class='mb-1'>$1</li>")
    .replace(/^- (.*$)/gim, "<li class='mb-1'>$1</li>")
    // 🟢 Bold
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    // 🟣 Paragraphs
    .replace(/\n{2,}/gim, "</p><p>")
    .replace(/^<p><\/p>/, "")
    // 🟢 Proper list wrapping — improved bullet alignment (pl-14)
    .replace(
      /(<li>.*?<\/li>)/gims,
      "<ul class='list-disc list-outside pl-14 space-y-2 mb-6 marker:text-orange-400'>$1</ul>"
    )
    .trim();
}

// 📰 Blog Page
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return notFound();

  const formattedHTML = renderFormattedContent(post.content || "");
  const serviceSlug = findServiceSlug(post.category);

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Header />

      <article className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 pt-28 pb-16 leading-relaxed">
        {/* 🟠 Category Pill */}
        <div className="mb-5">
          <Link
            href={`/services/${serviceSlug}`}
            className="inline-block text-orange-400 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-orange-500/20 transition"
          >
            {post.category}
          </Link>
        </div>

        {/* 🧠 Title + Description */}
        <h1 className="text-4xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="text-gray-300 text-lg mb-3 max-w-3xl">{post.excerpt}</p>

        <div className="flex flex-wrap items-center justify-between text-sm text-white mb-8 border-b border-gray-800 pb-4">
          <time>
            {new Date(post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.author && <span>By {post.author}</span>}
        </div>

        {/* 📝 Main Content */}
        <section
          className="max-w-none text-gray-200 text-base leading-relaxed space-y-6 [&_ul]:list-none [&_ul]:pl-10 [&_li]:pl-2 [&_ul]:mb-4 [&_ul]:space-y-2"
          style={{ listStyleType: "none" }}
          dangerouslySetInnerHTML={{ __html: `<p>${formattedHTML}</p>` }}
        ></section>
      </article>
      <Footer />
    </main>
  );
}
