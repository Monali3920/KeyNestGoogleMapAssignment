import axios from 'axios'
import ApiUrl from '../utils/ApiUrl';

const axiosInstance = axios.create({
	baseURL: `${ApiUrl.baseUrl}`,
	timeout: 15000,
	headers: {
		'Content-Type':'application/json'
	},
})

export default axiosInstance;