import {
  GET_USER,
  GET_USER_SUCCEEDED,
  GET_USER_FAILED,
  SET_USER,
  SET_USER_SUCCEEDED,
  SET_USER_FAILED,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCEEDED,
  GET_USER_PROFILE_FAILED,
  SET_USER_PROFILE,
  SET_USER_PROFILE_SUCCEEDED,
  SET_USER_PROFILE_FAILED,
  SET_USER_PROFILE_CREDENTIAL,
  SET_USER_PROFILE_CREDENTIAL_SUCCEEDED,
  SET_USER_PROFILE_CREDENTIAL_FAILED,
  SET_USER_EMPTY,
} from "../types/userType";

const INITIAL_STATE = {
  currentUser: null,
  profile: null,
  loading: false,
  error: null,
  succeeded: null,
  apiToken:null
};

const REDUCERS = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case GET_USER:
      console.log({action});
      return Object.assign({}, state, {
        loading: false,
        error: null,
        currentUser: {
          idUser: action.data.token,
          token:action.data.token,
          email: action.data.username,
          fullName: "Developer",
          apiToken:action.data.api_token,
        },
      });
    case GET_USER_SUCCEEDED:
      if (action.payload.code == "000") {
        return Object.assign({}, state, {
          loading: false,
          error: action.payload,
          currentUser: null,
        });
      }
      return Object.assign({}, state, {
        loading: false,
        error: null,
        currentUser: action.payload.data,
      });
    case GET_USER_FAILED:
      return Object.assign({}, state, {
        loading: false,
        currentUser: null,
      });

    case SET_USER:
      return Object.assign({}, state, {
        currentUser: null,
        profile: null,
        loading: true,
        error: null,
      });
    case SET_USER_SUCCEEDED:
     
      if (action.payload.code == "000") {
        return Object.assign({}, state, {
          currentUser: null,
          profile: null,
          loading: false,
          error: action.payload,
        });
      }
      return Object.assign({}, state, {
        loading: false,
        error: null,
        currentUser: action.payload.data,
      });
    case SET_USER_FAILED:
      return Object.assign({}, state, {
        loading: false,
        currentUser: null,
      });

    case GET_USER_PROFILE:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        profile: null,
      });
    case GET_USER_PROFILE_SUCCEEDED:
      if (action.payload.code === "000") {
        return Object.assign({}, state, {
          loading: false,
          error: action.payload,
          profile: null,
        });
      }
      return Object.assign({}, state, {
        loading: false,
        error: null,
        profile: action.payload.data,
      });
    case GET_USER_PROFILE_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        profile: null,
      });

    case SET_USER_PROFILE:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        succeeded: null,
      });
    case SET_USER_PROFILE_SUCCEEDED:
      if (action.payload.code == "000") {
        return Object.assign({}, state, {
          loading: false,
          error: action.payload,
          succeeded: false,
        });
      }
      return Object.assign({}, state, {
        loading: false,
        error: null,
        succeeded: action.payload,
      });
    case SET_USER_PROFILE_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        succeeded: null,
      });

    case SET_USER_PROFILE_CREDENTIAL:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        succeeded: null,
      });
    case SET_USER_PROFILE_CREDENTIAL_SUCCEEDED:
      if (action.payload.code == "000") {
        return Object.assign({}, state, {
          loading: false,
          error: action.payload,
          succeeded: false,
        });
      }
      return Object.assign({}, state, {
        loading: false,
        error: null,
        succeeded: action.payload,
      });
    case SET_USER_PROFILE_CREDENTIAL_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        succeeded: null,
      });

    case SET_USER_EMPTY:
      return Object.assign({}, state, {
        currentUser: null,
        profile: null,
        loading: false,
        error: null,
      });

    default:
      return state;
  }
};

export default REDUCERS;
