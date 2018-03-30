import React from 'react'

const FiatCurrencySelect = () => {
    return (
        <div className="row my-3">
            <div className="col">
                Show prices in {' '}
                <select name="" id="">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        </div>
    )
}

export default FiatCurrencySelect