import React from 'react'
import img from '../../assets/banner.png'
import '../Nav/style.css'

function Nav(){
  return (
    <div className="container">
        <div className="nav1">
          <p>Ganhe R$ 10,00 de desconto no frete</p>
        </div>

        <div className="nav2">
          <p>JordanShoes</p>
        </div>

        <div className="nav3">
         
        <img src={img} />
          <div className="text-banner">
            <h2>A melhor loja de Jordan</h2>
            <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
          </div>

          
        </div>
    </div>

  );

}

export default Nav