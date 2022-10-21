import axios from "axios";
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_LOADING = "GET_LOADING";
export const GET_ERROR = "GET_ERROR";
export const ADD_TO_BOOKING = "ADD_TO_BOOKING";
export const REMOVE_FROM_BOOKING = "REMOVE_FROM_BOOKING";
export const GET_BOOKING_MOVIES = "GET_BOOKING_MOVIES";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const getAllMovies = (payload) => ({
    type: GET_ALL_MOVIES,
    payload: payload
});
export const getLoading = () => ({
    type: GET_LOADING
});
export const getError = () => ({
    type: GET_ERROR
});
export const addToBooking = (payload) => ({
    type: GET_BOOKING_MOVIES,
    payload
});
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const getLogin = (payload) => async (dispatch) => {
    dispatch(getLoading());
    return axios
        .post("https://reqres.in/api/login", JSON.stringify(payload))
        .then((response) => {
            dispatch(loginSuccess());
        })
        .catch(() => {
            dispatch(getError());
        })
};

export const getMovies = () => async (dispatch) => {
    dispatch(getLoading());
    return axios
        .get("http://localhost:8080/movies")
        .then((response) => {
            dispatch(getAllMovies(response.data));
        })
        .catch(() => {
            dispatch(getError());
        });
};

export const getBookingMovies = () => async (dispatch) => {
    dispatch(getLoading());
    return axios
        .get("http://localhost:8080/moviesBooked")
        .then((response) => {
            dispatch(addToBooking(response.data));
        })
        .catch(() => {
            dispatch(getError());
        });
};

export const bookTicket = (payload) => async (dispatch) => {
    dispatch(getLoading());
    return axios
        .post("http://localhost:8080/moviesBooked", payload)
        .then(() =>{
            dispatch(getBookingMovies())
        })
        .catch(() => {
            dispatch(getError());
        });
};

export const cancelTicket = (id) => async (dispatch) => {
    dispatch(getLoading());
    return axios
        .delete(`http://localhost:8080/moviesBooked/${id}`).then(()=>{
            dispatch(getBookingMovies());
        })
        .catch(() => {
            dispatch(getError());
        });
};