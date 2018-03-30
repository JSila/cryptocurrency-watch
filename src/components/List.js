import React from 'react'
import {connect} from 'react-redux'

import {getCryptoCurrencies} from "../stores/cryptos"
import CryptoCurrencyLink from "./Link"

const List = ({currencies}) => (
    <div className="col-3">
        <ul className="list-group">
            {currencies.map(c => <CryptoCurrencyLink key={c} id={c} />)}
        </ul>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        currencies: getCryptoCurrencies(state)
    }
}

export default connect(mapStateToProps)(List)