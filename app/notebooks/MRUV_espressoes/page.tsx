import { NextPage } from "next";
import { mruv, mruvEquation } from "@/scripts/mruv";

const MRUVExpressoes:NextPage = () => {

  const enunciado = <section className="divStyle max-w-[85%]">
    <h1 className="text-center">Notebook 01<br/>MRUV, Expressões</h1>
    <p>
    O <i>movimento retilíneo uniformemente variado</i> (MRUV) em uma dimensão é
    caracterizado pela <i>equação horária</i>:
    </p>
    {`
    \\begin{equation}
        x = x_{0} + v_{0} t + \\frac{1}{2} a t^2
    \\end{equation}
    `}
    <p>
    onde $x$ é a posição no instante $t$ dados a posição inicial $x_{0}$, a velocidade
    inicial $v_{0}$ e aceleração $a$. O <i>script</i> neste documento
    (CTRL+U para visualizar o código-fonte) implementa a equação para o MRUV e calcula e
    imprime o valor de $x$ no console (F12 para visualizar o console) para $x_0$ = 0 m,
    $v_0$ = 0 m/s, $a$ = 10 m/s<sup>2</sup> e $t$ = 5 s. <i>Resposta:</i> $x$ = 125 m.
    </p>
    <h2 className="text-center">Exercícios</h2>
    <ol>
      <li>
      Altere o programa para fazer com que calcule e imprima a posição $x$ para $x_0$
      = 10 m, $v_0$ = 5 m/s, $a$ = &minus;1 m/s<sup>2</sup> e $t$ = 2 s.
        <i>Resposta:</i> $x$ = 18 m.
      </li>
      <li>
      Altere o programa para fazer com que calcule e imprima a posição inicial $x_0$
      dados os valores de $x$ = 0 m, $v_0$ = 5 m/s, $a$ = 10 m/s<sup>2</sup>
        e $t$ = 2 s. <i>Resposta:</i> $x_0$ = &minus;30 m.
      </li>
      {`
      \\begin{equation}
          x_0 = x - v_0 t - \\frac{1}{2} a t^2
      \\end{equation}
      `}
      <li>
      Altere o programa para fazer com que calcule e imprima a velocidade inicial
      $v_0$ dados os valores de $x$ = 0 m, $x_0$ = 5 m, $a$ = 10 m/s<sup>2</sup> e
      $t$ = 2 s. <i>Resposta:</i> $v_0$ = &minus;12,5 m/s.
      </li>
      <li>
      Altere o programa para fazer com que calcule e imprima a aceleração $a$ dados
      os valores de $x$ = 0 m, $x_0$ = 5 m/s, $v_0$ = 10 m e $t$ = 2 s.
        <i>Resposta:</i> $a$ = &minus;12,5 m/s<sup>2</sup>.
      </li>
      <li>
      Altere o programa para fazer com que calcule e imprima o tempo $t$ dados os
      valores de $x$ = 10 m, $x_0$ = 0 m, $v_0$ = 0 m/s e $a$ = 10 m/s<sup>2</sup>.
        <i>Resposta:</i> 1,41 s e &minus;1,41 s.
      </li>
      <li>
      Escreva em LaTeX as equações para $v_0$, $a$ e $t$:
      </li>
    </ol>
  </section>;

  return <>
    {enunciado}
    <div className="divStyle">
      <h2 className="text-center">Respostas</h2>
      <ul className="list-decimal">
        <li>$x={mruvEquation({x_0:10, v_0:5, a:-1, t:2}, mruv.position)}m$</li>
        <li>$x_0={mruvEquation({x:0, v_0:5, a:10, t:2}, mruv.inicialPosition)}m$</li>
        <li>$v_0={mruvEquation({x:0, x_0:5, a:10, t:2}, mruv.inicialVelocity)}m/s$</li>
        <li>$a={mruvEquation({x:0, x_0:5, v_0:10, t:2}, mruv.aceleration)}m/s^2$</li>
        <li>$t={mruvEquation({x:10, x_0:0, v_0:0, a:10}, mruv.time)}s$</li>
      </ul>
    </div>
  </>;
};
export default MRUVExpressoes;
