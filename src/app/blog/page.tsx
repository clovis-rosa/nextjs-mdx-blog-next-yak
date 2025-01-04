import { getPosts } from "@/lib/posts-queries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Blog() {
	const posts = await getPosts();

	return (
		<div>
			<h1>Blog</h1>

			<article>
				{posts.map(({ slug, description, title, publishDate }) => (
					<div key={slug}>
						<time>
							{new Date(publishDate).toLocaleDateString("pt-BR", {
								dateStyle: "medium",
							})}
						</time>
						<h2>
							<Link href={`/blog/${slug}`}>{title}</Link>
						</h2>
						<p>{description}</p>
						<Link href={`/blog/${slug}`}>
							Ler mais
							<ArrowRight />
						</Link>
					</div>
				))}
			</article>
		</div>
	);
}
