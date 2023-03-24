import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import LHead from '../../components/lower-head/LHead';
import { Featured } from '../../components/featured/Featured';
import './home.css';
import { Mail } from '../../components/mail/Mail';
import { PropertyList } from '../../components/propertyList/PropertyList';
import FeatProperties from '../../components/featProperties/FeatProperties';
import Footer from '../../components/footer/Footer';

function Home(){
  return (
    <div>
      <Navbar/>
      <Header />
      <LHead/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <h2 className="descTitle">From castles and villas to boats and igloos, we have it all</h2>
        <FeatProperties/>
      </div>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default Home;