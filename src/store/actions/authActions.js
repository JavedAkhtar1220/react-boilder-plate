import { authActions } from "../contants";
import axios from "axios";
import { toast } from "react-toastify";
import BaseUri from "../../api";

export const getUser = () => {

    return (dispatch) => {

        dispatch({
            type: authActions.GET_USER
        })

        let user = localStorage.getItem('user');

        axios.post(`${BaseUri}/user`, { _id: user })
            .then(res => {
                dispatch({
                    type: authActions.GET_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: authActions.GET_USER_FAIL,
                })
                toast.error(err);
            })

    }

}


export const loginUser = (values, navigate, checked) => {
    return (dispatch) => {

        dispatch({
            type: authActions.LOGIN_USER
        })

        axios.post(`${BaseUri}/login`, values)
            .then(res => {
                if (res.data === "Not found") {
                    dispatch({
                        type: authActions.LOGIN_USER_FAIL
                    })
                    toast.error("User Not found");
                }
                else {
                    dispatch({
                        type: authActions.LOGIN_USER_SUCCESS,
                        payload: res.data
                    })

                    toast.success(`${res.data.username} Login Successfully`);

                    if (checked) {
                        localStorage.setItem("user", res.data._id);
                    }
                    else {
                        localStorage.removeItem("user");
                    }

                    navigate('/');
                }

            })
            .catch(err => {
                console.log(err);
            })

    }
}

export const signupUser = (values, navigate) => {
    return (dispatch) => {

        dispatch({
            type: authActions.SIGNUP_USER
        })

        axios.post(`${BaseUri}/signup`, values)
            .then(res => {
                if (res.data === "Email Address already exist") {
                    dispatch({
                        type: authActions.SIGNUP_USER_FAIL
                    })

                    toast.error("Email Address already exist");
                }
                else {
                    dispatch({
                        type: authActions.SIGNUP_USER_SUCCESS
                    })

                    toast.success("Account Created Successfully");
                    navigate('/login');
                    console.log(res.data);
                }
            })
            .catch(err => {
                dispatch({
                    type: authActions.SIGNUP_USER_FAIL
                })

                toast.error(err.message);
            })

    }

}

export const logoutUser = () => {
    return (dispatch) => {

        dispatch({
            type: authActions.LOGOUT_USER
        })

        localStorage.removeItem("user");

        dispatch({
            type: authActions.LOGOUT_USER_SUCCESS
        })

        toast.success("Logout Successfully");

    }
}

