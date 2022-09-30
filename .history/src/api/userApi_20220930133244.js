import axiosClient from './axiosClient';

const productApi = {


  add(data) {
    const url = '/products';
    return axiosClient.post(url,data);
  },


  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
