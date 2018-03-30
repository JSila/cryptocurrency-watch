import React, {Component} from "react"

import CryptoCurrencyList from "./CryptoCurrencyList"
import CryptoCurrencyDetails from "./CryptoCurrencyDetails"
import FiatCurrencySelect from "./FiatCurrencySelect"

class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
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
                        <CryptoCurrencyDetails/>
                    </div>
                </main>
            </div>
        )
    }
}

export default App