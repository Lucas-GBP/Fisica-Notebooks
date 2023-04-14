import { FC } from "react";
import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
import StyleButton from "@/components/StyleButton";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, });

const PlotlyTestes:FC = () => {
  const title = "Plotly Testes";

  return <>
    <Head><title>{title}</title></Head>
    <div className="mx-auto my-10 bg-neutralGray p-5 rounded-2xl w-fit">
      <Plot
        data={[
          {
            x: [1, 2, 3, 4],
            y: [2, 6, 3, 2],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {
            x: [1, 2, 3, 4],
            y: [2, 5, 3, 7],
            type: 'bar',
          },
        ]}
        layout={{width: 500, height: 400, title: 'A Fancy Plot'}}
      />
    </div>
    <StyleButton href="./">HOME</StyleButton>
  </>;
};
export default PlotlyTestes;
