import Types from "./actionTypes"

const initialState = {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    phone: "",
    password: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case Types.CREATE_USER: {
           return {
               ...action.payload
           }
        }
        default: 
         return state
    }
}

export default reducer