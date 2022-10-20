import axios from 'axios'
import styles from '../../styles/Home.module.css'

export default function CoinList({ coinData }) {
  console.log(coinData)
  const coins = coinData.coins
  return (
    <div className={styles.subsite}>
      <h1>Coin List </h1>
      {coins.map((coin) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={coin.id}>
            <img src={coin.icon} /> <h3>{coin.name}</h3>
            <p>{coin.price}</p>
          </div>
        )
      })}
    </div>
  )
}
export const getStaticProps = async () => {
  const result = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  )
  return {
    props: {
      coinData: result.data,
    },
    revalidate: 10,
  }
}
