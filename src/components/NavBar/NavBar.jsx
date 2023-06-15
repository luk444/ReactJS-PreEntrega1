import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'

export const NavBar =()=> {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="marca">PANTAUTOMATION shop</p>
        <a className="nav-link active" aria-current="page" href="#">Productos</a>
        <a className="nav-link active" aria-current="page" href="#">Soporte</a>
        <a className="nav-link active" aria-current="page" href="#">Acerca de nosotros</a>
        <div>
          <CartWidget/>
          <img src="../../../../carro.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
        </div>
        
      </div>
    </nav>
    

    
  )
}
