import Image1 from "../assets/images/image1.jfif";
import Image2 from "../assets/images/image2.jfif";
import Image3 from "../assets/images/image3.jfif";
import Image4 from "../assets/images/image4.jfif";
import { FaStar } from "react-icons/fa";

export const Store = [
  {
    img: Image1,
    head: "AirPods Max",
    body: "A perfect balance for high-fidelity audio",
    icon: <FaStar className="check-star" />,
    price: 545.0,
  },
  {
    img: Image2,
    head: "Anker Life Q20",
    body: "Hybrid Active Noise Cancelling",
    icon: <FaStar className="check-star" />,
    price: 105.0,
  },
];

export const ShippingData = [
  {
    head: "Shipping address",
    img: Image3,
    home: "Home",
    address: "14, Akindele close, off idi-osan bus-stop, Matogun, Ogun state.",
    edit: "Edit",
  },
  {
    head: "Choose shipping type",
    img: Image4,
    home: "Economy",
    address: "Estimated date: 26, June 2024.",
    edit: "Edit",
  },
];
