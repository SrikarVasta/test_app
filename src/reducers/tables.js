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
            
        case 'CREATE_TABLE_HEAD':{
            console.log(state[0].id,action)
            return state.map(table => (table.id === action.id)
                ? {
                    ...table,
                    headers: action.headers,
                    order: 'asc',
                    sortIndex:-1,
                    page:1,
                    max:3
                }
                : table)
        }
        case 'SORT_TABLE':{
            console.log(action,state);
            
            return state.map(table => (table.id === action.id)
                ? {
                    ...table,
                    order: (table.order=='asc')?'desc':'asc',
                    sortIndex:action.index,
                    entries: [...table.entries.sort(function(a, b) {
                        return ((table.order=='asc')?(a[action.index].localeCompare(b[action.index])):(b[action.index].localeCompare(a[action.index])));
                    })]
                    
                }
                : table)
        }
        case 'PAGINATE_TABLE':{
            console.log(action,state);
            
            return state.map(table => (table.id === action.id)
                ? {...table,page:action.page}
                : table)
        }
        default:
            return state
    }
}

export default tables