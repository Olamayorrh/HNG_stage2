import Header from "../Header/Header";
import MycartIndicator from "../MycartIndicator/MycartIndicator";
import SubHeader from "../SubHeader/SubHeader";
import headset from "../../assets/images/headset.png"
import earpod6 from "../../assets/images/earpod6.png"
import heasdset2 from "../../assets/images/headset2.png"
import fav from "../../assets/images/favourite.png"
import star from "../../assets/images/star.png"
import del from "../../assets/images/del.png"
import alert from "../../assets/images/alert.png"

import { IoIosStar } from "react-icons/io";
import "./MyCart.css"
const MyCart = ()=>{

    const items = [
        {   
            id:1,
            name:"Airpods Max",
            price: "$545.00",
            notice: "6 units left",
            desc: "A perfect balance for high-fidelity audio",
            review: "123 reviews",
            img2: fav,
            img: headset,
            cat: true
        },
        {   
            id:2,
            name:"Beats",
            price: "$445.00",
            notice: "In Stock",
            desc: "True Wireless Noise Cancelling Earbuds",
            review: "123 reviews",
            img2: fav,
            img: earpod6,
            cat: false
        },
        {   
            id:3,
            name:"Anker Life Q20",
            price: "$105.00",
            notice: "In Stock",
            desc: "Hybrid Active Noise Cancelling",
            review: "123 reviews",
            img2: fav,
            img: heasdset2,
            cat: true
        }
    ]

    return <div className="outbox">
            
            <div  className="master">
                {
                    items.map((product)=>(
                    
                    <div key={product.id} className="map">
                    
                    <div>
                    <div className="mainContain"> 
                        <div className="bond">
                            <div className="sample">
                                <img src={product.img} alt="headset" className="hset"></img>
                                <div className="fav"><img src={product.img2} alt="like" className="like"></img></div>
                            </div>

                           
                            <div className="detail">
                                <div className="air">
                                    <div className="perfect">
                                        <div className="newpod"><p className="para">{product.name}</p></div>
                                        <div className="blend">{product.desc}</div>
                                    </div>
                                    <div className="likes">
                                        <div className="flex">
                                            
                                        {product.cat ? <><IoIosStar  className="faClass" /> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/></> : 
                                        <><IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar className="fafaClass"/></>} 
                                        </div>
                                        <p className="reviews">({product.review})</p>
                                    </div>
                                </div>
                                <p className="dolls">{product.price}</p>
                            </div>
                        </div>
                        <div className="unit">
                        <img src={del} className="del"></img>

                            <div className="al">
                                <div className="units">
                                    {product.price == "$545.00" ? <img src={alert} className="alert"></img> : null}
                                   {product.price == "$545.00" ? <p style={{color:"red"}}>{product.notice}</p> :<p style={{color:"green",marginLeft:"40px"}}>{product.notice}</p>} 
                                </div>
                                <div className="motiv">
                                    <div className="minus">-</div>
                                    <p className="num">1</p>
                                    <div className="plus" style={{color:"white"}}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    

                    
                   
                </div>
                
            </div>
                    ))
                }



                
            </div>
                

          </div>
};

export default MyCart;