const maps = (state = [], action) => {
    // console.log(state)
    
    switch (action.type) {
        case 'ADD_MARKER':{
            console.log(state)
            return [
                ...state, {
                    lat: action.lat,
                    long: action.lng,
                }
            ]
        }
        default:
            return state
    }
}

export default maps