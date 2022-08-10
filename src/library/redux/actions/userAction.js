import { 
    GET_USER,
    SET_USER,
    GET_USER_PROFILE,
    SET_USER_PROFILE,
    SET_USER_PROFILE_CREDENTIAL,
    SET_USER_EMPTY
} from '../types/userType';

export const getUserAction = data => {
   
    return {
        type: GET_USER,
        data
    }
}
export const getUserProfileAction = data => {
    return {
        type: GET_USER_PROFILE,
        data
    }
}

export const setUserAction = data => {
    return {
        type: SET_USER,
        data
    }
}
export const setUserProfileAction = data => {
    return {
        type: SET_USER_PROFILE,
        data
    }
}
export const setUserProfileCredentialAction = data => {
    return {
        type: SET_USER_PROFILE_CREDENTIAL,
        data
    }
}

export const setUserEmptyAction = () => {
    return {
        type: SET_USER_EMPTY
    }
}