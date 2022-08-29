import React, { useState } from "react"; //Instrutor disse que no function component, ele não precisa ser usado
import Item from "./item";

// Style
// import './style.scss'
import style from "./lista.module.scss";

function Lista() {
  // Criando array de tarefas para renderizar
  // let tarefas = [
  //   {
  //     tarefa: "React",
  //     tempo: "02:00:00",
  //   },
  //   {
  //     tarefa: "JavaScript",
  //     tempo: "01:00:00",
  //   },
  //   {
  //     tarefa: "TypeScript",
  //     tempo: "03:00:00",
  //   },
  // ];

  const [tarefas, setTarefas] = useState([ // Declarando um estado, que é chamado de rook, pois tem o 'use'

  {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ]); 

  // A função não precisa do render como na classe. Já que usando classe, tem que extender do React.Component
  return (
    //O JSX sempre espera um html
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log("Cliado", tarefas);
          // tarefas = [...tarefas, { tarefa: "Estudar estado", tempo: "05:00" }];
          setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00" }])
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map(
          (
            item,
            index //Tomar cuidado com as chaves, pois elas definem um escopo. Os PARENTESES são o retorno
          ) => (
            // O react, no map, precisa saber qual item do array corresponde ao dom. Então precisa-se de um chave para likar, chmada de Key. O ideal é colocar um ID, em vez desse índice
            // <li key={index} className={style.item}>
            //     <h3>{item.tarefa}</h3>
            //     <span>{item.tempo}</span>
            // </li>

            // Primeira forma para importar
            // <Item
            //   tarefa={item.tarefa}
            //   tempo={item.tempo}
            // />

            // Segunda forma para importar, pois a tarefa é um objeto
            <Item
              key={index}
              {...item} // Usando cada elemento como Prop na function Item
              // Desustruturando. Cuidado se o objeto tiver muita informação, pode dá problema
            />
          )
        )}
        {/* <li>
          <h3>React</h3>
          <span>02:00:00</span>
        </li>
        <li>
          <h3>JavaScript</h3>
          <span>01:00:00</span>
        </li> */}
      </ul>
    </aside>
  );
}

export default Lista;
