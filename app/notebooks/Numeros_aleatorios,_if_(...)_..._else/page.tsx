import { FC } from "react";

export default function Page() {
  const cheatCoin = diceCount(3, 1000);
  cheatCoin[1]+=cheatCoin[2];
  cheatCoin.pop();

  const cheatd6 = diceCount(7, 1000);
  cheatd6[5]+=cheatd6[6];
  cheatd6.pop();

  return <>
    <Enunciado/>

    <section>
      <p>d4 honesto</p>
      <ol>
        {diceCount(4, 1000).map((item, index)=>{
          return <li key={index}>f{++index}: {item}</li>
        })}
      </ol>

      <p>moeda honesta</p>
      <ol>
        {diceCount(2, 1000).map((item, index)=>{
          return <li key={index}>f{++index}: {item}</li>
        })}
      </ol>

      <p>moeda viciada</p>
      <ol>
        {cheatCoin.map((item, index)=>{
          return <li key={index}>f{++index}: {item}</li>
        })}
      </ol>

      <p>d6 viciad0</p>
      <ol>
        {cheatd6.map((item, index)=>{
          return <li key={index}>f{++index}: {item}</li>
        })}
      </ol>
    </section>
  </>;
}

const Enunciado:FC = () => {
  let f1, f2, f3, f4, f5, f6;
  f1 = f2 = f3 = f4 = f5 = f6 = 0;
  for (let i=0; i<1000; i++) {
    let f = Math.ceil(Math.random()*6);
    if (f==1) {
      f1++;
    }
    else {
      if (f==2) {
        f2++;
      }
      else {
        if (f==3) {
          f3++;
        }
        else {
          if (f==4) {
            f4++;
          }
          else {
            if (f==5) {
              f5++;
            }
            else {
              f6++;
            }
          }
        }
      }
    }
  }
  console.log(
    "f1 = %d\nf2 = %d\nf3 = %d\nf4 = %d\nf5 = %d\nf6 = %d",
    f1,f2,f3,f4,f5,f6
  );

  return <section className="enunciado">
    <p id='titulo'>
      Notebook 05<br/>Números aleatórios, if (...) ... else ...
    </p>

    <p className="normal">
	O <i>script</i> neste documento simula um dado honesto, atirado 1000 vezes e conta quantas
    vezes cada face foi sorteada (não se assuste com o código fonte: existem maneiras mais
    elegantes de implementar esse problema!)
    </p>
    <div className="console">
      Console: 
      f1 = 179 
      f2 = 144 
      f3 = 178 
      f4 = 152 
      f5 = 177 
      f6 = 170 
    </div>

    <p className="secao">
  Exercícios
    </p>

    <ol>
      <li>
    Modifique o código fonte de modo que implemente um dado tetraédrico (com quatro lados) honesto.
      </li>

      <div className="console">
        Console:
        f1 = 261
        f2 = 226
        f3 = 246
        f4 = 267
      </div>

      <li>
    Modifique o código fonte de modo que implemente uma moeda &apos;honesta&apos;.
      </li>

      <div className="console">
        Console:
        f1 = 507
        f2 = 493
      </div>

      <li>
    Modifique o código fonte de modo que implemente uma moeda &apos;viciada&apos;, cuja
    probabilidade dolançamento resultar em &apos;cara&apos; é duas vezes maior do que resultar em
    &apos;coroa&apos; (isto é, em média, a cada três lançamentos dois resultam em &apos;cara&apos;
    e um em &apos;coroa&apos;). Dica: imagine que a moeda tem 3 faces e que quando o lançamento
    resulta na face 1 ou na face 2, o resultado é &apos;cara&apos; e quando resulta na face 3, o
    resultado é &apos;coroa&apos;.
      </li>

      <div className="console">
Console:
f1 = 675
f2 = 325
      </div>

      <li>
    Modifique o código fonte de modo que implemente um dado &apos;viciado&apos;, cuja probabilidade
    do lançamento resultar em &apos;6&apos; é um pouco maior do que qualquer outro número, de tal
    modo que, em média, a cada sete lançamentos ocorram dois &apos;6&apos;s e cada um dos demais
    números. Dica: imagine que o dado tem sete faces e que duas delas estão marcadas com &apos;6
    &apos; e as demais com os outros números (&apos;1&apos; a &apos;5&apos;).
      </li>

      <div className="console">
        Console:
        f1 = 141
        f2 = 139
        f3 = 152
        f4 = 139
        f5 = 142
        f6 = 287
      </div>
    </ol>
  </section>;
};

const dice = (faces:number) => {
  return Math.ceil(Math.random()*faces);
}

const diceCount = (diceFaces:number, times:number) => {
  const count:number[] = [];

  let i;
  for(i = 0; i < diceFaces; i++){
    count[i] = 0;
  }
  for(i = 0; i < times; i++){
    count[Math.ceil(Math.random()*diceFaces)-1]++;
  }

  return count;
}