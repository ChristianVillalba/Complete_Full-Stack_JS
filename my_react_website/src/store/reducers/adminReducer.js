const defaultState = {
    user: [],
    posts: []
}

const admin = (state = defaultState, action) => {
    switch(action.type){
        case "GOT_USERS":
            return {
                ...state,
                user: action.payload
            }
        case "GOT_POSTS":
            return {
                 ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default admin;