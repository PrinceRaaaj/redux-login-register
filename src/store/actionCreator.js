import Types from "./actionTypes"

export const actionCreator = {
    createUser: (user) => ({ type: Types.CREATE_USER, payload: user })
} 

