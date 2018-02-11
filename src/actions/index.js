let nextTodoId = 0
let nextTableId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
export const addTable = (col,row) => {
    console.log(col,row)
    return {
        type: 'ADD_TABLE',
        id: nextTableId++,
        col,row
    }
}
export const setVisibilityFilter = filter => {
    return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTodo = id => {
    return {type: 'TOGGLE_TODO', id}
}