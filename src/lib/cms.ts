import type { WordPressPost, ContentProvider } from '@/types';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hirekader.com';
const wordpressApiUrl = process.env.WORDPRESS_API_URL;

export const contentProvider: ContentProvider = {
  type: wordpressApiUrl ? 'wordpress' : 'local',
  wordpressApiUrl: wordpressApiUrl,
};

// Local content (MDX/TypeScript files would go here)
export async function getLocalPosts(): Promise<WordPressPost[]> {
  // Placeholder for local blog posts
  return [];
}

// WordPress API functions
export async function getWordPressPosts(page = 1, perPage = 10): Promise<{ posts: WordPressPost[]; total: number }> {
  if (!wordpressApiUrl) {
    return { posts: [], total: 0 };
  }

  try {
    const response = await fetch(
      `${wordpressApiUrl}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0');

    const formattedPosts: WordPressPost[] = posts.map((post: Record<string, unknown>) => ({
      id: post.id as number,
      slug: post.slug as string,
      title: (post.title as { rendered: string }).rendered,
      content: (post.content as { rendered: string }).rendered,
      excerpt: (post.excerpt as { rendered: string }).rendered.replace(/<[^>]*>/g, ''),
      date: post.date as string,
      featuredImage: (() => {
        const embedded = post._embedded as Record<string, unknown> | undefined;
        const media = embedded?.['wp:featuredmedia'] as Record<string, unknown> | undefined;
        return media?.source_url as string | undefined;
      })(),
      categories: (post.categories as number[]) || [],
      author: {
        name: ((post._embedded as Record<string, unknown>)?.['author'] as Array<{ name: string }>)?.[0]?.name || 'Unknown',
      },
    }));

    return { posts: formattedPosts, total };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return { posts: [], total: 0 };
  }
}

export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  if (!wordpressApiUrl) {
    return null;
  }

  try {
    const response = await fetch(
      `${wordpressApiUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();
    if (posts.length === 0) {
      return null;
    }

    const post = posts[0];
    return {
      id: post.id,
      slug: post.slug,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      date: post.date,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
      categories: post.categories || [],
      author: {
        name: post._embedded?.['author']?.[0]?.name || 'Unknown',
      },
    };
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

export async function getWordPressCategories(): Promise<{ id: number; name: string; slug: string }[]> {
  if (!wordpressApiUrl) {
    return [];
  }

  try {
    const response = await fetch(
      `${wordpressApiUrl}/wp-json/wp/v2/categories?per_page=100`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}
