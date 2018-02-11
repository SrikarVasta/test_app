const tables = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TABLE':
        return [
            ...state, {
                id: action.id,
                col: action.col,
                row:action.row
            }
        ]
        // case 'TOGGLE_TODO':
        //     return state.map(todo => (todo.id === action.id)
        //         ? {
        //             ...todo,
        //             completed: !todo.completed
        //         }
        //         : todo)
        default:
            return state
    }
}

export default tables