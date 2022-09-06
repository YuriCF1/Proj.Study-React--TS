import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/date"; //Ele tem chave pois não é suporte default

import style from "./cronometro.module.scss";

export default function Cronometro() {
  console.log('conversao: ', tempoParaSegundos('01:01:01'));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}
