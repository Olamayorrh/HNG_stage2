import { createContext, useState } from "react";

import Products from "../Products"

export const productContext = createContext();

const Context = ({children})=>{

    const [info, setInfo] = useState([{}]);

    const getInfo = ()=>{
        const data = [
            {
              name: "AirPods Max", 
              price: "$545.00", 
              review: "123 reviews"
            }
        ]
        setInfo(()=>data);
    };

    
    return <productContext.Provider value={{getInfo,Products, info}}>
                {children}
            </productContext.Provider>
    
           
};

export default Context;