import axios from 'axios';

axios.defaults.baseURL = process.env.mockUrl;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => {
    // config.headers.common['Authorization'] = `Bearer ${token}`
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if(error.response){
      let err = error.response.data;

      switch (error.response.status) {
        case 500:
          alert('Internal Error');
          break;

        default:
          console.log(err.data)
      }
    }
    return Promise.reject(error);
  }
);

export default axios;


