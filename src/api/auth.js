import api from "./request";

/**
 * Login user
 *
 * @param data
 */
export const loginRequest = data => {
  return api
    .request("login")
    .withBody(data)
    .post();
};

/**
 * Logout user
 */
export const logoutRequest = () => {
  return api.request("logout").post();
};

export const getAuthUser = () => {
  return api
    .request("me")
    .get();
};
