import {axios} from './axios';
import {store} from '@/store';
import router from '@/router';

/**
 * Initialize request interceptor
 */
export const initializeRequestInterceptors = () => {
  axios.interceptors.request.use(authInterceptor);
};

/** Auth token interceptor */
const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
};

/**
 * Initialize response interceptors
 *
 * @param vm
 */
export const initializeResponseInterceptors = vm => {
  axios.interceptors.response.use(
    interceptors.onSuccess.bind(vm),
    interceptors.onError.bind(vm)
  );
};

/**
 * Response interceptors
 */
const interceptors = {
  onSuccess(response) {
    const messages = [];
    if (response.data.message) {
      messages.push(response.data.message);
      setTimeout(function () {
        store.dispatch('setSuccessMessages', messages);
      }, 200);
    }
    return response;
  },

  onError: function (error) {
    if (error.response.status === 401) {
      window.localStorage.removeItem('ACCESS_TOKEN');
      store.dispatch('setAuth', null);
      router.push({name: "login"});
    }

    if (error.response.status === 404) {
      router.push({name: "not_found"});
    }

    if (error.response.status === 422 || error.response.status === 403) {
      const messages = [];

      if (error.response.data.errors) {
        for (let key in error.response.data.errors) {
          messages.push(error.response.data.errors[key]);
        }
      } else {
        messages.push(error.response.data.message)
      }
      store.dispatch('setErrorMessages', messages);
    }

    return Promise.reject(error);
  },
};

function getToken() {
  return window.localStorage.getItem('ACCESS_TOKEN')
}
