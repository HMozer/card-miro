import React from 'react';

class Atributo extends React.Component
{
    render()
    {
        const nome = this.props.nome;
        const valor = this.props.valor;
        const selecionado = this.props.selecionado ? 'div-carta-atributo-selecionado' : '';
        const funcao = function() { };
        
        return (
            <li
                className={selecionado}
                onClick={() => this.props.onClick === null ? funcao : this.props.onClick(nome)}>
                <div className="row m-0">
                    <div className="col-8 m-0">
                        <label className="mb-0 conteudo-carta-selecionada texto-habilidade">
                            {nome}
                        </label>
                    </div>
                    <div className="col-4 text-right">
                        <label className="mb-0 conteudo-carta-selecionada texto-pontuacao">
                            {valor}
                        </label>
                    </div>
                </div>
            </li>
        );
    }
}

export default Atributo;