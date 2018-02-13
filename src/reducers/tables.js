const tables = (state = [], action) => {
    // console.log(state)
    switch (action.type) {
        case 'ADD_TABLE':{
            console.log(state)
            return [
                ...state, {
                    id: action.id,
                    col: action.col,
                    rows: action.row,
                    entries:[],
                    headers:[]
                }
            ]
        }
        
        case 'CREATE_TABLE_ENTRIES':{
            console.log(state[0].id,action)
            return state.map(table => (table.id === action.id)
                ? {
                    ...table,
                    entries: table.entries.concat([action.entries])
                }
                : table)
        }
            
        // case 'CREATE_TABLE_HEAD':
        //     return state.map(table => (table.id === action.id)
        //             ? {
        //                 ...table,
        //                 entries: entires.concat(action.entries)
        //             }
        //             : table)
        default:
            return state
    }
}

export default tables