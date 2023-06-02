import React from 'react'
import img from '../../assets/image/ilustracao.png'
import '../Main/main.css'

import { BiPlay } from "react-icons/bi";

export default function Main() {
  return (
    <div className='main'>
      <div className='info-container'>
          <div className='info-text'>
            <h2>HAYAO MIYAZAKI</h2>
            <h1>A VIAGEM <br /> DE CHIHIRO</h1>

            <p>Chihiro chega a um mundo mágico dominado por  uma bruxa.  <br  /> Aqueles que a desobedecem são  transformados em animais.</p>

            <div className="info-btn">
              <button className='btn-01'><BiPlay/>  ASSISTIR AGORA</button>
              <button className='btn-02'> ASSISTIR TRAILER</button>
            </div>
          </div>
      </div>

      <div className="image">
        <img src={img} />
      </div>
    </div>
  )
}
