import "./MyCart.css"
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import MycartIndicator from "../MycartIndicator/MycartIndicator";
import MyCartFlexed from "./MyCartFlexed";

const MyCartDisplay = ()=>{

    return <div>
            <Header/>
             <SubHeader/>
             <MycartIndicator/> 
             <MyCartFlexed/>

            </div>
};

export default MyCartDisplay;