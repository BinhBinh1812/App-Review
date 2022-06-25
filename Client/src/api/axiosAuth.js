import axios from "axios";
import { BASE_AUTH_URL } from "../../env";

const axiosAuth = axios.create({
	baseURL: BASE_AUTH_URL,
});

export const post = async (path, options = {}) => {
	const response = await axiosAuth.post(path, options);
	return response.data;
};

export const get = async (path, options = {}) => {
	const response = await axiosAuth.get(path, options);
	return response.data;
};

export default axiosAuth;
