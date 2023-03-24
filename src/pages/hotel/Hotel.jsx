import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Mail } from '../../components/mail/Mail';
import Footer  from '../../components/footer/Footer';

function Hotel(){
    return (
      <div>
        <Navbar/>
        <Header/>
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <h1 className="hotelName">Hyatt Place Jaipur Malviya Nagar</h1>
            <div className="location"> <FontAwesomeIcon icon={faLocationDot} /> Apex Circle, Malviya Nagar, Malviya Nagar, 302017 Jaipur, India</div>
            <div className="hotelFeats"></div>
            <div className="hotelDesc">
              <p>Hyatt Place Jaipur Malviya Nagar features an outdoor swimming pool, garden, a shared lounge and terrace in Jaipur. Well located in the Malviya Nagar district, this hotel has a bar. The property provides a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.</p>

              <p>The hotel will provide guests with air-conditioned rooms with a desk, an electric tea pot, a fridge, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Hyatt Place Jaipur Malviya Nagar each room includes bed linen and towels.</p>

              <p>A buffet, continental or American breakfast is available daily at the property. At the accommodation you'll find a restaurant serving American, Chinese and Indian cuisine.</p>

              <p>Birla Mandir Temple is 5.1 km from Hyatt Place Jaipur Malviya Nagar, while Govind Dev Ji Temple is 6.9 km away. The nearest airport is Jaipur International Airport, 4 km from the hotel.</p>

              <p><bold>Hyatt Place Jaipur Malviya Nagar has been welcoming Booking.com guests since Sep 26, 2022</bold></p>
              <p>Hotel chain/brand: Hyatt Place</p>

              <p>Distance in property description is calculated using © OpenStreetMap</p>
            </div>

            <div className="facilities">
              <h3>Most popular facilities</h3>
              <div className="facItems">
                <span>Outdoor swimming pool</span>
                <span>Fitness center</span>
                <span>Airport shuttle</span>
                <span>Non-smoking rooms</span>
                <span>Room service</span>
                <span>Zing</span>
                <span>Free Wifi</span>
                <span>Tea/Coffee Maker in All Rooms</span>
                <span>Bar</span>
                <span>Excellent Breakfast</span>
              </div>
            </div>
          </div>
        </div>
        <Mail/>
        <Footer/>
      </div>
    )
  }
  
  export default Hotel;


