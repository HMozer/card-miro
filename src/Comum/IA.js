import { geraNumeroAleatorio } from "./Comum";

const IA = (function()
{
    const LIMITE_INFERIOR = 30;
    const LIMITE_SUPERIOR = 50;
    var PRCNTGM_ACERTO = 30;

    function encontraMelhorOpcao(cartas, atributoSelecionado, valorLimite)
    {
        let posicao = 0;
        for (let i = 0; i < cartas.length; ++i)
        {
            let carta = cartas[i];
            if (carta.atributos[atributoSelecionado] > valorLimite)
                posicao = i;
        }

        return posicao;
    }

    function retornaCartaAleatoria(cartas)
    {
        let posicaoAleatoria = geraNumeroAleatorio(0, cartas.length);
        return posicaoAleatoria;
    }

    function escolhePosicaoCarta(cartas, atributoSelecionado, cartaJogador)
    {
        let posicaoCarta;
        let podeObservar = geraNumeroAleatorio(1, 101) <= PRCNTGM_ACERTO;
        console.log(podeObservar);
        posicaoCarta = retornaCartaAleatoria(cartas);
        
        if (podeObservar)
        {
            posicaoCarta = encontraMelhorOpcao(
                cartas
                , atributoSelecionado
                , cartaJogador.atributos[atributoSelecionado]
            );
        }

        return posicaoCarta;
    }

    function alteraPorcentagemAcerto(porcentagemAcerto = LIMITE_INFERIOR)
    {
        porcentagemAcerto = porcentagemAcerto < LIMITE_INFERIOR
            ? PRCNTGM_ACERTO : porcentagemAcerto;

        porcentagemAcerto = porcentagemAcerto > LIMITE_SUPERIOR
            ? PRCNTGM_ACERTO : porcentagemAcerto;
        
        PRCNTGM_ACERTO = porcentagemAcerto;
    }

    return {
        escolhePosicaoCarta: escolhePosicaoCarta
        , alteraPorcentagemAcerto: (porcentagemAcerto) => alteraPorcentagemAcerto(porcentagemAcerto)
    };
})();

export default IA;