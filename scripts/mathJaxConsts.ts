import { MathJax3Config } from 'better-react-mathjax';

export const mathConfig: MathJax3Config = {
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ],
    }
  };