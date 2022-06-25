import {
  ACCESSTOKEN,
  USERID,
  AUTHORIZED,
  PHONENUMBER,
  USERNAME,
} from "../constants/authConstant";

const initialState = {
  accessToken: "",
  userId: "",
  phoneNumber: "",
  userName: "",
  authorized: false,
};

const authReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case ACCESSTOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case USERID:
      return {
        ...state,
        userId: payload.userId,
      };
    case AUTHORIZED:
      return {
        ...state,
        authorized: payload.authorized,
      };
    case PHONENUMBER:
      return {
        ...state,
        phoneNumber: payload.phoneNumber,
      };
    case USERNAME:
      return {
        ...state,
        userName: payload.userName,
      };

    default:
      return state;
  }
};

export default authReducer;
