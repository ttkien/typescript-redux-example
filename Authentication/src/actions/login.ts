import { ActionType } from "../types";

export const loginAction = (username: string, password: string) => dispatch => {
        dispatch({
            type: ActionType.Login,
            username: username,
            password: password,
        })

        dispatch({
            type: ActionType.Loading
        })
        
        setTimeout(() => dispatch({
            type: "LOGIN_SUCCESS",
            profile: {
                "name": "Mr Siro"
            }
        }), 2000)
    }
