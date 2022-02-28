import React from 'react';

class Creditos extends React.Component
{
    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h1>Créditos</h1>
                        <hr className="mb-4" />
                        <div>
                            <p>
                                Esta página foi feita por um fã de <a href="https://www.twitch.tv/casimito">Casimiro Miguel</a> e está 
                                disponível para download no <a href="https://github.com/HMozer/card-miro">GitHub</a>.
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="mt-3">
                            <h2>Agradecimentos:</h2>
                            <h3 className="mt-3 text-dark">Casimiro</h3>
                            <h5>
                                <a href="https://www.twitch.tv/casimito">Twitch</a>
                            </h5>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <h2>Desenvolvido por: </h2> 
                            <h4 className="text-dark mt-4">Henrique Mozer</h4>
                            <h6>
                                <a href="https://github.com/HMozer/card-miro">GitHub</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Creditos;