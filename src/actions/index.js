import {AUTH_USER, AUTH_ERROR} from './types'
import axios from 'axios'

export const signup = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:3090/signin', formProps)
        dispatch({type: AUTH_USER, payload: response.data.token})
        localStorage.setItem('token', response.data.token)
        callback()
    } catch(e){
        dispatch({type: AUTH_ERROR, PAYLOAD: 'Email In Use'})
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:3090/signin', formProps)
        dispatch({type: AUTH_USER, payload: response.data.token})
        localStorage.setItem('token', response.data.token)
        callback()
    } catch(e){
        dispatch({type: AUTH_ERROR, PAYLOAD: 'Invalid login details'})
    }
}

export const signout = () => {
    localStorage.removeItem('token')
    return {
        type:AUTH_USER
    }
}