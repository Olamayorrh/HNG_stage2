import "./PageIndicator.css"
import arrow from "../../assets/images/arrowDown.png"

const PageIndicator = ()=>{
    return <div className="container3">
                <div className="indicator">
                    <span>Home</span>
                    <span>/</span>
                    <span>Airpods</span>
                </div>
                
                <div className="dropdown">
                    <span id="sort">sort by</span>
                    <img src={arrow} alt="dropdown Arrow" id="img1"></img>
                </div>
           </div>
};

export default PageIndicator;