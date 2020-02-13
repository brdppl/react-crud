import './Header.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand"><FontAwesomeIcon icon={faReact} /> React App</a>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <NavItem exact={true} url="/" name="Home" />
                <NavItem url="/users" name="Usuários" />
            </ul>
        </div>
    </nav>
)