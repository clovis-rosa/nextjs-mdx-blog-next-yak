import { readdir } from "node:fs/promises";

export interface PostProps {
	slug: string;
	description: string;
	title: string;
	publishDate: string;
}

export interface MetadataProps {
	description: string;
	title: string;
	publishDate: string;
}

export async function getPosts(): Promise<PostProps[]> {
	const slugs = (
		await readdir("./src/app/blog/(posts)", { withFileTypes: true })
	).filter((dirent) => dirent.isDirectory());

	const posts = await Promise.all(
		slugs.map(async ({ name }) => {
			const { metadata } = await import(`@/app/blog/(posts)/${name}/page.mdx`);
			return { slug: name, ...metadata };
		}),
	);

	posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

	return posts;
}

export async function getPost(slug?: string): Promise<PostProps[]> {
	const slugs = (
		await readdir("./src/app/blog/(posts)", { withFileTypes: true })
	).filter((dirent) => dirent.isDirectory());

	const posts = await Promise.all(
		slugs.map(async ({ name }) => {
			const { metadata } = await import(`@/app/blog/(posts)/${name}/page.mdx`);
			return { slug: name, ...metadata };
		}),
	);

	// If a slug is provided, filter the posts by the slug
	return slug ? posts.filter((post) => post.slug === slug) : posts;
}
