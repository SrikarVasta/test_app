import {combineReducers} from 'redux'
import todos from './todos'
import tables from './tables'
import maps from './maps'

import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({todos,tables, visibilityFilter, maps})

export default todoApp