import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../style/Crypto.css'

function Crypto () {
    const key = '';
    const [valueBitcoin, setValueBitcoin] = useState([])
    const [valueETH, setValueETH] = useState([])
    const [valueXRP, setValueXRP] = useState([])
    const [valueLTC, setValueLTC] = useState([])
    const [valueADA, setValueADA] = useState([])
    const [valueCurrent, setValueCurrent] = useState('PLN');
    useEffect(() => {
        const getStatusInterval = setInterval(() => {
            axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=BTC,ETH,XRP,LTC,ADA&interval=7d,30d&convert=${valueCurrent}&per-page=100&page=1`)
            .then(item => {
                    setValueBitcoin([item.data[0]])
                    setValueETH([item.data[1]])
                    setValueXRP([item.data[2]])
                    setValueLTC([item.data[3]])
                    setValueADA([item.data[4]])
                })
            }, 5000)
            return () => {
                clearInterval(getStatusInterval)
            }
        }, [key, valueBitcoin, setValueBitcoin, valueCurrent])

        const HandleChangeCurrency = (e) => {
            const {value} = e.target;
            setValueCurrent(value)
            console.log(value)
        }

    return (
        <main>
            <form>
                <input type="radio" onClick={HandleChangeCurrency} value="PLN" name={valueCurrent} defaultChecked />
                <label>PLN</label> <br/>
                <input type="radio" onClick={HandleChangeCurrency} value="USD" name={valueCurrent} />
                <label>USD</label>
                <input type="radio" onClick={HandleChangeCurrency} value="EUR" name={valueCurrent} />
                <label>EUR</label>
            </form>
            <span>
                {valueBitcoin.map(item => <span key={item.id}><p>{item.id}</p><br /><p>cena: <br/>{item.price} {valueCurrent}</p></span>)}
            </span>
            <span>
                {valueETH.map(item => <span key={item.id}><p>{item.id}</p><br /><p>cena: <br/>{item.price} {valueCurrent}</p></span>)}
            </span>
            <span>
                {valueXRP.map(item => <span key={item.id}><p>{item.id}</p><br /><p>cena: <br/>{item.price} {valueCurrent}</p></span>)}
            </span>
            <span>
                {valueLTC.map(item => <span key={item.id}><p>{item.id}</p><br /><p>cena: <br/>{item.price} {valueCurrent}</p></span>)}
            </span>
            <span>
                {valueADA.map(item => <span key={item.id}><p>{item.id}</p><br /><p>cena: <br/>{item.price} {valueCurrent}</p></span>)}
            </span>
        </main>
    )
}
export default Crypto;
