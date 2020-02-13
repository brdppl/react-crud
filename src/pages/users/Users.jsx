import React, { Component } from 'react'
import axios from 'axios'

import Main from '../../components/main/Main'
import { urlApi } from '../../services/Api'

const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class Users extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${urlApi}/users/${user.id}` : `${urlApi}/users`
        axios[method](url, user).then(res => {
            const list = this.getUpdatedList(res.data)
            this.setState({
                user: initialState.user,
                list: list
            })
        })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(val => val.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="container">
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" name="name"
                                    value={this.state.user.name} onChange={e => this.updateField(e)}
                                    placeholder="Digite um nome" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="email" className="form-control" name="email"
                                    value={this.state.user.email} onChange={e => this.updateField(e)}
                                    placeholder="Digite um email" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-success" onClick={this.save}>Salvar</button>
                            <button className="btn btn-secondary ml-2" onClick={this.clear}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Main title="Usuários" />
                {this.renderForm()}
            </div>
        )
    }
}