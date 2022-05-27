import { authActions } from "../contants";

const INITIAL_STATE = {
    mainLoading: true,
    pageLoading: false,
    user: []
}

export const authReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case authActions.LOGIN_USER:
            return {
                ...state,
                pageLoading: true,
            };
        case authActions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                pageLoading: false,
                user: payload
            };
        case authActions.LOGIN_USER_FAIL:
            return {
                ...state,
                pageLoading: false
            };
        case authActions.SIGNUP_USER:
            return {
                ...state,
                pageLoading: true,
            };
        case authActions.SIGNUP_USER_SUCCESS:
            return {
                ...state,
                pageLoading: false,
            };
        case authActions.SIGNUP_USER_FAIL:
            return {
                ...state,
                pageLoading: false
            };
        case authActions.FORGOT_PASSWORD:
            return {
                ...state,
                pageLoading: true,
            };
        case authActions.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                pageLoading: false,
            };
        case authActions.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                pageLoading: false
            };
        case authActions.LOGOUT_USER:
            return {
                ...state,
                pageLoading: true,
            };
        case authActions.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                pageLoading: false,
                user: []
            };
        case authActions.GET_USER:
            return {
                ...state,
                mainLoading: true
            };
        case authActions.GET_USER_SUCCESS:
            return {
                ...state,
                mainLoading: false,
                user: payload
            };
        case authActions.GET_USER_FAIL:
            return {
                ...state,
                mainLoading: false
            }
        default:
            return state
    }
}
