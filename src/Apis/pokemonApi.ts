import axiosClient from "./axiosClient";
// endpoint : limit & offset
const imageApi = {
  getAll(endpoint: number,) {
    const url = `pokemon/?limit=${endpoint}&offset=${endpoint}`;
    return axiosClient.get(url);
  },
  getByName(name: string,) {
    const url = `pokemon/${name}`;
    return axiosClient.get(url);
  },
};

export default imageApi;