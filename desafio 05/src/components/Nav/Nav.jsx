import React from 'react'
import logo from  '../../assets/image/logo.svg'
import '../Nav/nav.css'

//redes
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png' 
import twitter from '../../assets/image/twitter.png' 
import youtube from '../../assets/image/youtube.png' 

export default function Nav() {
  return (
    <div className='nav'>
      <img src={logo} />

      <div className='menu-itens'>
        <li><img src={facebook}/></li>
        <li><img src={instagram}/></li>
        <li><img src={twitter} /></li>
        <li><img src={youtube} /></li>
      </div>
    </div>
  )
}
