import { SOCKET } from "../constants/socketConstant";

export const setSocket = (socket) => {
	return {
		type: SOCKET,
		socket: socket,
	};
};
