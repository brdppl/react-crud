import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'
import Header from './header/Header'

export default props => (
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
        </div>
    </BrowserRouter>
)