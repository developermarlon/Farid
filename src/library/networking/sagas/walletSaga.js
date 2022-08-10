import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    GET_CLIENT_WALLET_POINTS,
    GET_CLIENT_WALLET_POINTS_SUCCEEDED,
    GET_CLIENT_WALLET_POINTS_FAILED,

    SET_COUPON_CLIENT_PAYMENT,
    SET_COUPON_CLIENT_PAYMENT_SUCCEEDED,
    SET_COUPON_CLIENT_PAYMENT_FAILED,

    GET_CLIENT_WALLET,
    GET_CLIENT_WALLET_SUCCEEDED,
    GET_CLIENT_WALLET_FAILED,

} from 'library/redux/types/walletType';

import { APIFetch } from '../API';
import {
    URL_GET_CLIENT_WALLET_POINTS,
    URL_SET_COUPON_CLIENT_PAYMENT,
    URL_GET_CLIENT_WALLET,
} from '../URI';

function* getClientWalletPoints({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_CLIENT_WALLET_POINTS, {}, data);
        yield put({
            type: GET_CLIENT_WALLET_POINTS_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_CLIENT_WALLET_POINTS_FAILED, error });
    }
}
export function* watchGetClientWalletPoints() {
    yield takeLatest(GET_CLIENT_WALLET_POINTS, getClientWalletPoints);
}

function* setCouponClientPayment({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_SET_COUPON_CLIENT_PAYMENT, {
            method: 'POST',
            BODY: JSON.stringify(data)
        });
        yield put({
            type: SET_COUPON_CLIENT_PAYMENT_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: SET_COUPON_CLIENT_PAYMENT_FAILED, error });
    }
}
export function* watchSetCouponClientPayment() {
    yield takeLatest(SET_COUPON_CLIENT_PAYMENT, setCouponClientPayment);
}

function* getClientWallet({ data }) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_GET_CLIENT_WALLET, {}, data);
        yield put({
            type: GET_CLIENT_WALLET_SUCCEEDED,
            payload: RECEIVED_DATA
        });
    } catch (error) {
        yield put({ type: GET_CLIENT_WALLET_FAILED, error });
    }
}
export function* watchGetClientWallet() {
    yield takeLatest(GET_CLIENT_WALLET, getClientWallet);
}
