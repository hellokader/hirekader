import type { BlogPost, BlogPostContentBlock } from "@/sanity/lib/blog";
import { getBlogCategories, getBlogCategorySlug } from "@/sanity/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

export function renderLegacyBlogIndex(html: string, posts: BlogPost[]) {
  return html
    .replace(/<div class="blog-filters" id="blogFilters">[\s\S]*?<\/div>\s*<div class="blog-grid" id="blogGrid">/, `${renderFilters(posts)}\n<div class="blog-grid" id="blogGrid">`)
    .replace(/<div class="blog-grid" id="blogGrid">[\s\S]*?<\/div>\s*<p class="blog-close">/, `<div class="blog-grid" id="blogGrid">\n${posts.map((post) => renderPostCard(post, "h2", true)).join("\n")}\n</div>\n<p class="blog-close">`);
}

export function renderLegacyBlogArticle(html: string, post: BlogPost, relatedPosts: BlogPost[]) {
  const title = escapeHtml(post.title);
  const description = escapeHtml(post.description);
  const canonical = absoluteUrl(routes.blogPost(post.slug));
  const related = relatedPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const tocItems = getTocItems(post);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title} | Abdul Kader</title>`)
    .replace(/<meta name="description" content="[\s\S]*?">/, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical" href="[\s\S]*?">/, `<link rel="canonical" href="${canonical}">`)
    .replace(/<meta property="og:title" content="[\s\S]*?">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[\s\S]*?">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="article:published_time" content="[\s\S]*?">/, `<meta property="article:published_time" content="${escapeHtml(post.date)}">`)
    .replace(/<meta property="article:section" content="[\s\S]*?">/, `<meta property="article:section" content="${escapeHtml(post.category)}">`)
    .replace(/<span aria-current="page">[\s\S]*?<\/span>\s*<\/nav>/, `<span aria-current="page">${escapeHtml(post.category)}</span>\n</nav>`)
    .replace(/<article>[\s\S]*?<\/article>/, renderArticle(post, tocItems))
    .replace(/<a href="https:\/\/www\.linkedin\.com\/sharing\/share-offsite\/\?url=[\s\S]*?" target="_blank" rel="noopener">/, `<a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}" target="_blank" rel="noopener">`)
    .replace(/<nav class="toc" aria-label="Table of contents">[\s\S]*?<\/nav>/, renderDesktopToc(tocItems))
    .replace(/<div class="rel-grid">[\s\S]*?<\/div>\s*<div class="pn">/, `<div class="rel-grid">\n${related.map((item) => renderPostCard(item, "h4", false)).join("\n")}\n</div>\n<div class="pn">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(renderJsonLd(post, canonical))}</script>`);
}

function renderFilters(posts: BlogPost[]) {
  return `<div class="blog-filters" id="blogFilters">
${getBlogCategories(posts)
  .map((category, index) => `<button class="${index === 0 ? "on" : ""}" data-cat="${category === "All" ? "all" : getBlogCategorySlug(category)}">${escapeHtml(category)}</button>`)
  .join("\n")}
</div>`;
}

function renderPostCard(post: BlogPost, heading: "h2" | "h4", withDataCat: boolean) {
  const categoryAttr = withDataCat ? ` data-cat="${getBlogCategorySlug(post.category)}"` : "";

  return `<a class="post"${categoryAttr} href="${routes.blogPost(post.slug)}"><div class="cover"><i data-lucide="${escapeHtml(post.iconName)}"></i></div><div class="meta"><span class="cat">${escapeHtml(post.category)}</span><span class="pdate">${escapeHtml(post.displayDate)}</span></div><${heading}>${escapeHtml(post.shortTitle)}</${heading}><p>${escapeHtml(post.excerpt)}</p></a>`;
}

function renderArticle(post: BlogPost, tocItems: Array<{ id: string; title: string }>) {
  const updated = post.updated ? `<span>·</span>\n<span class="upd">Updated ${escapeHtml(formatReadableDate(post.updated))}</span>` : "";

  return `<article>
<header>
<span class="cat">${escapeHtml(post.category)}</span>
<h1 class="art-h1">${escapeHtml(post.title)}</h1>
<p class="dek">${escapeHtml(post.description)}</p>
<div class="meta-row">
<time datetime="${escapeHtml(post.date)}">${escapeHtml(formatReadableDate(post.date))}</time>
<span>·</span>
<span>${escapeHtml(post.readTime)}</span>
${updated}
</div>
</header>

<figure class="hero-fig">
<div class="plate"><i data-lucide="${escapeHtml(post.iconName)}"></i></div>
<figcaption>${escapeHtml(post.title)}</figcaption>
</figure>

<details class="toc-m">
<summary>On this page</summary>
${renderTocList(tocItems)}
</details>

<div class="prose">
${renderPortableText(post)}
</div>
</article>`;
}

function renderDesktopToc(tocItems: Array<{ id: string; title: string }>) {
  return `<nav class="toc" aria-label="Table of contents">
<h2>On this page</h2>
${renderTocList(tocItems)}
</nav>`;
}

function renderTocList(tocItems: Array<{ id: string; title: string }>) {
  if (tocItems.length === 0) {
    return "<ol></ol>";
  }

  return `<ol>
${tocItems.map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.title)}</a></li>`).join("\n")}
</ol>`;
}

function renderPortableText(post: BlogPost) {
  const blocks = post.body?.filter((block) => block._type === "block") || [];

  if (blocks.length === 0) {
    return `<p>${escapeHtml(post.excerpt)}</p>
<p>This post is connected to Sanity. Add body content in Studio to replace this fallback text.</p>`;
  }

  const html: string[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      html.push(`<ul>\n${listItems.join("\n")}\n</ul>`);
      listItems = [];
    }
  }

  for (const block of blocks) {
    const text = renderBlockChildren(block);

    if (!text) {
      continue;
    }

    if (block.listItem) {
      listItems.push(`<li>${text}</li>`);
      continue;
    }

    flushList();

    if (block.style === "h2") {
      const id = slugify(stripHtml(text));
      html.push(`<h2 id="${id}">${text} <a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h2>`);
    } else if (block.style === "h3") {
      html.push(`<h3>${text}</h3>`);
    } else if (block.style === "blockquote") {
      html.push(`<blockquote>${text}</blockquote>`);
    } else {
      html.push(`<p>${text}</p>`);
    }
  }

  flushList();
  return html.join("\n");
}

function renderBlockChildren(block: BlogPostContentBlock) {
  return (block.children || [])
    .map((child) => {
      const text = escapeHtml(child.text || "");

      if (child.marks?.includes("strong")) {
        return `<strong>${text}</strong>`;
      }

      if (child.marks?.includes("em")) {
        return `<em>${text}</em>`;
      }

      return text;
    })
    .join("");
}

function getTocItems(post: BlogPost) {
  const headings =
    post.body
      ?.filter((block) => block._type === "block" && block.style === "h2")
      .map((block) => {
        const title = stripHtml(renderBlockChildren(block));
        return { id: slugify(title), title };
      }) || [];

  return headings;
}

function renderJsonLd(post: BlogPost, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Md Abdul Kader",
      url: "https://linkedin.com/in/abdul-kader-ppc"
    },
    publisher: {
      "@type": "Person",
      name: "Md Abdul Kader"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical
    }
  };
}

function formatReadableDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(parsed);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
