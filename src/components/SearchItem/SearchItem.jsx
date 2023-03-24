import './searchItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const SearchItem = () => {
    return (
        <div className="searchItemsCont">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/406743478.webp?k=29f7000163d8de92448f94a558410d10f4ed33802bb000916a8133e092fc64bd&o=&s=1" alt="siImg" />

            <div className="siDesc">
                <h1 className="siTitle">Hyatt Place Jaipur Malviya Nagar</h1>
                <span className="siDist">6.7 km from center</span>
                <span className="siTravelOp"><FontAwesomeIcon icon={faLeaf} className="ficon" /> Travel Sustainable property</span>

                <h3 className="siSubtitle">Hyatt Twin Room with 15% Discount on F&B</h3>
                <span className="siFeatures">3 beds (2 twins, 1 sofa bed)</span>
                <span className="siCancelOp">FREE cancellation • No prepayment needed</span>
                <span className="siCancelDesc">You can cancel later, so lock in this great price today!</span>
            </div>

            <div className="siDetails">
                <div className="reviewCont">
                    <button>9.4</button>
                    <div className="remark">
                        <h3>Very Good</h3>
                        <span>375 reviews</span>
                    </div>
                </div>
                <div className="priceCont">
                    <span className="siprice">₹ 9850</span>
                    <span className="tax">+₹ 950 taxes and charges</span>
                    <button>See Availabilty</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;