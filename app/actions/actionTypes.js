'use strict'

// const REQUEST = 'REQUEST';
// const SUCCESS = 'SUCCESS';
// const FAILURE = 'FAILURE';

// function createRequestTypes(base) {
//   const res = {};
//   [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
//   return res;
// }

// // Login events
// export const LOGIN = createRequestTypes('LOGIN');
// export const LOGOUT = 'LOGOUT'; // logout is always success

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT'; // logout is always success

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';