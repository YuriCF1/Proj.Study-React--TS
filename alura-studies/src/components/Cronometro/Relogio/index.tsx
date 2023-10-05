import React from "react";

import style from './relogio.module.scss'

interface Props {
  tempo: number | undefined;

}

export default function Relogio({ tempo = 0 }: Props) { //Se for undefined, vai ser igual a zero
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); //Preciso pegar a dezena e unidade para transferir ao span
  const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0'); //padStart, o tamanho da cadeia de string, e se não tiver, adiciona o '0' na frente

  return (
    // <React.Fragment> //Forma 1 de se livrar da exigência do elemento pai
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundosDezena}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>
      {/* <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span> */}
    </>
    // </React.Fragment>
  );
}
