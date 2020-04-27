import React, { useState, useEffect } from 'react';
import './Today.css'
import useAxios from 'axios-hooks'


function Today() {
        // Initial states

        const [ btcprice, setBtcprice ] = useState([]);
        const [ ethprice, setprice ] = useState('');

        const [{ data, loading, error }, refetch] = useAxios(
    'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

            return (
                <div className="today--section container">
                    <h2>Current Price</h2>
                    <div className="columns today--section__box">
                        <div className="column btc--section">
                        <button onClick={refetch}>refetch</button>
                            <h5>{JSON.stringify(data)}</h5>
                            <p>1 BTC</p>
                        </div>
                        <div className="column eth--section">
                            <h5>hello</h5>
                            <p>1 ETH</p>
                        </div>
                        <div className="column ltc--section">
                            <h5>hello</h5>
                            <p>1 LTC</p>
                        </div>
                    </div>
                </div>
            )
    }

    export default Today;
