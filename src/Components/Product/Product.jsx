import { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import "./Product.css"

import image from "../../assets/images/headset.png"
import img1 from "../../assets/images/Frame1.png"
import img2 from "../../assets/images/Frame2.png"
import img3 from "../../assets/images/Frame3.png"
import img4 from "../../assets/images/Frame4.png"
import img5 from "../../assets/images/Frame5.png"
import alert from "../../assets/images/alert.png"
import fav from "../../assets/images/favourite.png"
import headset2 from "../../assets/images/headsetImage2.png"
import headset3 from "../../assets/images/headsetImage3.png"
import SubHeader from "../SubHeader/SubHeader"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PageIndicator from "../PageIndicator/PageIndicator"

import { productContext } from "../ContextComponent/Context";
import { Link } from "react-router-dom";


const Product = () =>{
   const {info} = useContext(productContext)
   console.log(info);
   
   return <div className="container8">

                
                {
                    info.map((product,index)=>(

                        <div key={index}>
                                <Header/>
                                <SubHeader/>
                                <PageIndicator/>

                            <div className="parent">
                                <div className="identity">
                                    <div className="imageContainer">
                                    <img src={image} alt={product.name} id="img1"></img>
                                    <div className="rate"><img src={fav} alt="like" id="img5"></img></div>
                                    </div>

                                    <div className="images">
                                       <div className="div1"><img src={image} id="img2"></img></div> 
                                       <div className="div2"><img src={headset2} id="img3"></img></div>
                                       <div className="div2"><img src={headset3} id="img4"></img></div>
                                    </div>
                                   
                                </div>

                                <div className="sideDiv">
                                    <div className="detail">

                                            <div className="upperDiv">
                                                    <div className="ratings">
                                                        <p id="name">AirPods Max</p>

                                                        <div className="price">
                                                            <p id="price">$545.00</p>
                                                            <div className="review">
                                                                <p><IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> </p>
                                                                <p>(123 reviews)</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <p id="des">the ultimate in luxury audio-ear headphones boast an<br>
                                                    </br>Apple-designed dynamic driven for high-fidelity sound. Active Noise<br></br>
                                                    Cancellation, and a comfortable knit mesh canopy with memory foam<br></br>
                                                    ear cushions. With seamless Apple device integration via the H1 chip,<br></br>
                                                    up to 2o hours of battery life, and features like Transparency mode and <br></br>spatial audio, the Airpods Max delivers an exceptional listening<br></br>
                                                    experience in style.</p>
                                            </div>

                                            <hr></hr>
                                            
                                            <div className="div2">
                                                <div className="color">
                                                    <p id="select">Selected Colour:<span>Black</span></p>
                                                    <div className="colors">
                                                        <img src={img1} className="imgg"></img>
                                                        <img src={img2} className="imgg"></img>
                                                        <img src={img3} className="imgg"></img>
                                                        <img src={img4} className="imgg"></img>
                                                        <img src={img5} className="imgg"></img>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr></hr>
                                            
                                            
                                            <div className="quant">
                                                <div className="btn">
                                                    <button id="minus">-</button>
                                                    <p id="num">1</p>
                                                    <button id="plus">+</button>
                                                </div>
                                                <div className="unit">
                                                    <div className="numb">
                                                        <img src={alert} id="imgg2"></img>
                                                        <p id="left">6 units left</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr></hr>
                                            
                                            
                                            <div className="now">
                                                <button className="btt1">Buy Now</button>
                                                <Link to="/product/Mycart"><button className="btt2">Add to Cart</button></Link>
                                            </div>


                                    </div>

                                        <div className="frame">
                                                <p id="frame1">Free 3-5 day shipping</p>
                                                <p id="frame2">3 Months warranty</p>
                                                <p id="frame3">Free Apple Care</p>
                                        </div>
                                    
                                </div>

                                   
                           
                            </div>
                             

                               
                              <Footer/>
                            
                        </div>
                       
                    ))
                 }  
            </div>
}

export default Product;