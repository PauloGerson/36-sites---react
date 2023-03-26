import '../Menu/style.css'
import { FaSearch} from "react-icons/fa"


function NavBar() {
  return (
    <nav>
      <div className='navTop'>
        <p>Codelândia</p>
        <p>blog</p>
      </div>
        <div className='navBottom'> 
          <FaSearch />
          <input type="text" placeholder='Pesquisar no blog'/>       
        </div>
    </nav>
  )
}

export default NavBar
