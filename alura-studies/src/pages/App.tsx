import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Botao from './componants/Botao';

// React
import Formulario from '../componants/Formulario';
import Lista from '../componants/lista/lista';

// Style
// import './style.scss';
import style from './App.module.scss';

// É usado ClassName por conta do Class do JS
function App() {
  return (
    <div className={style.AppStyle}> 
      <Formulario />
      <Lista />
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

