import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  const {setCurrency} = useContext(CoinContext);

  function currencyHandler(e){
      switch (e.target.value){
        case "usd" : {
          setCurrency({name: "usd",symbol: "$"});
          break;
        }
        case "eur" :{
          setCurrency({name: "eur",symbol: "€"});
          break;
        }
        case "gbp":{
          setCurrency({name: "gbp",symbol: "£"});
          break;
        }
        default: {
          setCurrency({name: "usd",symbol: "$"});
          break;
        }

      }
  }

  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
          <div className='nav-right'>
              <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
              <button> 
                Sign up 
                <img src={arrow_icon} alt="" />
              </button>
          </div>
      {/* <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </div>
  )
}

export default Navbar