import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'
import TableCreateDialogue from './TableCreateDialogue'

let AddTable = ({dispatch}) => {
    let input1
    let input2
   
    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault()
                
                dispatch(addTable(input2.value))
                input2.value = ''
                
            }}>
                <input ref={node => {
                    input2 = node
                }}/>
                <button type="submit" >
                    Add Table
                </button>
            </form>
            <TableCreateDialogue/>
            
        </div>
    )
}
AddTable = connect()(AddTable)

export default AddTable