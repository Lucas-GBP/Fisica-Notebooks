import { NextPage } from "next";
import { FC } from "react";
import { positionOverTime } from "@/scripts/mruv";

const MRUVDoWhile:NextPage = () => {
  const c_1 = {x_0: 0.00, v_0: -1.00, a: 1.00, timeGap: 1.00, v_max: 10.00};
  const c_2 = {x_0: 0.00, v_0:0.00, a: 10.00, xGap:2.00, tMax:1.50};

  const problem_1 = (
    c:{x_0:Number, v_0:Number, a:Number, timeGap:Number, v_max:Number}
  ):{t:Number, x:Number, v:Number}[] => {
    const result:{t:Number, x:Number, v:Number}[] = [{t:0, x:c.x_0, v:c.v_0}];

    for(let i = 0; result[i].v > c.v_max; i++){
      
    }

    return result;
  };

  return <>
    <section>
      <Enunciado/>
    </section>
    <section>
      <ol className="list-decimal">
        <li>
          {}
        </li>
        <li>

        </li>
      </ol>
    </section>
  </>;
};
export default MRUVDoWhile;

const Enunciado:FC = () => {
  let x_0 = 0.00;
  let v_0 = 0.00;
  let a = 10.00;
  let t = 0;
  let dt = 0.25;
  let x;
  do {
    x = x_0 + v_0 * t + 0.5 * a * t**2;
    let tStr = t.toFixed(2).replace(".",",");
    let xStr = x.toFixed(2).replace(".",",");
    console.log("t = %s s, x = %s m",tStr,xStr);
    t = t + dt;
  } while (x<=5.00);

  return <>
    <h1 id='titulo'>
      Notebook 03<br/>MRUV, do ... while (...)
    </h1>

    <p className="normal">
            O <i>movimento retilíneo uniformemente variado</i> (MRUV) em uma dimensão é
            caracterizado pela <i>equação horária</i>:
    </p>
    {`
        \\begin{equation}
        x = x_{0} + v_{0} t + \\frac{1}{2} a t^2
        \\end{equation}
        `}
    <p className="continua">
            onde $x$ é a posição no instante $t$ dados a posição inicial $x_{0}$, a velocidade
            inicial $v_{0}$ e aceleração $a$.
    </p>

    <p className="normal">
            O <i>script</i> neste documento (CTRL+U para visualizar o código-fonte) implementa a
            equação para o MRUV e calcula e imprime o valor de $x$ no console (F12 para visualizar
            o console) para $x_0$ = 0,00 m, $v_0$ = 0,00 m/s, $a$ = 10,00 m/s<sup>2</sup>, em
            intervalos de tempo de 0,25 s, até que $x$ seja maior que 5,00 m (inclusive),
            apresentando os resultados com duas casas decimais e colocando a vírgula como separador
            decimal.
    </p>

    <div className="console">
        Console:<br/>
        t = 0,00 s, x = 0,00 m<br/>
        t = 0,25 s, x = 0,31 m<br/>
        t = 0,50 s, x = 1,25 m<br/>
        t = 0,75 s, x = 2,81 m<br/>
        t = 1,00 s, x = 5,00 m<br/>
        t = 1,25 s, x = 7,81 m<br/>
    </div>

    <h2 className="secao">
            Exercícios
    </h2>

    <ol className="list-decimal">
      <li>
                Altere o programa para fazer com que calcule e imprima a posição $x$ e a velocidade
                $v$ para $x_0$ = 0,00 m, $v_0$ = &minus;1,00 m/s, $a$ = 1,00 m/s<sup>2</sup>, em
                intervalos de tempo de 1,00 s, enquanto a velocidade for menor que 10,00 m/s
                (inclusive), apresentando os resultados com duas casas decimais e colocando a
                vírgula como separador decimal.
      </li>

      <div className="console">
        Console:<br/>
        t = 0,00 s, x = 0,00 m, v = -1,00 m/s<br/>
        t = 1,00 s, x = -0,50 m, v = 0,00 m/s<br/>
        t = 2,00 s, x = 0,00 m, v = 1,00 m/s<br/>
        t = 3,00 s, x = 1,50 m, v = 2,00 m/s<br/>
        t = 4,00 s, x = 4,00 m, v = 3,00 m/s<br/>
        t = 5,00 s, x = 7,50 m, v = 4,00 m/s<br/>
        t = 6,00 s, x = 12,00 m, v = 5,00 m/s<br/>
        t = 7,00 s, x = 17,50 m, v = 6,00 m/s<br/>
        t = 8,00 s, x = 24,00 m, v = 7,00 m/s<br/>
        t = 9,00 s, x = 31,50 m, v = 8,00 m/s<br/>
        t = 10,00 s, x = 40,00 m, v = 9,00 m/s<br/>
        t = 11,00 s, x = 49,50 m, v = 10,00 m/s<br/>
        t = 12,00 s, x = 60,00 m, v = 11,00 m/s<br/>
      </div>

      <li>
                Obtenha $t(x)$ para $x_0$ = 0,00 m, $v_0$ = 0,00 m/s e $a$ = 10,00 m/s<sup>2</sup>
                e altere o programa para calcular e imprimir os valores de $t \ge 0$ a cada 2,00 m
                enquanto $t$ for menor que 1,50 s (inclusive). Exprima os resultados com duas casas
                decimais e colocando a vírgula como separador decimal.
      </li>

      <div className="console">
        Console:<br/>
        x = 0,00 m, t = 0,00 s<br/>
        x = 2,00 m, t = 0,63 s<br/>
        x = 4,00 m, t = 0,89 s<br/>
        x = 6,00 m, t = 1,10 s<br/>
        x = 8,00 m, t = 1,26 s<br/>
        x = 10,00 m, t = 1,41 s<br/>
        x = 12,00 m, t = 1,55 s<br/>
      </div>
    </ol>
  </>;
};
