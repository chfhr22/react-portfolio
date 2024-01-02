import React from 'react'

const Header = () => {
  return (
    <header id="header">
            <h1 className="logo"><a href="/">GREEN</a></h1>
            <nav className="nav">
                <ul>
                    <li><a href="#section02">about me</a></li>
                    <li><a href="#section04">work</a></li>
                    <li><a href="#section06">comment</a></li>
                    <li><a href="#section07">contact</a></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header