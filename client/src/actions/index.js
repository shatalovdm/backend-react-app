import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	const result = await axios.get('/current_user');
	console.log(result);
	dispatch({ type: FETCH_USER, payload: result.data });
};
