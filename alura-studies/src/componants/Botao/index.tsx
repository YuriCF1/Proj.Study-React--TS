import React from "react";

// Style
// import './style.scss'
import style from "./botao.module.scss";

// FAZENDO COM FUNÇÃO____________________
interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {/* {this.props.children} */}
      {children}
    </button>
  );
}


// FAZENDO COM CLASSE________________NÃO ESTÁ SENDO USADA____________________
// class Botao extends React.Component<{texto: string}> {
// Tenho que ser explícito se quero usar uma proprieade children, pois no Component não tem mais, só no ReactNode

// class Botao extends React.Component<{texto: string}> {
class Botao1 extends React.Component<{
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  //:? Prop opcional. Especificando os tipos possíveus pois o TS não deixa ser string apenas

  render(): React.ReactNode {
    // const backgroundColor = 'green';
    // const style = {
    //     backgroundColor
    // }

    // const estaAtivo = false;
    // const style = {
    //     backgroundColor: estaAtivo ? 'green' : 'red'
    // }
    const { type = "button", onClick } = this.props; //Se o type não vier, ele será do tipo padrão de botão. Passando o onclick via props
    return (
      // <button style={style}>
      // <button className={style.botao}>
      //     Botão
      // </button>
      <button type={type} className={style.botao} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
