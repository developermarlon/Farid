import {put, takeEvery, takeLatest} from 'redux-saga/effects';

import {
  GET_COUNTRY,
  GET_COUNTRY_SUCCEEDED,
  GET_COUNTRY_FAILED,
  GET_STATE_BY_COUNTRY,
  GET_STATE_BY_COUNTRY_SUCCEEDED,
  GET_STATE_BY_COUNTRY_FAILED,
  GET_CITY_BY_STATE,
  GET_CITY_BY_STATE_SUCCEEDED,
  GET_CITY_BY_STATE_FAILED,
  GET_DOCUMENT_TYPE,
  GET_DOCUMENT_TYPE_SUCCEEDED,
  GET_DOCUMENT_TYPE_FAILED,
} from 'library/redux/types/masterDataType';

import {APIFetch} from '../API';
import {
  URL_GET_COUNTRY,
  URL_GET_STATE_BY_COUNTRY,
  URL_GET_CITY_BY_STATE,
  URL_GET_DOCUMENT_TYPE,
} from '../URI';

function* getCountry({data}) {
  try {
    const TOKEN = data.token;
    delete data.token;
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_COUNTRY,
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
        type: GET_COUNTRY_SUCCEEDED,
        payload: RECEIVED_DATA,
      });
    } else {
      yield put({type: GET_COUNTRY_FAILED, payload: RECEIVED_DATA});
    }
  } catch (error) {
    yield put({type: GET_COUNTRY_FAILED, error});
  }
}
function* getDocumentType({data}) {
  try {
    const TOKEN = data.token;
    delete data.token;
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_DOCUMENT_TYPE,
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
        type: GET_DOCUMENT_TYPE_SUCCEEDED,
        payload: RECEIVED_DATA,
      });
    } else {
      yield put({type: GET_DOCUMENT_TYPE_FAILED, payload: RECEIVED_DATA});
    }
  } catch (error) {
    yield put({type: GET_DOCUMENT_TYPE_FAILED, error});
  }
}
function* getStateByCountry({data}) {
  try {
    const TOKEN = data.token;
    delete data.token;
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_STATE_BY_COUNTRY,
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
        type: GET_STATE_BY_COUNTRY_SUCCEEDED,
        payload: RECEIVED_DATA,
      });
    } else {
      yield put({type: GET_STATE_BY_COUNTRY_FAILED, payload: RECEIVED_DATA});
    }
  } catch (error) {
    yield put({type: GET_STATE_BY_COUNTRY_FAILED, error});
  }
}
function* getCityByState({data}) {
  try {
    const TOKEN = data.token;
    delete data.token;
    const RECEIVED_DATA = yield APIFetch(
      URL_GET_CITY_BY_STATE,
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
        type: GET_CITY_BY_STATE_SUCCEEDED,
        payload: RECEIVED_DATA,
      });
    } else {
      yield put({type: GET_CITY_BY_STATE_FAILED, payload: RECEIVED_DATA});
    }
  } catch (error) {
    yield put({type: GET_CITY_BY_STATE_FAILED, error});
  }
}

export function* watchGetCountry() {
  yield takeLatest(GET_COUNTRY, getCountry);
}
export function* watchGetDocumentType() {
  yield takeLatest(GET_DOCUMENT_TYPE, getDocumentType);
}
export function* watchGetStateByCountry() {
  yield takeLatest(GET_STATE_BY_COUNTRY, getStateByCountry);
}
export function* watchGetCityByState() {
  yield takeLatest(GET_CITY_BY_STATE, getCityByState);
}
