import https from "https";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8001/api",
  hostname: process.env.REEACT_APP_API_HOST || "http://localhost:8001/api",
  httpsAgent: https.Agent({
    rejectUnauthorized: false,
  }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

export const getAllItems = (payload) => api.get(`/items`, payload);
export const getItemById = (id) => api.get(`/item/${id}`);
export const insertItem = (payload) => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = (id) => api.delete(`/item/${id}`);

export const link = (payload) => api.post(`/item/link`, payload);

export const getAllFormItems = (payload) => api.get(`/form`, payload);
export const getAllFormProyectItems = (payload) =>
  api.get(`/form/pro`, payload);

export const updatePublication = (payload) =>
  api.post(`/form/update/pub`, payload);

export const updateProyect = (payload) => api.post(`/form/update/pro`, payload);

const apis = {
  getAllItems,
  getAllFormItems,
  insertItem,
  getAllFormProyectItems,
  link,
  updateProyect,
  updatePublication,
};

export default apis;
