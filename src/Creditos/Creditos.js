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
                            <h4 className="text-dark">Casimiro</h4>
                            <h6>Muso e inspiração para esse site</h6>
                            <h5>
                                <a href="https://www.twitch.tv/casimito">Twitch</a>
                            </h5>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <h4 className="text-dark">Henrique M</h4>
                            <h6>Desenvolvedor</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Creditos;