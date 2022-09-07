import React, { useEffect, useState } from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time"; //Ele tem chave pois não é export default

import style from "./cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined; //Tem que colocar o undefined pq o primeiro estado sempre será ele, já que nada foi selecionado
}

export default function Cronometro({ selecionado }: Props) {
  // console.log('conversao: ', tempoParaSegundos('01:01:01')); //Teste
  const [tempo, setTempo] = useState<number>(); //'Number' é função, 'number' é tipo
  useEffect(() => {
    //Primeiro parâmetro, funcção que será executada quando algo mudar, segundo é a dependência para servir como base, o que vai ser vigiado
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado?.tempo));
    }
  }, [selecionado]); //Sempre que o selecionado mudar, executa a funçõa

  // Não funciona pois ele só pega o valor do componentne quando ele é iniciado
  // const [tempo, setTempo] = useState<number>((tempoParaSegundos(String(selecionado?.tempo)))); //'Number' é função, 'number' é tipo.

  // if (selecionado?.tempo) { //Se tiver o selecionado e o tempo, passar o tempo para segundos, com o tempo do selecionado PARA O SETTEMPO
  //   setTempo(tempoParaSegundos(selecionado.tempo)); //PORÉM FICA RENDERIZANDO INFINITAMENTE
  // }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      {/* <div> Tempo: {tempo}</div> */}
      <Botao>Começar</Botao>
    </div>
  );
}
