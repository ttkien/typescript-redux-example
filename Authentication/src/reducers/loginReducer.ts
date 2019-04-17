import {Action, LoginState, ActionType, StateType } from "../types"


export const initialState: LoginState = {
    type : ActionType.Login,
    profile: null
}

export function loginReducer(state = initialState, action: Action): LoginState{
    switch (action.type) {
        case ActionType.Login:
        console.log("ActionType.Login")
            return {
                ...state,
                type: ActionType.Login
            }
            case ActionType.Loading: 
            return {
                ...state,
                type: ActionType.Loading
            }

            case ActionType.Success: 
            console.log("ActionType.Success")
            return {
                ...state,
                type: ActionType.Success,
                profile: action.profile
            }
    } 
    return state
}