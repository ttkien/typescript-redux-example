import { ActionType } from "../types";

export const loadingResource = () => dispatch => {
        dispatch({
            type: ActionType.Default
        })

        dispatch({
            type: ActionType.Loading
        })
        
        setTimeout(() => dispatch({
            type: ActionType.Success,
            resource: {
                "name": "Mr Siro"
            }
        }), 2000)
    }
