import axios from "axios";
import { AsyncStorage } from "react-native";

export const register = (formData, config) => {
  console.log(formData);
  return {
    type: "USER_REGISTER",
    payload: axios.post(
      `https://linkwae.herokuapp.com/users/register`,
      formData,
      config
    )
  };
};

export const login = input => {
  return {
    type: "USER_LOGIN",
    payload: axios.post(`https://linkwae.herokuapp.com/users/login`, input)
  };
};

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: AsyncStorage.getItem("user")
  };
};

export const isIstalled = () => {
  return {
    type: "GET_INSTALLED",
    payload: AsyncStorage.getItem("installed")
  };
};
