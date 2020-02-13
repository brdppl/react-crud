import './Main.scss'
import React from 'react'

export default props => (
    <div className="main">
        <div className="jumbotron">
            <h1 className="text-center">{props.title}</h1>
        </div>
    </div>
)