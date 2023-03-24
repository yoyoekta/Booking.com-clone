import './navbar.css';


function Navbar(){
    return (
      <div className="navbar">
        <div className="navContainer">
            <span className="logo">Booking.com</span>
            <span className="nav-right">
                {/* <span className="country">IN</span>
                <span className="country-img">Img</span>
                <span className="help">Help</span>
                <span className="list">List your Property</span> */}
                <span className="navItems">
                    <button className="navbutton">Register</button>
                    <button className="navbutton">Sign In</button>
                </span>
            </span>
            
        </div>
      </div>
    )
  }
  
  export default Navbar;