
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Product from "./Components/Product/Product";
import CheckOut from "./Components/CheckOut/CheckOut";
import MyCartDisplay from "./Components/MyCart/MyCartDisplay";
import MyCartFlexed from "./Components/MyCart/MyCartFlexed";


const App = ()=> {
  

  return (

      
          <Routes>
              <Route path="/" element={<MyCartDisplay/>}></Route>
              <Route path="/product/:productid" element={<Product/>}></Route>
              <Route path="/product/Mycart" element={<MyCartDisplay/>}></Route>
              <Route path="/product/CheckOut" element={<CheckOut/>}></Route>
          </Routes>
      
    
  )
}

export default App;
