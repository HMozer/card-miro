import React from 'react';

class NaoEncontrado extends React.Component
{
    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h1>Página não encontrada</h1>
                        <hr />
                        <h4 className="text-dark">
                            Tu tá perdido, irmão.
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NaoEncontrado;