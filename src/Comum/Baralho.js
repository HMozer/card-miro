import { geraNumeroAleatorio } from "./Comum";

import Casimiro from './img/Casimiro.jpg';
import EnesMiro from './img/enesMiro.jpg';
import Jimiro from './img/Jimiro.jpg';
import LancheMiro from './img/Lanchemiro.jpg';
import OutroMiro from './img/OutroMiro.jpg';
import PixMiro from './img/Pixmiro.jpg';
import PokeMiro from './img/Pokemiro.jpg';
import QueIssoMiro from './img/QueIssoMiro.jpg';
import SadMiro from './img/sadMiro.jpg';
import SambaMiro from './img/Sambamiro.jpg';
import SerieA from './img/SerieA.jpg';
import SerieB from './img/SerieB.jpg';
import TartaMiro from './img/Tartamiro.jpg';

const Baralho = (function()
{
    const LIMITE_CARTAS = 5;
    const CARTAS_JOGO = [
        {
            _id: 1
            , nome: 'Casimito'
            , imagem: Casimiro
            , atributos:
            {
                Apetite: 10
                , Carisma: 10
                , Entretenimento: 10
                , Futebol: 10
            }
        }
        ,{
            _id: 2
            , nome: 'Enes Miro'
            , imagem: EnesMiro
            , atributos:
            {
                Apetite: 7
                , Carisma: 10
                , Entretenimento: 9
                , Futebol: 7
            }
        }
        ,{
            _id: 3
            , nome: 'Jimiro'
            , imagem: Jimiro
            , atributos:
            {
                Apetite: 8
                , Carisma: 9
                , Entretenimento: 9
                , Futebol: 7
            }
        }
        ,{
            _id: 4
            , nome: 'Casimiro?'
            , imagem: OutroMiro
            , atributos:
            {
                Apetite: 7
                , Carisma: 7
                , Entretenimento: 7
                , Futebol: 7
            }
        }
        ,{
            _id: 5
            , nome: 'Pix Miro'
            , imagem: PixMiro
            , atributos:
            {
                Apetite: 8
                , Carisma: 9
                , Entretenimento: 9
                , Futebol: 7
            }
        }
        ,{
            _id: 6
            , nome: 'PokeMiro'
            , imagem: PokeMiro
            , atributos:
            {
                Apetite: 8
                , Carisma: 9
                , Entretenimento: 9
                , Futebol: 7
            }
        }
        ,{
            _id: 7
            , nome: 'Que Isso, Miro?'
            , imagem: QueIssoMiro
            , atributos:
            {
                Apetite: 9
                , Carisma: 7
                , Entretenimento: 8
                , Futebol: 9
            }
        }
        ,{
            _id: 8
            , nome: 'Sad Miro'
            , imagem: SadMiro
            , atributos:
            {
                Apetite: 10
                , Carisma: 8
                , Entretenimento: 7
                , Futebol: 8
            }
        }
        ,{
            _id: 9
            , nome: 'Samba Miro'
            , imagem: SambaMiro
            , atributos:
            {
                Apetite: 7
                , Carisma: 9
                , Entretenimento: 9
                , Futebol: 8
            }
        }
        ,{
            _id: 10
            , nome: 'Série A'
            , imagem: SerieA
            , atributos:
            {
                Apetite: 7
                , Carisma: 8
                , Entretenimento: 8
                , Futebol: 10
            }
        }
        ,{
            _id: 11
            , nome: 'Série B'
            , imagem: SerieB
            , atributos:
            {
                Apetite: 8
                , Carisma: 8
                , Entretenimento: 10
                , Futebol: 7
            }
        }
        ,{
            _id: 12
            , nome: 'Tarta Miro'
            , imagem: TartaMiro
            , atributos:
            {
                Apetite: 8
                , Carisma: 8
                , Entretenimento: 9
                , Futebol: 8
            }
        }
        ,{
            _id: 13
            , nome: 'Lanche Miro'
            , imagem: LancheMiro
            , atributos:
            {
                Apetite: 10
                , Carisma: 7
                , Entretenimento: 9
                , Futebol: 7
            }
        }
    ];
    
    var cartasJaUsadas = [];

    function reembaralha()
    {
        if (cartasJaUsadas.length === CARTAS_JOGO.length)
            cartasJaUsadas = [];
    }

    function jaFoiSelecionada(cartasSelecionadas, numeroAleatorio)
    {
        let indexCartasSelecionadas = cartasSelecionadas.findIndex(elemento => elemento === numeroAleatorio);
        let indexCartasJaUsadas = cartasJaUsadas.findIndex(elemento => elemento === numeroAleatorio);
    
        return indexCartasSelecionadas !== -1 || indexCartasJaUsadas !== -1;
    }

    function buscaCartas(arr)
    {
        let cartas = [];
        for (let i = 0; i < arr.length; ++i)
        {
            let posicaoNoArray = arr[i];

            cartas.push(CARTAS_JOGO[posicaoNoArray]);
        }

        return cartas;
    }

    function montaBaralho()
    {
        reembaralha();

        let cartasSelecionadas = [];
        let i = 0;
        
        while(cartasSelecionadas.length < LIMITE_CARTAS && i < 1000)
        {
            let numeroAleatorio = geraNumeroAleatorio(0, CARTAS_JOGO.length);
            
            if (!jaFoiSelecionada(cartasSelecionadas, numeroAleatorio))
            {
                cartasSelecionadas.push(numeroAleatorio);
                cartasJaUsadas.push(numeroAleatorio);
            }

            ++i;
        }

        return buscaCartas(cartasSelecionadas);
    }

    return {
        montaBaralho: montaBaralho
    };
})();

export default Baralho;