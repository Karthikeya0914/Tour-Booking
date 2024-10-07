import {createContext,useEffect,useReducer} from 'react';

const user = localStorage.getItem('user');
const initial_state = {
    user: user === 'undefined' ? null : JSON.parse(user),
    loading: false,
    error: null
}
export const AuthContext = createContext(initial_state);

const AuthReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                loading:true,
                error:null
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload,
                loading:false,
                error:null}
        case 'LOGIN_FAILURE':
            return{
                user:null,
                loading:false,
                error:action.payload
            }
        case 'REGISTER_SUCCESS':
            return{
                user:null,
                loading:false,
                error:null
            }
        case 'LOGOUT':
            return{user:null,
                loading:false,
                error:null}
        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(  AuthReducer,initial_state)
    
    useEffect(()=>{
       localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider
            value={{
                user:state.user,
                loading:state.loading,
                error:state.error,
                dispatch
            // login: (email,password) => dispatch({type:'LOGIN_START'}),
            // register: (name,email,password) => dispatch({type:'REGISTER_SUCCESS'}),
            // logout: () => dispatch({type:'LOGOUT'})
        }}>
        {children}
    </AuthContext.Provider>
}