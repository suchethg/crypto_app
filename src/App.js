import "./App.css"
import axios from "axios"
import React, { useState, useEffect } from "react"
import Crypto from "./Crypto"

function App() {
  const [value, setValue] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(coin => {
        setValue(coin.data)
      })
      .catch(error => console.log(error))
  }, [])
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = value.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <div className="search">
        <h1 className="txt">Search for Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-io" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return <Crypto key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} marketcap={coin.market_cap} />
      })}
    </div>
  )
}

export default App
