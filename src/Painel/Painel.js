import React from 'react';

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