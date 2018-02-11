import {combineReducers} from 'redux'
import todos from './todos'
import tables from './tables'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({todos,tables, visibilityFilter})

export default todoApp