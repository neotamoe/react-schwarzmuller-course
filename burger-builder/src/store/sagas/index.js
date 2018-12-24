import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga } from './auth';

function* watchAuth(){
    yield takeEvery(actionTypes.AUT_INITIATE_LOGOUT, logoutSaga);
}
