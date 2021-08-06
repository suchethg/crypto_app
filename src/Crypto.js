import React from "react"
import "./Crypto.css"
const Crypto = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? <p className="coin-percent red">{priceChange.toFixed(2)}%</p> : <p className="coin-percent green">{priceChange.toFixed(2)}%</p>}
          <p className="mrktcap">Mrkt Cap: ${marketcap.toLocaleString()} </p>
        </div>
      </div>
    </div>
  )
}

export default Crypto
