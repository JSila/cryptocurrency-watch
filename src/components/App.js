import React, {Component} from "react"
import {Route, withRouter} from 'react-router-dom'
import {connect }from 'react-redux'

import CryptoCurrencyList from "./List"
import Details from "./Details"
import FiatCurrencySelect from "./Select"
import NoCryptoCurrencySelected from "./NothingSelected"
import {fetchCryptoCurrencies} from "../stores/cryptos";

class App extends Component {
    componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        this.props.fetchCryptoCurrencies({
            convert: params.get('fiat') || this.props.currentFiat
        })
    }
    render() {
        return (
            <div className="container">
                <header className="mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Crypto-Currency Watch</h1>
                            <hr/>
                        </div>
                    </div>
                </header>
                <main>
                    <FiatCurrencySelect/>
                    <div className="row">
                        <CryptoCurrencyList/>
                        <Route exact path="/" component={NoCryptoCurrencySelected}/>
                        <Route path="/:id" component={Details}/>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentFiat: state.currentFiat
    }
}

export default connect(mapStateToProps, {fetchCryptoCurrencies})(App)