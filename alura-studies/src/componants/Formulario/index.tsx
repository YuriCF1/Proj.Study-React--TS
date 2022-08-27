// import { render } from "@testing-library/react";
// import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import React from "react";
import Botao from "../Botao";

// Style
// Nome de classe não aceita traços do padrão BEM, tem que ser usando colchete className={style["input-Container"]}
// import './style.scss'
import style from './formulario.module.scss'

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} action="">
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
          {/* <Botao 
          texto="Adicionar"
          /> */}
          <Botao>
            Adicionar
          </Botao>
        </div>
      </form>
    );
  }
}

export default Formulario;
