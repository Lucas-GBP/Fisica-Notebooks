import { CSSProperties, FC } from "react";
import styles from "./styleButton.module.css";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface buttonProps {
    className?:string;
    style?:CSSProperties;
    children:string|JSX.Element;
    href?:Url;
    onClick?: () => {}
}
const StyleButton:FC<buttonProps> = (props) => {
  const ButtonRaw:FC = () => <button className={
    `${styles.button} ${props.style} hover:bg-lightGray
    `}
  style={props.style}
  onClick={props.onClick}>
    {props.children}
  </button>;

  return props.href?<Link href={props.href}><ButtonRaw/></Link>:<ButtonRaw/>;
};
export default StyleButton;
