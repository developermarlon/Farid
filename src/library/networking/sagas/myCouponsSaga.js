import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    SET_FAVORITE_COUPON,
    SET_FAVORITE_COUPON_SUCCEEDED,
    SET_FAVORITE_COUPON_FAILED,

    GET_FAVORITE_COUPON_LIST,
    GET_FAVORITE_COUPON_LIST_SUCCEEDED,
    GET_FAVORITE_COUPON_LIST_FAILED

} from 'library/redux/types/myCouponsType';

import { APIFetch } from '../API';
import { URL_SET_FAVORITE_COUPON, URL_GET_FAVORITE_COUPON_LIST } from '../URI';

function* setFavoriteCoupon({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_SET_FAVORITE_COUPON, {
            method: 'POST',
            BODY: JSON.stringify(data)
        });
        yield put({
            type: SET_FAVORITE_COUPON_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: SET_FAVORITE_COUPON_FAILED, error });
    }
}
export function* watchSetFavoriteCoupon() {
    yield takeLatest(SET_FAVORITE_COUPON, setFavoriteCoupon);
}

function* getFavoriteCouponList({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_FAVORITE_COUPON_LIST, {
            method: 'GET',
        }, data);
        yield put({
            type: GET_FAVORITE_COUPON_LIST_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_FAVORITE_COUPON_LIST_FAILED, error });
    }
}

export function* watchFavoriteCouponList() {
    yield takeLatest(GET_FAVORITE_COUPON_LIST, getFavoriteCouponList);
}
