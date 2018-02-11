import React from 'react'
import PropTypes from 'prop-types'
import Tableino from './Tableino'

const TableList = ({tables}) => (
    <ul>
        {tables.map(table => (<Tableino key={table.id} {...table} />))}
    </ul>
)

TableList.propTypes = {
    tables: PropTypes
        .arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, row: PropTypes.any.isRequired, col: PropTypes.any.isRequired}).isRequired)
        .isRequired,
}

export default TableList