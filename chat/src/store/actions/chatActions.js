export const setupSocket = () => {
    return dispatch => {
        // local host uses "ws" instead of "http" protocol:
        const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = () => {
        dispatch({
            type: "SETUP_SOCKET",
            payload: socket
        })
    }
    }
}