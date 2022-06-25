import axios from "axios";
import { BASE_USER_URL } from "../../env";

const axiosUser = axios.create({
	baseURL: BASE_USER_URL,
});

export const post = async (path, options = {}) => {
	const response = await axiosUser.post(path, options);
	return response.data;
};

export const get = async (path, options = {}) => {
	const response = await axiosUser.get(path, options);
	return response.data;
};

export default axiosUser;
