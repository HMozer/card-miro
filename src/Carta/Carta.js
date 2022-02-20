import React from 'react';
import Atributo from './Atributo';

class Carta extends React.Component
{
    existeCartaSelecionada(cartaSelecionada)
    {
        return cartaSelecionada === undefined;
    }

    retornaAtributos(cartaSelecionada, atributoSelecionado, funcaoClick)
    {
        if (this.existeCartaSelecionada(cartaSelecionada))
            return <br />;
        
        let atributos = Object.entries(cartaSelecionada.atributos).map(([chave, valor]) =>
        {
            let selecionado = atributoSelecionado === chave;

            return <Atributo
                key={chave}
                nome={chave}
                valor={valor}
                selecionado={selecionado}
                onClick={funcaoClick} />
        });

        return atributos;
    }

    retornaImagem(cartaSelecionada)
    {
        if (this.existeCartaSelecionada(cartaSelecionada))
            return <br />;

        return (
            <>
                <div className="div-carta-imagem">
                    <img
                        className="carta-imagem"
                        alt="Meme do Casimiro"
                        src={cartaSelecionada.imagem}
                    />
                </div>
                <hr className="separador-imagem-atributo" />
            </>
        );
    }

    retornaNome(cartaSelecionada)
    {
        if (this.existeCartaSelecionada(cartaSelecionada))
            return <div></div>;
        
        return (
            <div className="div-carta-nome">
                <h4 className="carta-nome">
                    {cartaSelecionada.nome}
                </h4>
            </div>
        );
    }

    render()
    {
        const cartaSelecionada = this.props.carta;
        const atributoSelecionado = this.props.atributoSelecionado;

        const nome = this.retornaNome(cartaSelecionada);
        const imagem = this.retornaImagem(cartaSelecionada);
        const funcaoClick = this.props.onClick;
        const atributos = this.retornaAtributos(cartaSelecionada, atributoSelecionado, funcaoClick);

        return (
            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 carta-escolhida">
                <div className="carta-modelo w-100p">
                    {nome}
                    {imagem}

                    <div className="div-carta-atributo">
                        <ul>
                            {atributos}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carta;