import "./Footer.css"

import shopBag from "../../assets/images/shoppingBag.png"
import sent from "../../assets/images/sent.png"
import Qrcode from "../../assets/images/Qrcode.png"
import playstore from "../../assets/images/googlePlaystore.png"
import appstore from "../../assets/images/appstore.png"

import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
const Footer = ()=>{
    return <div className="container5">
                <div className="outerContain">

                        <div className="div1">
                            <div className="sub">
                                <div className="logo">
                                    <div className="shopB"><img src={shopBag} id="img1"></img></div>
                                    <div id="logo">ShopNow</div>
                                </div>

                                <div className="subcsribe"><p className="off"> Subscribe</p></div>

                                <p className="offf">Get 10% off your last order</p>
                            </div>

                            <div className="mail">
                                <input type="text" placeholder="Enter your email"></input>
                                <img src={sent} id="mssg"></img>
                            </div>
                        
                        </div>

                    <div className="div2">
                        <h3>Support</h3>

                        <div className="addr">
                            <p id="add1">12, Alhaji Adenike Street,<br></br>iju road, Lagos</p>
                            <p id="add2">ihamroland@gmail.com</p>
                            <p id='num'>+2348074238929</p>
                        </div>
                    </div>

                    <div className="div3">
                        <h3>Account</h3>

                        <div className="fam">
                            <p id="acct">My Account</p>
                            <p id="log">Login/Register</p>
                            <p id="cart">Cart</p>
                            <p id="shop">Shop</p>
                        </div>
                    </div>

                    <div className="div4">
                        <h3>Quick Link</h3>

                        <div className="terms">
                            <p id="privy">Privacy Policy</p>
                            <p id="term">Terms Of Use</p>
                            <p id="faq">FAQ</p>
                            <p id="cont">Contact</p>
                        </div>
                    </div>

                    <div className="div5">
                        <div className="download">
                            <h3>Download App</h3>
                            <div className="save">
                                <p id="save">save $3 with App New User Only</p>
                                <div className="qrcode">
                                    <img src={Qrcode} alt="qrcode" id="qrcode"></img>
                                    
                                    <div className="store">
                                        <img src={playstore} alt="playstore logo"></img>
                                        <img src={appstore} alt="appstore logo"></img>
                                    </div>
                               
                                </div>

                            </div>
                        </div>
                        <div className="socials">
                            <img src={facebook} alt="facebook" className="soc"></img>
                            <img src={twitter} alt="twitter" className="soc"></img>
                            <img src={instagram} alt="instagram" className="soc"></img>
                            <img src={linkedin} alt="linkedin" className="soc"></img>
                        </div>

                    </div>
                </div>
                
                <div className="footy">
                    <hr className="line"></hr>

                    <div className="copyright">
                       <div className="copy"><span id="icon">&copy;</span><span id="rimel">Copyright Rimel 2022. All right reserved</span></div> 
                    </div>
                </div>
            </div>
};

export default Footer;