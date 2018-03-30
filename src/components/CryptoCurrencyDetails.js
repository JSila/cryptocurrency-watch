import React from 'react'
import moment from "moment/moment"

const CryptoCurrencyDetails = () => {
    return (
        <div className="col">
            <table className="table">
                <tbody>
                <tr>
                    <th>Rank</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>Bitcoin</td>
                </tr>
                <tr>
                    <th>Symbol</th>
                    <td>BTC</td>
                </tr>
                <tr>
                    <th>Price (USD)</th>
                    <td>573.137</td>
                </tr>
                <tr>
                    <th>Price (BTC)</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>24h Volume (USD)</th>
                    <td>72855700.0</td>
                </tr>
                <tr>
                    <th>Market Cap (USD)</th>
                    <td>9080883500.0</td>
                </tr>
                <tr>
                    <th>Available Supply</th>
                    <td>15844176.0</td>
                </tr>
                <tr>
                    <th>Total Supply</th>
                    <td>15844176.0</td>
                </tr>
                <tr>
                    <th>Max Supply</th>
                    <td>15844176.0</td>
                </tr>
                <tr>
                    <th>1h change (%)</th>
                    <td>0.04</td>
                </tr>
                <tr>
                    <th>24h change (%)</th>
                    <td>-0.3</td>
                </tr>
                <tr>
                    <th>7d change (%)</th>
                    <td>-22.04</td>
                </tr>
                </tbody>
            </table>
            <small>Last updated: {moment.unix(1522430365).fromNow()}</small>
        </div>
    )
}

export default CryptoCurrencyDetails