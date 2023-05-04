'use client';
import { FC, useState } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import StyleButton from "@/components/StyleButton";
import { mathConfig } from "@/scripts/mathJaxConsts";

const MathJaxTestes:FC = () => {
  return <div className="px-6">
    <div className="divStyle">
      <h1>MathJax Testes</h1>
    </div>
    <div className="divStyle">
      <MathJaxContext config={mathConfig} version={3}>
        {`
        \\begin{equation}
          \\vec{F} = \\frac{d[m\\vec{v}]}{dt}
        \\end{equation}
      `}
      </MathJaxContext>
      {/* <LatexComponent/>*/}
    </div>
    <StyleButton href="./">HOME</StyleButton>
  </div>;
};
export default MathJaxTestes;

/* const BasicComponent:FC = () => {
  return <MathJaxContext>
    <h2>Basic MathJax example with Latex</h2>
    <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
  </MathJaxContext>;
};

const AsciiMathComponent:FC = () => {
  const config = {
    loader: { load: ["input/asciimath"] }
  };

  return <MathJaxContext config={config}>
    <h2>Basic MathJax example with AsciiMath</h2>
    <MathJax>{"`frac(10)(4x) approx 2^(12)`"}</MathJax>
  </MathJaxContext>;
};

const MathMLComponent:FC = () => {
  return <MathJaxContext>
    <h2>Basic MathJax example with MathML</h2>
    <MathJax>
      <math>
        <mrow>
          <mrow>
            <mfrac>
              <mn>10</mn>
              <mi>4x</mi>
            </mfrac>
          </mrow>
          <mo>&asymp;</mo>
          <mrow>
            <msup>
              <mn>2</mn>
              <mn>12</mn>
            </msup>
          </mrow>
        </mrow>
      </math>
    </MathJax>
  </MathJaxContext>;
};

const LatexComponent:FC = () => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(10);

  return (
    <MathJaxContext version={3} config={config}>
      <h2>MathJax example with Latex</h2>
      <i>
        This page uses a very basic configuration of MathJax 3, neither of which
        is necessarily optimal with respect to responsiveness and seamless
        typesetting.
      </i>
      <br />
      <br />
      <div>
        <MathJax hideUntilTypeset={"first"}>
          {`Inside a MathJax block element, one might use both Latex inline math, such
          as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
          to Latex display math, like
          \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
          ... and then continue with inline math.`}
        </MathJax>
      </div>
      <p>
        One might also use the MathJax component as an inline element on a
        single portion of a text, such as{" "}
        <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>, whichever suits
        you.
      </p>
      <MathJax hideUntilTypeset={"first"}>
        <div>
          <div>
            You don't have to worry about nesting components inside a MathJax
            component, the math will be found and converted{" "}
            <span>{`($10 / 3 \\approx 3.33$)`}</span>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              <i>Equation:</i> <span>{`$10 + 2x = 150$`}</span>
            </p>
          </div>
        </div>
      </MathJax>

      <h3>Dynamic content</h3>
      <p>
        If you want to use dynamic math content, make sure to follow the
        guidelines under "General Considerations" which are in part summarized
        below:
        <br />
        <br />
        Current value used in this section: {num1}
      </p>
      <ul>
        <li>
          <b>Don't</b>:{" "}
          <MathJax inline dynamic>
            An example is the equation ${num1}x^4 = 100$
          </MathJax>{" "}
          (expression with math not in separate element nor expression)
        </li>
        <li>
          <b>Don't</b>:{" "}
          <MathJax inline dynamic>
            An example is the equation {`$${num1}x^4 = 100$`}
          </MathJax>{" "}
          (expression with math not in separate element)
        </li>
        <li>
          <b>Don't</b>:{" "}
          <MathJax inline dynamic>
            An example is the equation <span>${num1}x^4 = 100$</span>
          </MathJax>{" "}
          (expression with math not in separate expression - mixed inside span)
        </li>
        <li>
          <b>Don't</b>:{" "}
          <MathJax inline dynamic>
            An example is the equation <span> {`$${num1}x^4 = 100$`}</span>
          </MathJax>{" "}
          (expression with math not in separate element - note the space)
        </li>
        <li>
          <b>Do</b>:{" "}
          <MathJax
            inline
            dynamic
          >{`An example is the equation $${num1}x^4 = 100$`}</MathJax>{" "}
          (expression with math in separate element and expression)
        </li>
        <li>
          <b>Do</b>:{" "}
          <MathJax inline dynamic>
            An example is the equation <span>{`$${num1}x^4 = 100$`}</span>
          </MathJax>{" "}
          (expression with math in separate element and expression)
        </li>
      </ul>
      <button onClick={() => setNum1((oldNum) => oldNum + 10)}>
        Add 10 to value used
      </button>

      <h3>Hiding non-typeset math</h3>
      <p>
        If you want make an extra effort to hide non-typeset content, there are
        several options. Typically, the first option should be enough (hide
        initial typesetting only) and most likely, you will not see a difference
        between the configurations below.
        <br />
        <br />
        Current value used in this section: {num2}
      </p>
      <ul>
        <li>
          <tt>hideUntilTypeset</tt> set to <tt>first</tt>:{" "}
          <MathJax
            hideUntilTypeset={"first"}
            inline
            dynamic
          >{`An example is the equation $${num2}x^4 = 100$`}</MathJax>
        </li>
        <li>
          <tt>hideUntilTypeset</tt> set to <tt>every</tt>:{" "}
          <MathJax
            hideUntilTypeset={"every"}
            inline
            dynamic
          >{`An example is the equation $${num2}x^4 = 100$`}</MathJax>
        </li>
        <li>
          <tt>renderMode</tt> set to <tt>pre</tt>: An example is the equation{" "}
          <MathJax
            renderMode={"pre"}
            typesettingOptions={{ fn: "tex2chtml" }}
            text={`${num2}x^4 = 100`}
            inline
            dynamic
          />
        </li>
      </ul>
      <button onClick={() => setNum2((oldNum) => oldNum + 10)}>
        Add 10 to value used
      </button>
    </MathJaxContext>
  );
};
*/
