import { getAllPosts } from "@/lib/blog-data";
import Link from "next/link";


export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">

      <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Insights & Articles</h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-slate-200 rounded-xl p-6 hover:bg-white shadow-sm transition"
            >
              <div className="text-sm text-orange-500 font-semibold mb-3">{post.category}</div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <p className="text-xs text-slate-500">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                • {post.author}
              </p>
            </Link>
          ))}
        </div>
      </div>


    </main>
  );
}
