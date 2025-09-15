import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true
});

export default Api;

