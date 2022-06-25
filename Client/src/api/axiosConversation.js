import axios from "axios";
import { BASE_CONVERSATION_URL } from "../../env";

const axiosConversation = axios.create({
	baseURL: BASE_CONVERSATION_URL,
});

export const post = async (path, options = {}) => {
	const response = await axiosConversation.post(path, options);
	return response.data;
};

export const get = async (path, options = {}) => {
	const response = await axiosConversation.get(path, options);
	return response.data;
};

export default axiosConversation;
