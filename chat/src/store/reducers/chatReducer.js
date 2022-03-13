const defaultState = {
    socket: null,
    message: "",
    threads: [],
    currentThread:""
}

const chat = (state = defaultState, action) => {
    switch(action.type){
        case "SETUP_SOCKET": 
            return {
                socket: action.payload
            }
        case "GOT_USERS":
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default chat;