import StyleButton from '@/components/StyleButton';

export const metadata = {
  title: "Physics App",
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <>
      <main>
        <section>
          <ul>
            <li><StyleButton href="/notebooks">Notebooks</StyleButton></li>
            <li><StyleButton href="/designTestes">Design Testes</StyleButton></li>
            <li><StyleButton href="/mathJaxTestes">MathJax Testes</StyleButton></li>
            <li><StyleButton href="/plotlyTestes">Plotly Testes</StyleButton></li>
          </ul>
        </section>
      </main>
    </>
  );
}
