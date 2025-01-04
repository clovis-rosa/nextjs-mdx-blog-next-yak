import React from "react";
import { styled } from "next-yak";

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Article({ children, className }: ArticleProps) {
  return <ArticleStyled className={className}>{children}</ArticleStyled>;
}

const ArticleStyled = styled.article`
  margin-bottom: 1.5rem;
  background-color: yellow;
`;
