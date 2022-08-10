import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    GET_COUPON_FOR_CATEGORY_LOCATION,
    GET_COUPON_FOR_CATEGORY_LOCATION_SUCCEEDED,
    GET_COUPON_FOR_CATEGORY_LOCATION_FAILED,

    GET_COUPON_FOR_ID_COUPON,
    GET_COUPON_FOR_ID_COUPON_SUCCEEDED,
    GET_COUPON_FOR_ID_COUPON_FAILED,

    SET_COUPON_CLIENT,
    SET_COUPON_CLIENT_SUCCEEDED,
    SET_COUPON_CLIENT_FAILED,

    GET_COUPON_CLIENT,
    GET_COUPON_CLIENT_SUCCEEDED,
    GET_COUPON_CLIENT_FAILED,

    GET_COUPON_CLIENT_HISTORY,
    GET_COUPON_CLIENT_HISTORY_SUCCEEDED,
    GET_COUPON_CLIENT_HISTORY_FAILED,

    GET_COUPON_CLIENT_FOR_REFERENCE,
    GET_COUPON_CLIENT_FOR_REFERENCE_SUCCEEDED,
    GET_COUPON_CLIENT_FOR_REFERENCE_FAILED,

} from 'library/redux/types/couponType';

import { APIFetch } from '../API';
import {
    URL_GET_COUPON_FOR_CATEGORY_LOCATION,
    URL_GET_COUPON_FOR_ID_COUPON,
    URL_SET_COUPON_CLIENT,
    URL_GET_COUPON_CLIENT,
    URL_GET_COUPON_CLIENT_HISTORY,
    URL_GET_COUPON_CLIENT_FOR_REFERENCE
} from '../URI';


function* getCouponForCategoryLocation({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_COUPON_FOR_CATEGORY_LOCATION, {
            method: 'GET',
        }, data);
        yield put({
            type: GET_COUPON_FOR_CATEGORY_LOCATION_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_COUPON_FOR_CATEGORY_LOCATION_FAILED, error });
    }
}
export function* watchGetCouponForCategoryLocation() {
    yield takeLatest(GET_COUPON_FOR_CATEGORY_LOCATION, getCouponForCategoryLocation);
}

function* getCouponForIdCoupon({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_COUPON_FOR_ID_COUPON, {
            method: 'GET',
        }, data);
        yield put({
            type: GET_COUPON_FOR_ID_COUPON_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_COUPON_FOR_ID_COUPON_FAILED, error });
    }
}
export function* watchGetCouponForIdCoupon() {
    yield takeLatest(GET_COUPON_FOR_ID_COUPON, getCouponForIdCoupon);
}

function* setCouponClient({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_SET_COUPON_CLIENT, {
            method: 'POST',
            BODY: JSON.stringify(data)
        });
        yield put({
            type: SET_COUPON_CLIENT_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: SET_COUPON_CLIENT_FAILED, error });
    }
}
export function* watchSetCouponClient() {
    yield takeLatest(SET_COUPON_CLIENT, setCouponClient);
}

function* getCouponClient({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_COUPON_CLIENT, {}, data);
        yield put({
            type: GET_COUPON_CLIENT_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_COUPON_CLIENT_FAILED, error });
    }
}
export function* watchGetCouponClient() {
    yield takeLatest(GET_COUPON_CLIENT, getCouponClient);
}

function* getCouponClientHistory({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_COUPON_CLIENT_HISTORY, {}, data);
        yield put({
            type: GET_COUPON_CLIENT_HISTORY_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_COUPON_CLIENT_HISTORY_FAILED, error });
    }
}
export function* watchGetCouponClientHistory() {
    yield takeLatest(GET_COUPON_CLIENT_HISTORY, getCouponClientHistory);
}

function* getCouponClientForReference({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_COUPON_CLIENT_FOR_REFERENCE, {}, data);
        yield put({
            type: GET_COUPON_CLIENT_FOR_REFERENCE_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_COUPON_CLIENT_FOR_REFERENCE_FAILED, error });
    }
}
export function* watchGetCouponClientForReference() {
    yield takeLatest(GET_COUPON_CLIENT_FOR_REFERENCE, getCouponClientForReference);
}