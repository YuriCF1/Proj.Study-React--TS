import React from 'react';
class Botao extends React.Component {
    render(): React.ReactNode {
        // const backgroundColor = 'green';
        // const style = {
        //     backgroundColor
        // }
        const estaAtivo = false;
        const style = {
            backgroundColor: estaAtivo ? 'green' : 'red'
        }
        return (
            <button style={style}>
                Botão
            </button>

        )
    }
}

export default Botao;