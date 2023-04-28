'use client';
import { MathJaxContext } from "better-react-mathjax";
import { mathConfig } from "../layout";

export default function notebookLayout({
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
