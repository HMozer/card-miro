import React from "react";

import Carta from "./Carta/Carta";
import Deck from "./Deck/Deck";

import Baralho from "./Comum/Baralho";
import IA from "./Comum/IA";

import Pontuacao from "./Pontuacao/Pontuacao";
import Painel from "./Painel/Painel";

import "./Carta/carta.css";
import "./Pontuacao/pontuacao.css";

class App extends React.Component
{    
    constructor(props)
    {
        super(props);

        this.state =
        {
            deckJogador: []
            , jogadorCartaSelecionada: 0
            , atributoSelecionado: null
            , pontuacaoJogador: 0 
            
            , deckIA: []
            , iaCartaSelecionada: null 
            , pontuacaoIA: 0

            , _podeJogar: true
            , _finalizar: false

            , tipoPainel: ''
            , complementoPainel: null
        }
    }

    componentDidMount()
    {
        this.setState({
            tipoPainel: 'MENU_INICIAL'
            , complementoPainel:
            {
                funcao: this.montaBaralhos.bind(this)
            }
        });
    }

    montaBaralhos(porcentagemAcerto = 30)
    {
        console.log(porcentagemAcerto);
        IA.alteraPorcentagemAcerto(porcentagemAcerto);
        const deckJogador = Baralho.montaBaralho();
        const deckIA = Baralho.montaBaralho();

        this.setState({
            deckJogador: deckJogador
            , deckIA: deckIA
            , tipoPainel: ''
            , complementoPainel: null
        });
    }

    reiniciaJogo()
    {
        document.location.reload(true);
    }

    verificaFimJogo()
    {
        const deckJogador = this.state.deckJogador;
        const pontuacaoJogador = this.state.pontuacaoJogador;
        const pontuacaoIA = this.state.pontuacaoIA;
        
        if (deckJogador.length > 0)
            return;

        this.setState(
            {
                tipoPainel: 'VENCEDOR'
                , complementoPainel:
                {
                    pontuacaoJogador: pontuacaoJogador
                    , pontuacaoIA: pontuacaoIA
                    , funcao: this.reiniciaJogo.bind(this)
                }
                , _finalizar: true
            }
        );
    }

    fechaPainel()
    {
        /* Jogador */
        const deckJogador = this.state.deckJogador;
        const indiceJogador = this.state.jogadorCartaSelecionada;

        /* IA */
        const deckIA = this.state.deckIA;
        const indiceIA = this.state.iaCartaSelecionada;

        this.setState(
            {
                tipoPainel: ''
                , complementoPainel: null
            }
        , () => this.removeCartasUsadas(deckJogador, indiceJogador, deckIA, indiceIA))
    }

    exibeVencedorPartida(valorJogador, valorIA)
    {
        this.setState({
            tipoPainel: 'MENSAGEM'
            , complementoPainel:
            {
                valorJogador
                , valorIA
                , funcao: this.fechaPainel.bind(this)
            }
        });
    }

    pontuaVencedor(valorJogador, valorIA)
    {
        let pontuacaoJogador = this.state.pontuacaoJogador;
        let pontuacaoIA = this.state.pontuacaoIA;

        if (valorJogador > valorIA)
            ++pontuacaoJogador;
        else if (valorIA > valorJogador)
            ++pontuacaoIA;

        this.setState({
            pontuacaoJogador: pontuacaoJogador
            , pontuacaoIA: pontuacaoIA
        }, () => this.exibeVencedorPartida(valorJogador, valorIA));
    }

    removeCartasUsadas(deckJogador, indiceJogador, deckIA, indiceIA)
    {
        if (deckJogador.length > 1)
            deckJogador.splice(indiceJogador, 1)
        else
            deckJogador = [];

        if (deckIA.length > 1)
            deckIA.splice(indiceIA, 1)
        else
            deckIA = [];

        this.setState({
            deckJogador: deckJogador
            , jogadorCartaSelecionada: 0
            , deckIA: deckIA
            , iaCartaSelecionada: null
            , atributoSelecionado: null
        }, () => this.verificaFimJogo());
    }

