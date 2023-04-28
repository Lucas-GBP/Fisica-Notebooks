import { NextPage } from "next";
import { FC } from "react";
import { positionOverTime, velocityOverTime, timeOverVelocity } from "@/scripts/mruv";

const MRUVFor:NextPage = () => {
  return <>
    <Enunciado/>
    <section>
      <h2>Respostas</h2>
      <ul className="list-decimal">
        <li>
          <ul className="">
            {positionOverTime({
              x_0:0.000, v_0:-1.000, a:1.000, t_0:0, t_f:0.100, tIncrement:0.025
            }).map((item, index) => {
              return <li key={index}>
                time: ${item.time.toFixed(3)}s$, posição: ${item.position.toFixed(3)}m$
              </li>;}
            )}
          </ul>
        </li>
        <li>
          <ul>
            {velocityOverTime({v_0:-1.000, a:1.000, t_0:0, t_f:0.100, tIncrement:0.025}).map(
              (item, index) => {
                return <li key={index}>
                time: ${item.time.toFixed(3)}s$, velocidade: ${item.velocity.toFixed(3)}m/s$
                </li>;}
            )}
          </ul>
        </li>
        <li>
          <ul>
            {timeOverVelocity({v_0:-0.900, v_f:-0.801, vIncrement:0.020, a:1.000}).map(
              (item, index) => {
                return <li key={index}>
                  velocidade: ${item.velocity.toFixed(3)}m/s$, time: ${item.time.toFixed(3)}s$
                </li>;}
            )}
          </ul>
        </li>
      </ul>
    </section>
  </>;
};
export default MRUVFor;

const Enunciado:FC = () => {
  let x_0 = 0.00;
  let v_0 = 0.00;
  let a = 10.00;
  for (let t=0.00; t<=1.00; t=t+0.25) {
    let x = x_0 + v_0 * t + 0.5 * a * t**2;
    let tStr = t.toFixed(2).replace(".",",");
    let xStr = x.toFixed(2).replace(".",",");
    console.log("t = %s, x = %s",tStr,xStr);
  }

  return (
    <section>
      <h1>
        Notebook 02<br/>MRUV, for (...) ...
      </h1>

      <p>
        O <i>movimento retilíneo uniformemente variado</i> (MRUV) em uma dimensão é caracterizado
        pela <i>equação horária</i>:
      </p>
      {`
          \\begin{equation}
          x = x_{0} + v_{0} t + \\frac{1}{2} a t^2
          \\end{equation}
          `}
      <p className="continua">
        onde $x$ é a posição no instante $t$ dados a posição inicial $x_{0}$, a velocidade inicial
        $v_{0}$ e aceleração $a$.
      </p>

      <p className="normal">
        O <i>script</i> neste documento (CTRL+U para visualizar o código-fonte) implementa a
        equação para o MRUV e calcula e imprime o valor de $x$ no console (F12 para visualizar
        o console) para $x_0$ = 0,00 m, $v_0$ = 0,00 m/s, $a$ = 10,00 m/s<sup>2</sup> e $t$
        variando entre 0, 00 s e 1,00 s em passos de 0,25 s, apresentando os resultados com
        duas casas decimais e colocando a vírgula como separador decimal.
      </p>

      <div className="console">
        Console:
        t = 0,00 s, x = 0,00 m
        t = 0,25 s, x = 0,31 m
        t = 0,50 s, x = 1,25 m
        t = 0,75 s, x = 2,81 m
        t = 1,00 s, x = 5,00 m
      </div>

      <h2 className="secao">
        Exercícios
      </h2>

      <ol className="list-decimal">
        <li>
          Altere o programa para fazer com que calcule e imprima a posição $x$ para $x_0$ = 0,000
          m, $v_0$ = &minus;1,000 m/s, $a$ = 1,000 m/s<sup>2 </sup> e $t$ entre 0 e 0,100 s em
          passos de 0,025 s, apresentando os resultados com três casas decimais e colocando a
          vírgula como separador decimal.
        </li>

        <div className="console">
          Console:<br/>
          t = 0,000 s, x = 0,000 m<br/>
          t = 0,025 s, x = -0,025 m<br/>
          t = 0,050 s, x = -0,049 m<br/>
          t = 0,075 s, x = -0,072 m<br/>
          t = 0,100 s, x = -0,095 m<br/>
        </div>

        <li>
          A velocidade no MRUV é dada por:
        </li>
        {`
          \\begin{equation}
              v = v_0 + a t
          \\end{equation}
        `}
        <p className="normal">
          Altere o programa anterior para fazer com que calcule e imprima a velocidade $v$ em função
          do tempo $t$.
        </p>

        <div className="console">
          Console:<br/>
          t = 0,000 s, v = -1,000 m/s<br/>
          t = 0,025 s, v = -0,975 m/s<br/>
          t = 0,050 s, v = -0,950 m/s<br/>
          t = 0,075 s, v = -0,925 m/s<br/>
          t = 0,100 s, v = -0,900 m/s<br/>
        </div>

        <li>
          Inverta a equação acima e altere o programa para fazer com que calcule e imprima os
          instantes em que a velocidade $v$ varia de &minus;0,900 m/s a &minus;0,800 m/s, em
          intervalos de 0,020 m/s.
        </li>

        <div className="console">
          Console:<br/>
          v = -0,900 m/s, t = 0,100 s<br/>
          v = -0,880 m/s, t = 0,120 s<br/>
          v = -0,860 m/s, t = 0,140 s<br/>
          v = -0,840 m/s, t = 0,160 s<br/>
          v = -0,820 m/s, t = 0,180 s<br/>
          v = -0,800 m/s, t = 0,200 s<br/>
        </div>
      </ol>
    </section>
  );
};
