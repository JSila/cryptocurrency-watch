import React, {Component} from "react"
import PropTypes from "prop-types"
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {compose} from "redux"

import {fetchCryptoCurrencies} from "../stores/cryptos"

import IndexScreen from "./IndexScreen"
import SettingsScreen from "./SettingsScreen"
import NavBar from "./NavBar"

export class App extends Component {
    componentDidMount() {
        const {qs, fetchCryptoCurrencies, currentFiat} = this.props
        const params = new URLSearchParams(qs)

        fetchCryptoCurrencies({
            convert: params.get("fiat") || currentFiat
        })
    }
    render() {
        return (
            <div className="container">
                <header className="mb-4">
                    <NavBar/>
                </header>
                <Switch>
                    <Redirect from="/" exact to="/list" />
                    <Route path="/list" component={IndexScreen} />
                    <Route path="/settings" component={SettingsScreen} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    qs: PropTypes.string.isRequired,
    fetchCryptoCurrencies: PropTypes.func.isRequired,
    currentFiat: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    currentFiat: state.currentFiat
})

export default compose(
    withRouter,
    connect(mapStateToProps, {fetchCryptoCurrencies})
)(App)