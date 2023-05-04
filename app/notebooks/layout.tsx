'use client';
import { MathJaxContext } from "better-react-mathjax";
import { mathConfig } from "@/scripts/mathJaxConsts";

export default function notebookLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <MathJaxContext config={mathConfig} version={3}>
      {children}
    </MathJaxContext>
  );
}
