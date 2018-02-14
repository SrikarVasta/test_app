import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddTable from '../containers/AddTable'
import '../App.css';
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleTables from '../containers/VisibleTables'
import LeMap from '../containers/LeMap'
import GraphHere from '../containers/GraphHere'
import Stats from '../containers/Stats'





const App = () => (
    <div>
        {/* <AddTodo/> */}
        <h1>Table Creation</h1>
        <AddTable/>
        {/* <VisibleTodoList/> */}
        <h1>Table List</h1>
        
        <VisibleTables/>
        
        <h1>Map</h1>
        
        <LeMap/>
        <h1>Graphs</h1>
        <GraphHere/>
        <h1>Stats</h1>
        <Stats/>
        
    </div>
)

export default App