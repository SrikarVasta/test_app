import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'
import store from '../reducers/index';
import TableList from '../components/TableList'
import {addEntries,addHeader} from '../actions'

class TableCreateDialogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        
    }

    handleChange(event,i) {
        this.setState({['value'+i]: event.target.value});
    }
    componentDidMount(){
        if(this.props.tables.length>0){
            let max = +this.props.tables[this.props.tables.length-1].col
            for(let i=0;i<max;i++){
                this.setState({['value'+i]: ""})
                
            }
        }
    }
 
    handleSubmit(event) {
        console.log('table', this.props.tables)
        let entries =[];   
        let lastTab = {};
        if(this.props.tables.length>0)     {
            lastTab = this.props.tables[ this.props.tables.length-1]
        }
        for (var key in this.state) {
            entries.push(this.state[key]);
        }
        console.log("here",lastTab)
        if(lastTab && lastTab.headers ){
            if(lastTab.headers.length > 0){
             this.props.dispatch(addEntries(lastTab.id,entries))            
            }
            else{
             this.props.dispatch(addHeader(lastTab.id,entries))            
            }
        }
        
        if(entries.length === this.props.tables.col){
        }
        // alert('A name was submitted: ' + this.state.value);
        
        event.preventDefault();
    }
    
    render() {
        let entries = []
        if(this.props.tables.length>0){
            let max = +this.props.tables[this.props.tables.length-1].col
            for(let i=0;i<max;i++){
                let ele = (<input key={'s'+i} type="text" value={this.state['value'+i]} onChange={e=>{
                    this.handleChange(e,i)
                }} required/>)
                entries.push(ele);
            }
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    {entries.map(ent=>{
                        return(ent)
                    })}
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
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
TableCreateDialogue = connect(mapStateToProps)(TableCreateDialogue)
export default TableCreateDialogue