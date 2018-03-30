import React from 'react'
import moment from "moment/moment"
import {connect} from 'react-redux'

const Details = ({currency = {}, currentFiat}) => {
    const l = currentFiat.toLowerCase()
    const u = currentFiat.toUpperCase()

    return (
        <div className="col">
            <table className="table">
                <tbody>
                <tr>
                    <th>Rank</th>
                    <td>{currency.rank}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{currency.name}</td>
                </tr>
                <tr>
                    <th>Symbol</th>
                    <td>{currency.symbol}</td>
                </tr>
                <tr>
                    <th>Price ({u})</th>
                    <td>{currency[`price_${l}`]}</td>
                </tr>
                <tr>
                    <th>Price (BTC)</th>
                    <td>{currency.price_btc}</td>
                </tr>
                <tr>
                    <th>24h Volume ({u})</th>
                    <td>{currency[`24_volume_${l}`]}</td>
                </tr>
                <tr>
                    <th>Market Cap ({u})</th>
                    <td>{currency[`market_cap_${l}`]}</td>
                </tr>
                <tr>
                    <th>Available Supply</th>
                    <td>{currency.available_supply}</td>
                </tr>
                <tr>
                    <th>Total Supply</th>
                    <td>{currency.total_supply}</td>
                </tr>
                <tr>
                    <th>Max Supply</th>
                    <td>{currency.max_supply}</td>
                </tr>
                <tr>
                    <th>1h change (%)</th>
                    <td>{currency.percent_change_1h}</td>
                </tr>
                <tr>
                    <th>24h change (%)</th>
                    <td>{currency.percent_change_24h}</td>
                </tr>
                <tr>
                    <th>7d change (%)</th>
                    <td>{currency.percent_change_7d}</td>
                </tr>
                </tbody>
            </table>
            <p className="text-center small">Last updated: {moment.unix(1522430365).fromNow()}</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        currency: state.cryptos[ownProps.match.params.id],
        currentFiat: state.currentFiat
    }
}

export default connect(mapStateToProps)(Details)