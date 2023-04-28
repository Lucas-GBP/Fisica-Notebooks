import StyleButton from '@/components/StyleButton';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Physics App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <ul>
            <li><StyleButton href="/designTestes">Design Testes</StyleButton></li>
            <li><StyleButton href="/mathJaxTestes">MathJax Testes</StyleButton></li>
            <li><StyleButton href="/plotlyTestes">Plotly Testes</StyleButton></li>
            <li><StyleButton href="/notebooks">Notebooks</StyleButton></li>
          </ul>
        </section>
      </main>
    </>
  );
}
