import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time"; //Ele tem chave pois não é export default

import style from "./cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined;

}

export default function Cronometro({ selecionado }: Props) {
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
