import React from 'react'
import PropTypes from 'prop-types'

const Tableino = ({  row,col}) => (
    <li>
       {row} : {col}
    </li>
)

Tableino.propTypes = {
    row: PropTypes.any.isRequired,
    col: PropTypes.any.isRequired
}

export default Tableino