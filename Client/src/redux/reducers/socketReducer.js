import { SOCKET } from "../constants/socketConstant";

const initialState = {
	socket: "",
};

const socketReducer = (state = initialState, payload) => {
	switch (payload.type) {
		case SOCKET:
			return {
				...state,
				socket: payload.socket,
			};

		default:
			return state;
	}
};

export default socketReducer;
