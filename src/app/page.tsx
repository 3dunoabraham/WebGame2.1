import { TICKER_SYMBOLS, Ticker, getTicker } from '@/../script/state/repository/ticker'
import TickerCard from '@/dom/atom/TickerCard'
import Scene from '@/model/core/Scene';

export default async function Home() {

  const tickers: Ticker[] = await Promise.all([ getTicker(), getTicker("USDCUSDT") ]);
  
  const tickerCards = TICKER_SYMBOLS.map((tickerName:any, index:number) => (
    <TickerCard initialTicker={tickers[index]} tickerName={tickerName} key={tickerName} />
  )); 

  return (
    <main style={{minHeight:"100vh",textAlign:"center"}}>
      <br /> <div> {tickerCards} </div> <br />
      <h1> <a href="/dashboard"> Dashboard </a> </h1>

      <div style={{position:"absolute", height:"100%",width:"100%",top:"0"}}>
        <Scene />
      </div>
    </main>
  )
}
