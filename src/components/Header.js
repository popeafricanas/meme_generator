import React from 'react'
import logo from '../images/troll-face.png'

const Header = () => {
    return(
        <header className="header">
            <img className="header--image" src={logo} alt="logo"/>
            <h2 className="header--title">MemeGenerator</h2>
        </header>
    )
}

export default Header

