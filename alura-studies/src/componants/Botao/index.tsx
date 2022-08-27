import React from "react";

// Style
// import './style.scss'
import style from "./botao.module.scss";

// class Botao extends React.Component<{texto: string}> {
// Tenho que ser explícito se quero usar uma proprieade children, pois no Component não tem mais, só no ReactNode

// class Botao extends React.Component<{texto: string}> {
class Botao extends React.Component<{children?: React.ReactNode}> {
  render(): React.ReactNode {
    // const backgroundColor = 'green';
    // const style = {
    //     backgroundColor
    // }

    // const estaAtivo = false;
    // const style = {
    //     backgroundColor: estaAtivo ? 'green' : 'red'
    // }
    return (
      // <button style={style}>
      // <button className={style.botao}>
      //     Botão
      // </button>
      <button className={style.botao}>{this.props.children}</button>
    );
  }
}

export default Botao;
