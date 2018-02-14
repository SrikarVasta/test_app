import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'
import store from '../reducers/index';
import TableList from '../components/TableList'
import {addEntries,addHeader} from '../actions'
import { LineChart, Line } from 'recharts';
import data from '../data.json';

class GraphHere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: ''
        };
        console.log(data)
        
        this.plots = data.filter((e,i)=>{
            if(i==5 || i==500 ||i==1000 ||i==2000 ||i==3000 ||i==5000 ||i==6000 ||i==7000 ||i==8000 ){
                e.speed = +e.speed
                return e 
            }
            
        })
        console.log(this.plots)
        
    }

    
    
 
   
    
    render() {
        const datas = [
            {timestamp:"2017-01-05 21:22",speed:38.53125},
            {timestamp:"2017-01-05 21:23",speed:30.6710526316},
            {timestamp:"2017-01-05 21:24",speed:32.7777777778},
            {timestamp:"2017-01-05 21:25",speed:32.4444444444},
            {timestamp:"2017-01-05 21:26",speed:34},
            // {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            // {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            // {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            // {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            // {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            // {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            // {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ];
        return (
            <div>
                    <LineChart width={400} height={400} data={this.plots}>
                        <Line type="monotone" dataKey="speed" stroke="#8884d8" />
                    </LineChart>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        tables: state.tables
    }
}
GraphHere = connect(mapStateToProps)(GraphHere)
export default GraphHere