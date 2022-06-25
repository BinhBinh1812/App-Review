import axios from "axios";
import { BASE_MESSAGE_URL } from "../../env";

const axiosMessage = axios.create({
	baseURL: BASE_MESSAGE_URL,
});

export const post = async (path, options = {}) => {
	const response = await axiosMessage.post(path, options);
	return response.data;
};

export const get = async (path, options = {}) => {
	const response = await axiosMessage.get(path, options);
	return response.data;
};

export default axiosMessage;
