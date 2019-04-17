

export interface IProfile {
    name: string
}

export interface LoginState {
    type : ActionType
    profile: IProfile | null
}


export enum StateType {
    NotLogin,
    IsLoading,
    Success

}

export type Action = {
    type: ActionType,
    username: string,
    password: string,
    profile: IProfile
}


export enum ActionType {
    Login = "LOGIN_ACTION",
    Success = "LOGIN_SUCCESS",
    Loading = "LOGIN_LOADING"
}