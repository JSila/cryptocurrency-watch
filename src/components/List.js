import React from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import {compose} from "redux"
import {connect} from "react-redux"

import {getCryptoCurrencies} from "../stores/cryptos"
import Link from "./Link"

export const List = ({currencies}) => (
    <div className="col-3">
        <ul className="list-group">
            {currencies.map(c => <Link key={c} id={c} />)}
        </ul>
    </div>
)

List.propTypes = {
    currencies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    currencies: getCryptoCurrencies(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps)
)(List)