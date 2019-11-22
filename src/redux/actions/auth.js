import axios from "axios";
import { AsyncStorage } from "react-native";

export const register = (formData, config) => {
  console.log(formData);
  return {
    type: "USER_REGISTER",
    payload: axios.post(
      `http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/users/register`,
      formData,
      config
    )
  };
};

export const login = input => {
  return {
    type: "USER_LOGIN",
    payload: axios.post(`http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/users/login`, input)
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
