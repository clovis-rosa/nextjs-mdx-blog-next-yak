import React from "react";
import { styled } from "next-yak";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export default function HeadingH2({ children, className }: H2Props) {
  return <H2 className={className}>{children}</H2>;
}

const H2 = styled.h2`
  color: red;
  font-size: 2rem;
  font-family: monospace;
  margin-top: 0 !important;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
