"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  color?: string; // e.g. "text-blue-500"
}

export function Breadcrumbs({ items, color = "text-gray-400" }: BreadcrumbsProps) {
  return (
    <nav
      className="text-sm mb-6 px-6 pt-6 select-none"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center group">
            {item.href ? (
              <Link
                href={item.href}
                className={`text-gray-400 hover:${color} transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`font-medium ${color}`}>{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight
                className={`w-4 h-4 mx-2 text-gray-500 transition-colors group-hover:${color}`}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
