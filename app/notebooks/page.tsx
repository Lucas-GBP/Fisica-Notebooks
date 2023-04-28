import { NextPage } from "next";
import StyleButton from "@/components/StyleButton/StyleButton";

const notebooks:NextPage = () => {
  return <>
    <section>
      <ul>
        <li>
          <StyleButton href="./notebooks/MRUV_espressoes">MRUV, Expressões</StyleButton>
        </li>
        <li>
          <StyleButton href="./notebooks/MRUV_for">MRUV, for (...) ...</StyleButton>
        </li>
        <li>
          <StyleButton href="./notebooks/MRUV_do_while">MRUV, do ... while (...)</StyleButton>
        </li>
      </ul>
    </section>
  </>;
};
export default notebooks;
