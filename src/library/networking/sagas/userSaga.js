import {put, takeLatest} from 'redux-saga/effects';
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
} from 'library/redux/types/userType';

import {APIFetch} from '../API';
import {URL_GET_USER, URL_SET_USER, URL_GET_USER_PROFILE} from '../URI';

function* getUser({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(URL_GET_USER, {
      method: 'POST',
      BODY: JSON.stringify(data),
    });
    yield put({
      type: GET_USER_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: GET_USER_FAILED, error});
  }
}
function* getUserProfile({data}) {
  try {
    const TOKEN = data.token;
    delete data.token;
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_USER_PROFILE,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + TOKEN,
        },
      },
      data,
    );
    if (RECEIVED_DATA.code === '200') {
      yield put({
        type: GET_USER_PROFILE_SUCCEEDED,
        payload: RECEIVED_DATA,
      });
    } else {
      yield put({type: GET_USER_PROFILE_FAILED, payload: RECEIVED_DATA});
    }
  } catch (error) {
    yield put({type: GET_USER_PROFILE_FAILED, error});
  }
}

function* setUser({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(URL_SET_USER, {
      method: 'POST',
      BODY: JSON.stringify(data),
    });
    yield put({
      type: SET_USER_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: SET_USER_FAILED, error});
  }
}
function* setUserProfile({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(URL_SET_USER_PROFILE, {
      method: 'POST',
      BODY: JSON.stringify(data),
    });
    yield put({
      type: SET_USER_PROFILE_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: SET_USER_PROFILE_FAILED, error});
  }
}
function* setUserProfileCredential({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(URL_SET_USER_PROFILE_CREDENTIAL, {
      method: 'POST',
      BODY: JSON.stringify(data),
    });
    yield put({
      type: SET_USER_PROFILE_CREDENTIAL_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: SET_USER_PROFILE_CREDENTIAL_FAILED, error});
  }
}

export function* watchGetUser() {
  yield takeLatest(GET_USER, getUser);
}
export function* watchGetUserProfile() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile);
}

export function* watchSetUser() {
  yield takeLatest(SET_USER, setUser);
}
export function* watchSetUserProfile() {
  yield takeLatest(SET_USER_PROFILE, setUserProfile);
}
export function* watchSetUserProfileCredential() {
  yield takeLatest(SET_USER_PROFILE_CREDENTIAL, setUserProfileCredential);
}
