import './featured.css'

export const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="Mumbai" srcset="" />
            <div className="featuredTitle">
                <h1>Mumbai</h1>
                <div className="ftitle">
                    <div className="deals">Deals start at</div>
                    <div className="price">Rs.&nbsp;935</div>
                </div>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="Jaipur" srcset="" />
            <div className="featuredTitle">
                <h1>Jaipur</h1>
                <div className="ftitle">
                    <div className="deals">Deals start at</div>
                    <div className="price">Rs.&nbsp;262</div>
                </div>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="Bangalore" srcset="" />
            <div className="featuredTitle">
                <h1>Bangalore</h1>
                <div className="ftitle">
                    <div className="deals">Deals start at</div>
                    <div className="price">Rs.&nbsp;535</div>
                </div>
            </div>
        </div>
    </div>
  )
}
