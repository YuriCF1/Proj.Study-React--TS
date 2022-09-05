// import { render } from "@testing-library/react";
// import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import { v4 as uuidv4 } from 'uuid';

// Style
// Nome de classe não aceita traços do padrão BEM, tem que ser usando colchete className={style["input-Container"]}
// import './style.scss'
import style from "./formulario.module.scss";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>; //Reutilizando a interface
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    //Não precisa declarar a palavra function para criar uma função no class component
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false, //Quando ele for criado, ele não estar selecionado nem completado
        completado: false,
        id: uuidv4(),
      },
    ]);
    console.log("satate: ", this.state);
    this.setState({
      //Resetando o formulário
      tarefa: "",
      tempo: "00:00",
    });
  }

  render(): React.ReactNode {
    return (
      // O 'bind(this)' serve para fazer com que a função consiga ler o escopo de uma CLASS COMPONENT. "Pegar o escopo de fora, no caso o this"
      <form
        className={style.novaTarefa}
        action=""
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
            value={this.state.tarefa} //Dizendo o valor inicial
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            } //Permitindo  a mudança
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            id="tempo"
            min="00:00:00"
            max="12:00:00"
            required
            value={this.state.tempo} //Dizendo o valor incicial
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
          />
          {/* <Botao 
          texto="Adicionar"
          /> */}
          <Botao type="submit">Adicionar</Botao>
        </div>
      </form>
    );
  }
}

export default Formulario;
