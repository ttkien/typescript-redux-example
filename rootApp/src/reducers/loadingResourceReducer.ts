import {Action, LoadingResourceState, ActionType } from "../types"


export const initialState: LoadingResourceState = {
    type : ActionType.Default,
    resource: null
}

export function loadingResourceReducer(state = initialState, action: Action): LoadingResourceState {
    switch (action.type) {
        case ActionType.Default:
        console.log("ActionType.Default")
            return {
                ...state,
                type: ActionType.Default
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
                resource: action.resource
            }
    } 
    return state
}