    comparaCartas()
    {
        /* Atributo */
        const atributo = this.state.atributoSelecionado;
    
        /* Jogador */
        const deckJogador = this.state.deckJogador;
        const indiceJogador = this.state.jogadorCartaSelecionada;
        const valorJogador = deckJogador[indiceJogador].atributos[atributo];

        /* IA */
        const deckIA = this.state.deckIA;
        const indiceIA = this.state.iaCartaSelecionada;
        const valorIA = deckIA[indiceIA].atributos[atributo];

        this.pontuaVencedor(valorJogador, valorIA);
    }

    selecionaAtributo(nomeAtributo)
    {
        if (!this.state._podeJogar)
            return;
    
        /* Jogador */
        const deckJogador = this.state.deckJogador;
        const cartaJogador = deckJogador[this.state.jogadorCartaSelecionada];

        /* IA*/
        const deckIA = this.state.deckIA;
        const iaCartaSelecionada = IA.escolhePosicaoCarta(deckIA, nomeAtributo, cartaJogador);

        this.setState(
            {
                atributoSelecionado: nomeAtributo
                , iaCartaSelecionada: iaCartaSelecionada
            }
            , () => setTimeout(() => this.comparaCartas(), 250));
    }

    retornaIndexCartaSelecionada(cartas, idCartaSelecionada)
    {
        for (let i = 0; i < cartas.length; ++i)
        {
            let carta = cartas[i];
            if (carta._id === idCartaSelecionada)
                return i;
        }

        return -1;
    }

    selecionaCarta(idCartaSelecionada)
    {
        if (!this.state._podeJogar)
            return;

        const cartas = this.state.deckJogador;
        const posicaoCartaSelecionada = this.retornaIndexCartaSelecionada(cartas, idCartaSelecionada);

        if (posicaoCartaSelecionada < 0)
            return;

        this.setState(
            {
                jogadorCartaSelecionada: posicaoCartaSelecionada
                , atributoSelecionado: null
            }
        );
    }

    render()
    {
        /* Jogador */
        const cartas = this.state.deckJogador;
        const cartaSelecionada = cartas[this.state.jogadorCartaSelecionada];
        const atributoSelecionado = this.state.atributoSelecionado;
        const pontuacaoJogador = this.state.pontuacaoJogador;

        /* IA */
        const cartasIA = this.state.deckIA;
        const cartaIA = cartasIA[this.state.iaCartaSelecionada];
        const pontuacaoIA = this.state.pontuacaoIA;

        /* Controle */
        const tipoPainel = this.state.tipoPainel;
        const complementoPainel = this.state.complementoPainel;

        return (
            <>
                <Pontuacao
                    posicao="esquerda"
                    valor={pontuacaoJogador} />

                <div className="container h-90p">      
                    <div className="row h-90p">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 card-game">
                            <div className="row h-100p d-flex justify-content-center">
                                <Carta
                                    carta={cartaSelecionada}
                                    atributoSelecionado={atributoSelecionado}
                                    onClick={(nome) => this.selecionaAtributo(nome)} />
                        
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 my-auto">
                                    <h2 className="text-center">VS</h2>
                                </div>

                                <Carta
                                    carta={cartaIA}
                                    atributoSelecionado={atributoSelecionado}
                                    onClick={null} />
                            </div>

                        </div>
                    </div>
                </div>

                <Deck
                    className="z-1"
                    cartas={cartas}
                    onClick={(id) => this.selecionaCarta(id)} />
                
                <Pontuacao
                    className="z-1 cor-roxo"
                    posicao="direita"
                    valor={pontuacaoIA} />

                
                <Painel
                    tipo={tipoPainel}
                    complemento={complementoPainel}
                    onClick={() => this.fechaPainel()} />
            </>
        );
    }
}

export default App;