import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'
import TableCreateDialogue from './TableCreateDialogue'

let AddTable = ({dispatch,tables}) => {
    let input1
    let input2
   
    return (
        <div>
            {tables.length==0?(<form
                onSubmit={e => {
                e.preventDefault()
                
                dispatch(addTable(input2.value))
                input2.value = ''
                
            }}>
                <input  type="number" ref={node => {
                    input2 = node
                }}/>
                <button type="submit" >
                    Add Table
                </button>
            </form>):""}
            
            <TableCreateDialogue tables={tables}/>
            
        </div>
    )
}
const getVisibleTables = (tables, filter) => {
    switch (filter) {
        // case 'SHOW_COMPLETED':
        //     return todos.filter(t => t.completed)
        // case 'SHOW_ACTIVE':
        //     return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return tables
    }
}
const mapStateToProps = state => {
    return {
        tables: getVisibleTables(state.tables)
    }
}
AddTable = connect(mapStateToProps)(AddTable)
export default AddTable