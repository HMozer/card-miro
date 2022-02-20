import React from 'react';

class AtributoSimplificado extends React.Component
{
    render()
    {
        const nomeSimplificado = this.props.nome.substr(0, 1).toUpperCase();
        const valor = this.props.valor;

        return (
            <p>
                <label className="font-weight-bold">{nomeSimplificado}:</label>
                {valor}
            </p>
        );
    }
}

export default AtributoSimplificado; 