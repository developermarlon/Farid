import {put, takeLatest} from 'redux-saga/effects';

import {
  GET_PROFILE,
  GET_PROFILE_SUCCEEDED,
  GET_PROFILE_FAILED,
  SET_PROFILE,
  SET_PROFILE_SUCCEEDED,
  SET_PROFILE_FAILED,
} from 'library/redux/types/clientType';

import {APIFetch} from '../API';
import {URL_GET_PROFILE, URL_SET_PROFILE} from '../URI';

function* getProfile({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_PROFILE,
      {
        method: 'GET',
      },
      data,
    );
    yield put({
      type: GET_PROFILE_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: GET_PROFILE_FAILED, error});
  }
}
function* setProfile({data}) {
  try {
    const RECEIVED_DATA = yield APIFetch(URL_SET_PROFILE, {
      method: 'POST',
      BODY: JSON.stringify(data),
    });
    yield put({
      type: SET_PROFILE_SUCCEEDED,
      payload: RECEIVED_DATA,
    });
  } catch (error) {
    yield put({type: SET_PROFILE_FAILED, error});
  }
}

export function* watchGetProfile() {
  yield takeLatest(GET_PROFILE, getProfile);
}
export function* watchSetProfile() {
  yield takeLatest(SET_PROFILE, setProfile);
}
