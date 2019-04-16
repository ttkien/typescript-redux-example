

export const loginAction = (username: string, password: string) => dispatch => {
        dispatch({
            type: "LOGIN_ACTION",
            username: username,
            password: password,
        })
    }
