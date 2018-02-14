import React from 'react'
import {connect} from 'react-redux'
import {addTable} from '../actions'
import store from '../reducers/index';
import TableList from '../components/TableList'
import {addEntries,addHeader} from '../actions'

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: ''
        };
        
        
    }


    render() {
        
        return (
            <div>
                    Stats Here
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}
Stats = connect(mapStateToProps)(Stats)
export default Stats