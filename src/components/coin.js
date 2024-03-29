import React from 'react';
//style
import styles from './Coin.module.css';

const Coin = ({name,image,currentPrice,symbol,marketCap,priceChange}) => {
    return ( 
        <div className={styles.container}>
            <img className={styles.image} src={image}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {currentPrice.toLocaleString()}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
            <span className={priceChange>0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange}</span>
        </div>
     );
}
 
export default Coin;
