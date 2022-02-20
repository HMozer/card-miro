import React from 'react';

class Pontuacao extends React.Component
{
    render()
    {
        const valor = this.props.valor;
        const local = this.props.posicao === 'esquerda' ? 'posicao-esquerda' : 'posicao-direita';
        const classeCor = this.props.posicao === 'esquerda' ? 'cor-verde' : 'cor-roxo';
        
        const classes = "pontuacao " + local + " " + classeCor;

        return (
            <div className={classes}>
                <p className="my-auto text-center">
                    {valor}
                </p>
            </div>
        );
    }
}

export default Pontuacao;