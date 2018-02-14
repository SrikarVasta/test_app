import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTable from '../containers/AddTable'
import '../App.css';
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleTables from '../containers/VisibleTables'
import LeMap from '../containers/LeMap'



const App = () => (
    <div>
        {/* <AddTodo/> */}
        <AddTable/>
        {/* <VisibleTodoList/> */}
        <VisibleTables/>
        
        
        <LeMap/>
        
    </div>
)

export default App