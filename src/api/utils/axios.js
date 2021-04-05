import BaseAxios from "axios";

export const axios = BaseAxios.create();

export const setAccessToken = (type, token) => {
  axios.defaults.headers.common["Authorization"] = type + " " + token;
};

export const resetAccessToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
