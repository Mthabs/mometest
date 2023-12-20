import axios from "axios";

axios.defaults.baseURL = "https://drfapites-ba22ea6b3cca.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();