import './mail.css';

export const Mail = () => {
  return (
    <div className="mail">
          <p className="save">Save time, save money!</p>
          <div className="signup">Sign up and we'll send the best deals to you</div>
          <div className="inputContainer">
            <input type="email" placeholder='Your email address'/>
            <button className="subscribe">Subscribe</button>
          </div>
    </div>
  )
}
