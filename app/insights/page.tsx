import { redirect } from "next/navigation"

export default function InsightsRedirect() {
  // Keep /insights working for old links by redirecting to /blog
  redirect("/blog")
}
