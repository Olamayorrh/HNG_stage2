import "./ProductDisplay.css"
import { IoIosStar } from "react-icons/io";
import Products from "../Products"
import { Link } from "react-router-dom";

import { productContext } from "../ContextComponent/Context";
import { useContext } from "react";

const ProductDisplay = ()=>{
    const {Products, getInfo} = useContext(productContext)

    return <div className="container4">
                {Products.map((product)=>(
                    <div key={product.id} className="main">


                       <div className="image">
                            <img src={product.img} alt={product.name} id="img1"></img>
                           <div className="favourite"><img src="./images/favourite.png" alt="favourite" id="img2"></img></div> 
                       </div>

                       <div className="desc">
                           
                            <div className="descrption">
                           
                                <div className="name">
                                    <p id="name">{product.name}</p>
                                    <p id="price">{product.price}</p>
                                </div>
                                <div className="descrpt"><p id="descrpt">{product.desc}</p></div>
                            </div>
                            
                            <div className="star">
                               <div className="stars">{product.cat ? <><IoIosStar  className="faClass" /> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/></> : 
                                                            <><IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar  className="faClass"/> <IoIosStar className="fafaClass"/></>} </div>
                                <div className="reviews">({product.reviews}) </div>
                            </div>
                            
                       </div>
                      <Link to={`/product/${product.id}`}><div className="btn"><button id="btn" onClick={()=>getInfo(product)}>Add to Cart</button></div> </Link>
                    </div>
                ))}
            </div>

    
};

export default ProductDisplay;