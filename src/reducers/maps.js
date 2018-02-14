const maps = (state = [], action) => {
    // console.log(state)
    
    switch (action.type) {
        case 'ADD_MARKER':{
            console.log(state)
            return [
                ...state, {
                    lat: action.lat,
                    lng: action.lng,
                    lock:action.lock,
                    text:action.text

                }
            ]
        }
        default:
            return state
    }
}

export default maps