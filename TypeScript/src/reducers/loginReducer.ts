export interface LoginState {
    type : StateType
}


enum StateType {
    NotLogin,
    IsLoading,
    Success

}

const initialState: LoginState = {
    type : StateType.NotLogin
}

type Action = {
    type: ActionType,
    username: string,
    password: string
}


enum ActionType {
    Login = "LOGIN_ACTION"
}
export function loginReducer(state = initialState, action: Action): LoginState{
    switch (action.type) {
        case ActionType.Login:
        console.log("ActionType.Login")
            return {
                ...state,
                type: StateType.IsLoading
            }
    } 
    return state
}