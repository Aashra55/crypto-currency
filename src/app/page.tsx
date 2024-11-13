'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import btc from "./images/BTC.png";
import bnb from "./images/BNB.png";
import ada from "./images/ADA.png";
import bch from "./images/BCH.png";
import doge from "./images/DOGE.png";
import eth from "./images/ETH.png";
import ltc from "./images/LTC.png";
import sol from "./images/SOL.png";
import xlm from "./images/XLM.png";
import xrp from "./images/XRP.png";

export default function Home(){
  const [coin, setCoin] = useState<any>(null);
  const myKey = '89e31ad7b841131235b156742293c1c2'
  useEffect(()=>{
    fetch(`http://api.coinlayer.com/api/live?access_key=${myKey}`)
    .then((response)=>response.json())
    .then((jsonConverted)=>{
      console.log('Data:',jsonConverted);
      setCoin(jsonConverted)
    })
  },[]);
  const data = [
    {
      name :'BITOCOIN',
      image : btc,
      text : `BTC: ${coin?.rates?.BTC} `
    },
    {
      name :'BINANCE',
      image : bnb,
      text : `BNB: ${coin?.rates?.BNB} `
    },
    {
      name :'ETHEREUM',
      image : eth,
      text : `ETH: ${coin?.rates?.ETH} `
    },
    {
      name :'RIPPLE',
      image : xrp,
      text : `XRP: ${coin?.rates?.XRP} `
    },
    {
      name :'LITECOIN',
      image : ltc,
      text : `LTC: ${coin?.rates?.LTC} `
    },
    {
      name :'CARDANO',
      image : ada,
      text : `ADA: ${coin?.rates?.BCH} `
    },
    {
      name :'STELLAR',
      image : xlm,
      text : `XLM: ${coin?.rates?.XLM} `
    },
    {
      name :'DOGECOIN',
      image : doge,
      text : `DOGE: ${coin?.rates?.DOGE} `
    },
    {
      name :'SOLANA',
      image : sol,
      text : `SOL: ${coin?.rates?.SOL} `
    },
    {
      name :'BITOCIN CASH',
      image : bch,
      text : `BCH: ${coin?.rates?.BCH} `
    }
  ]
  return(
    <div className="w-[100%] flex items-center p-[25px]">
      <div className="text-[20px] w-[100%]">
      <h1 className="text-[50px] w-[100%] text-center">Crypto Currencies</h1> <br />
      <div className="flex flex-wrap w-[100%] h-[100vh] gap-[40px] justify-center items-center">
      {data.map((e)=>(
        <div className="bg-[#f0e4cc] w-[20%] rounded-xl p-[10px] h-[300px] 
        flex flex-col justify-center items-center gap-[2%]">
          <h1 className="text-[24px] font-bold">{e.name}</h1>
          <Image src={e.image} alt={`${e.name} logo`} width={90} height={70} className="
          w-[90%] h-[80%]"></Image>
          <p>{e.text}</p>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}
