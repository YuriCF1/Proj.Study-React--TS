import React from 'react';
import { useState } from "react"; //Instrutor disse que no function component, ele não precisa ser usado

// import logo from './logo.svg';
// import './App.css';

// import Botao from './componants/Botao';

// React
import Formulario from '../componants/Formulario';
import Lista from '../componants/lista';
import Cronometro from '../componants/Cronometro';

// Style
// import './style.scss';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefa';

// É usado ClassName por conta do Class do JS
function App() {
  // const [tarefas, setTarefas] = useState([ // Declarando um estado, que é chamado de rook, pois tem o 'use'

  // {
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
  // ]);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}> 
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>

    // <div className="AppStyle"> 
    //   <Formulario />
    //   <Lista />
    // </div>

  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Botao />
//     </div>
//   );
// }

