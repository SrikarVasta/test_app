import React from 'react'
import PropTypes from 'prop-types'

const Tableino = ({  row,col}) => (
    <li>
       columns : {col}
    </li>
)

Tableino.propTypes = {
    col: PropTypes.any.isRequired
}

export default Tableino