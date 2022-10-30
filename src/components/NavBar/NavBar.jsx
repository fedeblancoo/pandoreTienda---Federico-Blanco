import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'

function NavBar() {
  return (
    <div className='container-header'>
        <header>
            <h1>P A N D O R E - Tienda de ropa</h1>
            <ul>
                <li>Inicio</li>
                <li>Tienda</li>
                <li><CartWidget /></li>
            </ul>
        </header>
    </div>
  )
}

export default NavBar