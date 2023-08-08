import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://server.electroking.booksica.in/api/'
// export const http2 = 'https://server.electroking.booksica.in/'
export const http2 ='https://satyakabirbucket.ap-south-1.linodeobjects.com/'

const http = axios.create({
	baseURL: 'https://server.electroking.booksica.in/api/',
	timeout: 100000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('@USER_TOKEN');
		// const signup_token = await AsyncStorage.getItem('@SIGNUP_TOKEN');
		// if(signup_token) config.headers.Authorization = `Bearer ${signup_token}`;
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
export default http;