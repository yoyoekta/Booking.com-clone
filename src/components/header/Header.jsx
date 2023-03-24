import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCab, faCar, faHotel, faPersonSwimming, faPlane} from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (
      <div className="header">
        <div className="headContainer">
            <div className="head-listItem active"><FontAwesomeIcon icon={faBed} /><span>Stays</span> </div>
            <div className="head-listItem"><FontAwesomeIcon icon={faPlane} /> <span>Flights</span> </div>
            <div className="head-listItem"><FontAwesomeIcon icon={faHotel}/> <span>Flight + Hotel</span> </div>
            <div className="head-listItem"><FontAwesomeIcon icon={faCar} /> <span>Car Rentals</span> </div>
            <div className="head-listItem"><FontAwesomeIcon icon={faPersonSwimming} /> <span>Attractions</span> </div>
            <div className="head-listItem"><FontAwesomeIcon icon={faCab} /> <span>Airport Taxis</span> </div>
        </div>
      </div>
    )
  }
  
  export default Header;