import './featProperties.css';

const FeatProperties = () => {
  return (
    <div className="fprop">
        <div className="fpropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1" alt="" className="fpropImg" />
            <div className="fpropTitle">
                <h1>Ranczo w Dolinie</h1>
                <h2>Poland, Kiszkowo</h2>
                <h2>Starting from <span className='propPrice'>₹&nbsp;43,340</span></h2>
                <button className='ratingbtn'>9.5</button>
                <span className='WrittenReview'>Exceptional</span>
            </div>
        </div>

        <div className="fpropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/90166571.webp?k=0b63f507a150b0e5f6e2173786be4374ee7deae468fc1a6443feef111cc01ef5&o=&s=1" alt="" className="fpropImg" />
            <div className="fpropTitle">
                <h1>Lofthus Camping</h1>
                <h2>Norway, Lofthus</h2>
                <h2>Starting from <span className='propPrice'>₹&nbsp;1,43,340</span></h2>
                <button className='ratingbtn'>9.4</button>
                <span className='WrittenReview'>Wonderful</span>
            </div>
        </div>

        <div className="fpropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/101984388.webp?k=7762aab2bce82e357fb58f497ac63a0736a71e21d266b30cbd1cd14a00bb88af&o=&s=1" alt="" className="fpropImg" />
            <div className="fpropTitle">
                <h1>Apartament Droga na Bystre 9a</h1>
                <h2>Poland, Zakopane</h2>
                <h2>Starting from <span className='propPrice'>₹&nbsp;45,340</span></h2>
                <button className='ratingbtn'>8.8</button>
                <span className='WrittenReview'>Excellent</span>
            </div>
        </div>

        <div className="fpropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/242740031.webp?k=c0748b237e6051854e8b1bee33f5e0993619995cc96742d55240ab6e324d2c34&o=&s=1" alt="" className="fpropImg" />
            <div className="fpropTitle">
                <h1>Forestis Dolomites</h1>
                <h2>Italy, Brixen</h2>
                <h2>Starting from <span className='propPrice'>₹&nbsp;7,43,340</span></h2>
                <button className='ratingbtn'>9.7</button>
                <span className='WrittenReview'>Exceptional</span>
            </div>
        </div>
    </div>
  )
}

export default FeatProperties