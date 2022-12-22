import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const instance = axios.create({
  baseURL: "http://localhost:82/api/",
  timeout: 1000,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default instance;
