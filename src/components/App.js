import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTable from '../containers/AddTable'

import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleTables from '../containers/VisibleTables'


const App = () => (
    <div>
        <AddTodo/>
        <AddTable/>
        
        <VisibleTodoList/>
        <VisibleTables/>
        
        
        <Footer/>
        
    </div>
)

export default App