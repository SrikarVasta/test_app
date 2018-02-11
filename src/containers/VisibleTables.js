import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TableList from '../components/TableList'

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

const mapDispatchToProps = dispatch => {
    return {
        // onTodoClick: id => {
        //     dispatch(toggleTodo(id))
        // }
    }
}

const VisibleTableList = connect(mapStateToProps, mapDispatchToProps)(TableList)

export default VisibleTableList