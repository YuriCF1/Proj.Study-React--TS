import React from "react";

import style from './relogio.module.scss'

export default function Relogio() {
  return (
    // <React.Fragment> //Forma 1 de se livrar da exigência do elemento pai
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
    // </React.Fragment>
  );
}
