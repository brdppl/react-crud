import React from 'react'

export default props => (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" name="name"
                        value={this.state.user.name} onChange={props.updateField}
                        placeholder="Digite um nome" />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" name="email"
                        value={this.state.user.email} onChange={props.updateField}
                        placeholder="Digite um email" />
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>Salvar</button>
                <button className="btn btn-secondary ml-2" onClick={props.clear}>Cancelar</button>
            </div>
        </div>
    </div>
)