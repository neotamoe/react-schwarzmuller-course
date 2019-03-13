import * as actions from './auth';
import * as types from './actionTypes';

describe('auth actions', () => {
  it('should create an action to start the auth process', () => {
    const expectedAction = {
      type: types.AUTH_START,
    }
    expect(actions.authStart()).toEqual(expectedAction)
  });

  it('should create an action on auth success that returns a token and id', () => {
    const idToken = "token123456";
    const userId = "moen2";    
    const expectedAction = {
      type: types.AUTH_SUCCESS,
      idToken: idToken,
      userId: userId
    }
    expect(actions.authSuccess(idToken, userId)).toEqual(expectedAction)
  });

  it('should create an action on auth fail that includes the error', () => {
    const error = "This is an error message.  Beware.  Error!";
    const expectedAction = {
      type: types.AUTH_FAIL,
      error: error,
    }
    expect(actions.authFail(error)).toEqual(expectedAction)
  });

  it('should create an action on logout', () => {
    const expectedAction = {
      type: types.AUTH_INITIATE_LOGOUT,
    }
    expect(actions.logout()).toEqual(expectedAction)
  });

  it('should create an action on logout success', () => {
    const expectedAction = {
      type: types.AUTH_LOGOUT,
    }
    expect(actions.logoutSucceed()).toEqual(expectedAction)
  });

  it('should create an action on auth check timeout with expiration time', () => {
    const expirationTime = new Date().getTime();
    const expectedAction = {
      type: types.AUTH_CHECK_TIMEOUT,
      expirationTime: expirationTime,
    }
    expect(actions.checkAuthTimeout(expirationTime)).toEqual(expectedAction)
  });

  it('should create an action to check state', () => {
    const expectedAction = {
      type: types.AUTH_CHECK_STATE,
    }
    expect(actions.authCheckState()).toEqual(expectedAction)
  });

  it('should create an action with auth information', () => {
    const email = "test@test.com";
    const password = "password1234";
    const isSignUp = "isSignUp";
    const expectedAction = {
      type: types.AUTH_USER,
      email: email,
      password: password,
      isSignUp: isSignUp
    }
    expect(actions.auth(email, password, isSignUp)).toEqual(expectedAction)
  });

  it('should create an action with a redirect path', () => {
    const path = "/path/to/the/place";
    const expectedAction = {
      type: types.SET_AUTH_REDIRECT_PATH,
      path: path,
    }
    expect(actions.setAuthRedirectPath(path)).toEqual(expectedAction)
  });

});