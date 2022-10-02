const setToken = (state = null, action) => {
    switch (action.type) {
        case 'TOKEN':
            return state  = action.data
        default:
            return state    
    }
}
export default setToken