import React from "react"
import PropTypes from "prop-types"
import moment from "moment/moment"
import {connect} from "react-redux"
import classnames from "classnames"

const percentageClassName = p => classnames({
    "table-success": p >=0,
    "table-danger": p < 0
})

export const Details = ({currency = {}, currentFiat}) => {
    const l = currentFiat.toLowerCase()
    const u = currentFiat.toUpperCase()

    if (!currency.id) {
        return (
            <div className=".col">
                <p className="text-center text-muted">Waiting for data to load.</p>
            </div>
        )
    }

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
                    <td>{currency[`24h_volume_${l}`]}</td>
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
                    <td className={percentageClassName(currency.percent_change_1h)}>{currency.percent_change_1h}</td>
                </tr>
                <tr>
                    <th>24h change (%)</th>
                    <td className={percentageClassName(currency.percent_change_24h)}>{currency.percent_change_24h}</td>
                </tr>
                <tr>
                    <th>7d change (%)</th>
                    <td className={percentageClassName(currency.percent_change_7d)}>{currency.percent_change_7d}</td>
                </tr>
                </tbody>
            </table>
            <p className="text-center small">Last updated {moment.unix(currency.last_updated).fromNow()}</p>
        </div>
    )
}

Details.propTypes = {
    currency: PropTypes.object,
    currentFiat: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    currency: state.cryptos[ownProps.match.params.id],
    currentFiat: state.currentFiat
})

export default connect(mapStateToProps)(Details)