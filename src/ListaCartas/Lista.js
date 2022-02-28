import React from 'react';

import Baralho from '../Comum/Baralho';
import Carta from '../Carta/Carta';

class Lista extends React.Component
{
    retornaRepetidor(quantidade)
    {
        let valor = quantidade / 3;
        valor = valor > Math.floor(valor) ?
                    Math.floor(valor) + 1
                    : Math.floor(valor);
        
        return valor;
    }

    buscaCartasPosicao(posicao, cartas)
    {
        let elementoCartas = [];
        let cartaPosicao0 = cartas[posicao];
        let cartaPosicao1 = (posicao + 1) >= cartas.length ?
            null : cartas[posicao + 1];
        let cartaPosicao2 = (posicao + 2) >= cartas.length ?
            null : cartas[posicao + 2];

        elementoCartas = elementoCartas.concat((
            <Carta
                key={cartaPosicao0._id}
                carta={cartaPosicao0}
                onClick={null}
                listagem={true} />
        ));

        if (cartaPosicao1 !== null)
        {
            elementoCartas = elementoCartas.concat((
                <Carta
                    key={cartaPosicao1._id}
                    carta={cartaPosicao1}
                    onClick={null}
                    listagem={true} />
            ));
        }
        
        if (cartaPosicao2 !== null)
        {
            elementoCartas = elementoCartas.concat((
                <Carta
                    key={cartaPosicao2._id}
                    carta={cartaPosicao2}
                    onClick={null}
                    listagem={true} />
            ));
        }

        return elementoCartas
    }

    retornaLinha(posicao, cartas)
    {
        let linhaCarta = this.buscaCartasPosicao(posicao, cartas);

        return(
            <div className="row mb-3" key={posicao}>
                {linhaCarta}
            </div>
        )
    }

    montaCartas(cartas)
    {
        let repetidor = this.retornaRepetidor(cartas.length);
        let elementos = [];
        let posicao = 0;

        for (let i = 0; i < repetidor; ++i)
        {
            elementos = elementos.concat(
                this.retornaLinha(posicao, cartas)
            );

            posicao += 3;
        }

        return elementos;
    }

    render()
    {
        const cartas = Baralho.retornaCartas();
        const elemento = this.montaCartas(cartas);

        return (
            <div className="content max-w-1140 mx-auto">
                {elemento}
            </div>
        );
    }
}

export default Lista;