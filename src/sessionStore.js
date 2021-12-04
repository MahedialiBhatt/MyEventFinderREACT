import {createStore} from 'redux'

export const login = (uname) => {return {type: 'login', uname:uname}}
export const logout = () => {return {type: 'logout'}}

export const reducer = (initialState=logout, action) => {
    switch(action.type) {
        case "login":
            initialState = `${action.type}, logged in successfully....`
            break
        case "logout":
            initialState = 'logout'
            break
        default:
            return initialState
    }
    return initialState
}

export const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
