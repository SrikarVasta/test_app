import {combineReducers} from 'redux'
import todos from './todos'
import tables from './tables'
import maps from './maps'
import graph from './graph'
import stats from './stats'

import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({todos,tables, visibilityFilter, maps, graph, stats})

export default todoApp