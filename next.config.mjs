// import type { NextConfig } from "next";
import { withYak } from "next-yak/withYak";

import createMDX from "@next/mdx";
// import rehypeShiki from "@shikijs/rehype";
// import { transformerNotationHighlight } from "@shikijs/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkToc from "remark-toc";

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. For my app, this is fine.
  experimental: {
    // mdxRs: true,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      // [
      //   rehypeShiki,
      //   {
      //     theme: "vesper",
      //     trimEndingNewline: true,
      //     transformers: [transformerNotationHighlight()],
      //   },
      // ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
        },
      ],
    ],
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      [remarkToc, { heading: "conteúdo", ordered: true }],
      [remarkMdxFrontmatter, { name: "metadata" }],
    ],
  },
});

export default withYak(withMDX(nextConfig));
