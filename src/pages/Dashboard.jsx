import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";



const Dashboard = () => {

    let apikey = import.meta.env.VITE_API_URL;
    

    let {symbol} = useParams();

    let navigate = useNavigate()

    const url=`https://financialmodelingprep.com/api/v3/stock/list?&apikey=f47c4936a387bf69b7b95b33770ad6a0`;
    

    const [stock, setStock] = useState({})

    async function getStock(){
        try{
            const response = await fetch(url);
            const data = await response.json();
           

            const filteredStock = data.filter(data => {
                if(data.symbol == symbol){
                    return true
                } 
            })
            setStock(filteredStock)
        }catch(error){
            console.log(error);
        }
        
    }
   
    useEffect( ()=>{
        getStock()
    }, [])


function loaded(){
    return (
        <div onClick={() => navigate("/")}>
    
                <h1>Stock name:<br/> {stock[0]?.name}</h1>
                <h1>Current value:<br/> {stock[0]?.price}</h1>
        
        
            
        </div>
      )
}

function loading(){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}


return stock[0]?.price ? loaded() : loading()

  
}

export default Dashboard