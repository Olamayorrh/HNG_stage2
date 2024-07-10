import { CiSearch } from "react-icons/ci";
import shopBag from "../../assets/images/shoppingBagb.png"
import arrow from "../../assets/images/arrowDown.png"
import basket from "../../assets/images/shoppingBasket.png"
import fav from "../../assets/images/favourite.png"
import avatar from "../../assets/images/Avatar.png"
import "./Header.css"

const Header = ()=>{
    return <div className="container1">
                <div className="logo">
                    <div className="shoplogo">
                        <img src={shopBag} alt="shopping bag" id="img1"></img> 
                        <p id="show">ShopNow</p> 
                    </div>
                  
                </div>
                
                <div className="search">
                    <CiSearch  id="searchlogo"/>
                    <input type="text" placeholder="Search"></input>
                </div>
                
                <div className="lan">
                    <div className="lang">
                        <span>EN</span>
                        <img src={arrow} alt="language" id="img2"></img>
                    </div>

                    <div className="cart">
                        <img src={basket} className="cartImage"></img>
                        <img src={fav} className="cartImage"></img>
                        <img src={avatar} id="avatar"></img>

                    </div>
                </div>
          </div>
};
export default Header;