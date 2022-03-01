import React from 'react';

import imgDifculdade from './img-tutorial/img-dificuldade.jpg';
import imgTabuleiro from './img-tutorial/img-tabuleiro.jpg';

import './painel.css';

class Painel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            corPadrao: 'painel-conteudo cor-cinza text-dark'
            , PRCNTGM_ACERTO_FACIL: 30
            , PRCNTGM_ACERTO_MEDIO: 40
            , PRCNTGM_ACERTO_DIFICIL: 50
        };
    }

    montaMensagemVencedor()
    {
        let cor = this.state.corPadrao;
        let mensagem = 'Deu empate!';
        const pontuacaoJogador = this.props.complemento.pontuacaoJogador;
        const pontuacaoIA = this.props.complemento.pontuacaoIA;
    
        if (pontuacaoJogador > pontuacaoIA)
        {
            cor = cor.replace('cor-cinza', 'cor-verde')
                .replace('text-dark', 'text-white');
            mensagem = 'Você ganhou';
        }
        else if (pontuacaoIA > pontuacaoJogador)
        {
            cor = cor.replace('cor-cinza', 'cor-roxo')
                .replace('text-dark', 'text-white');
            mensagem = 'Você perdeu';
        }

        return (
            <div className={cor}>
                <span className="painel-fechar text-dark">&times;</span>
                <div className="mx-auto">
                    <h3>{mensagem}</h3>
                    <hr />
                    <h5 className="text-center">Você {pontuacaoJogador}
                    <b>&times;</b>
                    {pontuacaoIA} Computador</h5>
                </div>
                <div className="text-center">
                    <h5 className="cursor-pointer">Clique para reiniciar</h5>
                </div>
            </div>
        );
    }

    montaMensagemPartida()
    {
        let cor = this.state.corPadrao;
        let mensagem = 'Empate';
        const valorJogador = this.props.complemento.valorJogador;
        const valorIA = this.props.complemento.valorIA;

        if (valorJogador > valorIA)
        {
            cor = cor.replace('cor-cinza', 'cor-verde')
                .replace('text-dark', 'text-white');
            mensagem = 'Você ganhou';
        }
        else if (valorIA > valorJogador)
        {
            cor = cor.replace('cor-cinza', 'cor-roxo')
                .replace('text-dark', 'text-white');
            mensagem = 'Você perdeu';
        }

        return (
            <div className={cor}>
                <span className="painel-fechar text-dark">&times;</span>
                <div className="mx-auto">
                    <h3>{mensagem}</h3>
                </div>
            </div>
        );
    }

    montaMenuInicial(exibir)
    {
        const cor = this.state.corPadrao;
        const facil = this.state.PRCNTGM_ACERTO_FACIL;
        const medio = this.state.PRCNTGM_ACERTO_MEDIO;
        const dificil = this.state.PRCNTGM_ACERTO_DIFICIL;

        return (
            <div className={exibir}>
                <div className={cor}>
                    <h3>Escolha uma dificuldade</h3>
                    <hr />
                    <ul className="text-center opcao-menu-inicial">
                        <li
                            className="cursor-pointer"
                            onClick={() => this.props.complemento.funcao(facil)}
                            >Fácil</li>
                        <li
                            className="cursor-pointer"
                            onClick={() => this.props.complemento.funcao(medio)}
                            >Médio</li>
                        <li
                            className="cursor-pointer"
                            onClick={() => this.props.complemento.funcao(dificil)}
                            >Difícil</li>
                    </ul>
                </div>
            </div>
        );
    }

    montaTutorial()
    {
        let cor = this.state.corPadrao;

        return (
            <div className={cor}>
                <span className="painel-fechar text-dark">&times;</span>
                <div className="mx-auto div-tutorial">
                    <h2>Tutorial</h2>
                    <hr />

                    <ol type="1">
                        <li>
                            <p>Primeiro passo é escolher a dificuldade.</p>
                            <img
                                src={imgDifculdade}
                                className="img-tutorial"
                                alt="Menu de dificuldade" />
                            <p className="mt-1">
                                As dificuldades representam a chance que o computador tem de saber a sua carta.
                                <br /><b>Fácil: 30% de chance</b>
                                <br /><b>Médio: 40% de chance</b>
                                <br /><b>Difícil: 50% de chance</b>
                            </p>
                        </li>
                        <li>
                            <p>Selecionada a dificuldade será apresentada o tabuleiro do jogo.</p>
                            <img
                                src={imgTabuleiro}
                                className="img-tutorial"
                                alt="Tabuleiro do jogo" />
                            <p className="mt-2">Segue abaixo a descrição do tabuleiro:</p>
                            <p className="separa-li-item">
                                <b>Item 1</b> - Carta selecionada pelo jogador. Ao iniciar a primeira carta do baralho é selecionada.
                                <br />
                                <b>Item 2</b> - Carta do computador. Só é selecionada após o jogador escolher o atributo.
                                <br />
                                <b>Item 3</b> - Baralho do jogador.
                                <br />
                                <b>Item 4</b> - Pontuação do jogador.
                                <br />
                                <b>Item 5</b> - Pontuação do computador.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }

    montaPainel(tipo)
    {
        let painel = null;
        let exibir = 'painel d-block';

        switch(tipo.toUpperCase())
        {
            case 'MENSAGEM':
                painel = this.montaMensagemPartida();
            break;
            case 'VENCEDOR':
                painel = this.montaMensagemVencedor();
            break;
            case 'TUTORIAL':
                painel = this.montaTutorial();
            break;
            case 'MENU_INICIAL':
                /* Diferente devido a diferentes porcentagens de acerto */
                return this.montaMenuInicial(exibir);
            default:
                exibir = 'painel d-none';
        }

        return (
            <div
                className={exibir}
                onClick={() =>
                    this.props.complemento.funcao === undefined
                        ? '' : this.props.complemento.funcao()
                    }>
                {painel}
            </div>
        );
    }

    render()
    {
        const painel = this.montaPainel(this.props.tipo);
        return painel;
    }
}

export default Painel;