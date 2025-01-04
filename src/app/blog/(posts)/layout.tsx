import { type MetadataProps, getPost } from "@/lib/posts-queries";
import type { ReactNode } from "react";

export default async function PostLayout({
	children,
}: {
	children: ReactNode;
}) {
	const [metadata] = (await getPost()) as MetadataProps[];
	const { title, description, publishDate } = metadata;
	// console.log(metadata, '=======> metadata')

	return (
		<div className="space-y-8">
			<div className="prose prose-zinc md:prose-lg prose-invert mx-auto max-w-[calc(100vw-64px)] md:max-w-3xl prose-h1:leading-tight">
				<div className="space-y-8">
					<h1 className="">{title}</h1>
					<time>
						{new Date(publishDate).toLocaleDateString("pt-BR", {
							dateStyle: "medium",
						})}
					</time>
					<p className="text-zinc-400 mb-6">{description}</p>
				</div>
				<div className="h-px w-full bg-zinc-900" />
				{children}
			</div>
			<div className="h-px w-full bg-zinc-900" />
		</div>
	);
}
