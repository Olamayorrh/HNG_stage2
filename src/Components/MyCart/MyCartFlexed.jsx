import MyCart from "./MyCart";
import circle from "../../assets/images/circle.png"
import "./MyCart.css"
import Footer from "../Footer/Footer";


 const MyCartFlexed = ()=>{

    return <div >
             
            <div className="cartty">
            <div>
              <MyCart/> 
            </div>  
             
            <div className="summary">
                        <div className="sum">
                            <div className="uppersum">
                                <h2 id="head">Order summary</h2>
                                <div className="analy">
                                    <div className="subt">
                                        <p id="sub">Subtotal</p>
                                        <p id="tot">$1095.00</p>
                                    </div>
                                    <div className="dis">
                                        <p id="disc">Discount</p>
                                        <p id="zero">$00.00</p>
                                    </div>
                                    <div className="deli">
                                        <p id="delifee">Delivery Fee</p>
                                        <p id="free">Free</p>
                                    </div>
                                    <div className="coupon">
                                        <p id="coup">Add Coupon</p>
                                        <img src={circle} alt="circle" id="circle"></img>
                                    </div>
                                </div>
                            </div>
                            
                            <hr></hr>
                            <div className="totp">
                                <p id="totp">Total Price</p>
                                <p id="amt">$1095.00</p>
                            </div>
                        </div>
                        <button id="checkout">Proceed to checkOut</button>


                    </div>
           </div>  
           
           <Footer/> 
                    
         </div>
 };

 export default MyCartFlexed;