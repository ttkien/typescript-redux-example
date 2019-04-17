import { ActionType, Action } from "../types";
import { Dispatch } from "redux";

export const loginAction = (username: string, password: string) => (dispatch: Dispatch<Action>) => {
        dispatch({           
            type: ActionType.Login,
            username: username,
            password: password,
    })

        dispatch({
            type: ActionType.Loading
        })
        
        setTimeout(() => dispatch({
            type: ActionType.Success,
            profile: {
                "name": "Mr Siro"
            }
        }), 2000)
    }
