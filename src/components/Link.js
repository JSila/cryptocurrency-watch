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
        <NavLink activeClassName="active" className="list-group-item" to={to} onClick={onClick}>
            {currency.name}
        </NavLink>
    )
}

Link.propTypes = {
    currency: PropTypes.object,
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