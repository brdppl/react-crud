import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => (
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" exact={props.exact} to={props.url}>{props.name}</NavLink>
    </li>
)