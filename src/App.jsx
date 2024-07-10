
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Product from "./Components/Product/Product";


const App = ()=> {
  

  return (

      
          <Routes>
              <Route path="/" element={<LandingPage/>}></Route>
              <Route path="/product/:productid" element={<Product/>}></Route>
          </Routes>
      
    
  )
}

export default App;
