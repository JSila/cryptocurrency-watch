import React from "react"
import PropTypes from "prop-types"
import {NavLink, withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {compose} from "redux"

import {selectCryptoCurrency} from "../stores/current_crypto"
import qs from "query-string"

export const Link = ({currency, currentFiat, selectCryptoCurrency}) => {
    const querystring = qs.stringify({ fiat: currentFiat })
    const to = {
        pathname: `/${currency.id}`,
        search: `?${querystring}`
    }
    const onClick = () => selectCryptoCurrency(currency.id)

    return (
        <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={to} onClick={onClick}>
            <h5>{currency.rank}. {currency.name} ({currency.symbol})</h5>
            <p className="small">
                Price change in 24h: {currency.percent_change_24h} %<br/>
                Price: {currentFiat} {currency[`price_${currentFiat.toLowerCase()}`]}
            </p>
        </NavLink>
    )
}

Link.propTypes = {
    currency: PropTypes.object.isRequired,
    selectCryptoCurrency: PropTypes.func.isRequired,
    currentFiat: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    currency: state.cryptos[ownProps.id],
    currentFiat: state.currentFiat
})

export default compose(
    withRouter,
    connect(mapStateToProps, {selectCryptoCurrency})
)(Link)