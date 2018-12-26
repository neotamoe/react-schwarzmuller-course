import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import key from '../../key';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
    // example use of call: same functionality, but makes testing generators easier via mocking
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId'); 
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout())
}

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key;
    if(!action.isSignUp) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key;
    }
    try{
        const response = yield axios.post(url, authData)
    
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn))
    } catch (error) {
        yield put(actions.authFail(error.response.data.error))
    }
}

export function* authCheckStateSaga(action){
    const token = yield localStorage.getItem('token');
    if(!token){
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if(expirationDate <= new Date()) {
            yield put(actions.logout())
        } else {
            const userId = localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
    
}