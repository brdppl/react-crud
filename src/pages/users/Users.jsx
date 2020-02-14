import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

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

    componentWillMount() {
        axios(`${urlApi}/users`).then(res => {
            this.setState({ list: res.data })
        })
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

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(val => val.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
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
        )
    }

    load(user) {
        this.setState({ user })
    }

    delete(user) {
        axios.delete(`${urlApi}/users/${user.id}`).then(res => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.load(user)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button type="button" className="btn btn-danger ml-2"
                            onClick={() => this.delete(user)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <section className="page-users">
                <Main title="Usuários" />
                <div className="container padding-content">
                    {this.renderForm()}
                    {this.renderTable()}
                </div>
            </section>
        )
    }
}