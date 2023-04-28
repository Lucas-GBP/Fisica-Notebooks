'use client';
import { MathJaxContext } from "better-react-mathjax";
import { mathConfig } from "../layout";

export default function({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <MathJaxContext config={mathConfig}>
      {children}
    </MathJaxContext>
  );
}
