import axios from "axios";

import { responseInterceptor, errorInterceptor } from "../interceptors";
import { Environment } from "../../../environment";

const api = axios.create({
  baseURL: process.env.URL_BASE_APP,
  headers: {
    "Content-Type": "application/json",
  
  },
});

export { api };
