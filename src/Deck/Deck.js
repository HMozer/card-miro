import React from 'react';
import CartaSimplificada from './CartaSimplificada';

import './deck.css';

class Deck extends React.Component
{
    render()
    {
        const cartas = this.props.cartas
            .map(carta =>
            {
                return <CartaSimplificada
                        key={carta._id}
                        carta={carta}
                        onClick={() => this.props.onClick(carta._id)}
                    />
            });

        return (
            <div className="deck">
                <div className="content h-in">
                    <div className="row justify-content-center h-in">
                        {cartas}
                    </div>
                </div>
            </div>
        );
    }
}

export default Deck;