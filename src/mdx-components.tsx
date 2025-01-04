import type { MDXComponents } from "mdx/types";

// import React from "react";
import React, { type ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		table: (props) => (
			<div>
				<table {...props} />
			</div>
		),
		td: (props) => <td {...props} />,
		th: (props) => <th {...props} />,
		thead: (props) => <thead {...props} />,
		tr: (props) => <tr {...props} />,
		pre: (props) => <pre {...props} />,
		a: (props) =>
			props.href?.startsWith("http") ? (
				<a target="_blank" rel="noreferrer" {...props} />
			) : (
				<a {...props} />
			),
		code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
			const codeHTML = highlight(children as string);
			return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
		},
	};
}
