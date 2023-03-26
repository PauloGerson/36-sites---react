import React from 'react'
import '../Main/style.css'
import {FaRegHeart} from 'react-icons/fa'


function Main() {
  const noticias = [
    {
      title: 'Agora é oficial: o Windows 11 está vindo',
  
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  
      date: '02 de jul, 2021',
    },
    
    {
      title: 'Tim Berners-Lee vai leiloar código-fonte da web',
  
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
  
      date: '02 de jul, 2021',
    },

    {
      title: 'Tim Berners-Lee vai leiloar código-fonte da web',
  
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
  
      date: '02 de jul, 2021',
    },
  
  ]


  return (
    <div className='container'>
      {noticias.map(item => (
        <div className='news-01'>
          <div className='date'>
            <span>{item.date}</span>
            <FaRegHeart />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

    </div>
  )
}

export default Main
