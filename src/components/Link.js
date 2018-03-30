import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const Link = ({currency}) => (
    <NavLink activeClassName="active" className="list-group-item" to={`/${currency.id}`}>{currency.name}</NavLink>
)

const mapStateToProps = (state, ownProps) => {
    return {
        currency: state.cryptos[ownProps.id]
    }
}

export default connect(mapStateToProps)(Link)