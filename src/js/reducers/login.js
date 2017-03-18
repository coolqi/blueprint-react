export default (state = 0, action)=> {
	state = state || {token : 0};
	switch(action.type) {
		case 'LOGIN':
			return  { token: state.token };
			break;
		default: 
			return state;
			break;
	}
}