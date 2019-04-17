

export interface IResource {
    name: string
}

export interface LoadingResourceState {
    type : ActionType
    resource: IResource | null
}

export type Action = {
    type: ActionType,
    resource: IResource
}


export enum ActionType {
    Default = "LOADING_RESOURCE_ACTION",
    Success = "LOADING_RESOURCE_SUCCESS",
    Loading = "LOADING_RESOURCE_LOADING"
}