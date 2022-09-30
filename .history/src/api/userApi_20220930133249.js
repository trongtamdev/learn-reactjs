import axiosClient from './axiosClient';

const productApi = {
  add(data) {
    const url = '/products';
    return axiosClient.post(url,data);
  },
};

export default productApi;
