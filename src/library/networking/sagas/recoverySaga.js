import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import { 
    SET_RECOVERY, 
    SET_RECOVERY_SUCCEEDED, 
    SET_RECOVERY_FAILED 
} from 'library/redux/types/recoveryType';

import { APIFetch } from '../API';
import { URL_SET_RECOVERY } from '../URI';

function* setRecovery({data}) {
    try {
        const RECEIVED_DATA = yield APIFetch(URL_SET_RECOVERY, {
            method: 'POST',
            BODY: JSON.stringify(data)
        });
        yield put({ 
            type: SET_RECOVERY_SUCCEEDED, 
            payload: RECEIVED_DATA 
        });     
    } catch (error) {             
        yield put({ type: SET_RECOVERY_FAILED, error });
    }
}
export function* watchSetRecovery() {
    yield takeLatest(SET_RECOVERY, setRecovery);
}