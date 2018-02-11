import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'

let AddTable = ({dispatch}) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTable(input.value,2))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Table
                </button>
            </form>
        </div>
    )
}
AddTable = connect()(AddTable)

export default AddTable