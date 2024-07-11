import "./BreadCrumb.css";

const BreadCrumb = () => {
  return (
    <header>
      <div className="check-top">
        <span className="bread-home">Home </span> /{" "}
        <span className="bread-cart"> My Cart</span> /
        <span className="bread-check">Checkout</span>
      </div>
    </header>
  );
};

export default BreadCrumb;
