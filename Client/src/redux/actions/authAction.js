import {
  ACCESSTOKEN,
  AUTHORIZED,
  USERID,
  PHONENUMBER,
  USERNAME,
} from "../constants/authConstant";

export const setAccessToken = (accessToken) => {
  return {
    type: ACCESSTOKEN,
    accessToken: accessToken,
  };
};

export const setUserId = (userId) => {
  return {
    type: USERID,
    userId: userId,
  };
};

export const setAuthorized = (authorized) => {
  return {
    type: AUTHORIZED,
    authorized: authorized,
  };
};

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: PHONENUMBER,
    phoneNumber: phoneNumber,
  };
};

export const setUserName = (userName) => {
  return {
    type: USERNAME,
    userName: userName,
  };
};
