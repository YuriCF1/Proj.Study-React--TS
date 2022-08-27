import React from "react";

// Style 
// import './style.scss'
import style from './lista.module.scss'

function Lista() {
  // Criando array de tarefas para renderizar
  const tarefas = [
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
    }
  ];

  // A função não precisa do render como na classe. Já que usando classe, tem que extender do React.Component
  return ( //O JSX sempre espera um html
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul> 
        {tarefas.map((item, index) => ( //Tomar cuidado com as chaves, pois elas definem um escopo. Os PARENTESES são o retorno 
// O react, no map, precisa saber qual item do array corresponde ao dom. Então precisa-se de um chave para likar, chmada de Key. O ideal é colocar um ID, em vez desse índice
            <li key={index} className={style.item}> 
                <h3>{item.tarefa}</h3>
                <span>{item.tempo}</span>
            </li>

        ))}
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
