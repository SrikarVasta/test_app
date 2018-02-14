import {combineReducers} from 'redux'
import todos from './todos'
import tables from './tables'
import maps from './maps'
import graph from './graph'


import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({todos,tables, visibilityFilter, maps, graph})

export default todoApp