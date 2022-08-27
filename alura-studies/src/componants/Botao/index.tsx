import React from 'react';

// Style
import './style.scss'
class Botao extends React.Component {
    render(): React.ReactNode {
        // const backgroundColor = 'green';
        // const style = {
        //     backgroundColor
        // }

        // const estaAtivo = false;
        // const style = {
        //     backgroundColor: estaAtivo ? 'green' : 'red'
        // }
        return (
            // <button style={style}>
            <button className='botao'>
                Botão
            </button>

        )
    }
}

export default Botao;