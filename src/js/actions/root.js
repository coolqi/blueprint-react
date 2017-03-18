import * as types from'../constants/ActionTypes.js';

export const Login = (username, password) => {
	type: types.LOGIN, username, password
};

export const GET_TABLE = ()