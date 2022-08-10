import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    GET_ALLY_FOR_ID_ALLY,
    GET_ALLY_FOR_ID_ALLY_SUCCEEDED,
    GET_ALLY_FOR_ID_ALLY_FAILED,
} from 'library/redux/types/allyType';

import { APIFetch } from '../API';
import {
    URL_GET_ALLY_FOR_ID_ALLY,
} from '../URI';

function* getAllyForIdAlly({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_ALLY_FOR_ID_ALLY, {
            method: 'GET',
        }, data);
        yield put({
            type: GET_ALLY_FOR_ID_ALLY_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_ALLY_FOR_ID_ALLY_FAILED, error });
    }
}
export function* watchGetAllyForIdAlly() {
    yield takeLatest(GET_ALLY_FOR_ID_ALLY, getAllyForIdAlly);
}