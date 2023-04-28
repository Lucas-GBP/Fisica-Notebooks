import { FC } from "react";
import Head from 'next/head';
import StyleButton from "@/components/StyleButton";

const DesignTestes:FC = () => {
  return <>
    <Head>
      <title>Design Testes</title>
    </Head>
    <main>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <div style={{aspectRatio:2, width:"33.33%", backgroundColor:"var(--light-gray)"}}/>
        <div style={{aspectRatio:2, width:"33.33%", backgroundColor:"var(--neutral-gray)"}}/>
        <div style={{aspectRatio:2, width:"33.33%", backgroundColor:"var(--dark-gray)"}}/>
      </div>
      <div style={{
        backgroundColor:"var(--dark-gray)",
        width:"fit-content",
        padding:"20px",
        marginTop:"20px",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius:"1rem",
      }}>
        <h1>Título Testes [h1]</h1>
        <h2>Título Testes [h2]</h2>
        <h3>Título Testes [h3]</h3>
        <p>Título Testes [p]</p>
        <>Título Testes [ ]</>
      </div>
      <StyleButton href="./">HOME</StyleButton>
    </main>
  </>;
};
export default DesignTestes;
