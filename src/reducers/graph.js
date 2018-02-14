const graphs = (state = [], action) => {
    // console.log(state)
    
    switch (action.type) {
        case 'ADD_PLOTS':{
            console.log(state)
            return [
                ...state, action.plots
            ]
        }
        default:
            return state
    }
}

export default graphs