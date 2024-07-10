import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import PageIndicator from "../PageIndicator/PageIndicator";
import ProductDisplay from "../ProductDisplay/ProductDisplay"
import SubHeader from "../SubHeader/SubHeader"
import "./LandingPage.css"

const LandingPage = ()=>{
    return <div className="mainLayout">
                <Header />
                <SubHeader />
                <PageIndicator/>
                <ProductDisplay />
                <Footer/>
            
            </div>
};

export default LandingPage;