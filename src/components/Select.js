import React from 'react'
import {connect} from 'react-redux'

import './Select.css'
import {fetchCryptoCurrencies} from "../stores/cryptos";

const Select = ({currencies, current, selectFiatCurrency}) => {
    return (
        <div className="row my-3">
            <div className="col">
                Show prices in
                <select id="fiat-select" className="form-control" value={current} onChange={e => fetchCryptoCurrencies({convert: e.target.value})}>
                    {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        currencies: state.fiats,
        current: state.currentFiat
    }
}

export default connect(mapStateToProps, {fetchCryptoCurrencies})(Select)