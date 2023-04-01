import React from 'react'
import '../shoes/style.css'

import img1 from '../../assets/sapato1.svg'
import img2 from '../../assets/sapato2.svg'
import img3 from '../../assets/sapato3.svg'
import img4 from '../../assets/sapato4.svg'
import img5 from '../../assets/sapato5.svg'
import img6 from '../../assets/sapato6.svg'
import img7 from '../../assets/sapato7.svg'
import img8 from '../../assets/sapato8.svg'


const img = [
  {
    url: img1
  },    
  {
    url: img2
  },    
  {
    url: img3
  },    
  {
    url: img4
  },    
  {
    url: img5
  },    

  {
    url: img6
  },    
  {
    url: img7
  },   
  {
    url: img8
  }    
  

]

function Shoes(){
  return (
    <div className='container-shoes'>
      <h2>Destaques</h2>
      <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
      <div className='shoes'>
        { img.map( item => (
          <img src={item.url} />
        ))}
      </div>

      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>

  );


}

export default Shoes