import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {fetchCryptoCurrencies} from "../stores/cryptos"

import "./Select.css"

export const Select = ({fiats, currentFiat, fetchCryptoCurrencies}) => {
    const onChange = e => fetchCryptoCurrencies({ convert: e.target.value })

    return (
        <div className="row my-3">
            <div className="col">
                Show prices in
                <select id="fiat-select" className="form-control" value={currentFiat} onChange={onChange}>
                    {fiats.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
            </div>
        </div>
    )
}

Select.propTypes = {
    fiats: PropTypes.array.isRequired,
    currentFiat: PropTypes.string.isRequired,
    fetchCryptoCurrencies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    fiats: state.fiats,
    currentFiat: state.currentFiat
})

export default connect(mapStateToProps, {fetchCryptoCurrencies})(Select)