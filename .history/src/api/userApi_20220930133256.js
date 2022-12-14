import axiosClient from './axiosClient';

const productApi = {
  register(data) {
    const url = '/products';
    return axiosClient.post(url,data);
  },
};

export default productApi;
