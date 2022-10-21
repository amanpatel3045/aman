import {  GET_ALL_MOVIES, GET_BOOKING_MOVIES, GET_ERROR, GET_LOADING, LOGIN_SUCCESS } from "./action"


export let  initState = {
    allMovies: [],
    isLoginDone: false,
    bookingMovies: [],
    loading: false,
    error: false
}

fetch("http://localhost:8080/moviesBooked").then((res)=>res.json()).then((data)=>initState.bookingMovies=data);


export function reducer(state = initState , action) {
    switch (action.type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                isLoginDone: true
            }
        case GET_ALL_MOVIES: 
            return {
                ...state,
                loading: false,
                allMovies: action.payload
            }
        case GET_BOOKING_MOVIES: 
            return {
                ...state,
                loading: false,
                bookingMovies: action.payload
            }
        case GET_LOADING: 
            return {
                ...state,
                loading: true   
            }
        case GET_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
} 
