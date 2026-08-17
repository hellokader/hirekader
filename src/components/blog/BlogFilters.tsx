"use client";

import { useState } from "react";
import { categories, categoryToSlug } from "@/data/site-content";

export function BlogFilters() {
  const [active, setActive] = useState("All");

  return (
    <div className="blog-filters" aria-label="Filter posts">
      {categories.map((category) => (
        <button
          className={active === category ? "on" : ""}
          data-cat={category === "All" ? "all" : categoryToSlug(category)}
          key={category}
          onClick={() => setActive(category)}
          type="button"
        >
          {category}
        </button>
      ))}
      <style jsx>{`
        :global(.post) {
          display: block;
        }
        ${active !== "All"
          ? `:global(.post:not([data-cat="${categoryToSlug(active)}"])) { display: none; }`
          : ""}
      `}</style>
    </div>
  );
}
