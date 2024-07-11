import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./CheckOut.css";
import { Store } from "../Store";
import { ShippingData } from "../Store";

const CheckOut = () => {
  return (
    <main>
      <BreadCrumb />
      <div className="checkout">
        <div className="checkout-item">
          <h3 className="header">Order List</h3>
          <div className="check-item-top">
            {Store.map(({ img, head, body, price, icon }, index) => {
              return (
                <div className="check-subtop" key={index}>
                  <div className="subtop1-top">
                    <div className="image-top">
                      <img src={img} alt="" className="image" />
                    </div>
                    <p className="para-content">
                      <span className="airpod">{head}</span>
                      <span className="text">{body}</span>
                      <span className="review">
                        {icon} {icon} {icon} {icon} {icon} (123 reviews)
                      </span>
                      <span className="airpod">${price}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="btn">See all</button>

          <div>
            {ShippingData.map(({ head, img, home, address, edit }, index) => {
              return (
                <div className="bottom-container">
                  <h3 className="head">{head}</h3>
                  <div className="all">
                    <div className="home-icon">
                      <img src={img} alt="" className="locate" />
                      <div className="address">
                        <h4>{home}</h4>
                        <small className="small">{address}</small>
                      </div>
                    </div>
                    <div className="edit">{edit}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bottom-btm">
            <button className="bot-btn">Continue</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
