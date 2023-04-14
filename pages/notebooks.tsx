import { NextPage } from "next";
import StyleButton from "@/components/StyleButton/StyleButton";

const notebooks:NextPage = () => {
  return <>
    <main>
      <div className='divStyle'>
        <ul>
          <li><StyleButton href="./notebooks/MRUV_espressoes">MRUV, Expressões</StyleButton></li>
          <li><StyleButton href="./notebooks/MRUV_for">MRUV, for (...) ...</StyleButton></li>
        </ul>
      </div>
    </main>
  </>;
};
export default notebooks;
