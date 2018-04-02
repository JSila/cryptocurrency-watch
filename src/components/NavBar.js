import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

import {fetchCryptoCurrencies} from "../stores/cryptos"

export const NavBar = ({fetchCryptoCurrencies, currentFiat}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">TOP 100 Crypto-currencies</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active"><i className="fa fa-list"/> List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/settings" className="nav-link" activeClassName="active"><i className="fa fa-wrench"/> Settings</NavLink>
                </li>
            </ul>
            <button id="refresh-btn" className="btn btn-sm btn-outline-secondary" onClick={() => fetchCryptoCurrencies({convert:currentFiat})}><i className="fa fa-refresh"/> Refresh</button>
        </div>
    </nav>
)

NavBar.propTypes = {
    currentFiat: PropTypes.string.isRequired,
    fetchCryptoCurrencies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    currentFiat: state.currentFiat
})

export default connect(mapStateToProps, {fetchCryptoCurrencies})(NavBar)