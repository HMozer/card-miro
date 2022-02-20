import React from 'react';
import AtributoSimplificado from './AtributoSimplificado';

class CartaSimplificada extends React.Component
{
    render()
    {
        const carta = this.props.carta;
        const atributos = Object.entries(carta.atributos).map(([chave, valor]) =>
        {
            return <AtributoSimplificado
                        key={chave}
                        nome={chave}
                        valor={valor} />;
        });

        return (
            <div
                className="col-2 deck-carta h-in"
                onClick={this.props.onClick}>
                <h4>{carta.nome}</h4>

                <div className="atributos-resumidos">
                    {atributos}
                </div>
            </div>
        );
    }
}

export default CartaSimplificada; 