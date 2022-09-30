import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/products';
    return axiosClient.post(url,data);
  },
};

export default userApi;
