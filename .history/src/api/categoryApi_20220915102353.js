import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },

  get(id) 
},

  add() {},

  update() {},

  remove() {},
};

export default categoryApi;
