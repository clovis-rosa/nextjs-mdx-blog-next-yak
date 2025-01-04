// If you uncomment the "use server" line, it will work but no styles will be applied,

"use server";

import Link from "next/link";
import { getPosts } from "@/lib/posts-queries";
import { ArrowRight } from "lucide-react";
import { styled } from "next-yak";

// Import the H2 component from the typography.tsx file
// It can't be colocated with this block of code, otherwise it gets error
// Please, rename the Article component to article and it will work
import HeadingH2 from "@/components/typography";

// Import the same Article component from the article.tsx file
// It can't be colocated with this block of code, otherwise it gets error
// Please, uncomment it
import Article from "@/components/article";

// This component works with next-yak as expected
import PublishedDate from "@/components/published-date";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      <Article>
        {posts.map(({ slug, description, title, publishDate }) => (
          <div key={slug}>
            <PublishedDate date={publishDate} />
            <HeadingH2>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </HeadingH2>
            <p>{description}</p>
            <Link href={`/blog/${slug}`}>
              Ler mais
              <ArrowRight />
            </Link>
          </div>
        ))}
      </Article>
    </div>
  );
}

// Please uncomment the following code

// const Article = styled.article`
//   margin-bottom: 1.5rem;
//   background-color: yellow;
// `;