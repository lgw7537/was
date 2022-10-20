import React from 'react'

export default function Coin({ coin }) {
  return (
    <div>
      <img src={coin.icon} width={100} height={100} />
      <h3>{coin.name}</h3>
      <p>{coin.price}</p>
    </div>
  )
}
