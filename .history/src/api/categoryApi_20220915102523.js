import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },

  add(date) {

  },

  update() {},

  remove() {},
};

export default categoryApi;
