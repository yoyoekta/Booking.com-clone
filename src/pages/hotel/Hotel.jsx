import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPersonSwimming, faDumbbell, faVanShuttle, faBanSmoking, faWifi, faUtensils, faChampagneGlasses, faMugSaucer, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Mail } from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

function Hotel() {

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743475.jpg?k=0e6cac9f1bedf5da4c1d7fff2f1f3f72fa675330ca1d8edd61cda82d371f80f3&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743472.jpg?k=63b596626f5ee4416e4d6390941f100842ebb1f1c7b9b22098361394bedb2c21&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743459.jpg?k=bf4c492cf1b5dc813a49381c6743988e433c436a9270c348dcd805388dcbde3a&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743456.jpg?k=41a5516da8161579ca7ebbb44024820f5b4304996dfe02ff23f5e57391ce27f8&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743438.jpg?k=67eadd79f2266a17d283e3292c3518aee0dabcb04be795c41565f9e6de60af96&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406743443.jpg?k=00e787176474f76af0246414ef347fe1bc7eb069356e0ef698ae5530529eebf7&o=&hp=1"
    }
  ]
  return (
    <div>
      <Navbar />
      <Header />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="reserve">Reserve</button>
          <h1 className="hotelName">Hyatt Place Jaipur Malviya Nagar</h1>
          <div className="location"> <FontAwesomeIcon icon={faLocationDot} /> Apex Circle, Malviya Nagar, Malviya Nagar, 302017 Jaipur, India</div>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="imageWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelFeats">
            <span><i class="fa-sharp fa-solid fa-city"></i> City View</span>
            <span><FontAwesomeIcon icon={faPersonSwimming} /> Swimming pool</span>
            <span><FontAwesomeIcon icon={faWifi} /> Free WiFi</span>
            <span><i class="fa-regular fa-snowflake"></i> Air conditioning</span>
            <span><i class="fa-solid fa-shower"></i> Private Bathroom</span>
            <span><FontAwesomeIcon icon={faCheck} /> Key card access</span>
            <span><FontAwesomeIcon icon={faBanSmoking} /> Non-smoking rooms</span>
          </div>
          <div className="hotelLower">
            <div className="hotelDesc">
              <p>Hyatt Place Jaipur Malviya Nagar features an outdoor swimming pool, garden, a shared lounge and terrace in Jaipur. Well located in the Malviya Nagar district, this hotel has a bar. The property provides a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.</p>

              <p>The hotel will provide guests with air-conditioned rooms with a desk, an electric tea pot, a fridge, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Hyatt Place Jaipur Malviya Nagar each room includes bed linen and towels.</p>

              <p>A buffet, continental or American breakfast is available daily at the property. At the accommodation you'll find a restaurant serving American, Chinese and Indian cuisine.</p>

              <p>Birla Mandir Temple is 5.1 km from Hyatt Place Jaipur Malviya Nagar, while Govind Dev Ji Temple is 6.9 km away. The nearest airport is Jaipur International Airport, 4 km from the hotel.</p>

              <p><bold>Hyatt Place Jaipur Malviya Nagar has been welcoming Booking.com guests since Sep 26, 2022</bold></p>
              <p>Hotel chain/brand: Hyatt Place</p>

              <p>Distance in property description is calculated using © OpenStreetMap</p>

              <div className="facilities">
                <h3>Most popular facilities</h3>
                <div className="facItems">
                  <span><FontAwesomeIcon icon={faPersonSwimming} /> Outdoor swimming pool</span>
                  <span><FontAwesomeIcon icon={faDumbbell} /> Fitness center</span>
                  <span><FontAwesomeIcon icon={faVanShuttle} /> Airport shuttle</span>
                  <span><FontAwesomeIcon icon={faBanSmoking} /> Non-smoking rooms</span>
                  <span><FontAwesomeIcon icon={faUtensils} /> Zing</span>
                  <span><FontAwesomeIcon icon={faWifi} /> Free Wifi</span>
                  <span><FontAwesomeIcon icon={faChampagneGlasses} /> Bar</span>
                  <span><FontAwesomeIcon icon={faMugSaucer} /> Excellent Breakfast</span>
                </div>
              </div>
            </div>

            <div className="hotelHighlights">
              <img src="https://cf.bstatic.com/xdata/images/xphoto/max240x120/2080892.webp?k=0ccf350399d4d83619c1f57c19d05c65c63e13cf26b96210bac2af74b2e0b31b&o=" />

              <h3>Property Highlights</h3>
              <h5>Breakfast Info</h5>
              <p>Continental, Vegetarian, Vegan, Halal, Gluten-free, American, Buffet, Breakfast to go</p>
              <h5>Rooms with:</h5>
              <p><i class="fa-sharp fa-solid fa-city"></i> City view</p>
              <button>Reserve</button>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  )
}

export default Hotel;


