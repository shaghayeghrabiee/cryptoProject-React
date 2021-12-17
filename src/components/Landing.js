import React,{ useState , useEffect } from 'react';

// API
import { getData } from '../services/api';
import Coin from './coin';
import Loading from './Loading';
import styles from './Landing.module.css';

const Landing = () => {
    const [coins,setCoin]= useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        const fetchApi=async ()=>{
            const coinData= await getData();
            console.log(coinData);
            setCoin(coinData);
        }
        fetchApi();
    },[]);

    const searchKeyWord=event=>{
        setSearch(event.target.value);
    }

    
    const filterData= coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()));

    return ( 
        <div>
            <input className={styles.input} type="text" name="search" placeholder='Search...' value={search} onChange={searchKeyWord}/>
            {
                coins.length >0 ? 
                <div className={styles.coinContainer}>
                    {
                        filterData.map(coin=> <Coin key={coin.id} 
                                                name={coin.name}
                                                image={coin.image}
                                                currentPrice={coin.current_price}
                                                marketCap={coin.market_cap}
                                                symbol={coin.symbol}
                                                priceChange={coin.price_change_percentage_24h}/>)
                    }
                </div>
                :
                <Loading/>
            }
          
        </div>
     );
}
 
export default Landing;