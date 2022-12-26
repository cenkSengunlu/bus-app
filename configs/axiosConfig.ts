import axios from "axios";
import Cookies from "js-cookie";

// const token = Cookies.get("token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NMZXZlbCI6IjEiLCJ1c2VySWQiOiI4ZTE3NzhmNy0zM2VjLTQ5MmUtOWQwYi1mOTk0ZDk0MzRlZTIifQ.usNw7uWxWyKafska9NzyPVBZJjI1lpf5ZVXAyBYO5H0";
const instance = axios.create({
  baseURL: "http://localhost:83/api/",
  timeout: 1000,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default instance;
